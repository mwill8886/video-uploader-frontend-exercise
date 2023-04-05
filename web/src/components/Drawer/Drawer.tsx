import classnames from 'classnames'
import { useAuth } from '@redwoodjs/auth'
import { routes, useLocation, navigate } from '@redwoodjs/router'

//
// Sub Component
//
const MobileNavItem = (props) => {
  const { onClick = null, active = false, children } = props

  return (
    <span className={`mr-4 last:mr-0 inline text-base ${active ? 'font-bold before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block text-white' : 'text-indigo-500'}`}>
      <button onClick={onClick} className="relative">{children}</button>
    </span>
  )
}

//
// Component
//
const Drawer = (props) => {
  const { open, toggle } = props

  const auth = useAuth()
  const location = useLocation()

  async function logout() {
    await auth.logOut()
    navigate(routes.login())
  }

  const handleNavClick = (path) => {
    navigate(path)
    toggle()
  }

  return (
    <div className={classnames("sm:hidden z-20 pt-4 pb-8 px-4 absolute top-10 bottom-0 w-64 left-0 bg-white border-r-[1px] border-gray-200 shadow-2xl flex flex-col transition-all text-center", { '-translate-x-64': !open })}>
      <div className='flex-1 flex flex-col mt-8'>
        <div className="mb-6">
          <MobileNavItem onClick={() => handleNavClick(routes.videos())} active={location.pathname === routes.videos()}>Videos</MobileNavItem>
        </div>
          <MobileNavItem onClick={() => handleNavClick(routes.newVideo())} active={location.pathname === routes.newVideo()}>Add Video</MobileNavItem>
      </div>
        <MobileNavItem onClick={logout}>Sign Out</MobileNavItem>
    </div>
  )
}

export default Drawer
