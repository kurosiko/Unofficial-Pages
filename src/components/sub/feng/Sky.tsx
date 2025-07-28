export default function Sky(){
    type Work_Data={
        title:string,
        to:string,
        img:{
            src:string,
            alt:string
        }
    }
    const Sky_series:Work_Data[]=[
        {
            title:"青空の見える丘",
            to:"http://www.feng.jp/aozora/index.html",
            img:{
                src:"http://www.feng.jp/images/head_icon01.png",
                alt:"aozora"
            }
        },
        {
            title:"あかね色に染まる坂",
            to:"http://www.feng.jp/akaneiro/index.html",
            img:{
                src:"http://www.feng.jp/images/head_icon02.png",
                alt:"akane"
            }
        },
        {
            title:"星空へ架かる橋",
            to:"http://www.feng.jp/hoshi/top.html",
            img:{
                src:"http://www.feng.jp/images/head_icon03.png",
                alt:"hosika"
            }
        }
    ]
    return(
        <>
            <div className='flex flex-row gap-1'>
            {
                Sky_series.map((item:Work_Data,idx:number)=>{
                    return (
                        <div key={item.title}>
                            <img src={item.img.src} alt={item.img.alt+item.title}/>
                            <p>feng 空３部作 第{idx+1}弾</p>
                            <p>『{item.title}』</p>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}