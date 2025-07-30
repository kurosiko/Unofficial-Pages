import { createFileRoute, Outlet } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/brand/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  const [showWarn,setWarn] = useState(true)
  return (
    <>
      {
        showWarn && (
          <div className='flex md:flex-col lg:flex-row gap-2 items-center justify-center p-8'>
            <p className='flex-4 text-2xl'>These pages are fan-made,<br className='lg:hidden'/> not official.<br className='lg:hidden'/>Just for joy.</p>
            <button
              type="button"
              className='flex-1 text-lg border-2 border-gray-200 hover:border-gray-500 transition-colors ease-in-out duration-500 rounded-md h-full'
              onClick={()=>setWarn(false)}>
                Hide this message
            </button>
          </div>
        )
      }
      <Outlet/>
      
    </>
  )
}
