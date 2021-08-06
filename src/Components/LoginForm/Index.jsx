import React, {useState, useEffect} from 'react';
import "./Login.css";
import { Link, useHistory } from 'react-router-dom';

function Login () {   
  const [form, setForm] = useState({});
  const history = useHistory();
  const handleChange = (evt) => {
    evt.preventDefault();
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value }); 
  };
  
  const handleSubmit =(evt) => {
      evt.preventDefault();
      const {nombre}=form
      localStorage.setItem('nombre',nombre)
      history.push('/home')
  }
//   useEffect(()=>{
//     console.log(form)
//   })

    return (
        <div className="loginContainer">
            <h3>Inicia Sesión</h3>
            <form className="formulario" onSubmit={handleSubmit} >
                <p>
                    <label>Usuario</label>
                    <input onChange={handleChange} type="text" name="nombre" required></input>
                </p>
                <p>
                    <label>Contraseña</label>
                    <input onChange={handleChange} type="password" name="contraseña" required></input>
                </p>
                <p className="full">
                    <button type="submit" className="boton-enviar">Ingresar</button>
                </p>
            </form>
        </div>
    );
}

export default Login;