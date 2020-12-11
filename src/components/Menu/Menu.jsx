import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

const Menu = props =>{
    const [titulo, setTitulo] = useState();
    const [genero, setGenero] = useState('Acción');

    const handleChangeT = e => {
        setTitulo(e.target.value) 
    }

    const handleChangeG = e => {
        setGenero(e.target.value) 
    }

    let url_titulo = `/titulo/${titulo}`; 
    let url_genero = `/genero/${genero}`; 

    return <div className="main">
                <div className="menu">
                    <NavLink to="/popular">
                        <span className="populares">Películas Populares</span>
                    </NavLink>
                    <div>
                        <input type="text" id="titulo" placeholder="Indica el título..." value={titulo} onChange={handleChangeT} />
                        <NavLink to={url_titulo}>
                            <span className="titulo">Buscar</span>
                        </NavLink>
                    </div>
                    <div>
                        <select value={genero} onChange={handleChangeG}>
                            <option>Acción</option>
                            <option>Aventura</option>
                            <option>Animación</option>
                            <option>Comedia</option>
                            <option>Crimen</option>
                            <option>Documental</option>
                            <option>Drama</option>
                        </select>
                        <NavLink to={url_genero}>
                            <span className="genero">Buscar</span>
                        </NavLink>                      
                    </div>
                </div>
            </div>
}

export default Menu;