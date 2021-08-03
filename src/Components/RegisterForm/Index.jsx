import React from 'react';
import "./Register.css";

function Register () {
    return (
        <div className="registerContainer">
            <h3>Regístrate</h3>
            <form className="formulario">
                <p>
                    <label>Nombre</label>
                    <input type="text" name="nombre" required></input>
                </p>
                <p>
                    <label>Usuario</label>
                    <input type="text" name="Usuario"></input>
                </p>
                <p>
                    <label>Correo</label>
                    <input type="email" name="email" required></input>
                </p>
                <p>
                    <label>Crear contraseña</label>
                    <input type="password" name="Contraseña" required></input>
                </p>
                <p className="full">
                    <button className="boton-enviar">Enviar</button>
                </p>
            </form>
        </div>
    );
}

export default Register;