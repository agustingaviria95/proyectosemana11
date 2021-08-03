import './search.css';
import { Link } from 'react-router-dom';
import logoSmall from '../../assets/img/logo.png';
import lens from '../../assets/img/lens.png';

function Search() {
    return (
    <section className="home-search">
        <div>
            <div className="logo-container">
                <img src={logoSmall} alt="Logo" />
            </div>
            <div className="input-container">
                <input placeholder="Busca cualquier carta" id="search-input" />
                <Link to ="/results"><button type="button" onClick={localStorageActivate}><img src={lens} alt="Buscar" /></button></Link>
            </div>
        </div>
    </section>
    );
}

  function localStorageActivate() {
    let userSearch = document.querySelector("#search-input").value;
        localStorage.setItem('userSearch', userSearch);
        console.log(userSearch);
    }

export default Search;