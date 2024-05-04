// File C:\Home\Developing\PF-PT19A-FGan-MyPools\front\navigate\src\views\Navigator.jxs

import React from 'react';
import { Link } from 'react-router-dom';
import './Navigator.css';

function Navigator() {
  return (
    <>
      <div className="btnshome">
        <Link to="/" className='navLinks'>Home</Link>
        <Link to="/products" className='navLinks'>Products</Link>
        <Link to="/historys" className='navLinks'>Historys</Link>
        <br /><br />
      </div>
    </>
  );
}

export default Navigator;
