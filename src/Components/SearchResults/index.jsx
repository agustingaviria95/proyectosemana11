import './searchresults.css';
import { Link } from 'react-router-dom';
import lens from '../../assets/img/lens.png';

function Search() {
    return (
    <section className="results-search">
            <div className="input-results">
                <input placeholder={localStorage.getItem('userSearch')} id="search-input" />
                <Link to ="/"><button type="button"><img src={lens} alt="Buscar" /></button></Link>
            </div>
    </section>
    );
}

export default Search;