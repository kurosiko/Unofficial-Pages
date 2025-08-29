import { Link } from "@tanstack/react-router";

export default function Header(){
    return(
    <>
        <div className="flex flex-row items-center justify-center gap-5 py-5">
            <Link to="/brand/whitepowder"><img src="/resources/whitepowder/logo.webp" alt="wp_logo"/></Link>
            <nav className="flex flex-row gap-3 *:uppercase *:font-bold text-center justify-center py-2 text-xl">
                <p className="text-red-600">new product</p>
                <Link to="/brand/whitepowder/products"><p>products</p></Link>
                <p className="text-gray-500/80">goods</p>
                <p>event</p>
                <p className="text-gray-500/80">blog</p>
                <p>support</p>
            </nav>
            <nav>
                media link
            </nav>
        </div>
    </>
    )
}