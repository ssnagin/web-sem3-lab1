export

class IDBManager {
    protected dbName: string = "";
    protected version: number = 1;
    protected db: IDBDatabase | null = null;

    constructor(dbName?: string, version?: number) {
        if (dbName) this.dbName = dbName;
        if (version) this.version = version;
    }

    async init() : Promise<IDBDatabase> {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.version);

            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                this.db = request.result;
                resolve(this.db);
            };

            request.onupgradeneeded = (event : IDBVersionChangeEvent) => this.initSchema(event);
        });
    }

    initSchema(event : IDBVersionChangeEvent) : void;
    initSchema() : void { // Custom void, can be overritten
        
    }
}