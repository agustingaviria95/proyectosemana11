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
                <li>Busqueda de cartas</li>
                <li>Informacion detallada</li>
                <li>Contenido de valor</li>
            </ul>
        </div>
        <div>
            <h1>Te ayudamos</h1>
            <br />
            <h4>Busqueda por: </h4>
            <ul>
                <li>Nombre</li>
                <li>Tipo</li>
                <li>Efecto</li>
            </ul>
        </div>
        <div className="logoyugi">
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