const weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const applicationsInit = [
    {
        id: 0,
        icon: "./assets/img/apps/icon-this-pc.png",
        name: "This PC",
        isDeleted: 0,
    },
    {
        id: 1,
        icon: "./assets/img/apps/icon-recycle-bin.png",
        name: "Recycle Bin",
        isDeleted: 0,
    },
    {
        id: 2,
        icon: "./assets/img/apps/icon-zalo.png",
        name: "Zalu",
        isDeleted: 0,
        htmlRender: `
        <div class="zalo">
            <div class="zalo-left">
                <div class="zalo-list">
                    <div class="zalo-item">
                        <div class="zalo-item__avt">
                            <img
                                src="./assets/img/user.png"
                                alt=""
                            />
                        </div>
                        <div class="zalo-item__content">
                            <div class="zalo-item__title">
                                Nhóm 9 KTCT
                            </div>
                            <div class="zalo-item__content">
                                Something ...
                            </div>
                        </div>
                        <div class="zalo-item__time">
                            1 phút
                        </div>
                    </div>
                </div>
            </div>
            <div class="zalo-right">
                <div class="zalo-chat">
                    <div class="zalo-chat__item">
                        <div class="zalo-chat__item-avt">
                            <img
                                src="./assets/img/user.png"
                                alt=""
                            />
                        </div>
                        <div class="zalo-chat__item-main">
                            <div class="zalo-chat__item-name">
                                Trần Quốc Hỷ
                            </div>
                            <div class="zalo-chat__item-text">
                                FINAL FILE!!!
                            </div>
                            <div class="zalo-chat__item-file">
                                <div
                                    class="zalo-chat__item-file__icon"
                                >
                                    <img
                                        src="./assets/img/apps/!!!!.png"
                                        alt=""
                                    />
                                </div>
                                <div
                                    class="zalo-chat__item-file__main"
                                >
                                    <div
                                        class="zalo-chat__item-file__title"
                                    >
                                        Final File
                                    </div>
                                    <div
                                        class="zalo-chat__item-file__size"
                                    >
                                        123.45 KB
                                    </div>
                                </div>
                                <div
                                    class="zalo-chat__item-file__download"
                                >
                                    <i
                                        class="fa-solid fa-download"
                                    ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `,
    },
    {
        id: 3,
        icon: "./assets/img/apps/icon-garena.png",
        name: "Gareno",
        isDeleted: 0,
    },
    {
        id: 4,
        icon: "./assets/img/apps/!!!!.png",
        name: "Final File",
        isDeleted: 0,
    },
];
const sizeListInit = [250, 350, 500];

export { weeks, months, applicationsInit, sizeListInit };
