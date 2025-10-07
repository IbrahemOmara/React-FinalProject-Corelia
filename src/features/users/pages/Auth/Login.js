import { Link } from 'react-router-dom'
import logstyle from './Login.module.css'

export default function Login() {
    const logo = require('../../../../shared/icons/logo-corelia 1.png');
    function checkSubmit(e) {
        e.preventDefault();
        window.location.pathname = '/';
    }
    return(
        <div className={logstyle['login-container']}>
            <form onSubmit={(e) => checkSubmit(e)}>
                <div className={logstyle["img-box"]}><img src={logo} alt='logo'></img></div>
                <input type="email" placeholder="Email Address"></input>
                <input type='password' placeholder='Password'></input>
                <button className='btn-green' type='submit'>Log in</button>
                <p>Don't have any account ? <Link to='/Register'>Register</Link></p>
            </form>
        </div>
    )
}