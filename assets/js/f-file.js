const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

(() => {
    return {
        handle() {
            const icons = $$(".chap-8__content-head-icon");
            const itemsTree = $$(".achievement-tree__item");
            const boxAppBD = $(".boxApp-body");

            icons.forEach((ic) => {
                ic.onclick = function () {
                    this.parentElement.parentElement.classList.toggle("active");
                };
            });

            itemsTree.forEach((IT) => {
                IT.onclick = function () {
                    const title = this.querySelector("img").alt;
                    const src = this.querySelector("img").src;

                    const show = $(".f-file__achievement-show");

                    show.querySelector("img").src = src;
                    show.querySelector("span").innerHTML = title;

                    show.classList.add("active");
                };
            });

            $(".f-file__achievement-show .close-btn").onclick = function () {
                $(".f-file__achievement-show").classList.remove("active");
            };

            boxAppBD.onscroll = function (e) {
                
            };
        },
        start() {
            this.handle();
        },
    };
})().start();
