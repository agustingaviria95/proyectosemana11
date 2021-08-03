import { useEffect, useState } from 'react';
import './styles.css';


export default function CardDetail()  {

    const [card, setCard] = useState(null)
    let idCard = localStorage.getItem("cardId");
    useEffect(() => {
        localStorage.setItem('userSearch', '');
        fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id= ${idCard}`)
            .then((response) => response.json())
            .then((data) => {
                console.log("b", data.data[0])
                setCard(data.data[0]);
            })
    }, [])


    return(
        <>
        {card ? (
        <>
            <section className="detalles-carta">
                <div className="detalle-img">
                    <img src={card &&  card?.card_images[0]?.image_url} alt="" />
                </div>
                <div className="detalle-text">
                    <h4>Nombre: {card?.name}</h4>
                    <h4>Tipo: {card?.type}</h4>
                    <h4>Ataque: {card?.atk || 0}</h4>
                    <h4>Defensa: {card?.def || 0}</h4>
                    <h4>Nivel: {card?.level || 0}</h4>
                    <h4>Raza: {card?.race}</h4>
                    <h4>Atributo: {card?.attribute || "Ninguno"}</h4>
                    <h4>Arquetipo: {card?.archetype || "Ninguno"}</h4>
                </div>
            </section>
         </>
        ) : <h1>Loading...</h1>}
        </>
    )

}