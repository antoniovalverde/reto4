import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

const Menu = props =>{
    return <div className="main">
                <div className="menu">
                    <NavLink to="/popular">
                        <span className="populares">Películas Populares</span>
                    </NavLink>
                </div>
                <div className="listado">
                    Listado
                </div>
            </div>
}

export default Menu;