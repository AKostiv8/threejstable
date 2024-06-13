import { reactWidget } from 'reactR';
import React, { useState, useEffect } from 'react';
import '../styles/style.css';

function ThreeJSTable(props) {

  return (
    <div>
      <div id="container"></div>
      <div id="menu">
          <button id="table">TABLE</button>
          <button id="sphere">SPHERE</button>
          <button id="helix">HELIX</button>
          <button id="grid">GRID</button>
      </div>
    </div>
  );
}

export default ThreeJSTable;
