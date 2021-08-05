import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';

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
                    <Link to="/home">
                        <button className="boton-enviar">Ingresar</button>
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default Login;