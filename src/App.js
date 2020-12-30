// Importación de React
import React, { Fragment, useState } from 'react';

// Componentes
import Header from "./Components/Header/Header";
import Login from './Components/Login/Login';
import Home from './Components/Home/Home'; 

// Librerias y/o importaciones
import {  } from 'react-materialize';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';


// Hojas de estilos
import 'materialize-css';
import './App.css';

// Imagenes ...
import background from './Assets/paint-2710975_1920.jpg';

const App = () => {

  const [ login, setLogin ] = useState(false)
  const [ header, setHeader ] = useState(false);
  const [ home, setHome ] = useState(false);

  return ( 

    <Fragment>
      {

        login ? (
          <div className="background" style={{backgroundImage: `url(${background})`}}>
            <Header 
              header={header}
            />
            <Home
              home={home}
            />
          </div>

        ) : (
          <div className="background" style={{backgroundImage: `url(${background})`}}>
            <Login
              setLogin={setLogin}
              setHeader={setHeader}
              setHome={setHome}
            />
          </div>

        )

      }
    </Fragment>

    

  );
}
 
export default App;
