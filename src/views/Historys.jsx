// File C:\Home\Developing\PF-PT19A-FGan-MyPools\front\navigate\src\views\Historys.jsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateHistory } from '../redux/historySlice';
import './Historys.css';

function Historys() {
  const dispatch = useDispatch();
  const historyData = useSelector(state => state.historys);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateHistory({ ...historyData, [name]: value }));
  };

  return (
    <div className="myForm">
      <h3>Tu estás en el formulario de Historia, ¡Disfrútalo!</h3>
      <br />
      <input type="text" className="input" name='historia' placeholder='Historia' value={historyData.historia} onChange={handleInputChange} />
      <input type="text" className="input" name='fecha' placeholder='Fecha' value={historyData.fecha} onChange={handleInputChange} />
      <br /><br />
    </div>
  );
}

export default Historys;
