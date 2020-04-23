import React, { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';
import axios from 'axios';

export const NavBar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios("http://remote.fizzmod.com/menu.json")
            .then(response => setCategories(response.data.menu.categories))
            .catch(err => { console.log('Hubo un problema con la petición Fetch:' + err.message); })
    }, [])

    return (
        <div className="headContain">
            <div className="innerHead">
                <img src="img/logo_fizzmod.svg" alt="logo" id="logo" />
                <div className="subInner">
                    <ul className="topNav">
                        <li> <a href="#Ayuda">Ayuda</a></li>
                        <li> <a href="#MisPedidos">Mis Pedidos</a></li>
                        <li> <a href="#MiCuenta">Mi Cuenta</a></li>
                    </ul>
                    <div className="subInner2">
                        <i className="icon-icn_search"></i><input type="search" id="search" placeholder="Buscar un producto..." />
                        <button id="carrito"><i className="icon-icn_cart"></i> MI CARRITO </button>
                    </div>
                </div>
            </div>
            <div className="menu">
                <ul id="categories">
                    {categories.map(categorie => {
                        return <a key={uuidv1()} href={`${categorie.href}`}><li >{categorie.title}</li></a>
                    })}
                </ul>
            </div>
        </div>
    )
}
