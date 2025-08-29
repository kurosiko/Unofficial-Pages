import SnapList from '@/components/SnapList'
import { createFileRoute } from '@tanstack/react-router'



export const Route = createFileRoute('/test/')({
  component: RouteComponent,
})

function RouteComponent(){
  return(
    <>
      <div className='w-100 h-100'>
        <SnapList props={{
          scroll: 'y',
          snap: 'mandatory',
          overflow: 'scroll'
        }}>
        <a href="https://www.dlsite.com/pro/work/=/product_id/VJ010196.html">
            <img src="/resources/whitepowder/trial_published.webp" alt="trial"/>
        </a>
        <a href="https://www.amazon.co.jp/-/en/LAMUNATION-%E3%80%90%E5%88%9D%E5%9B%9E%E7%89%B9%E5%85%B8-VOCAL-COLLECTION-%E4%BB%98%E3%81%8D%E3%80%91/dp/B01BBYJCZC">
            <img src="/resources/whitepowder/amazon.webp" alt="amazon"/>
        </a>
        <img src="/resources/whitepowder/lamunation_slide.webp" alt="lamunation"/>
        <img src="/resources/whitepowder/header_available.webp" alt="header_available"/>
      </SnapList>
      </div>
    </>
  )
}
