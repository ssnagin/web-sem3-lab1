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
        
        if (!('serviceWorker' in navigator)) {
            this.throwMessage("Workbox is not available in this browser");
            return;
        }
        
        try {
            const registration = await navigator.serviceWorker.register('/service-worker.js', {
                scope: '/'
            });

            this.throwMessage("ServiceBox has been registered!");
            
            // if (registration.installing) {
            //     console.log('Service Worker устанавливается...');
            // } else if (registration.waiting) {
            //     console.log('Service Worker ожидает активации...');
            // } else if (registration.active) {
            //     console.log('Service Worker активен!');
            // }
                    
            // if (registration.waiting) {
            //     console.log('🔄 Service Worker ожидает - перезагружаем страницу...');
            //     setTimeout(() => {
            //         window.location.reload();
            //     }, 500);
            //     return;
            // }

            // if (registration.active) {
            //     console.log('✅ Service Worker активен!');
            // }


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