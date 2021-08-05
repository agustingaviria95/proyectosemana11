import "./footer.css";
import img1 from "../../assets/img/logo.png";
import img2 from "../../assets/img/socialmedialogo.png";
import { Link } from 'react-router-dom';

export default function Footer(){
    return (
        <footer className="footer">
        <div>
            <h1>Servicios</h1>
            <br />
            <ul>
                <li>Busqueda de Perros</li>
                <li>Informacion de Razas</li>
            </ul>
        </div>
        <div>
            <h1>Te ayudamos</h1>
            <br />
            <h4>Busqueda por: </h4>
            <ul>
                <li>Grupo de Raza</li>
                <li>Vida Promedio</li>
                <li>Temperamento</li>
            </ul>
        </div>
        <div className="logodog">
            <img src={img1} alt="logo" />
        </div>
        <div className="socialmedia">
            <h1>Social Media</h1>
            <img src={img2} alt="socialmedia" />
        </div>
        <div className="contacto">
            <Link to ="/contactpage">Contactenos</Link>
            <Link to ="/aboutus">Sobre Nosotros</Link>
        </div>
     </footer>
    )
}