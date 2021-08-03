import './gridresults.css';
import { Link } from 'react-router-dom';
import GetData from '../../utils/getData';

function GridResults() {
    let userInput = localStorage.getItem('userSearch');
    let cartas = GetData(userInput);
    function GetCardId(id) {
                localStorage.setItem('cardId', id);
            }
    return cartas.length === 0 ? <h1>Loading...</h1> : (
            <div className="results-grid-container">
            { cartas.data.map( (carta) => (
            <Link to ="/carddetail/" onClick={() => GetCardId(carta.id)} ><div className="main-grid-cards">
                <h4>Nombre: {carta.name}</h4>
                <img src={carta.card_images[0].image_url} alt="" />
                <h5>Atributo: {carta.archetype || "Ninguno"}</h5>
            </div></Link>
            )
            )} 
        </div>
    );

    

}
export default GridResults;
