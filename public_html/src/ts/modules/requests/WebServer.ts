export 

interface SuccessResponse {
    status: number;
    statusText: string;
    data: any;
    headers: string;
}

export

interface ErrorResponse {
    status: number;
    statusText: string;
    error: string;
}

export

class WebServer {
    public static send(url: string, data: string): Promise<SuccessResponse> {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            
            req.open("POST", url);
            req.setRequestHeader("Content-Type", "application/json");
            
            req.onload = () => {
                if (req.status >= 200 && req.status < 300) {
                    try {
                        const responseData = req.responseText ? JSON.parse(req.responseText) : {};
                        resolve({
                            status: req.status,
                            statusText: req.statusText,
                            data: responseData,
                            headers: req.getAllResponseHeaders()
                        });
                    } catch (error) {
                        resolve({
                            status: req.status,
                            statusText: req.statusText,
                            data: req.responseText,
                            headers: req.getAllResponseHeaders()
                        });
                    }
                } else {
                    const errorResponse: ErrorResponse = {
                        status: req.status,
                        statusText: req.statusText,
                        error: req.responseText || 'Unknown error'
                    };
                    reject(errorResponse);
                }
            };
            
            req.onerror = () => {
                const errorResponse: ErrorResponse = {
                    status: req.status || 0,
                    statusText: 'Network Error',
                    error: 'Network request failed'
                };
                reject(errorResponse);
            };
            
            req.ontimeout = () => {
                const errorResponse: ErrorResponse = {
                    status: 408,
                    statusText: 'Timeout',
                    error: 'Request timeout'
                };
                reject(errorResponse);
            };
            
            req.timeout = 10000;
            
            try {
                req.send(data);
            } catch (error) {
                const errorResponse: ErrorResponse = {
                    status: 0,
                    statusText: 'Send Error',
                    error: error instanceof Error ? error.message : 'Unknown error'
                };
                reject(errorResponse);
            }
        });
    }
}