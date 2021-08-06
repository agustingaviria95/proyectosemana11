import './searchresults.css';
import { Link } from 'react-router-dom';
import lens from '../../assets/img/lens.png';

function Search() {
    return (
    <section className="results-search">
            <div className="input-results">
                <input placeholder={localStorage.getItem('userSearch')} id="search-input" />
                <Link to ="/results"><button type="button" onClick={localStorageActivate}><img src={lens} alt="Buscar" /></button></Link>
            </div>
    </section>
    );
}
function localStorageActivate() {
    let userSearch = document.querySelector("#search-input").value;
        localStorage.setItem('userSearch', userSearch);
        
    }

export default Search;