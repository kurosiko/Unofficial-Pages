type Props = {
    src:string,
    close_func(setter:(current:boolean)=>boolean):void
}
export default function ImageViewer({src,close_func}:Props){
    return(
        <div className="fixed z-10 backdrop-blur-lg justify-center text-center items-center backdrop-brightness-50 inset-0 overflow-scroll flex flex-col gap-5">
                <p className="text-white">ImageViewer(WIP)</p>
                <img src={src} alt="image_viewer" className="object-scale-down mx-auto"/>
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
    )
}