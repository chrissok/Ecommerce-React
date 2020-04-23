import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Slider = () => {

    const [slides, setSlides] = useState([]);

    useEffect(() => {
        axios('http://remote.fizzmod.com/body.json')
            .then(response => setSlides(response.data.slides))
            .catch(err => { console.log('Hubo un problema con la petición Fetch:' + err.message); })
    }, [])

    const [count, setCount] = useState(0);

    const slideSrc = [];
    const slideRef = [];

    let size = slideSrc.length - 1;

    const prevBut = (e) => {

        if (count === 0) {
            setCount(size);
        } else {
            setCount(count - 1);
        }
    };
    const nextBut = (e) => {

        setCount(count + 1);
        if (count > size) {
            setCount(0);
        }
    };

    return (
        <div className="slider">
            <button className="icon-icn_chevron_left" id="prevBut" onClick={prevBut}></button>
            <div id="slides">
                {slides.forEach((obj, i) => {
                    slideRef[i] = obj.href;
                    slideSrc[i] = `img/${obj.imgName}`;
                    size = slideSrc.length - 2;
                })}
                <a href={slideRef[count]}>
                    <img src={slideSrc[count]} alt={count} ></img>
                </a>
            </div>
            <button className="icon-icn_chevron_right" id="nextBut" onClick={nextBut}></button>
        </div>
    );
}

