import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../../redux/actions';

  // FIJENSE DE HACERLO SI O SI CON FUNCTIONAL COMPONENT! SI NO LOS TEST NO PASAN.


const ProductCard = ({name, image, id, stock, price}) => {
 
 const dispatch = useDispatch()
  
  return (
    <div>
     <button onClick={()=>dispatch(deleteProduct(id))}  >x</button>
     <h3>{name}</h3>
     <img src={image} alt={name}/>
     <p>Stock: {stock}</p>
     <p>Precio: ${price}</p>
      <Link to={`/product/${id}`}> {name} </Link>
      


    </div>
  );
};

export default ProductCard;