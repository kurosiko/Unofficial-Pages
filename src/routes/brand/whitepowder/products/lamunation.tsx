import { createFileRoute, Outlet } from '@tanstack/react-router'
import Header from './lamunation/-components/Header'
import Footer from './lamunation/-components/Footer'
import Options from '@/components/Trace'

export const Route = createFileRoute('/brand/whitepowder/products/lamunation')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
        <div className='w-screen relative'>
          <Header/>
          <Outlet/>
          <Options/>
        </div>
        <Footer/>
    </>
  )
}
