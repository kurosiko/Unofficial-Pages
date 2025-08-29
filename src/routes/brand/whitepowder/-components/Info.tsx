import { useEffect, useRef, useState } from "react"

export default function Info(){
    const slide = useRef<HTMLDivElement>(null)
    const [slide_idx,setIdx] = useState(0)
    useEffect(()=>{
        if(!slide.current) return
        slide.current.scrollTo({
            left:(slide.current.children[slide_idx] as HTMLElement).offsetLeft - (slide.current as HTMLElement).offsetLeft,
            behavior:"smooth"
        })

    },[slide_idx])
    const [image_count,setCount] = useState(0);
    const [keys_info,setKeysInfo] = useState<string[]>([])
    const [keys_images,setKeysImages] = useState<string[]>([])
    useEffect(()=>{
        if(!slide.current) return;
        setCount(slide.current.children.length)
        setKeysInfo([...Array(slide.current.children.length)].map((_:undefined)=>self.crypto.randomUUID()));
        setKeysImages([...Array(slide.current.children.length)].map((_:undefined)=>self.crypto.randomUUID()));
    },[])
    return(
        <>
            <h3 className="uppercase text-2xl font-bold text-center pt-2">pick <strong className="text-red-600">up</strong> information</h3>
            <div className="flex flex-row justify-center items-center gap-7 py-5">
                <div className="grid grid-cols-[repeat(3,150px)] grid-rows-[repeat(2,150px)] gap-1">
                    <img src="/resources/whitepowder/twitter.webp" alt="twitter_opened"/>
                    <img src="/resources/whitepowder/reminisphere.webp" alt="reminisphere"/>
                    {image_count && keys_info.map((key:string)=>{
                        return (
                            <div
                                className="uppercase border-2 border-gray-400/50 text-gray400/50 font-light text-center content-center"
                                key={key}
                            >
                                NOW CREATING<br/>PLEASE WAIT                                
                            </div>
                        )
                    })}
                </div>
                <div>
                    <div className="flex flex-row inset-0 *:flex-auto **:size-full overflow-x-hidden **:shrink-0 w-100 snap-x snap-mandatory *:snap-center h-full" ref={slide}>
                        <a href="https://www.dlsite.com/pro/work/=/product_id/VJ010196.html">
                            <img src="/resources/whitepowder/trial_published.webp" alt="trial"/>
                        </a>
                        <a href="https://www.amazon.co.jp/-/en/LAMUNATION-%E3%80%90%E5%88%9D%E5%9B%9E%E7%89%B9%E5%85%B8-VOCAL-COLLECTION-%E4%BB%98%E3%81%8D%E3%80%91/dp/B01BBYJCZC">
                            <img src="/resources/whitepowder/amazon.webp" alt="amazon"/>
                        </a>
                        <img src="/resources/whitepowder/lamunation_slide.webp" alt="lamunation"/>
                        <img src="/resources/whitepowder/header_available.webp" alt="header_available"/>
                    </div>
                    <div className="flex flex-row *:flex-auto  gap-3 pt-2 h-5">
                            {image_count && keys_images.map((key:string,idx:number)=>{
                                    return(
                                        <button
                                            type="button"
                                            key={key}
                                            onClick={()=>{setIdx(idx)}}
                                            className={`w-full ${idx === slide_idx ? "bg-red-700" : "bg-gray-600/50"}`}
                                        />
                                    )
                                })
                            }
                    </div>
                </div>
            </div>
        </>
    )
}