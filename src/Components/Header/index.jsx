import { useEffect, useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './header.css';

export default function Header() {
    const[show,setShow] = useState(false);
    const history = useHistory();
    const name=localStorage.getItem('nombre')
    
    const handleLogout=() =>{
        localStorage.removeItem('nombre')
        history.push('/')
    }
    useEffect(window.onscroll = () => {
        setShow(window.pageYOffset === 0 ? false : true);
        return () => window.onscroll = null;
    })


    return (
        <header className={show ? "sticky" : "Header"}>
            <section className="Header-logo">
                <Link to ="/home"><img src={logo} alt="Logo" /></Link>
            </section>
            <section className="Header-login">
                <div>
                {name!==null ? <button onClick={handleLogout}>Cerrar sesión</button> :
                    <Link to="/registerpage">
                    <button>Registrarse</button>
                    </Link>
                }
                </div>
                <div>
                {name!==null ? <button>{name}</button> :
                    <Link to="/loginpage"><button>Iniciar sesión</button></Link>
                }
                </div>
            </section>
        </header>
    )
}