import { useEffect, useState } from "react";
export default function GetData(carta) {
    const API = 'https://api.thedogapi.com/v1/breeds/search?q=';
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
