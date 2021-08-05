import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './cards.css';

const CardDetail = () => {
    const [cards, setCards] = useState(null)
    const [numbers, setNumbers] = useState(0)

    const fetchCars = () => {
        fetch('https://api.thedogapi.com/v1/breeds')
            .then((response) => response.json())
            .then((data) => {
                const random = Math.floor(Math.random() * (data.length - 0)) + 0
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
            <h2>Caninos por conocer</h2>
            <div className="cardsContainer">
                {
                    cards.slice(numbers, numbers+6).map((item) => {
                        return (    
                        <Link to ="/carddetail"> 
                            <article className="singleCard" onClick={() => localStorage.setItem('cardId', item.id) } >
                                <div className="imgContainer">
                                    <img width={220} height={280} src={item.image.url} alt="" />
                                </div>
                                <div className="textContainer">
                                    <h4>{item.name} ({item.breed_group})</h4>
                                    <h6>life: {item.life_span || 'unknown'}</h6>
                                    <h6>temperament: {item.temperament}</h6>
                                   
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
