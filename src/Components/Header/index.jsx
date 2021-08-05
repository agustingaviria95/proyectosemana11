import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './header.css';

export default function Header() {
    const[show,setShow] = useState(false);
    useEffect (window.onscroll = () => {
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
                    <Link to="/registerpage">
                        <button>Registrarse</button>
                    </Link>
                </div>
                <div>
                    <Link to="/loginpage">
                        <button>Iniciar Sesion</button>
                    </Link>
                </div>
            </section>
        </header>
    )
}