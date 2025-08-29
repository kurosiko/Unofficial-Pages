import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/brand/whitepowder/products/lamunation/special',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/brand/whitepowder/products/lamunation/special"!</div>
}
