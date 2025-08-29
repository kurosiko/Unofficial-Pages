export default function Banner(){
    return(
        <>
            <div className="flex flex-col **:uppercase [&>p>strong]:text-red-600 font-bold justify-center items-center gap-5 py-5 text-2xl">
                <p>pick <strong>up</strong> links</p>
                <div
                    className="grid grid-cols-3 justify-items-center gap-2"
                >
                    <a href="https://sagaplanets.product.co.jp/top.html">
                        <img src="/resources/whitepowder/SAGA.webp" alt="saga planets"/>
                    </a>
                    <a href="https://visual-arts.jp/">
                        <img src="/resources/whitepowder/VisualAntena.webp" alt="VA"/>
                    </a>
                    <a href="http://www.feng.jp/hoshi/chiisana/">
                        <img src="/resources/whitepowder/littlegf.webp" alt="littlegf"/>
                    </a>
                    <a href="https://x.com/lass_official">
                        <img src="/resources/whitepowder/lass.webp" alt="lass"/>
                    </a>
                    <a href="http://www.hyperiyon.com/top.php">
                        <img src="/resources/whitepowder/hyperion.webp" alt="hyperion"/>
                    </a>
                    <a href="https://spriterecordings.upper.jp/">
                        <img src="/resources/whitepowder/spliterecording.webp" alt="spliterecordings"/>
                    </a>
                    <a href="/">
                        <img src="/resources/whitepowder/RekkaKatakiri.webp" alt="RekkaKatakiri"/>
                    </a>
                </div>
                <p>link <strong>free</strong></p>
                <a href="/">
                    <img src="/resources/whitepowder/whitepowder.webp" alt="wp"/>
                </a>
            </div>
        </>
    )
}