// File C:\Home\Developing\PF-PT19A-FGan-MyPools\front\navigate\src\App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Navigator from './views/Navigator';
import Products from './views/Products';
import Historys from './views/Historys';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from './redux/productSlice';
import { updateHistory } from './redux/historySlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const historys = useSelector(state => state.historys);

  const showInConsole = async (pmsg, updatedProducts, updatedHistorys) => {
    alert(`Por Show In Console Valores ${pmsg} del refresh
      Products ->Prod:> ${updatedProducts.producto}  ---  Ubic:> ${updatedProducts.ubicacion} 
      Historys ->Hist:> ${updatedHistorys.historia}  ---  Fech:> ${updatedHistorys.fecha}  
    `);
  };

  const testDataChange = () => {
    showInConsole('antes del cambio', products, historys);
    const updatedProducts = { producto: 'NV Prod A', ubicacion: 'NV Prod B' };
    const updatedHistorys = { historia: 'NV Hist A', fecha: 'NV Hist B' };
    dispatch(updateProduct(updatedProducts));
    dispatch(updateHistory(updatedHistorys));
    showInConsole('después del cambio', updatedProducts, updatedHistorys);
  };

  return (
    <Router>
      <div>
        <Navigator />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/historys" element={<Historys />} /> 
        </Routes>
        <button className='bpobtn' onClick={() => showInConsole('Solo muestra', products, historys)}>Mostrar Estado ( Valor Actual )</button>
        <button className='bpobtn' onClick={testDataChange}>( Cambio Previo Desde app.jsx ) y Mostrar </button>
      </div>
    </Router>
  );
}

export default App;
