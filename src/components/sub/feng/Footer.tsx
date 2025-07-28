export default function Footer(){
    return(
    <>
        <div className="w-screen border-t-3 border-green-400 bg-lime-200">
            <div className="flex flex-row w-full px-4 py-10 *:flex-auto items-center justify-center text-center">
                <div className="uppercase divide-x-2 *:px-0.5">
                    <a href="http://www.feng.jp/home.html">home</a>
                    <a href="http://www.feng.jp/products.html">products</a>
                    <a href="http://www.feng.jp/info.html">information</a>
                    <a href="http://www.feng.jp/support.html">support</a>
                </div>
                <h1 className="text-2xl">Feng Unoffical Website</h1>
            </div>
        </div>
    </>
   )
}