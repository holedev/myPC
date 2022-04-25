const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

(() => {
    return {
        handle() {
            const icons = $$(".chap-8__content-head-icon");

            icons.forEach((ic) => {
                ic.onclick = function () {
                    this.parentElement.parentElement.classList.toggle("active");
                };
            });
        },
        start() {
            this.handle();
        },
    };
})().start();
