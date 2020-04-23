import React, { useContext } from 'react';
import { Product } from './Product';
import { ProductContext } from '../contexts/ProductContext'
import { v1 as uuidv1 } from 'uuid';

export const Products = () => {

    const { filterProducts } = useContext(ProductContext);

    const descuento = (priceList, priceSell) => {

        let priceDesc = parseInt(((priceSell * 100) / priceList) - 100);
        return priceDesc;
    }

    return (
        <>
            {filterProducts.map((product, index) => {
                return (
                    <Product
                        key={uuidv1()}
                        productHref={product.href}
                        produtImg={`img/${product.image}`}
                        title={product.title}
                        id={`list${index}`}
                        listPrice={product.price.listPrice}
                        sellPrice={product.price.sellingPrice}
                        descuento={descuento(product.price.listPrice, product.price.sellingPrice)}
                        
                    />
                )
            })}
        </>)
}

