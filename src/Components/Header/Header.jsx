// React
import React, { Fragment, useState } from 'react';

// Librerias y/o importaciones
import { CSSTransition } from 'react-transition-group';

// Hojas de estilos
import 'materialize-css';
import './Header.css';

const Header = ({header}) => {

    return ( 
        <Fragment>
            <CSSTransition in={header} timeout={500} classNames='headers'>
                <div className="header">
                    <i className="fas fa-home"></i>
                    <img src="" alt="Logo"/>
                    <i className="fas fa-bell"></i>
                </div>
            </CSSTransition>
        </Fragment>

    );
}
 
export default Header;