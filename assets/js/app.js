import { weeks, months, applicationsInit, sizeListInit } from "./init.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = (() => {
    let sizeList = JSON.parse(localStorage.getItem("sizeList")) || 0;
    const applications =
        JSON.parse(localStorage.getItem("applications")) || applicationsInit;

    return {
        appRunning: [],
        renderIcon() {
            $(".main-list").style.width = `${sizeListInit[sizeList]}px`;

            if (sizeList == 0) {
                $$(".size-icon .right-click__item")[2].classList.add("active");
            } else if (sizeList == 1) {
                $$(".size-icon .right-click__item")[1].classList.add("active");
            } else {
                $$(".size-icon .right-click__item")[0].classList.add("active");
            }
        },
        renderApp() {
            const htmls = applications
                .map((app, index) => {
                    if (!app.isDeleted) {
                        return `
                    <li class="main-item" data-index="${index}" title="${app.name}">
                        <div class="main-item__icon">
                            <img src="${app.icon}" alt="">
                        </div>
                        <div  class="main-item__name">
                            ${app.name}
                        </div>   
                    </li>
                    `;
                    }
                })
                .join("");
            $(".main-list").innerHTML = htmls;
        },
        renderAppRunning() {
            const htmls = this.appRunning
                .map((app, index) => {
                    return `
                    <div class="boxApp ${app.isActive ? "active" : ""}">
                        <div class="boxApp-head">
                            <div class="boxApp-head__icon">
                                <i class="fa-solid fa-minus"></i>
                            </div>
                            <div class="boxApp-head__icon">
                                <i class="fa-regular fa-window-restore"></i>
                            </div>
                            <div data-index=${
                                app.idxApp
                            } class="boxApp-head__icon close-btn">
                                <i class="fa-solid fa-xmark"></i>
                            </div>
                        </div>
                        <div class="boxApp-body">
                            ${applications[app.idxApp].htmlRender || " "}
                        </div>
                    </div>
                    `;
                })
                .join("");

            const htmlsFooter = this.appRunning
                .map((app, index) => {
                    return `
                    <div data-index=${app.idxApp} class="${
                        app.isActive ? "active" : ""
                    } footer-main__icon">
                        <img src=${applications[app.idxApp].icon} alt="" />
                    </div>
                `;
                })
                .join("");
            $(".boxAppWrap").innerHTML = htmls;
            $(".footer-main").innerHTML = htmlsFooter;
        },
        newApp(type, name) {
            const types = ["folder", "shortcut", "text", "word"];
            const icons = [
                "./assets/img/apps/icon-folder.png",
                "./assets/img/apps/icon-shortcut.png",
                "./assets/img/apps/icon-text.png",
                "./assets/img/apps/icon-word.png",
            ];
            const names = [
                "New Folder",
                "New Shortcut",
                "New Text",
                "New Word",
            ];

            let iconApp, nameApp;
            types.forEach((item, index) => {
                if (item == type) {
                    iconApp = icons[index];
                    if (name) nameApp = name;
                    if (!name) nameApp = names[index];
                }
            });

            const obj = {
                id: applications.length,
                icon: iconApp,
                name: nameApp,
                isDeleted: 0,
            };

            applications.push(obj);
            localStorage.setItem("applications", JSON.stringify(applications));
            this.renderApp();
        },
        handle() {
            const _this = this;
            const powerOnBtn = $(".power-on-btn");
            const modalPower = $(".modal-power");
            const modalPowerLoading = $(".modal-power__loading");
            const modalPowerOn = $(".modal-power__power-on");
            const modalPowerLogin = $(".modal-power__login");
            const inputPIN = $(".modal-power__PIN-input");
            const modalPowerStatus = $(".modal-power__status");
            const shutdownBtns = $$(".shutdown-btn");
            const restartBtn = $(".restart-btn");
            const main = $(".main");
            const rightBox = $(".right-click");
            const itemsRightClick = $$(".right-click__item");
            const overplay = $(".overplay");
            const overplayBd = $(".overplay-body");
            const widthMain = main.offsetWidth;
            const heightMain = main.offsetHeight;
            const widthRightBox = rightBox.offsetWidth;
            const heightRightBox = rightBox.offsetHeight;


            //right click
            main.oncontextmenu = function (e) {
                e.preventDefault();
                let top, left;
                e.clientX + widthRightBox <= widthMain
                    ? (left = e.clientX)
                    : (left = e.clientX - widthRightBox);
                e.clientY + heightRightBox <= heightMain
                    ? (top = e.clientY)
                    : (top = e.clientY - heightRightBox);

                Object.assign(rightBox.style, {
                    top: top + "px",
                    left: left + "px",
                    visibility: "visible",
                });
            };

            //hover menu right click
            itemsRightClick.forEach((item) => {
                const width = $(".right-click__sub-menu").offsetWidth;

                item.onmouseover = function () {
                    const left = rightBox.offsetLeft;
                    const top = rightBox.offsetTop;
                    const subMenu = this.querySelector(
                        ".right-click__sub-menu"
                    );
                    if (subMenu) {
                        if (left + widthRightBox + width <= widthMain) {
                            Object.assign(subMenu.style, {
                                left: "100%",
                            });
                        } else {
                            Object.assign(subMenu.style, {
                                left: "-110%",
                            });
                        }

                        if (top + heightRightBox + 20 <= heightMain) {
                            Object.assign(subMenu.style, {
                                top: "-2px",
                                transform: "translateY(0%)",
                            });
                        } else {
                            Object.assign(subMenu.style, {
                                top: "100%",
                                transform: "translateY(-100%)",
                            });
                        }
                        subMenu.classList.add("active");
                    }
                };
                item.onmouseout = function () {
                    const subMenu = this.querySelector(
                        ".right-click__sub-menu"
                    );
                    if (subMenu) {
                        subMenu.classList.remove("active");
                    }
                };
            });

            //power status
            const loadingScreen = (status) => {
                modalPower.classList.add("active");
                modalPowerOn.classList.remove("active");
                modalPowerLogin.classList.remove("active");
                modalPowerStatus.innerHTML = status;
                modalPowerLoading.classList.add("active");
            };

            const loginScreen = () => {
                modalPowerLoading.classList.remove("active");
                modalPowerLogin.classList.add("active");
                inputPIN.focus();
            };

            const powerOnScreen = () => {
                modalPowerLoading.classList.remove("active");
                modalPowerOn.classList.add("active");
            };

            const pcScreen = () => {
                modalPower.classList.remove("active");
                modalPowerLogin.classList.remove("active");
                modalPowerOn.classList.remove("active");
                modalPowerLoading.classList.remove("active");
            };

            powerOnBtn.onclick = function () {
                loadingScreen("Starting");
                setTimeout(loginScreen, 3000);
            };

            inputPIN.oninput = function () {
                const value = this.value.trim();
                if (value == "1410") {
                    this.value = null;
                    loadingScreen("Starting");
                    setTimeout(pcScreen, 3000);
                }
            };

            shutdownBtns.forEach((item) => {
                item.onclick = () => {
                    $(".start-box").classList.remove("active");
                    loadingScreen("Shutting down");
                    setTimeout(powerOnScreen, 3000);
                };
            });

            restartBtn.onclick = () => {
                $(".start-box").classList.remove("active");
                loadingScreen("Restarting");
                setTimeout(loginScreen, 3000);
            };

            //overplay
            const showInpFileName = () => {
                overplay.classList.add("active");
                overplayBd.classList.add("active");
            };

            const hideInpFileName = () => {
                overplay.classList.remove("active");
                overplayBd.classList.remove("active");
            };

            overplay.onclick = function (e) {
                const body = e.target.closest(".overplay-body");
                if (!body) {
                    hideInpFileName();
                }
            };

            //size icon
            const styleList = $$(".size-icon .right-click__item");
            styleList.forEach((item) => {
                item.onclick = function () {
                    const itemActive = $(".right-click__item.active");
                    if (itemActive) {
                        itemActive.classList.remove("active");
                    }

                    if (this.classList.contains("size-L")) {
                        sizeList = 2;
                    }
                    if (this.classList.contains("size-M")) {
                        sizeList = 1;
                    }
                    if (this.classList.contains("size-S")) {
                        sizeList = 0;
                    }
                    localStorage.setItem("sizeList", JSON.stringify(sizeList));
                    this.classList.add("active");
                    _this.renderIcon();
                    _this.renderApp();
                };
            });

            //show desktop icon desktop
            const showHideIcon = $(".show-hide-icon");
            showHideIcon.onclick = function () {
                if (this.classList.contains("active")) {
                    $(".main-list").style.visibility = "hidden";
                } else {
                    $(".main-list").style.visibility = "visible";
                }
                this.classList.toggle("active");
            };

            //F5
            const F5Btn = $(".F5-btn");
            F5Btn.onclick = () => {
                $(".main-list").style.visibility = "hidden";
                setTimeout(() => {
                    $(".main-list").style.visibility = "visible";
                }, 200);
                rightBox.style.visibility = "hidden";
            };

            //new app
            const type = ["folder", "shortcut", "text", "word"];
            const newAppList = $$(".new-app-list .right-click__item");
            const inpFileName = $(".overplay-inp");

            let idx;
            newAppList.forEach((item, index) => {
                item.onclick = function () {
                    inpFileName.focus();
                    showInpFileName();
                    idx = index;
                    rightBox.style.visibility = "hidden";
                };
            });

            inpFileName.onkeypress = function (e) {
                if (e.which == 13) {
                    const value = inpFileName.value.trim();
                    if (value) {
                        _this.newApp(type[idx], value);
                    } else {
                        _this.newApp(type[index]);
                    }
                    inpFileName.value = null;
                    hideInpFileName();
                }
            };

            //onclick main list
            const listApp = $(".main-list");
            listApp.onclick = (e) => {
                const app = e.target.closest(".main-item");

                if (app) {
                    const itemActive = $(".main-item.active");
                    if (itemActive) {
                        itemActive.classList.remove("active");
                    }

                    app.classList.add("active");
                }
            };

            listApp.ondblclick = (e) => {
                const app = e.target.closest(".main-item");

                if (app) {
                    const idx = Number.parseInt(app.dataset.index);

                    const idxExist = _this.appRunning.find(
                        (app) => app.idxApp === idx
                    );
                    if (!idxExist) {
                        _this.appRunning.forEach((app) => (app.isActive = 0));
                        const obj = {
                            idxApp: idx,
                            isActive: 1,
                        };
                        _this.appRunning.push(obj);
                    }
                    _this.renderAppRunning();
                }
            };

            //onclick footer main
            const mainFooter = $(".footer-main");
            mainFooter.onclick = (e) => {
                const item = e.target.closest(".footer-main__icon");
                if (item) {
                    const idx = Number.parseInt(item.dataset.index);

                    _this.appRunning.forEach((app) => {
                        if (app.idxApp === idx) {
                            app.isActive = 1;
                        } else {
                            app.isActive = 0;
                        }
                    });

                    _this.renderAppRunning();
                }
            };

            //window
            window.onkeydown = function (e) {
                if (e.which === 116) {
                    e.preventDefault();

                    $(".main-list").style.visibility = "hidden";
                    setTimeout(() => {
                        $(".main-list").style.visibility = "visible";
                    }, 300);
                }
            };

            window.onkeyup = function (e) {
                const activeItem = $(".main-item.active");
                if (activeItem && e.keyCode == 46) {
                    const idx = Number.parseInt(activeItem.dataset.index);

                    if (idx !== 0 && idx !== 1) {
                        applications[idx].isDeleted = 1;
                        localStorage.setItem(
                            "applications",
                            JSON.stringify(applications)
                        );
                        _this.renderApp();
                    }
                }
            };

            //window
            window.onclick = (e) => {
                const startIconE = e.target.closest(".footer-left__start-icon");
                const startBoxE = e.target.closest(".start-box");
                const mainItem = e.target.closest(".main-item");
                const rightClickBox = e.target.closest(".right-click");
                const closeApp = e.target.closest(
                    ".boxApp-head__icon.close-btn"
                );

                if (
                    !startIconE &&
                    !startBoxE &&
                    $(".start-box").classList.contains("active")
                ) {
                    $(".start-box").classList.remove("active");
                }

                if (!mainItem) {
                    const itemActive = $(".main-item.active");
                    if (itemActive) {
                        itemActive.classList.remove("active");
                    }
                }

                if (!rightClickBox) {
                    $(".right-click").style.visibility = "hidden";
                }

                if (closeApp) {
                    closeApp.parentElement.parentElement.classList.remove(
                        "active"
                    );
                    const idx = Number.parseInt(closeApp.dataset.index);

                    _this.appRunning = _this.appRunning.filter(
                        (app) => app.idxApp !== idx
                    );

                    if (_this.appRunning.length > 0) {
                        _this.appRunning[
                            _this.appRunning.length - 1
                        ].isActive = 1;
                    }
                    _this.renderAppRunning();
                }
            };
        },
        start() {
            this.renderIcon();
            this.renderApp();
            this.handle();
        },
    };
})().start();

const footer = (() => {
    return {
        handle() {
            const startIcon = $(".footer-left__start-icon");
            const startBox = $(".start-box");
            const leftStartBox = $(".start-box__left");
            const date = new Date();
            const timeRight = $(".footer-right__time");
            const timeBox = $(".footer-right__time-time");
            const dateBox = $(".footer-right__time-date");

            //update time
            setInterval(() => {
                const hour = date.getHours();
                const min = date.getMinutes();
                const day = date.getDate();
                const month = date.getMonth();
                const year = date.getFullYear();
                const weekday = date.getDay();

                timeBox.innerHTML =
                    `0${hour}`.slice(-2) + ":" + `0${min}`.slice(-2);
                dateBox.innerHTML =
                    `0${month + 1}`.slice(-2) +
                    "/" +
                    `0${day}`.slice(-2) +
                    "/" +
                    `${year}`;

                timeRight.title = `${weeks[weekday]}, ${months[month]} ${day} ${year}`;
            }, 1000);

            //mở startBox
            startIcon.onclick = function () {
                startBox.classList.toggle("active");
            };
            //hover
            leftStartBox.onmouseover = () => {
                leftStartBox.classList.add("active");
            };

            leftStartBox.onmouseout = () => {
                leftStartBox.classList.remove("active");
            };
        },
        start() {
            this.handle();
        },
    };
})().start();
