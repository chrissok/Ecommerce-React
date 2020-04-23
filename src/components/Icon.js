import React, { useState, useContext, useEffect } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { v1 as uuidv1 } from 'uuid';

export const Icon = ({ value }) => {

    let [check, setCheck] = useState([]);

    useEffect(() => {
        setCheck(false)
    }, [])

    const { filter } = useContext(ProductContext);

    const handleCheck = (value) => {

        setCheck(!check);
        filter(value, check);

    };
    return (
        <div key={uuidv1()}>
            <input type="checkbox" onChange={() => handleCheck(value)} />

            <span className='icon-icn_checkbox_off'
                style={!check ? { display: 'block' } : { display: 'none' }}
            ></span>

            <span className='icon-icn_checkbox_on'
                style={!check ? { display: 'none' } : { display: 'block' }}
            ></span>

        </div>
    );
}

