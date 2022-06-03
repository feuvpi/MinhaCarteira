import React, { useState } from 'react'
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

const Navbar = () => {
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
              <h1 className='text-3xl font-bold text-zinc-200 mr-4 sm:text-4xl self-end'>
                MinhaCarteira
              </h1>
            </div>
          </Link>

          <ul className='hidden md:flex ml-6 font-medium'>
            <li className='ml-4 text-zinc-100 hover:text-zinc-300'>
              <LinkScroll to='home' smooth={true} duration={500}>
                HOME
              </LinkScroll>
            </li>
            <li className='ml-4 text-zinc-100 hover:text-zinc-300'>
              <LinkScroll to='about' smooth={true} offset={-100} duration={500}>
                SOBRE
              </LinkScroll>
            </li>
            <li className='ml-4 text-zinc-100 hover:text-zinc-300'>
              <LinkScroll
                to='support'
                smooth={true}
                offset={-50}
                duration={500}
              >
                SUPORTE
              </LinkScroll>
            </li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4 self-end'>
          <Link to='/login'>
            <button className='bg-zinc-100 text-indigo-700 hover:bg-zinc-300'>ENTRAR</button>
          </Link>
          <Link to='/register'>
            <button className="bg-zinc-100 text-indigo-700 hover:bg-zinc-300">CADASTRAR</button>
          </Link>
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
        <li className='border-b-2 border-zinc-300 w-full'>
          <LinkScroll
            onClick={handleClose}
            to='home'
            smooth={true}
            duration={500}
          >
            HOME
          </LinkScroll>
        </li>
        <li className='border-b-2 border-zinc-300 w-full'>
          <LinkScroll
            onClick={handleClose}
            to='about'
            smooth={true}
            offset={-100}
            duration={500}
          >
            SOBRE
          </LinkScroll>
        </li>
        <li className='border-b-2 border-zinc-300 w-full'>
          <LinkScroll
            onClick={handleClose}
            to='support'
            smooth={true}
            offset={-50}
            duration={500}
          >
            SUPORTE
          </LinkScroll>
        </li>
        <li className='border-b-2 border-zinc-300 w-full'>
          <LinkScroll
            onClick={handleClose}
            to='solutions'
            smooth={true}
            offset={-100}
            duration={500}
          >
            SOLUTIONS
          </LinkScroll>
        </li>
        <li className='border-b-2 border-zinc-300 w-full'>
          <LinkScroll
            onClick={handleClose}
            to='pricing'
            smooth={true}
            offset={-50}
            duration={500}
          >
            PRICING
          </LinkScroll>
        </li>
        <div className='flex flex-col'>
          <button>Entrar</button>
          <button>Cadastrar</button>
        </div>
      </ul>
    </div>
  )
}

export default Navbar
