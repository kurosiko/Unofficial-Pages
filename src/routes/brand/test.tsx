import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/brand/test')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <p>This is a test room.</p>
  );
}