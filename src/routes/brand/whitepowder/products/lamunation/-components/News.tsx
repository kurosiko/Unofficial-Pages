import ImageViewer from "@/components/ImageViewer";
import { useState } from "react";
export default function News(){
    const [is_displayed,setDisplayed] = useState<boolean>(false);
    return(
        <>
        <div className="absolute left-1/2 bottom-75 transform -translate-x-1/2 -translate-y-1/2 grid grid-cols-3 justify-items-center gap-x-4 mx-auto">
            <div>
            <button type="button" onClick={()=>{setDisplayed(!is_displayed)}}>
                <img src="/resources/whitepowder/products/lamunation/banner_masterup.webp" alt="masterup banner"/>
            </button>
            </div>
            <div>
                <img src="/resources/whitepowder/products/lamunation/banner_trial.webp" alt="trial banner"/>
            </div>
            <div>
                <img src="/resources/whitepowder/products/lamunation/banner_bonus.webp" alt="bonus banner"/>
            </div>
            <div>
                <img src="/resources/whitepowder/products/lamunation/banner_campaign.webp" alt="campaign banner"/>
            </div>
            <div>
                <img src="/resources/whitepowder/products/lamunation/banner_twitter_icon.webp" alt="twitter banner"/>
            </div>
            <div>
                <img src="/resources/whitepowder/products/lamunation/banner_amazon.webp" alt="amazon banner"/>
            </div>
        </div>
        <div className="absolute bottom-50 left-1/2 translate-x-[-50%] flex text-2xl justify-center items-center *:p-1">
            <h3 className="font-bold bg-lamune text-white">What's new</h3>
            <p className="text-lamune bg-white">2016/06/24 ラムネーション！発売致しました</p>
        </div>
        {
            is_displayed && 
            <ImageViewer src='/resources/whitepowder/products/lamunation/img_master.webp' close_func={setDisplayed}/>
        }
        </>
    )
}