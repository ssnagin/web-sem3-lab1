import { IDBManager } from "../indexedDB/IDBManager";

export

interface StoredRequest {
    id?: number;
    url: string;
    method: string;
    data: string;
    headers: Record<string, string>;
    timestamp: number;
    attempts: number;
    lastAttempt?: number;
}

export

class RequestsDB extends IDBManager {
    protected dbName: string = 'RequestsDB';
    protected version: number = 1;
    protected db: IDBDatabase | null = null;

    initSchema(event: IDBVersionChangeEvent): void {
        const db = (event.target as IDBOpenDBRequest).result;
        
        if (!db.objectStoreNames.contains('requests')) {
            const store = db.createObjectStore('requests', { 
                keyPath: 'id', 
                autoIncrement: true 
            });
            store.createIndex('timestamp', 'timestamp', { unique: false });
            store.createIndex('attempts', 'attempts', { unique: false });
            store.createIndex('lastAttempt', 'lastAttempt', { unique: false });
        }

        
    }

    async addRequest(request: Omit<StoredRequest, 'id' | 'timestamp' | 'attempts'>): Promise<number> {
        if (!this.db) await this.init();
        
        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction(['requests'], 'readwrite');
            const store = transaction.objectStore('requests');
            
            const requestToStore: StoredRequest = {
                ...request,
                timestamp: new Date().getTime(),
                attempts: 0
            };

            const requestOp = store.add(requestToStore);

            requestOp.onerror = () => reject(requestOp.error);
            requestOp.onsuccess = () => resolve(requestOp.result as number);
        });
    }

    async getAllRequests(): Promise<StoredRequest[]> {
        if (!this.db) await this.init();
        
        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction(['requests'], 'readonly');
            const store = transaction.objectStore('requests');
            const request = store.getAll();

            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);
        });
    }

    async getPendingRequests(limit?: number): Promise<StoredRequest[]> {
        if (!this.db) await this.init();
        
        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction(['requests'], 'readonly');
            const store = transaction.objectStore('requests');
            const index = store.index('timestamp');
            const request = index.getAll();

            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                let requests = request.result;
                if (limit) {
                    requests = requests.slice(0, limit);
                }
                resolve(requests);
            };
        });
    }

    async deleteRequest(id: number): Promise<void> {
        if (!this.db) await this.init();
        
        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction(['requests'], 'readwrite');
            const store = transaction.objectStore('requests');
            const request = store.delete(id);

            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve();
        });
    }

    async updateRequestAttempt(id: number, attempts: number): Promise<void> {
        if (!this.db) await this.init();
        
        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction(['requests'], 'readwrite');
            const store = transaction.objectStore('requests');
            const getRequest = store.get(id);

            getRequest.onerror = () => reject(getRequest.error);
            getRequest.onsuccess = () => {
                const request = getRequest.result;
                if (!request) {
                    reject(new Error('Request not found'));
                    return;
                }

                request.attempts = attempts;
                request.lastAttempt = new Date().getTime();

                const updateRequest = store.put(request);
                updateRequest.onerror = () => reject(updateRequest.error);
                updateRequest.onsuccess = () => resolve();
            };
        });
    }

    async clearAllRequests(): Promise<void> {
        if (!this.db) await this.init();
        
        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction(['requests'], 'readwrite');
            const store = transaction.objectStore('requests');
            const request = store.clear();

            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve();
        });
    }

    async getRequestsCount(): Promise<number> {
        if (!this.db) await this.init();
        
        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction(['requests'], 'readonly');
            const store = transaction.objectStore('requests');
            const request = store.count();

            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);
        });
    }
}