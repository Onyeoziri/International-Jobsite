import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.scss'
import vLine from '../../assets/navBar/verticalLine.svg'
import hMenu from '../../assets/navBar/hamburgerMenu.svg'
import xMenu from '../../assets/navBar/closeMenu.svg'

function NavBar() {

  const [mobile, setMobile] = useState(false)
  const [isStudent, setIsStudent] = useState(true)

  const toggleMobile = () => {
    setMobile (!mobile)
  }

  const toggleStudentNav = () => {
    setIsStudent (!isStudent)
  }

  return (

    <div>
      <nav>
        <a href='/'> <h2 className='LogoText'>IBC</h2> </a>
        
        <ul className={(!mobile ? 'navDesktop' : 'navMobile')}>
          <ul className='navContent'>
            <li>
              <NavLink to='/home' onClick={mobile}>Overview</NavLink>
            </li>

            <li>
              <NavLink to='/Companies' onClick={mobile}>Companies</NavLink>
            </li>

            <li>
              <NavLink to='/CareerBuilder'onClick={mobile}>Career Builder</NavLink>
            </li>

            <li>
              <NavLink to='/Login' onClick={mobile}>Login</NavLink>
            </li>

            <li>
              <button onClick={mobile}>Sign Up</button>
            </li>
          </ul>

          <img src={vLine} alt='lineImage' className='vLine'/>
          
          <li>
          {isStudent ? (
              <Link onClick={() => { toggleStudentNav() }}>Employer</Link>
          ): (<Link onClick={() =>{toggleStudentNav()}}>Student</Link>)}
          </li>
          
        </ul>
      



      <div id='mobile'>
      <button className='mobileButton' onClick={toggleMobile}>
          {mobile ? <img className='icon' src={xMenu} alt='Close_Menu'/>
          : <img className='icon' src={hMenu} alt='Menu'/>}
      </button>
        
      </div>

        
      </nav>
    </div>
  )
}

export default NavBar
