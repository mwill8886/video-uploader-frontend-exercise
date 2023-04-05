import { useAuth } from '@redwoodjs/auth'

export function useCurrentUser() {
  const auth = useAuth()
  return auth.currentUser
}

export function useIsCurrentUser(user) {
  const currentUser = useCurrentUser()
  return currentUser.id === user.id
}
