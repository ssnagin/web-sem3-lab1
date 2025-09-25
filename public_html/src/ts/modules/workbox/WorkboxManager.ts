export

class WorkboxManager {
    private static instance : WorkboxManager = new WorkboxManager();    

    static getInstance(): WorkboxManager {
        if (!WorkboxManager.instance) {
            WorkboxManager.instance = new WorkboxManager();
        }
        return WorkboxManager.instance;
    }

    async register(): Promise<void> {
        
        if (!('service-worker' in navigator)) {
            this.throwMessage("Workbox is not available in this browser");
            return;
        }

        try {
            const registration = await navigator.serviceWorker.register('/service-worker.js', {
                scope: '/'
            });

        } catch (e) {
            this.throwMessage("Something went wrong while setting up Workbox");
        }

    }

    private showUpdateNotification() {
        this.throwMessage("Update is available! Restart the page");
    }

    private throwMessage(message : string) {
        document.dispatchEvent(
            new CustomEvent("workbox-message", {
                detail: message,
            })
        );
    }
}