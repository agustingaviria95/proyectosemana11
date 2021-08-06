import { useEffect, useState } from 'react';
import './styles.css';


export default function CardDetail()  {

    const [card, setCard] = useState(null)
    let idCard = localStorage.getItem("cardId");
    const fetchCard = () => {
        localStorage.setItem('userSearch', '');
        fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=${idCard}`)
            .then((response) => response.json())
            .then((data) => {
                setCard(data);
            });
    }
    useEffect(() => {
       fetchCard()
      
    }, [])
    console.log(card,"hola");

    return(
        <>
        {card !== null && card.length > 0 ? (
        <>
            <section className="detalles-carta">
                <div className="detalle-img">
                    <img src={card.length > 0 ? card[0].url: null } alt="" />
                </div>
                <div className="detalle-text">
                    {}
                    <h4>Nombre: {card[0].breeds[0].name}</h4>
                    <h4>Temperament: {card[0].breeds[0].temperament}</h4>
                    <h4>Life: {card[0].breeds[0].life_span}</h4>
                    
                </div>
            </section>
         </>
        ) : <h1>Not found</h1>}
        </>
    )

}