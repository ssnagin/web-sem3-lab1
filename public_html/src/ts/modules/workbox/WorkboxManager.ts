export

class WorkboxManager {
    private static instance : WorkboxManager;    

    static getInstance(): WorkboxManager {
        if (!WorkboxManager.instance) {
            WorkboxManager.instance = new WorkboxManager();
        }
        return WorkboxManager.instance;
    }

    async register(url : string): Promise<void> {
        
        if (!('serviceWorker' in navigator)) {
            this.throwMessage("Workbox is not available in this browser");
            return;
        }
        
        try {
            const registration = await navigator.serviceWorker.register(url, {
                scope: '/'
            }).then(e => {
                console.log("EEEEE", e);
            });
            
            this.throwMessage("ServiceBox has been registered!");

        } catch (e) {
            this.throwMessage("Something went wrong while setting up Workbox");
            console.error("Something went wrong while setting up Workbox", e);
        }
    }

    private showUpdateNotification() {
        this.throwMessage("Update is available! Restart the page");
    }

    private throwMessage(message : string) {
        document.dispatchEvent(
            new CustomEvent("workbox-message", {
                detail: message
            })
        );
    }
}