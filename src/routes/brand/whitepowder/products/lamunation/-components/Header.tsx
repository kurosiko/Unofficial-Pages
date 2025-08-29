import { Link } from "@tanstack/react-router";

export default function Header(){
    return(
        <div className="absolute top-0 text-2xl content-center flex w-screen items-center text-center z-5">
            <Link
                className="flex-1/3"
                to="/brand/whitepowder/products/lamunation"
            >
                <img
                    src="/resources/whitepowder/products/lamunation/btn_logo_off.webp"
                    className="shrink-0 mx-auto"
                />
            </Link>
            <nav className="flex flex-2/3 justify-center *:uppercase font-oswald text-white *:bg-lamune gap-5 *:p-1 text">
                <Link to="/brand/whitepowder/products/lamunation/stages">stages</Link>
                <Link to="/brand/whitepowder/products/lamunation/gallery">gallely</Link>
                <Link to="/brand/whitepowder/products/lamunation/stages">stages</Link>
                <Link to="/brand/whitepowder/products/lamunation/stages">stages</Link>
            </nav>
        </div>
    )
}