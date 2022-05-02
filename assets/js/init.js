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
        isDeleted: 1,
        htmlRender: `
        <div class="f-file">
            <div class="f-file__banner">
                <div class="f-file__banner-left">
                    <img
                        src="./assets/img/CNH-HDH.jpg"
                        alt=""
                    />
                </div>
                <div class="f-file__banner-right">
                    <img
                        src="./assets/img/hoi-nhap-kt.jpg"
                        alt=""
                    />
                </div>
                <div class="f-file__banner-text">
                    <span>Nhóm 9</span>
                    <span
                        >Công nghiệp hoá hiện đại hoá ở Việt
                        Nam</span
                    >
                    <span
                        >Hội nhập Kinh tế quốc tế ở Việt
                        Nam</span
                    >
                </div>
            </div>
            <div class="f-file__members">
                <div class="f-file__members-grid grid">
                    <div class="f-file__members-heading">
                        Danh sách thành viên
                    </div>
                    <div class="f-file__members-list">
                        <div class="f-file__members-item">
                            <div
                                class="f-file__members-item__avt"
                            >
                                <img
                                    src="./assets/img/mem/TQH.jpg"
                                    alt=""
                                />
                            </div>
                            <div
                                class="f-file__members-item__name"
                            >
                                Trần Quốc Hỷ
                            </div>
                            <div
                                class="f-file__members-item__id"
                            >
                                2051052061
                            </div>
                        </div>
                        <div class="f-file__members-item">
                            <div
                                class="f-file__members-item__avt"
                            >
                                <img
                                    src="./assets/img/mem/HQV.jpg"
                                    alt=""
                                />
                            </div>
                            <div
                                class="f-file__members-item__name"
                            >
                                Hồ Quang Văn
                            </div>
                            <div
                                class="f-file__members-item__id"
                            >
                                2051050561
                            </div>
                        </div>
                        <div class="f-file__members-item">
                            <div
                                class="f-file__members-item__avt"
                            >
                                <img
                                    src="./assets/img/mem/PGH.png"
                                    alt=""
                                />
                            </div>
                            <div
                                class="f-file__members-item__name"
                            >
                                Phạm Gia Huy
                            </div>
                            <div
                                class="f-file__members-item__id"
                            >
                                2051050165
                            </div>
                        </div>
                        <div class="f-file__members-item">
                            <div
                                class="f-file__members-item__avt"
                            >
                                <img
                                    src="./assets/img/mem/TTD.png"
                                    alt=""
                                />
                            </div>
                            <div
                                class="f-file__members-item__name"
                            >
                                Trương Thành Đạt
                            </div>
                            <div
                                class="f-file__members-item__id"
                            >
                                2051052028
                            </div>
                        </div>
                        <div class="f-file__members-item">
                            <div
                                class="f-file__members-item__avt"
                            >
                                <img
                                    src="./assets/img/mem/TTT.png"
                                    alt=""
                                />
                            </div>
                            <div
                                class="f-file__members-item__name"
                            >
                                Tất Tấn Tài
                            </div>
                            <div
                                class="f-file__members-item__id"
                            >
                                2051050425
                            </div>
                        </div>
                        <div class="f-file__members-item">
                            <div
                                class="f-file__members-item__avt"
                            >
                                <img
                                    src="./assets/img/mem/TT.png"
                                    alt=""
                                />
                            </div>
                            <div
                                class="f-file__members-item__name"
                            >
                                Bùi Thanh Tâm
                            </div>
                            <div
                                class="f-file__members-item__id"
                            >
                                2051052118
                            </div>
                        </div>
                        <div class="f-file__members-item">
                            <div
                                class="f-file__members-item__avt"
                            >
                                <img
                                    src="./assets/img/mem/PLH.jpg"
                                    alt=""
                                />
                            </div>
                            <div
                                class="f-file__members-item__name"
                            >
                                Phan Lê Hồ
                            </div>
                            <div
                                class="f-file__members-item__id"
                            >
                                2051052051
                            </div>
                        </div>
                        <div class="f-file__members-item">
                            <div
                                class="f-file__members-item__avt"
                            >
                                <img
                                    src="./assets/img/mem/TTN.jpg"
                                    alt=""
                                />
                            </div>
                            <div
                                class="f-file__members-item__name"
                            >
                                Trương Trọng Nghĩa
                            </div>
                            <div
                                class="f-file__members-item__id"
                            >
                                2051052089
                            </div>
                        </div>
                        <div class="f-file__members-item">
                            <div
                                class="f-file__members-item__avt"
                            >
                                <img
                                    src="./assets/img/mem/LMD.jpg"
                                    alt=""
                                />
                            </div>
                            <div
                                class="f-file__members-item__name"
                            >
                                Lê Minh Đức
                            </div>
                            <div
                                class="f-file__members-item__id"
                            >
                                2051052029
                            </div>
                        </div>
                        <div class="f-file__members-item">
                            <div
                                class="f-file__members-item__avt"
                            >
                                <img
                                    src="./assets/img/user.png"
                                    alt=""
                                />
                            </div>
                            <div
                                class="f-file__members-item__name"
                            >
                                Châu Hoàng Lộc
                            </div>
                            <div
                                class="f-file__members-item__id"
                            >
                                1951012065
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="f-file__chap-8">
                <div class="chap-8 grid">
                    <div class="chap-8__heading">
                        I - Chương 8 CNH - HDH
                    </div>
                    <div class="chap-8__content">
                        <div class="chap-8__content-define">
                            <div
                                class="chap-8__content-define__img"
                            >
                                <img
                                    src="./assets/img/question.svg"
                                    alt=""
                                />
                            </div>
                            <div
                                class="chap-8__content-define-text"
                            >
                                <span>Công nghiệp hóa</span> là
                                quá trình chuyển đổi nền SXXH từ
                                dựa trên LĐ thủ công là chính
                                sang nền SXXH dựa trên chủ yêu
                                bằng lao động thủ công bằng máy
                                móc nhằm tạo ra năng suất LĐXH
                                cao.
                            </div>
                        </div>
                        <div class="chap-8__content-right">
                            <div class="chap-8__content-group">
                                <div
                                    class="chap-8__content-head"
                                >
                                    <div
                                        class="chap-8__content-head-icon"
                                    >
                                        <i
                                            class="fa-solid fa-plus"
                                        ></i>
                                    </div>
                                    <div
                                        class="chap-8__content-head-text"
                                    >
                                        Mô hình công nghiệp hoá
                                        cổ điển
                                    </div>
                                </div>
                                <div
                                    class="chap-8__content-body"
                                >
                                    <span>
                                        - Tiêu biểu là nước Anh
                                        với CM 1.0 vào giữa TK
                                        XVIII. Về sau lan rộng
                                        sang Pháp, các nước Đức,
                                        Nga, Mỹ.
                                    </span>
                                    <span>
                                        - Đặc trưng: Bắt đầu từ
                                        sự phát triển của ngành
                                        công nghiệp nhẹ (ngành
                                        dệt), nông nghiệp, rồi
                                        cuối cùng là ngành công
                                        nghiệp nặng (cơ khí chế
                                        tạo máy).
                                    </span>
                                    <span>
                                        - Thời gian: 60 - 80
                                        năm.
                                    </span>
                                </div>
                            </div>

                            <div class="chap-8__content-group">
                                <div
                                    class="chap-8__content-head"
                                >
                                    <div
                                        class="chap-8__content-head-icon"
                                    >
                                        <i
                                            class="fa-solid fa-plus"
                                        ></i>
                                    </div>
                                    <div
                                        class="chap-8__content-head-text"
                                    >
                                        Mô hình công nghiệp hóa
                                        theo kiểu Liên Xô cũ
                                    </div>
                                </div>
                                <div
                                    class="chap-8__content-body"
                                >
                                    <span>
                                        - Xuất hiện ở Liên Xô
                                        1930, sau lan ra các
                                        nước XHCN và Đông Âu
                                        những năm 1945. Ở Việt
                                        Nam cũng xây dựng mô
                                        hình này từ năm 1960 đến
                                        1986 thì xoả bỏ.
                                    </span>
                                    <span>
                                        - Đặc trưng mô hình là
                                        ưu tiên phát triển công
                                        nghiệp nặng như ngành cơ
                                        khí chế tạo máy, nhà
                                        nước có vai trò quyết
                                        định, thực hiện cơ chế
                                        kế hoạch hóa tập trung,
                                        mệnh lệnh… Trong thời
                                        gian ngắn xây dựng được
                                        hệ thống cơ sở vật chất
                                        - kỹ thuật to lớn.
                                    </span>
                                    <span>
                                        - Về thời gian sau tỏ ra
                                        lạc hậu, không còn thích
                                        ứng -> sụp đổ cuối thập
                                        kỉ 80 của TK XX.
                                    </span>
                                </div>
                            </div>

                            <div class="chap-8__content-group">
                                <div
                                    class="chap-8__content-head"
                                >
                                    <div
                                        class="chap-8__content-head-icon"
                                    >
                                        <i
                                            class="fa-solid fa-plus"
                                        ></i>
                                    </div>
                                    <div
                                        class="chap-8__content-head-text"
                                    >
                                        Mô hình CNH của Nhật Bản
                                        và các nước công nghiệp
                                        mới (NICs)
                                    </div>
                                </div>
                                <div
                                    class="chap-8__content-body"
                                >
                                    <span>
                                        - Nhật Bản, Hàn Quốc,
                                        Singapore đã tiến hành
                                        CNH theo con đường mới:
                                        chiến lược CNH rút ngắn,
                                        đẩy , mạnh xuât nhập
                                        khẩu, phát triển SX
                                        trong nước thay thế hàng
                                        nhập khẩu. Thông qua
                                        việc tân dụng lợi thế
                                        khoa học ,công nghệ
                                        trong nước thu hút nguồn
                                        lực bên ngoài để tiến
                                        hành CNH gắn với HDH.
                                    </span>
                                    <span>
                                        - Các con đường:
                                        <ul>
                                            <li>
                                                Thông qua đầu tư
                                                nghiên cứu, chế
                                                tạo và hoàn
                                                thiện dần dấn
                                                trình độ công
                                                nghệ từ thấp đến
                                                cao: thời gian
                                                dài, có quá
                                                trình thử
                                                nghiệm.
                                            </li>
                                            <li>
                                                Tiếp nhận,
                                                chuyển giao công
                                                nghệ hiện đại từ
                                                ngưỡc phát triển
                                                hơn: phải có
                                                nhiều vốn ,
                                                ngoại tệ , chịu
                                                sự phụ thuộc
                                                nước ngoài .
                                            </li>
                                            <li>
                                                Xây dựng chiến
                                                lược phát triển
                                                KH, CN nhiều
                                                tầng, kết hợp
                                                công nghệ truyền
                                                thông và công
                                                nghệ hiện đại.
                                                Kết hợp nghiên
                                                cứu chế tạo vừa
                                                chuyển giao công
                                                nghệ từ các nước
                                                phát triền hơn :
                                                cơ bản lâu dài
                                                và vững chắc ,
                                                đi tắt , đón
                                                đầu.
                                            </li>
                                        </ul>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="f-file__general">
                <div class="general grid">
                    <div class="general-heading">
                        Khái quát 4 cuộc Cách mạng
                    </div>
                    <div class="general-img">
                        <img
                            src="./assets/img/4-CNH-HDH.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div class="f-file__chap-9">
                <div class="chap-9 grid">
                    <div class="chap-9__heading">
                        II - Chương 9 Toàn cầu hoá kinh tế
                    </div>
                    <div class="chap-9__content">
                        <div class="chap-9__content-define">
                            <span>
                                Toàn cầu hoá kinh tế là sự gia
                                tăng nhanh chóng các hoạt động
                                kinh tế vượt qua mọi biên giới
                                quốc gia, khu vực, tạo ra sự phụ
                                thuộc lẫn nhau giữa các nền kinh
                                tế trong sự vận động phát triển
                                hướng tới một nền kinh tế thế
                                giới thống nhất.
                            </span>
                            <span>
                                Toàn cầu hóa kinh tế là xu thế
                                nổi trội nhất, nó vừa là trung
                                tâm vừa là cơ sở và cũng là động
                                lực thúc đẩy toàn cầu hóa các
                                lĩnh vực khác.
                            </span>
                        </div>
                        <div class="chap-9__content-list">
                            <div class="chap-9__content-item">
                                <div
                                    class="chap-9__content-item-img"
                                >
                                    <img
                                        src="./assets/img/ecommerce-wallet.svg"
                                        alt=""
                                    />
                                </div>
                                <div
                                    class="chap-9__content-item-text"
                                >
                                    Thương mại thế giới phát
                                    triển mạnh
                                </div>
                            </div>

                            <div class="chap-9__content-item">
                                <div
                                    class="chap-9__content-item-img"
                                >
                                    <img
                                        src="./assets/img/invest.svg"
                                        alt=""
                                    />
                                </div>
                                <div
                                    class="chap-9__content-item-text"
                                >
                                    Đầu tư nước ngoài tăng nhanh
                                </div>
                            </div>

                            <div class="chap-9__content-item">
                                <div
                                    class="chap-9__content-item-img"
                                >
                                    <img
                                        src="./assets/img/transfer-money.svg"
                                        alt=""
                                    />
                                </div>
                                <div
                                    class="chap-9__content-item-text"
                                >
                                    Thị trường tài chính quốc tế
                                    mở rộng
                                </div>
                            </div>

                            <div class="chap-9__content-item">
                                <div
                                    class="chap-9__content-item-img"
                                >
                                    <img
                                        src="./assets/img/condo.svg"
                                        alt=""
                                    />
                                </div>
                                <div
                                    class="chap-9__content-item-text"
                                >
                                    Các công ty xuyên quốc gia
                                    có vai trò ngày càng lớn
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="f-file__ques">
                <div class="f-file__ques-grid grid">
                    <div class="f-file__ques-img">
                        <img
                            src="./assets/img/eco-friendly.svg"
                            alt=""
                        />
                    </div>
                    <div class="f-file__ques-text">
                        Yếu tố khách quan?
                    </div>
                </div>
            </div>
            <div class="f-file__integrate">
                <div class="integrate grid">
                    <div class="f-file__integrate-img">
                        <img
                            src="./assets/img/joy.svg"
                            alt=""
                        />
                    </div>
                    <div class="f-file__integrate-box">
                        <div class="integrate-box__heading">
                            Hội nhập kinh tế quốc tế
                        </div>
                        <div class="integrate-box__body">
                            <div
                                class="integrate-box__body-text"
                            >
                                - Hội nhập kinh tế quốc tế của
                                một quốc gia là quá trình quốc
                                gia đó thực hiện gắn kết nền
                                kinh tế của mình với nền kinh tế
                                thế giới dựa trên sự
                                <span>chia sẻ lợi ích</span> và
                                <span
                                    >tuân thủ các chuẩn mực quốc
                                    tế chung</span
                                >.
                            </div>
                            <div
                                class="integrate-box__body-text"
                            >
                                - Hội nhập kinh tế quốc tế là
                                con đường có thế giúp cho các
                                nước đang và kém phát triển có
                                thể tận dụng thời cơ phát triển
                                rút ngắn, thu hẹp khoảng cách
                                với các nước tiên tiến, khắc
                                phục nguy cơ tụt hậu ngày càng
                                rõ rệt.
                            </div>
                            <div
                                class="integrate-box__body-text"
                            >
                                - Các hình thức:
                            </div>
                            <div
                                class="integrate-box__body-list"
                            >
                                <li
                                    class="integrate-box__body-item"
                                >
                                    Ngoại thương
                                </li>

                                <li
                                    class="integrate-box__body-item"
                                >
                                    Hợp tác về sản xuất kinh
                                    doanh và khoa học công nghệ
                                </li>

                                <li
                                    class="integrate-box__body-item"
                                >
                                    Đầu tư quốc tế (xuất khẩu tư
                                    bản)
                                </li>

                                <li
                                    class="integrate-box__body-item"
                                >
                                    Xuất khẩu lao động và các
                                    hình thức dịch vụ thu ngoại
                                    tệ, du lịch quốc tế.
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="f-file__summary">
                <div class="summary grid">
                    <div class="summary-left">
                        <div class="summary-left__title">
                            Nội dung
                        </div>
                        <div class="summary-left__item">
                            <div
                                class="summary-left__item-icon"
                            >
                                <i class="fa-solid fa-1"></i>
                            </div>
                            <div
                                class="summary-left__item-text"
                            >
                                Chuẩn bị các điều kiện để thực
                                hiện hội nhập hiệu quả, thành
                                công
                            </div>
                        </div>

                        <div class="summary-left__item">
                            <div
                                class="summary-left__item-icon"
                            >
                                <i class="fa-solid fa-2"></i>
                            </div>
                            <div
                                class="summary-left__item-text"
                            >
                                Thực hiện đa dạng các hình thức,
                                các mức độ hội nhập kinh tế quốc
                                tế.
                            </div>
                        </div>

                        <div class="summary-left__item">
                            <div
                                class="summary-left__item-icon"
                            >
                                <i class="fa-solid fa-3"></i>
                            </div>
                            <div
                                class="summary-left__item-text"
                            >
                                Về mức độ, hội nhập kinh tế quốc
                                tế được chia thành các mức độ cơ
                                bản từ thấp đến cao: Thỏa thuận
                                thương mại ưu đãi (PTA) -> Khu
                                vực mậu dịch tự do (FTA) -> Liên
                                minh thuế quan (CU) -> Thị
                                trường chung (thị trường duy
                                nhất) -> Liên minh kinh tế -
                                tiền tệ
                            </div>
                        </div>
                    </div>
                    <div class="summary-right">
                        <div class="summary-right__impact">
                            <div
                                class="summary-right__impact-title"
                            >
                                Tác động
                            </div>
                            <div
                                class="summary-right__positive"
                            >
                                - Cơ hội mở rộng thị trường,
                                tiếp thu khoa học - công nghệ,
                                vốn, chuyển dịch cơ cấu kinh tế
                                trong nước
                            </div>
                            <div
                                class="summary-right__positive"
                            >
                                - Điều kiện để nâng cao chất
                                lượng nguồn nhân lực
                            </div>
                            <div
                                class="summary-right__positive"
                            >
                                - Điều kiện để thúc đẩy hội nhập
                                của các lĩnh vực văn hóa, chính
                                trị, củng cố an ninh quốc phòng
                            </div>
                            <div
                                class="summary-right__separate"
                            ></div>
                            <div
                                class="summary-right__negative"
                            >
                                - Tạo ra sức ép gây sự cạnh
                                tranh gay gắt giữa các thành
                                viên
                            </div>
                            <div
                                class="summary-right__negative second"
                            >
                                - Gia tăng sự phụ thuộc của nền
                                kinh tế quốc gia vào thị trường
                                bên ngoài
                            </div>
                            <div
                                class="summary-right__negative"
                            >
                                - Nguy cơ bản sắc dân tộc, văn
                                hóa truyền thống bị xói mòn do
                                bị lấn át bởi các văn hóa mới
                            </div>
                            <div
                                class="summary-right__negative"
                            >
                                - Nguy cơ về khủng bố quốc tế,
                                buôn lậu, tội phạm quốc tế, dịch
                                bệnh, nhập cư bất hợp pháp, …
                            </div>
                            <div
                                class="summary-right__negative"
                            >
                                - Phân phối lợi ích không công
                                bằng cho các nhóm nước khác nhau
                            </div>
                            <div
                                class="summary-right__negative"
                            >
                                - Chuyển dịch cơ cấu kinh tế tự
                                nhiên bất lợi
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="f-file__analysis">
                <div class="f-file__analysis-grid grid">
                    <div class="f-file__analysis-row">
                        <div class="f-file__analysis-text">
                            Phương hướng nâng cao hiệu quả hội
                            nhập kinh tế quốc tế trong phát
                            triển của Việt Nam
                        </div>
                        <div class="f-file__analysis-icon">
                            <img
                                src="./assets/img/success.svg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="f-file__analysis-list">
                        <div class="f-file__analysis-item">
                            <div
                                class="f-file__analysis-item__title"
                            >
                                Nhận thức sâu sắc về thời cơ và
                                thách thức do hội nhập kinh tế
                                quốc tế mang lại
                            </div>
                            <div
                                class="f-file__analysis-item__content"
                            >
                                Tầm quan trọng? 2 mặt tích cực,
                                tiêu cực? Các chủ thể? Liên hệ
                                thực tế hiện nay?
                            </div>
                        </div>
                        <div class="f-file__analysis-item">
                            <div
                                class="f-file__analysis-item__title"
                            >
                                Xây dựng chiến lược và lộ trình
                                hội nhập kinh tế phù hợp
                            </div>
                            <div
                                class="f-file__analysis-item__content"
                            >
                                Đánh giá nhanh chóng + chính
                                xác? Xác định rõ lộ trình hội
                                nhập?
                            </div>
                        </div>
                        <div class="f-file__analysis-item">
                            <div
                                class="f-file__analysis-item__title"
                            >
                                Tích cực, chủ động tham gia vào
                                các liên kết kinh tế quốc tế và
                                thực hiện đầy đủ các cam kết của
                                Việt Nam trong các liên kết kinh
                                tế quốc tế và khu vực
                            </div>
                            <div
                                class="f-file__analysis-item__content"
                            >
                                Các mốc cơ bản?
                            </div>
                        </div>
                        <div class="f-file__analysis-item">
                            <div
                                class="f-file__analysis-item__title"
                            >
                                Hoàn thiện thể chế kinh tế và
                                luật pháp
                            </div>
                            <div
                                class="f-file__analysis-item__content"
                            >
                                Hoàn thiện, đổi mới cơ chế quản
                                lí?
                            </div>
                        </div>
                        <div class="f-file__analysis-item">
                            <div
                                class="f-file__analysis-item__title"
                            >
                                Nâng cao năng lực cạnh tranh
                                quốc tế của nền kinh tế
                            </div>
                            <div
                                class="f-file__analysis-item__content"
                            >
                                Đầu tư, cải tiến công nghệ? Tăng
                                cường hỗ trợ các doanh nghiệp?
                            </div>
                        </div>
                        <div class="f-file__analysis-item">
                            <div
                                class="f-file__analysis-item__title"
                            >
                                Xây dựng nền kinh tế độc lập, tự
                                chủ của Việt Nam
                            </div>
                            <div
                                class="f-file__analysis-item__content"
                            >
                                Nắm được 5 biện pháp? Quán
                                triệt, xử lý mối quan hệ độc
                                lập, tự chủ và tích cực hội nhập
                                quốc tế?
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="f-file__achievement">
                <div class="f-file__achievement-grid grid">
                    <div class="f-file__achievement-heading">
                        Liên hệ thực tế - Một số thành tựu
                    </div>
                    <div class="f-file__achievement-body">
                        <div class="achievement-tree">
                            <div class="achievement-tree__item">
                                <span>1995</span>

                                <img
                                    src="./assets/img/7-1995.jpg"
                                    alt="Tháng 7/1995, Việt Nam gia nhập ASEAN (Hiệp hội các quốc gia Đông Nam Á)"
                                />
                            </div>
                            <div class="achievement-tree__item">
                                <span>1996</span>
                                <img
                                    src="./assets/img/1996.jpg"
                                    alt="Năm 1996 là thành viên của APEC (Diễn đàn Hợp tác kinh tế Châu Á - Thái Bình Dương)"
                                />
                            </div>
                            <div class="achievement-tree__item">
                                <span>2000</span>
                                <img
                                    src="./assets/img/2000.jpg"
                                    alt="Năm 2000, ký kết Hiệp định Thương mại song phương Việt Nam - Hoa Kỳ"
                                />
                            </div>
                            <div class="achievement-tree__item">
                                <span>2007</span>
                                <img
                                    src="./assets/img/2007.jpg"
                                    alt="Tháng 1/2007 là thành viên chính thức của WTO (Tổ chức Thương mại Thế giới)"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="f-file__achievement-more">
                        Ngoài ra Việt Nam đang là thành viên
                        tích cực của nhiều tổ chức quốc tế và
                        khu vực quan trọng.
                    </div>
                    <div class="f-file__achievement-video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xusLneKp54A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        <video
                                            controls
                                            src="./assets/video/video2.mp4"
                                        ></video>
                                    </div>
                </div>
                <div class="f-file__achievement-show">
                    <div class="f-file__achievement-show__img">
                        <img
                            src="./assets/img/7-1995.jpg"
                            alt=""
                        />
                    </div>
                    <span
                        class="f-file__achievement-show__title"
                        >Tháng 7/1995, Việt Nam gia nhập ASEAN
                        (Hiệp hội các quốc gia Đông Nam Á)
                    </span>
                    <span class="close-btn">&#x2715;</span>
                </div>
            </div>
            <div class="f-file__end">
                <marquee
                    width="300px"
                    behavior=""
                    direction=""
                    scrollamount="15"
                >
                    --- THE END ---
                </marquee>
            </div>
        </div>
        `,
        fullScreen: 1,
    },
];
const sizeListInit = [250, 350, 500];

export { weeks, months, applicationsInit, sizeListInit };
