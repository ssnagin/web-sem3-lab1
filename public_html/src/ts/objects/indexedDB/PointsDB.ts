export interface StoredPoint {
    id?: number;
    result: string;
    x: string;
    y: string;
    r: string;
    time: string;
    timestamp: number;
}

export default class PointsDB {
    private dbName: string = 'PointsDB';
    private version: number = 1;
    private db: IDBDatabase | null = null;

    constructor(dbName?: string, version?: number) {
        if (dbName) this.dbName = dbName;
        if (version) this.version = version;
    }

    async init(): Promise<IDBDatabase> {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.version);

            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                this.db = request.result;
                resolve(this.db);
            };

            request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
                const db = (event.target as IDBOpenDBRequest).result;
                if (!db.objectStoreNames.contains('points')) {
                    const store = db.createObjectStore('points', { 
                        keyPath: 'id', 
                        autoIncrement: true 
                    });
                    store.createIndex('timestamp', 'timestamp', { unique: false });
                    store.createIndex('result', 'result', { unique: false });
                }
            };
        });
    }

    async addPoint(point: Omit<StoredPoint, 'id' | 'timestamp'>): Promise<number> {
        if (!this.db) await this.init();
        
        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction(['points'], 'readwrite');
            const store = transaction.objectStore('points');
            
            const pointToStore: StoredPoint = {
                ...point,
                timestamp: new Date().getTime()
            };

            const request = store.add(pointToStore);

            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result as number);
        });
    }

    async getAllPoints(): Promise<StoredPoint[]> {
        if (!this.db) await this.init();
        
        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction(['points'], 'readonly');
            const store = transaction.objectStore('points');
            const request = store.getAll();

            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);
        });
    }

    async clearAllPoints(): Promise<void> {
        if (!this.db) await this.init();
        
        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction(['points'], 'readwrite');
            const store = transaction.objectStore('points');
            const request = store.clear();

            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve();
        });
    }

    async deletePoint(id: number): Promise<void> {
        if (!this.db) await this.init();
        
        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction(['points'], 'readwrite');
            const store = transaction.objectStore('points');
            const request = store.delete(id);

            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve();
        });
    }

    async getPointsCount(): Promise<number> {
        if (!this.db) await this.init();
        
        return new Promise((resolve, reject) => {
            const transaction = this.db!.transaction(['points'], 'readonly');
            const store = transaction.objectStore('points');
            const request = store.count();

            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);
        });
    }
}