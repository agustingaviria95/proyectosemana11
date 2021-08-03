import React from 'react';
import "./Login.css";

function Login () {
    return (
        <div className="loginContainer">
            <h3>Inicia Sesión</h3>
            <form className="formulario">
                <p>
                    <label>Usuario</label>
                    <input type="text" name="nombre" required></input>
                </p>
                <p>
                    <label>Contraseña</label>
                    <input type="password" name="Contraseña" required></input>
                </p>
                <p className="full">
                    <button className="boton-enviar">Ingresar</button>
                </p>
            </form>
        </div>
    );
}

export default Login;