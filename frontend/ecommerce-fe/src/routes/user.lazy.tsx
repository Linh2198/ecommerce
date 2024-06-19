import { createLazyFileRoute } from '@tanstack/react-router'
import { User } from '../pages/user'

export const Route = createLazyFileRoute('/user')({
  component: User
})