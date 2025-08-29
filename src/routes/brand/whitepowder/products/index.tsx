import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/brand/whitepowder/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className='w-screen p-5'>
        <div
        className='
        flex *:flex-auto *:w-full flex-row *:object-cover gap-5
        *:hover:brightness-50 [&>div>a>*]:hover:scale-105 **:transition-all **:ease-in-out *:overflow-hidden *:content-center'>
            <div>
                <Link to='/brand/whitepowder/products/lamunation'><img src='/resources/whitepowder/products/lamunation/bg_index.webp'/></Link>
            </div>
            <div className='*:justify-center'>
                <Link to='/brand/whitepowder/products/kirakiramonsters'><img src='/resources/whitepowder/krmn_logo.webp'/></Link>
            </div>
        </div>
    </main>
  )
}
