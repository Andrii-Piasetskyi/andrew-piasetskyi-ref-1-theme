class RelatedProductsModal {
    constructor(options) {
        this.sectionId = options.sectionId;
        this.element = document.querySelector(`#${this.sectionId}`);
        this.showDelay = options.showDelay * 1000; // Convert to milliseconds
        this.showOnlyOncePerCustomer = options.showOnlyOncePerCustomer;
        this.classes = {
            hiddenClass: "hidden",
            overlay: "related-products-modal__overlay",
            actionBtn: "related-products-modal__btn",
            closeBtn: "related-products-modal__close-btn",
        };

        // Check if the modal should be shown only once per customer
        // if (this.showOnlyOncePerCustomer) {
        //     const cookieName = "relatedProductsModal";

        //     // Check if the cookie exists
        //     if (this.getCookie(cookieName)) {
        //         return;
        //     }

        //     // Set the cookie
        //     this.setCookie(cookieName, "true");
        // }

        this.init();
    }

    handleEvents() {
        const overlay = this.element.querySelector(`.${this.classes.overlay}`);
        const actionBtn = this.element.querySelector(
            `.${this.classes.actionBtn}`
        );
        const closeBtn = this.element.querySelector(
            `.${this.classes.closeBtn}`
        );

        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                this.hide(this.element, this.classes.hiddenClass);
            }
        });

        closeBtn.addEventListener("click", () => {
            this.hide(this.element, this.classes.hiddenClass);
        });

        actionBtn.addEventListener("click", (e) => {
            console.log("ADD to cart");
        });
    }

    show(element, hiddenClass, delay) {
        setTimeout(() => {
            if (element.classList.contains(hiddenClass)) {
                element.classList.remove(hiddenClass);
            }
        }, delay);
    }

    hide(element, hiddenClass) {
        if (!element.classList.contains(hiddenClass)) {
            element.classList.add(hiddenClass);
        }
    }

    setCookie(name, value) {
        document.cookie = `${name}=${value}; path=/`;
    }

    getCookie(name) {
        // Implementation for getting a cookie
        // Replace this with your actual logic
        const cookies = document.cookie.split(";");

        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();

            if (cookie.startsWith(name + "=")) {
                return cookie.substring(name.length + 1);
            }
        }

        return null;
    }

    init() {
        this.show(this.element, this.classes.hiddenClass, 0);
        this.handleEvents();
    }
}
