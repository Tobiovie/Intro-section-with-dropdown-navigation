import { useState } from 'react'
import menu from '../images/icon-menu.svg'
import Company from './Company'
import Feature from './Feature'
import close from '../images/icon-close-menu.svg'

const Nav=()=>{
    const [navBoxShow,setNavShow]=useState(false)
    return (
        <div className='nav'>
            <div className='span-text'>
                <div>Snap</div>
                <img onClick={()=>setNavShow(true)} className='menuicon' alt='ser' src={menu}/>
            </div>
            <div className={`nav-box ${navBoxShow?'disflex':'disnone'}`}>
                <div className='cancelbox'>
                    <img onClick={()=>setNavShow(false)} src={close} alt='cancel' />
                </div>
                <div className='navigation'>   
                    <Feature></Feature>
                    <Company></Company>
                    <div className='shift'>Careers</div>
                    <div className='shift'>About</div>
                </div>
                <div className='auth'>
                    <div className='login'>Login</div>
                    <div className='register'>Register</div>
                </div>
            </div>
        </div>
    )
}
export default Nav