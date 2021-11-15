import React from 'react';

import './Figures.css';
import Nav from '../Nav/Nav';
import BackButton from '../BackButton/BackButton';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function Figures() {
  return (<>
    < BackButton />

<h1 className="header"> Figures Page </h1>
    <div className="container">
      <p> charts and graphs will populate this page </p>
    </div>

    <Nav />
  </>
  );
}

export default Figures;
