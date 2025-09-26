import { RequestsDB, StoredRequest } from "./RequestsDB";

export

class RequestManager {
    private requestsDB : RequestsDB;
    private isOnline : boolean = navigator.onLine;
    private isProcessing : boolean = false;
    private maxAttempts : number = 3;
    private retryDelay : number = 5000;

    private static instance : RequestManager;    

    static getInstance(): RequestManager {
        if (!RequestManager.instance) {
            RequestManager.instance = new RequestManager();
        }
        return RequestManager.instance;
    }

    constructor() {
        this.requestsDB = new RequestsDB();

        console.log("Pending " + this.requestsDB.getRequestsCount() + "requests");

        this.setupEventListeners();
    }

    private setupEventListeners() : void {
        window.addEventListener('online', () => {
            this.isOnline = true;
            console.log('ONLINE');
            this.processPendingRequests();
        });

        window.addEventListener('offline', () => {
            this.isOnline = false;
            console.log('OFFLINE');
        });
    }

    async sendRequest(
        url: string, 
        data: string, 
        method: string = 'POST', 
        headers: Record<string, string> = {}
    ) {
        const requestData: Omit<StoredRequest, 'id' | 'timestamp' | 'attempts'> = {
            url,
            method,
            data,
            headers: {
                'Content-Type': 'application/json',
                ...headers
            }
        };

        if (!this.isOnline) {
            console.log('Offline - caching request');
            await this.requestsDB.addRequest(requestData);
            return;
        }

        try {
            return this.makeRequest(requestData);
        } catch (error) {
            console.log('Request failed - caching for retry', error);
            await this.requestsDB.addRequest(requestData);
        }
    }

    private async makeRequest(requestData: Omit<StoredRequest, 'id' | 'timestamp' | 'attempts'>): Promise<XMLHttpRequest> {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            
            req.open(requestData.method, requestData.url);
            
            // Set headers
            Object.entries(requestData.headers).forEach(([key, value]) => {
                req.setRequestHeader(key, value);
            });
            
            req.onload = () => {
                if (req.status >= 200 && req.status < 300) {
                    

                    const event : CustomEvent = new CustomEvent("sn-form-response", {
                        detail: req
                    });

                    try {
                        document.dispatchEvent(event);
                    } catch (e) {
                        console.error("COULD NOT THROW EVENT", event);
                    }

                    resolve(req);

                } else {
                    reject(new Error(`HTTP ${req.status}: ${req.statusText}`));
                }
            };
            
            req.onerror = () => reject(new Error('Network error'));
            req.ontimeout = () => reject(new Error('Timeout'));
            
            req.timeout = 10000;
            req.send(requestData.data);
        });
    }

    private async processPendingRequests(): Promise<void> {
        if (this.isProcessing || !this.isOnline) return;

        this.isProcessing = true;

        try {
            const pendingRequests = await this.requestsDB.getPendingRequests();
            
            for (const request of pendingRequests) {
                if (!this.isOnline) break;

                if (request.attempts >= this.maxAttempts) {
                    console.log(`Request ${request.id} exceeded max attempts, removing`);
                    await this.requestsDB.deleteRequest(request.id!);
                    continue;
                }

                try {
                    await this.makeRequest(request);
                    console.log(`Successfully sent cached request ${request.id}`);
                    await this.requestsDB.deleteRequest(request.id!);
                } catch (error) {
                    console.log(`Retry failed for request ${request.id}`, error);
                    await this.requestsDB.updateRequestAttempt(
                        request.id!, 
                        request.attempts + 1
                    );

                    // Wait before next retry
                    await new Promise(resolve => setTimeout(resolve, this.retryDelay));
                }
            }
        } catch (error) {
            console.error('Error processing pending requests:', error);
        } finally {
            this.isProcessing = false;
        }
    }

    async getPendingRequestsCount(): Promise<number> {
        return await this.requestsDB.getRequestsCount();
    }

    async clearAllRequests(): Promise<void> {
        await this.requestsDB.clearAllRequests();
    }
}