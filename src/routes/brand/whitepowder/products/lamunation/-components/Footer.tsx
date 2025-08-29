import { Link } from "@tanstack/react-router";

export default function Footer(){
    return(
        <div className="w-full">
            <img src="/resources/whitepowder/products/lamunation/bg_footer.webp" alt="bg-lamune-footer" className="w-full object-coverexp"/>
            <nav
                className="flex flex-auto justify-center text-center content-center *:uppercase divide-x-2 divide-white w-full bg-lamune text-white font-bold text-3xl *:px-3 font-oswald py-5"
            >
                <Link to="/brand/whitepowder/products/lamunation">top</Link>
                <Link to="/brand/whitepowder/products/lamunation/about">about</Link>
                <Link to="/brand/whitepowder/products/lamunation/characters">characters</Link>
                <Link to="/brand/whitepowder/products/lamunation/stages">stages</Link>
                <Link to="/brand/whitepowder/products/lamunation/music">music</Link>
                <Link to="/brand/whitepowder/products/lamunation/special">special</Link>
                <Link to="/brand/whitepowder/products/lamunation/compaign">campaign</Link>
                <Link to="/brand/whitepowder/products/lamunation/download">download</Link>


            </nav>
        </div>
    )
}