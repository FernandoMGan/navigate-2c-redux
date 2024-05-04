// File C:\Home\Developing\PF-PT19A-FGan-MyPools\front\navigate\src\views\Products.jsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProduct } from '../redux/productSlice';
import './Products.css';

function Products() {
  const dispatch = useDispatch();
  const productData = useSelector(state => state.products);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateProduct({ ...productData, [name]: value }));
  };

  return (
    <div className="myForm">
      <h3>Tu estás en el formulario de Productos, ¡Disfrútalo!</h3>
      <br />
      <input type="text" className="input" name='producto' placeholder='Producto' value={productData.producto} onChange={handleInputChange} />
      <input type="text" className="input" name='ubicacion' placeholder='Ubicación' value={productData.ubicacion} onChange={handleInputChange} />
      <br /><br />
    </div>
  );
}

export default Products;
