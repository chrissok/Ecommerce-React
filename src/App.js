import React from 'react';
import { NavBar } from './components/NavBar';
import { Slider } from './components/Slider';
import { Body } from './components/Body';
import ProductContextProvider from './contexts/ProductContext';
import { Foot } from './components/Foot';


function App() {
  return (
    <div className="App">
      <>
        <NavBar />
        <Slider />
        <ProductContextProvider>
          <Body />
        </ProductContextProvider>
        <Foot />
      </>
    </div>
  );
}

export default App;
