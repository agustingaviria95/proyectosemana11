import './gridresults.css';
import { Link } from 'react-router-dom';
import GetData from '../../utils/getData';

function GridResults() {
    let userInput = localStorage.getItem('userSearch');
    let cartas = GetData(userInput);
    console.log(cartas);
    function GetCardId(id) {
                localStorage.setItem('cardId', id);
            }
    return cartas.length === 0 ? <h1>Loading...</h1> : (
            <div className="results-grid-container">
            { cartas.map( (item) => (
            <Link to ={`/carddetail/${item.name}`} onClick={() => GetCardId(item.id)} ><div className="main-grid-cards">
                <h4>{item.name} ({item.breed_group})</h4>
                <h6>life: {item.life_span || 'unknown'}</h6>
                <h6>temperament: {item.temperament}</h6>
            </div></Link>
            )
            )} 
        </div>
    );

    

}
export default GridResults;
