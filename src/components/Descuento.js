import React from 'react';

export const Descuento = ({ desc }) => {
    return (
        <div className='discount' style={desc === 0 ? { display: 'none' } : { display: 'block' }}>
            <p>{desc}%</p>
        </div>
    );
}

