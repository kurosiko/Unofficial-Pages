import Header from './whitepowder/-components/Header'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/brand/whitepowder')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}
