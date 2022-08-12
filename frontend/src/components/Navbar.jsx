import React, { useState, useContext } from 'react'
import { MenuIcon, XIcon, ChartBarIcon } from '@heroicons/react/outline'
import {
  Link as LinkScroll,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from 'react-scroll'
import { Link } from 'react-router-dom'
import { AuthContext } from "../contexts/auth";



const Navbar = () => {
  const { logout } = useContext(AuthContext)
  const [nav, setNav] = useState(false) //AppBar state
  const handleClick = () => setNav(!nav)

  const handleClose = () => setNav(!nav)

  return (
    <div className='w-screen h-16 z-100 bg-indigo-600 border-b border-indigo-300 fixed drop-shadow-xs'>
      <div className='px-4 flex justify-between items-center content-end w-full h-full'>
        <div className='flex items-center'>
          <Link to='/'>
            <div className='flex self-end'>
              <ChartBarIcon className='w-14 mr-2 text-zinc-200' />
            </div>
          </Link>
        </div>
        <div className='hidden md:flex pr-4 self-end'>
          <Link to='/login'>
            <button className='bg-zinc-100 text-indigo-700 hover:bg-zinc-300 w-18'>PERFIL</button>
          </Link>
            <button onClick={logout} className="bg-zinc-100 text-indigo-700 hover:bg-zinc-300 w-18">SAIR</button>
        </div>
        {/* Collapsable Menu */}
        <div className='md:hidden mr-4' onClick={handleClick}>
          {!nav ? <MenuIcon className='w-8' /> : <XIcon className='w-8' />}
        </div>
      </div>

      <ul
        className={
          !nav
            ? 'hidden'
            : 'md:hidden flex flex-col absolute bg-zinc-200 w-full px-8 justify-items-end'
        }
      >
        <div className='flex flex-col'>
          <button>PERFIL</button>
          <button onClick={logout}>SAIR</button>
        </div>
      </ul>
    </div>
  )
}

export default Navbar
