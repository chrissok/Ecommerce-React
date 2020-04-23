import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Products } from './Products';
import { Filter } from './Filter';
import { v1 as uuidv1 } from 'uuid';

export const Body = () => {

    const [filters, setFilters] = useState([])

    useEffect(() => {
        axios("http://remote.fizzmod.com/body.json")
            .then(response => setFilters(response.data.filters))
            .catch(err => { console.log('Hubo un problema con la petición Fetch:' + err.message); })
    }, []);

    return (
        <>
            <h1 className="productos-title"><span>Productos</span></h1>
            <div className="productos">
                <div id="filter">
                    {filters.map(filter => {
                        return <Filter key={uuidv1()} title={filter.title} values={filter.values} />
                    })}
                </div>
                <div id="product-grid">
                    <Products />
                </div>
            </div>
        </>
    );
}
