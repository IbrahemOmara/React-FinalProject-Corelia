import header from '../components/header.css'

export default function Nav(){
    return(
        <header>
            <div className="top-header" style={{color:'#646464'}}>
                <div className="top-L">
                    <img src={require('../icons/logo-corelia 1.png')} alt="logo"></img>
                    <i class="fa-solid fa-bars" style={{color: '#ffffff'}}></i>
                </div>
                <div className="top-R">
                    <input type='text' placeholder='search'></input>
                    <i className="fa-regular fa-envelope"></i>
                    <i className="fa-regular fa-bell"></i>
                    <i className="fa-regular fa-user"></i>
                </div>
            </div>

            <div className="bottom-header">
                <div className="tabs">
                    <a href='/'>Overviews</a>
                    <a href='/'>Alerts</a>
                    <a href='/'>Analysis</a>
                    <a href='/'>Reports</a>
                    <a href='/'>Estate</a>
                    <a href='/' className="active">Configuration</a>
                    
                </div>
                <button>What if ?</button>
            </div>
        </header>
    )
}