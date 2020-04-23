import React from 'react';
import { Descuento } from './Descuento'
import { v1 as uuidv1 } from 'uuid';

export const Product = ({ productHref, produtImg, title, id, listPrice, sellPrice, descuento }) => {
    return (
        <a href={productHref} key={id}>
            <Descuento key={uuidv1()} desc={descuento} />
            <img src={produtImg} alt="producto"></img>
            <div className="product-data">
                <p className="product-name">{title}</p>
                <p className="price-list"
                    style={descuento === 0 ? { opacity: 0 } : { opacity: 1 }}>${listPrice}</p>
                <p className="price-disc">${sellPrice}</p>
            </div>
        </a>
    );
}

