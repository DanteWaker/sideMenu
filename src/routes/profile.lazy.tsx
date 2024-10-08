import { Profile } from '@/app/Profile'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/profile')({
  component: Profile,
})