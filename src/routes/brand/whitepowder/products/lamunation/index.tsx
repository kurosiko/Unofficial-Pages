import { createFileRoute } from '@tanstack/react-router'
import News from './-components/News'

export const Route = createFileRoute('/brand/whitepowder/products/lamunation/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div>
        <img src='/resources/whitepowder/products/lamunation/bg_index.webp' alt='bg-lamune' className='w-full object-cover'/>
        <News/>
      </div>
      
    </>
    
  )
}
