import style from './header.module.css'

export default function Nav(){
    return(
        <header>
            <div className={style["top-header"]} style={{color:'#646464'}}>
                <div className={style["top-L"]}>
                    <img src={require('../icons/logo-corelia 1.png')} alt="logo"></img>
                    <i class={style["fa-solid fa-bars"]} style={{color: '#ffffff'}}></i>
                </div>
                <div className={style["top-R"]}>
                    <input className={style.search} type='text' placeholder='search'></input>
                    <i className="fa-regular fa-envelope"></i>
                    <i className="fa-regular fa-bell"></i>
                    <i className="fa-regular fa-user"></i>
                </div>
            </div>

            <div className={style["bottom-header"]}>
                <div className={style.tabs}>
                    <a href='/'>Overviews</a>
                    <a href='/'>Alerts</a>
                    <a href='/'>Analysis</a>
                    <a href='/'>Reports</a>
                    <a href='/'>Estate</a>
                    <a href='/' className={style.active}>Configuration</a>
                    
                </div>
                <button>What if ?</button>
            </div>
        </header>
    )
}