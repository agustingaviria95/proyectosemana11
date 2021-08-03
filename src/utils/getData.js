import { useEffect, useState } from "react";
export default function GetData(carta) {
    const API = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=';
    const URL_SEARCH = `${API}${carta}`;
    const [cartas, setCartas] =  useState([]);
    useEffect(() => {
        fetch(URL_SEARCH)
            .then((response) => response.json())
            .then((data) => {
                setCartas(data);
            });
    }, []);
    return cartas;
}