const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

(() => {
    return {
        handle() {
            const boxAppBD = $(".boxApp-body");
            const boxAppWrap = $(".boxAppWrap");

            boxAppWrap.onclick = (e) => {
                const iTree = e.target.closest(".achievement-tree__item");
                const closeBtn = e.target.closest(
                    ".f-file__achievement-show .close-btn"
                );
                const iconMore = e.target.closest(".chap-8__content-head-icon");

                if (iconMore) {
                    iconMore.parentElement.parentElement.classList.toggle(
                        "active"
                    );
                }

                if (iTree) {
                    const title = iTree.querySelector("img").alt;
                    const src = iTree.querySelector("img").src;

                    const show =
                        iTree.parentElement.parentElement.parentElement.parentElement.querySelector(
                            ".f-file__achievement-show"
                        );

                    show.querySelector("img").src = src;
                    show.querySelector("span").innerHTML = title;

                    show.classList.add("active");
                }

                if (closeBtn) {
                    closeBtn.parentElement.classList.remove("active");
                }
            };

            // boxAppWrap.onscroll = function (e) {
            //     const boxAppBD = e.target.closest(".boxAppWrap");

            //     if (boxAppBD) {
            //         console.log("OK");
            //     }

            //     console.log(e.target);
            //     // fFileList.forEach((fFile) => {
            //     //     const height = boxAppWrap.offsetHeight;
            //     //     const x = fFile.getBoundingClientRect().top;
            //     //     if (height + e.target.scrollTop > x + 500) {
            //     //         fFile.classList.add("active");
            //     //     } else {
            //     //         fFile.classList.remove("active");
            //     //     }
            //     // });

            //     console.log(e.target.scrollTop, boxAppBD.scrollHeight - 32);
            // };
        },
        start() {
            this.handle();
        },
    };
})().start();
