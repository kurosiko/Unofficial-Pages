import { useEffect, useState } from "react"

export default function News(){
    const [keys_news,setKeysNews] = useState<string[]>([])
    const content = keys_news.map((key:string)=>{
        return <p className="unoffical" key={key}>unofficial<br/></p>
            
    })
    useEffect(()=>{
        setKeysNews([...Array(15)].map((_:undefined)=>self.crypto.randomUUID()))
    },[])
    return(
        <>
            <div className="flex flex-row gap-10 justify-center items-center py-2">
                <div>
                    <h3 className="uppercase font-extrabold bg-gray-700 text-white p-2 text-center w-45">whats new?</h3>
                    <div className="bg-red-600 h-50 w-75 flex justify-center items-center">
                        <blockquote className="size-full mx-5 my-2  bg-white text-black overflow-x-scroll">
                            {content}
                        </blockquote>
                    </div>
                </div>
                <div>
                    <h3 className="uppercase font-extrabold bg-gray-700 text-white p-2 text-center w-45">twitter</h3>
                    <div className="bg-blue-600 h-50 w-75 flex justify-center items-center">
                        <blockquote className="size-full mx-5 my-2  bg-white text-black overflow-x-scroll">
                            {content}
                        </blockquote>
                    </div>
                </div>
            </div>
        </>
    )
}