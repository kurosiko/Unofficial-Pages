import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute(
  '/brand/whitepowder/products/lamunation/stages',
)({
  component: RouteComponent,
})

function RouteComponent() {

  const src_list = [
    '/resources/whitepowder/products/lamunation/stages/bg_stage_downtown_of_saintaria.webp',
    '/resources/whitepowder/products/lamunation/stages/bg_stage_diner.webp',
    '/resources/whitepowder/products/lamunation/stages/bg_stage_bridge_of_hope.webp',
    '/resources/whitepowder/products/lamunation/stages/bg_stage_downtown_of_saintaria.webp',
    '/resources/whitepowder/products/lamunation/stages/bg_stage_seaside_park.webp',
    '/resources/whitepowder/products/lamunation/stages/bg_stage_mercedes_of_the_seas.webp',
    '/resources/whitepowder/products/lamunation/stages/bg_stage_academy_of_the_hope_island.webp',
    '/resources/whitepowder/products/lamunation/stages/bg_stage_aqua_eden.webp',
    '/resources/whitepowder/products/lamunation/stages/bg_stage_route69.webp',
    '/resources/whitepowder/products/lamunation/stages/bg_stage_disco_beach.webp',
    '/resources/whitepowder/products/lamunation/stages/bg_stage_lunas_house.webp',
    '/resources/whitepowder/products/lamunation/stages/bg_stage_aoumi_lamune_factroy.webp',
    '/resources/whitepowder/products/lamunation/stages/bg_stage_lunas_jacuzzi.webp'

  ]

  const slider = useRef<HTMLDivElement>(null)
  const [slide_idx,setIdx] = useState<number>(0);
  useEffect(()=>{
    if(!slider.current) return;
    const limit_based_on_idx = slider.current.children.length - 1;
    if (slide_idx > limit_based_on_idx){
      return setIdx(0)
    }
    if (slide_idx < 0){
      return setIdx(limit_based_on_idx)
    }
    slider.current.children[slide_idx].scrollIntoView(
      {
        behavior:'smooth',
        block:'start',
        inline:'start'
      }
    )   
  },[slide_idx])
  return (
    <>
      <div className='relative flex flex-col inset-0 *:flex-auto overflow-y-scroll *:snap-start snap-y snap-mandatory object-cover h-screen' ref={slider}>
          {
            src_list.map((src:string)=><img src={src} alt='bg'/>)
          }
          
      </div>
      <button
        type='button'
        onClick={()=>setIdx(slide_idx+1)}
        className='absolute top-1/2 right-10 z-10'
      >Next
      </button>
      <button
        type='button'
        onClick={()=>setIdx(slide_idx-1)}
        className='absolute top-1/2 left-10 z-10'
      >Prev
      </button>
    </>
  )
}
