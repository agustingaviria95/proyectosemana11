import React from 'react';
import "./Contact.css";

function Contact () {
    return (
        <div className="contactContainer">
            <h3>Contáctanos</h3>
            <form className="formulario">
                <p>
                    <label>Nombre</label>
                    <input type="text" name="nombre" required></input>
                </p>
                <p>
                    <label>Correo</label>
                    <input type="email" name="Correo" required></input>
                </p>
                <p>
                    <label>Asunto</label>
                    <input type="text" name="asunto" required></input>
                </p>
                <p className="full">
                    <label>Mensaje</label>
                    <textarea name="comentarios" rows="10" cols="40" required ></textarea>
                </p>
                <p className="full">
                    <button className="boton-enviar">Enviar</button>
                </p>
            </form>
        </div>
    );
}

export default Contact;