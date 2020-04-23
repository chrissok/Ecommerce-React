import React from 'react';

export const Foot = () => {
    return (
        <footer>
            <div className="foot-contain">
                <div className="foot-child">
                    <h1 className="foot-title">PRODUCTOS</h1>
                    <p>Compre Junto</p>
                    <p>Kit Look</p>
                    <p>Completá tu Compra</p>
                    <p>Shop the Look</p>
                    <p>Sin Stock</p>

                </div>
                <div className="foot-child">
                    <h1 className="foot-title">MI CUENTA</h1>
                    <p>Mis Pedidos</p>
                    <p>Wishlist</p>
                    <p>Productos Frecuentes</p>
                    <p>Mis listas</p>
                    <p>Mis recetas</p>

                </div>
                <div className="foot-child">
                    <h1 className="foot-title">CONTACTANOS</h1>
                    <p>Nuestras Sucursales</p>
                    <p>Horarios y Telefonos</p>

                </div>
                <div className="foot-childCol">
                    <i className="fa fa-facebook fa-2x"></i>
                    <i className="fa fa-twitter fa-2x"></i>
                    <i className="fa fa-youtube fa-2x"></i>
                </div>
            </div>
        </footer>
    );
}

