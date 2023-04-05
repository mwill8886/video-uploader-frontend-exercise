import { useState } from 'react'
import Drawer from 'src/components/Drawer'
import Nav from 'src/components/Nav'
import Logo from 'src/assets/logo.svg'
import MenuIcon from 'src/assets/menu.svg'

//
// Component
//
const Header = () => {
  const [ open, setOpen ] = useState(false)

  const toggleDrawer = () => {
    setOpen(prev => !prev)
  }

  return (
    <header className='h-10 px-4 shadow flex items-center'>
      <button className="sm:hidden mr-4" onClick={toggleDrawer}>
        <MenuIcon />
      </button>
      <Drawer open={open} toggle={toggleDrawer}/>
      <div className='flex items-center'>
        <Logo className='fill-indigo-500 h-10'/>
        <div className='ml-1 font-extrabold text-indigo-500'>MyTube</div>
      </div>
      <Nav />
    </header>
  )
}

export default Header
