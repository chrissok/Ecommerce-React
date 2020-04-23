import React from 'react';
import { Icon } from './Icon';
import { v1 as uuidv1 } from 'uuid';

export const Filter = ({ title, values }) => {

    return (
        <div className='filterCont'>
            <p>{title}</p>
            {values.map((value) => {
                return (
                    <div key={uuidv1()} className='filter-children'>
                        <Icon key={uuidv1()} value={value} />
                        <label className='filter-label'> {value} </label>
                    </div>
                )
            })}

        </div>

    );
}

