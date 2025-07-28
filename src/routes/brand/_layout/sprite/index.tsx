import Footer from '@/components/sub/sprite/Footer'
import Header from '@/components/sub/sprite/Header'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/brand/_layout/sprite/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Header/>
      <div className='w-screen h-screen bg-red-300'>wip</div>
      <Footer/>
    </>
  )
}
