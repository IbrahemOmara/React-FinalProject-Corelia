import logstyle from './Login.module.css'
import { Link } from 'react-router-dom'

export default function Register() {
    const logo = require('../../../../shared/icons/logo-corelia 1.png');
    function checkSubmit(e) {
        e.preventDefault();
        window.location.pathname = '/Login';
    }
    return(
        <div className={logstyle['login-container']}>
            <form onSubmit={checkSubmit}>
                <div className={logstyle["img-box"]}><img src={logo} alt='logo'></img></div>
                <input type="email" placeholder="Email Address"></input>
                <input type='password' placeholder='Password'></input>
                <input type='password' placeholder='Confirm Password'></input>
                <button className={logstyle['btn-green']} type='submit'>Register</button>
                <p>Already have account ? <Link to='/Login' >Log in</Link></p>
            </form>
        </div>
    )
}