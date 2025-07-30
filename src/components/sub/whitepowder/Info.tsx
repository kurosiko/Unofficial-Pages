import { useEffect, useRef, useState } from "react"

export default function Info(){
    const slide = useRef<HTMLDivElement>(null)
    const [slide_idx,setIdx] = useState(0)
    useEffect(()=>{
        const rel_left_offset = ((slide.current?.childNodes[slide_idx] as HTMLElement).offsetLeft - (slide.current as HTMLElement).offsetLeft)
        if(!slide.current){
            alert("Dom not found")
        }
        if(slide.current){
            slide.current.scrollLeft += 10
        } 
    },[slide_idx])
    return(
        <>
            <h3 className="uppercase text-2xl font-bold text-center pt-2">pick <strong className="text-red-600">up</strong> information</h3>
            <div className="flex flex-row justify-center items-center gap-7 py-5">
                <div className="grid grid-cols-[repeat(3,150px)] grid-rows-[repeat(2,150px)] gap-1">
                    <img src="/resources/whitepowder/twitter.png" alt="twitter_opened"/>
                    <img src="/resources/whitepowder/reminisphere.png" alt="reminisphere"/>
                    {[...Array(4)].map((_:undefined)=>{
                        return (
                            <div
                                className="uppercase border-2 border-gray-400/50 text-gray400/50 font-light text-center content-center"
                                key={self.crypto.randomUUID()}
                            >
                                NOW CREATING<br/>PLEASE WAIT
                            </div>
                        )
                    })}
                </div>
                <div>
                    <div className="flex overflow-x-auto snap-x scroll-smooth w-100 *:snap-center flex-col">
                        <div className="flex flex-row min-w-full *:shrink-0 *:size-full" ref={slide}>
                            <img src="/resources/whitepowder/trial_published.png" alt="trial"/>
                            <img src="/resources/whitepowder/amazon.png" alt="amazon"/>
                            <img src="/resources/whitepowder/lamunation_slide.png" alt="lamunation"/>
                            <img src="/resources/whitepowder/header_available.png" alt="header_available"/>
                        </div>
                    </div>
                    <div className="flex flex-row *:flex-auto  gap-3 py-1 h-5">
                            {
                                [...Array(slide.current?.children.length)].map((_:undefined,idx:number)=>{
                                    return(
                                        <button
                                            type="button"
                                            key={self.crypto.randomUUID()}
                                            onClick={()=>{setIdx(idx)}}
                                            className={`w-full ${idx === slide_idx ? "bg-red-700" : ""}`}
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