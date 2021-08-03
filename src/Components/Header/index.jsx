import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './header.css';

export default function Header() {
    return (
        <header>
            <section className="Header-logo">
                <Link to ="/"><img src={logo} alt="Logo" /></Link>
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