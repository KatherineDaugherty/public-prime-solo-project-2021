import React from 'react';

import './Figures.css';
import Nav from '../Nav/Nav';

//Charts 
import LocationChart from '../LocationChart/LocationChart';

function Figures() {
  
  
  return (<>

    <div
    
      className="header">
      <h1> Figures Page </h1>
    </div>

    {/* < BackButton /> */}

    <div
      className="container">
        <LocationChart/>
      <p> charts and graphs will populate this page </p>
    </div>

    <Nav />

  </>
  );
}

export default Figures;
