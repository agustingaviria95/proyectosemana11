import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './cards.css';

const CardDetail = () => {
    const [cards, setCards] = useState(null)
    const [numbers, setNumbers] = useState(0)

    const fetchCars = () => {
        fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
            .then((response) => response.json())
            .then((data) => {
                const random = Math.floor(Math.random() * (data.data.length - 0)) + 0
                setNumbers(random - 6);

                setCards(data);
            });
    }

    useEffect(() => {
        fetchCars()
    }, []);

    return(
        <>
        {cards ? (
        <div className="cardSection">
            <h2>Recomendadas del Mes</h2>
            <div className="cardsContainer">
                {
                    cards?.data.slice(numbers, numbers+6).map((item) => {
                        return (    
                        <Link to ="/carddetail"> 
                            <article className="singleCard" onClick={() => localStorage.setItem('cardId', item.id) } >
                                <div className="imgContainer">
                                    <img src={item.card_images[0].image_url} alt="" />
                                </div>
                                <div className="textContainer">
                                    <h4>{item.name} ({item.type})</h4>
                                    <h6>Ataque: {item.atk || '0'} <br /> Defensa: {item.def || '0'}</h6>
                                    <h6>Arquetipo: {item.archetype || 'No presenta'} </h6>
                                </div>
                            </article>
                        </Link>
                        )
                    })
                }
            </div>
        </div>
        ) : <h1 className="loadingLayout">Loading...</h1> }
        </>
    )
}

export default CardDetail
