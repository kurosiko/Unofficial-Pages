import { Link } from "@tanstack/react-router"

export default function Footer(){
    return(
        <>
            <div>
                <div className="flex flex-row gap-3 *:uppercase *:font-extrabold *:text-white bg-red-600 text-center justify-center [&>p>strong]:text-white/80 h-50 py-2 text-xl">
                    <p>new product</p>
                    <Link to="/brand/whitepowder/products">products</Link>
                    <p><strong>goods</strong></p>
                    <p><strong>event</strong></p>
                    <p><strong>blog</strong></p>
                    <p>support</p>
                </div>
            </div>
        </>
    )
}