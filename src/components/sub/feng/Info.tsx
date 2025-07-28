export default function Info(){
    type Info_Data={
        y:number,
        m:number,
        d:number,
        title:string,
        to:string
    }
    const Info:Info_Data[]=[
  {
    y: 2022,
    m: 3,
    d: 6,
    title: "「feng公式BOOTH」本日オープン！",
    to:"https://feng-soft.booth.pm/"
  },
  {
    y: 2021,
    m: 11,
    d: 26,
    title: "「fengコンプリートボーカルアルバム」本日発売！",
    to:"http://fengva.com/"
  },
  {
    y: 2019,
    m: 2,
    d: 22,
    title: "「夢と色でできている」修正ファイルを公開いたしました",
    to:"http://www.feng.jp/support.html"
  },
  {
    y: 2019,
    m: 2,
    d: 22,
    title: "「夢と色でできている」本日発売！",
    to:"http://www.feng.jp/feng8th/"
  },
  {
    y: 2018,
    m: 3,
    d: 30,
    title: "「ずっと前から女子でした」本日発売！",
    to:"http://www.feng.jp/zutto/"
  }
];
const leading_digit = (num:number)=>{
    const num_str = String(num)
    if(num_str.length === 1){
        return 0 + num_str
    }
    return num

}
    return(
        <>
            <h3 className='text-start text-2xl py-2'>feng タイトル 最新情報</h3>
            <div className='text-start border-2 border-gray-300 mx-2 rounded-2xl bg-lime-100/50'>
                <div className="py-2 flex flex-col gap-0.5 px-2">
                    {
                    Info.map((item:Info_Data)=>{
                        return(
                            <div
                                key={item.title+item.to}
                                className="flex"
                            >
                                <p className="w-25">❤ {item.y}/{leading_digit(item.m)}/{leading_digit(item.d)}</p>
                                <p className="uppercase w-20 text-center">info</p>
                                <a
                                    href={item.to}
                                    className="text-blue-700 underline"
                                >
                                    {item.title}
                                </a>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </>
    )
}