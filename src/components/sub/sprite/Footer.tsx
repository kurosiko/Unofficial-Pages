export default function Footer(){
    return(
        <>
            <footer className="p-8 bg-gray-50">
                <h1 className="text-4xl">Sprite Unofficial</h1>
                <div className=" divide-y-2 divide-gray-500 *:flex *:flex-col [&>div>p]:py-4 [&>div>div>a]:px-4  *:py-15">
                    <div className="[&>a>small]:text-gray-500 [&>a>small]:px-3 [&>a>small]:text-xs">
                        <p className="font-bold">GAMES</p>
                        <a href="https://sprite.net/everlastingflowers">everlasting flowers<small>[Switch / PS4 / Steam]</small></a>
                        <a href="https://aokana.net/">蒼の彼方のフォーリズム<small>[PC / Switch / PS4]</small></a>
                        <a href="https://koichoco.net/">恋と選挙とチョコレート<small>[PC / Steam]</small></a>
                        <a href="https://sprite.net/filmicnovel">FILMIC NOVELとは</a>
                        <a href="https://j.sprite.net/fanza">ダウンロード販売 (PC)</a>
                    </div>
                    <div>
                        <p className="font-bold">MAIN NAVIGATION</p>
                        <div className="flex-row divide-x-2 flex text-center">
                            <a href="https://sprite.net/games">作品情報</a>
                            <a href="https://sprite.net/news">ニュース</a>
                            <a href="https://sprite.net/games">ゲーム</a>
                            <a href="https://sprite.net/books">ブック</a>
                            <a href="https://sprite.net/animation">アニメ</a>
                            <a href="https://sprite.net/event">イベント</a>
                            <a href="https://sprite.net/blog">ブログ</a>
                            <a href="https://sprite.net/pages/recruit">採用情報</a>
                            <a href="https://sprite.net/pages/contact">ライセンスアウト</a>
                            <a href="https://sprite.net/pages/contact">お問い合わせ</a>
                        </div>
                    </div>
                    <div className="flex-row">
                        <p className="font-bold">PARTNER SITES</p>
                        <div className="flex flex-row divide-x-2 text-center">
                            <a href="https://j.sprite.net/animate">公式オンラインストア (アニメイト)</a>
                            <a href="https://rw.gp/spr">CS販売店・書店様向け情報</a>
                            <a href="https://j.sprite.net/flowers.studio">flowers.studio公式サイト</a>
                            <a href="https://jio-c.net/">じおくりえいと (痛車)</a>
                        </div>
                    </div>
                    <div>
                        <p className="font-bold">SUPPORT & POLICIES</p>
                        <div className="flex flex-row divide-x-2 text-center">
                            <a href="https://sprite.net/pages/support">サポートセンター</a>
                            <a href="https://sprite.net/pages/guidelines">二次創作ガイドライン</a>
                            <a href="https://sprite.net/pages/broadcast-guidelines">動画配信ガイドライン</a>
                            <a href="https://sprite.net/pages/privacy">プライバシーポリシー</a>
                            <a href="https://sprite.net/pages/about">spriteについて</a>
                        </div>
                    </div>
                    <div>
                        <p className="font-bold">FOLLOW US</p>
                        <div className="flex flex-row">
                            <a href="https://j.sprite.net/x">X</a>
                            <a href="https://j.sprite.net/instagram">Instagram</a>
                            <a href="https://j.sprite.net/youtube">YouTube</a>
                            <a href="https://j.sprite.net/pixiv">Pixiv</a>
                            <a href="https://j.sprite.net/steam">Steam</a>
                            <a href="https://j.sprite.net/booth">BOOTH</a>
                        </div>
                    </div>
                </div>
                <p><small>This is the fan-made page</small></p>
            </footer>
        </>
    )
}