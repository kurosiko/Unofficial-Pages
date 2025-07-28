import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/brand/test')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/brand/test"!</div>
}
