// React
import React, { Fragment, useState } from 'react';

// Librerias y/o importaciones
import { CSSTransition } from 'react-transition-group';

// Hojas de estilos
import 'materialize-css';
import './Login.css';

const Login = ({ setLogin }) => {

    const [ error, setError ] = useState(false);
    const [ formLog, setFormLog ] = useState(true);

    const form = (e) => {
        e.preventDefault();
        const password = document.querySelector('#password').value;
        const email = document.querySelector('#email').value;

        if ( password === '123' && email === 'sersan.christian@gmail.com' ) {
            setFormLog(false);
            setTimeout( () => {
                setLogin(true);  

            }, 500)

        } else {
            setError(true);

        }

    }

    return ( 
        <Fragment>
            <CSSTransition in={formLog} timeout={1000} classNames='my-login'>
                <div className="formulario">
                    <form onSubmit={form} className='login'>
                        <h1 className='text-center mb-3'>Entrar</h1>
                        {

                            error ? (
                                <div className="error">
                                    <p className="text-center">Login invalido</p>
                                </div>

                            ) : (
                                null

                            )

                        }
                        <div class="form-label-group">
                            <input type="email" id="email" class="form-control" placeholder="Email address" required autofocus />
                            <label for="email">Correo</label>
                        </div>

                        <div class="form-label-group">
                            <input type="password" id="password" class="form-control" placeholder="Password" required />
                            <label for="password">Contraseña</label>
                        </div>
                        <button class="btn form-control btn-primary btn-block text-uppercase" type="submit">Entrar</button>
                        <hr class="my-4" />
                    </form>
                </div>
            </CSSTransition>
        </Fragment>

    );
}
 
export default Login;