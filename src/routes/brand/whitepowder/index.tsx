import Banner from './-components/Banner'
import Footer from './-components/Footer'
import Header from './-components/Header'
import Info from './-components/Info'
import News from './-components/News'
import YT_Player from '@/components/YT_Player'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/brand/whitepowder/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [show_yt_player,setYTP] = useState(false);
  return (
    <>
      {
        show_yt_player && <YT_Player id='rDnKUUPl1Jo' close_func={setYTP}/>
      }
      <main className='w-screen relative *:w-full'>
        <div>
          <button
            type='button'
            className='w-full'
            onClick={()=>{setYTP((current:boolean)=>!current)}}
          >
            <img
              src="/resources/whitepowder/lamunation.webp"
              alt="LAMUNATION"
              className='w-full'
            />
          </button>
        </div>
        <Info/>
        <div className='bg-gray-50'>
          <News/>
          <Banner/>
        </div>
      </main>
      <Footer/>
    </>
  )
}
