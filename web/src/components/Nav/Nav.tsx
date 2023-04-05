import { useAuth } from '@redwoodjs/auth'
import { Link, routes, useLocation, navigate } from '@redwoodjs/router'

//
// Sub Component
//
function NavItem({ to = null, onClick = null, children }) {
  const location = useLocation()
  const active = location.pathname === to

  return (
    <span className={`mr-4 last:mr-0 inline text-base ${active ? 'font-bold before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block text-white' : 'text-indigo-500'}`}>
      {to ? (
        <Link to={to} className="relative">{children}</Link>
      ) : (
        <button onClick={onClick} className="relative">{children}</button>
      )}
    </span>
  )
}

//
// Component
//
const Nav = () => {
  const auth = useAuth()

  async function logout() {
    await auth.logOut()
    navigate(routes.login())
  }

  return (
    <div className='hidden flex-1 sm:flex items-center'>
      {/* vertical divider */}
      <div className='w-[1px] ml-4 mr-4 h-6 bg-purple-500'></div>
      {/* navigation items */}
      <div className='flex-1'>
        <NavItem to={routes.videos()}>Videos</NavItem>
        <NavItem to={routes.newVideo()}>Add Video</NavItem>
      </div>
      <NavItem onClick={logout}>Sign Out</NavItem>
    </div>
  )
}

export default Nav
