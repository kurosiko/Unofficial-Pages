type Props = {
        id:string,
        close_func(setter:(current:boolean)=>boolean):void,
}
export default function YT_Player({id,close_func}:Props){
    return(
        <>
            <div className="fixed z-10 backdrop-blur-lg inset-0 justify-center items-center flex flex-col backdrop-brightness-50 gap-5">
                <p className="text-white">YT_Player(WIP)</p>
                <iframe
                    className="aspect-video rounded-lg shadow-2xl relative"
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${id}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                >
                </iframe>
                <button
                    className="text-white border-2 border-white px-5 py-3"
                    type="button"
                    onClick={()=>{
                        close_func((current:boolean)=>!current)
                    }}
                >
                    Close
                </button>
            </div>
        </>
    )
}