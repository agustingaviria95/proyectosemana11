import { Link } from 'react-router-dom';

export default function GridItem (carta) {
    return(
        <Link to ="/carddetail/"><div className="main-grid-cards">
                <h4>Nombre: {carta.name}</h4>
                <img src={carta.card_images[0].image_url} alt="" />
                <h5>Atributo: {carta.archetype || "Ninguno"}</h5>
                <h2>id: {carta.id}</h2>
            </div></Link>
    )
}