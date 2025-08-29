import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react"

export default function Options(){
    const [menu_displayed,setMenuDisplayed] = useState<boolean>(false);
    const path_list = useLocation({select:(location)=>location.pathname}).split('/')
    const [keys_tracer,setKeysTracer] = useState<string[]>([])
    useEffect(()=>{
        setKeysTracer([...Array(path_list.length)].map((_:undefined)=>self.crypto.randomUUID()));
    },[])
    const Menu = ()=>{
        return(
            <div
            className="absolute flex flex-col gap-5 top-0 right-0 w-1/4 z-2 bg-red-50/70 h-full text-center p-2 *:w-full backdrop-blur-md animate-slide-in-right **:text-2xl **:p-5 **:font-oswald **:uppercase"
            >
                <button
                    type="button"
                    onClick={()=>{setMenuDisplayed(false)}}
                    className="border-2 "
                >
                    close
                </button>
                {
                    path_list.map((path:string,idx:number)=>{
                        const destination = path_list.slice(0,idx+1).join('/')
                        return(
                            <Link to={destination} key={keys_tracer[idx]}>
                                {path || 'top'}
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
    const LeaveMenu = ()=>{
        return(
            <button className="absolute top-0 left-0 w-full h-full z-1" type="button" onClick={()=>setMenuDisplayed(false)}/>
        )
    }
    return(
        <>
            {
            menu_displayed ?
                (
                    <>
                        <Menu/>
                        <LeaveMenu/>
                    </>
                ) : (
                    <div className="fixed bottom-10 right-10 rotate-45 h-20 w-20 bg-red-500 opacity-50 hover:opacity-100 transition-opacity ease-in-out duration-500">
                        <button type="button" onClick={()=>{setMenuDisplayed(!menu_displayed)}} className="font-oswald uppercase text-center content-center size-full text-white text-2xl rotate-315">
                            menu
                        </button>
                    </div>
                )
            }
        </>
    )
}
