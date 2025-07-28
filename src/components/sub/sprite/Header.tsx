export default function Header(){
    return(
    <>
    <header className="flex flex-row sticky top-0 left-0 right-0 z-100 bg-white/50 p-4 justify-center items-center backdrop-blur-md drop-shadow **:text-center">
        <div className="flex lg:flex-1 text-lg lg:text-4xl">Sprite Unofficial<p className="lg:hidden text-start px-2"><small>Official Website</small></p></div>    
        <nav className="flex-3 grid grid-cols-6 *:flex-auto *:border-b-2 *:border-gray-200/50 gap-2 *:w-full text-sm  *:transition-colors *:ease-in-out *:duration-500">
            <a href="https://j.sprite.net/animate" className="hover:border-[rgb(245,113,125)]">公式ストア</a>
            <a href="https://sprite.net/games" className="hover:border-[rgb(245,167,113)]">ゲーム</a>
            <a href="https://sprite.net/books" className="hover:border-[rgb(245,167,113)]">ブック</a>
            <a href="https://sprite.net/music" className="hover:border-[rgb(245,167,113)]">ミュージック</a>
            <a href="https://sprite.net/animation" className="hover:border-[rgb(245,167,113)]">アニメーション</a>
            <a href="https://sprite.net/pages/contact" className="hover:border-[rgb(245,167,113)]">ライセンス</a>
            <a href="https://sprite.net/news" className="hover:border-[rgb(245,167,113)]">ニュース</a>
            <a href="/" className="hover:border-[rgb(245,167,113)]">ジャーナル</a>
            <a href="https://sprite.net/blog" className="hover:border-[rgb(245,167,113)]">ブログ</a>
            <a href="https://sprite.net/event" className="hover:border-[rgb(245,167,113)]">イベント</a>
            <a href="https://sprite.net/pages/recruit" className="hover:border-[rgb(245,167,113)]">採用情報</a>
            <a href="https://sprite.net/pages/contact" className="hover:border-[rgb(245,167,113)]">お問い合わせ</a>
        </nav>
        <nav className="flex-1 lg:flex hidden *:flex-auto md:hidden">
            <a href="https://j.sprite.net/x">Twitter</a>
            <a href="https://j.sprite.net/instagram">Instagram</a>
            <a href="https://j.sprite.net/youtube">YouTube</a>
            <a href="https://j.sprite.net/steam">Steam</a>
        </nav>
    </header>
    </>
    )
}