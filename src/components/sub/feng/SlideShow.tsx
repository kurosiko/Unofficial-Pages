import { useRef, useState } from "react";

export default function SlideShow() {
    const slide = useRef<HTMLDivElement>(null);
    const image_data = [
        "http://www.feng.jp/images/officialbooth_b.jpg",
        "http://www.feng.jp/images/vocalalbum_b.jpg",
    ];
    const [count, setCount] = useState(0);

    const next = () => {
        setCount((prevCount) => {
            if (prevCount + 1 > image_data.length - 1){
                return 0
            }
            return prevCount+1
        });
    };
    //this mean main element has 765px width
    const main_width = 765
    const slide_fade = (part:number)=>{
        return [...Array(part)].map((_:undefined,idx:number)=>{
        return (
            <div key={self.crypto.randomUUID()}>
                <div
                    style={{
                        animation:`fade 1s ease ${100*idx}ms 1 normal forwards`
                    }}
                />
            </div>
        )
    })
    }
    const slide_width = (part:number)=>{
        return [...Array(part)].map((_:undefined,idx:number)=>{
        return (
            <div key={self.crypto.randomUUID()}>
                <div
                    style={{
                        animation:`width 1s ease ${50*idx}ms 1 normal forwards`
                    }}
                />
            </div>
        )
    })
    }
    const slide_height = (part:number)=>{
        const part_width = main_width/part
        return [...Array(part)].map((_:undefined,idx:number)=>{
        return (
            <div key={self.crypto.randomUUID()}>
                <div
                    style={{
                        backgroundPositionX:part_width*idx,
                        animation:`s_height 1s ease ${100*idx}ms 1 normal forwards`
                    }}
                />
            </div>
        )
    })
    }
    const animations = [slide_width,slide_fade,slide_height]
    return (
        <>
            <style>
                {`
                    @keyframes fade {
                        from {
                            opacity:1
                        }
                        to {
                            opacity:0;
                        }
                    }
                    @keyframes width{
                        from {
                            width:100%
                        }
                        to {
                            width:0
                        }
                    }
                    @keyframes s_height{
                        from {
                            height:100%
                        }
                        to {
                            height:0
                        }
                    }
                `}
            </style>
            <div className="w-full h-64 overflow-hidden relative flex divide-x-0 [&>div]:z-1 [&>div]:flex-auto [&>div>div]:size-full [&>div>div]:bg-lime-200" ref={slide} >
                {(animations[Math.floor(Math.random()* animations.length)])(15)}
                <img src={image_data[count]} alt="slide_image" className="absolute z-0 w-full"/>
            </div>
            <button type="button" onClick={next} className="">
                Next {count}/{image_data.length - 1}
            </button>
        </>
    );
}