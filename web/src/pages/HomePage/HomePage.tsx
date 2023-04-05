import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  const auth = useAuth()
  if (auth.loading) {
    return ''
  }

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      {auth.isAuthenticated ? (
        <Link to={routes.videos()}>Videos!</Link>
      ) : (
        <Link to={routes.login()}>Log in!</Link>
      )}
    </>
  )
}

export default HomePage
