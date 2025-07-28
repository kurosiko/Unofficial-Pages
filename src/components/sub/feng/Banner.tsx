export default function Banner() {
    type Banner = {
        title: string;
        link: {
            title: string;
            to: string;
        };
        img: {
            src: string;
            alt: string;
        };
    };
    const Banner_Data: Banner[] = [
        {
            title: "夢と色で出来ている",
            link: {
                title: "PC版特設ページ",
                to: "http://www.feng.jp/feng8th/",
            },
            img: {
                src: "http://www.feng.jp/feng8th/images/8thtwittericon_a2.png",
                alt: "feng8th",
            },
        },
        {
            title: "ずっと前から女子でした",
            link: {
                title: "PC版特設ページ",
                to: "http://www.feng.jp/zutto/",
            },
            img: {
                src: "http://www.feng.jp/zutto/images/10th_twiicon01.png",
                alt: "zutto",
            },
        },
        {
            title: "学校のセイイキ",
            link: {
                title: "PC版特設ページ",
                to: "http://www.feng.jp/seiiki/gakkou/",
            },
            img: {
                src: "/",
                alt: "gakkou",
            },
        },
        {
            title: "妹のセイイキ",
            link: {
                title: "PC版特設ページ",
                to: "http://www.feng.jp/seiiki/imouto/index.html",
            },
            img: {
                src: "http://www.feng.jp/seiiki/imouto/images/9th2_twi02.png",
                alt: "imouto",
            },
        },
        {
            title: "彼女のセイイキ",
            link: {
                title: "PC版特設ページ",
                to: "http://www.feng.jp/seiiki/index.html",
            },
            img: {
                src: "http://www.feng.jp/seiiki/images/seiiki_twi01.png",
                alt: "kanojo",
            },
        },
        {
            title: "小さな彼女の小夜曲",
            link: {
                title: "PC版特設ページ",
                to: "http://www.feng.jp/hoshi/chiisana/",
            },
            img: {
                src: "http://www.feng.jp/hoshi/chiisana/tikano_icon/shio_H_08.png",
                alt: "chiisana",
            },
        },
        {
            title: "星空に架かる橋AA",
            link: {
                title: "PC版特設ページ",
                to: "http://www.feng.jp/hoshi/aa.html",
            },
            img: {
                src: "http://www.feng.jp/hoshi/banner_aa/128x128_11.jpg",
                alt: "AA",
            },
        },
    ];
    return (
        <>
            {Banner_Data.map((item) => {
                return (
                    <div
                        className="flex flex-col *:text-center"
                        key={item.title + item.img.src}
                        style={{
                            background:
                                "repeating-linear-gradient(135deg, rgb(255, 167, 0) 0px, rgb(255, 167, 0) 3px, rgb(255, 202, 17) 3px, rgb(255, 202, 17) 6px)",
                        }}
                    >
                        <img src={item.img.src} alt={item.img.alt} className="rounded-md m-2" />
                        <p className="font-extrabold text-white">{item.title}</p>
                        <a
                            href={item.link.to}
                            className="rounded-lg bg-red-500 shadow-lg m-2 text-white font-semibold"
                        >
                            {item.link.title}
                        </a>
                    </div>
                );
            })}
        </>
    );
}
