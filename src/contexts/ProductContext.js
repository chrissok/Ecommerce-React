import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);

    useEffect(() => {
        axios("http://remote.fizzmod.com/body.json")
            .then(response => setProducts(response.data.products))
            .catch(err => { console.log('Hubo un problema con la petición Fetch:' + err.message); })
    }, [])

    useEffect(() => {
        axios("http://remote.fizzmod.com/body.json")
            .then(response => setFilterProducts(response.data.products))
            .catch(err => { console.log('Hubo un problema con la petición Fetch:' + err.message); })
    }, [])

    const filter = (val, check) => {
        if (!check) {
            setFilterProducts(filterProducts.filter(product => {
                return product.attributes.find(att => att.value.includes(val)) !== undefined;
            }))

        } else {
            setFilterProducts([...filterProducts.filter(product => {
                return product.attributes.find(att => att.value.includes(val)) !== undefined
            }), ...products.filter(product => {
                return product.attributes.find(att => att.value.includes(val)) === undefined;
            })])

        };
    }
    return (
        <ProductContext.Provider value={{ products, filter, filterProducts }}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;