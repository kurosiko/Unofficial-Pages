import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/brand/whitepowder/products/lamunation/compaign',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/brand/whitepowder/products/lamunation/compaign"!</div>
}
