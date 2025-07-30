export default function Header(){
    return(
    <>
        <div className="flex flex-row items-center justify-center gap-5 py-5">
            <img src="/resources/whitepowder/logo.png" alt="wp_logo"/>
            <nav className="flex flex-row gap-3 *:uppercase *:font-bold text-center justify-center py-2 text-xl">
                <p className="text-red-600">new product</p>
                <p className="text-gray-500/80">products</p>
                <p className="text-gray-500/80">goods</p>
                <p>event</p>
                <p className="text-gray-500/80">blog</p>
                <p>support</p>
            </nav>
            <nav>

            </nav>
        </div>
    </>
    )
}