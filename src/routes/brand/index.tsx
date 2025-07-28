import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/brand/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <h2>Brand Top</h2>
      <div className='flex flex-col *:hover:text-gray-500 *:flex-auto items-center *:py-5'>
        <Link to='/brand/sprite'>Sprite</Link>
        <Link to='/brand/feng'>Feng</Link>
        <div className='flex flex-row [&>a>img]:size-50 gap-5'>
          <a href="http://www.feng.jp/seiiki/index.html" target="blank">
            <img src="http://www.feng.jp/seiiki/images/seiiki_banner200x200_a.jpg" width="700" height="120" alt="feng9th『彼女のセイイキ』応援中です！" />
          </a>
          <a href="http://www.feng.jp/hoshi/chiisana/index.html" target="blank">
            <img src="http://www.feng.jp/hoshi/chiisana/banner/200_200shio1.jpg" alt="10月25日発売！『ちいさな彼女の小夜曲』応援中!!" />
          </a> 
        </div>
      </div>
    </>
  )
}
