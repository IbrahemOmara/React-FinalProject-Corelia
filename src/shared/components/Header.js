import './header.css'
import { NavLink } from 'react-router-dom'

export default function Nav(){
    return(
        <header>
            <div className='top-header'>
                <div className='top-L'>
                    <img src={require('../icons/logo-corelia 1.png')} alt="logo"></img>
                    <i className='fa-solid fa-bars' style={{color: '#ffffff'}}></i>
                </div>
                <div className='top-R'>
                    <input className='search' type='text' placeholder='search'></input>
                    <i className="fa-regular fa-envelope"></i>
                    <i className="fa-regular fa-bell"></i>
                    <i className="fa-regular fa-user"></i>
                </div>
            </div>

            <div className='bottom-header'>
                <div className='tabs'>
                    <NavLink activeclassname='active' to='/' >Overviews</NavLink>
                    <NavLink activeclassname='active' to='/Alerts' >Alerts</NavLink>
                    <NavLink activeclassname='active' to='/Analysis' >Analysis</NavLink>
                    <NavLink activeclassname='active' to='/Reports' >Reports</NavLink>
                    <NavLink activeclassname='active' to='/EstateIV' >Estate</NavLink>
                    <NavLink activeclassname='active' to='/Configuration' >Configuration</NavLink>
                </div>
                <button>What if ?</button>
            </div>
        </header>
    )
}