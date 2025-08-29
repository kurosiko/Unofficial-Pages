import { useEffect, useRef, useState, type ReactNode } from "react"

export default function SnapList({children,props}:{
    children:ReactNode,
    props:{
        scroll:'x'|'y'|'both',
        snap:'mandatory'|'proximity',
        overflow:'hidden'|'scroll',

    }
}) {
    const referer = useRef<HTMLDivElement>(null);
    const [idx,setIdx] = useState<number>(0);
    useEffect(()=>{
        if(!referer.current) return;
        if(idx > referer.current.children.length - 1){
            setIdx(0)
            return;
        }
        if(idx < 0){
            setIdx(referer.current.children.length - 1)
            return;
        }
        referer.current.scrollTo({
            left:(referer.current.children[idx] as HTMLElement).offsetLeft - (referer.current as HTMLElement).offsetLeft,
            behavior:"smooth"
        })
    },[idx])
    return(
        <>
            <div
                className={
                    `flex 
                    ${props.scroll === 'y' ? 'flex-col':''}
                    ${props.scroll === 'x' ? 'flex-row':''}
                    inset-0
                    *:flex-auto
                    **:size-full
                    overflow-${props.scroll === 'both' ? 'scroll': props.scroll === 'x' ? 'x': 'y'}-${props.overflow}
                    **:shrink-0
                    snap-${props.scroll === 'both' ? 'both': props.scroll === 'x' ? 'x': 'y'}
                    snap-${props.snap}
                    *:snap-center
                    size-full
                    **:object-cover`
                }
                ref={referer}
            >
                {children}
            </div>
            <button type="button" onClick={()=>setIdx(idx+1)}>Next</button>
        </>
    )
}
