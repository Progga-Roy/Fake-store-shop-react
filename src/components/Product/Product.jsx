import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
// import './Product.css'
const Product = (props) => {
    const {title, price,image} = props.product
    const{handleAddToCart} = props;
    return (
        <div   data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        
        className='col-md-4'>
 <div className='card p-3 border mt-4'>
<img className='w-50 m-auto' src={image} alt="" />
<h4>{title.slice(0,10)}</h4>
<h6 className='p-2'> Price :${price}</h6>
<div className='d-flex justify-content-around'>
<button className='btn btn-success' onClick={handleAddToCart}>Add To Cart</button>
<button className=' btn btn-danger'>Delete</button>
{/* <button className='btn btn-warning'>Details</button> */}
<ReactModal product={props.product}></ReactModal>
</div>
</div> 
        </div>
    );
};

export default Product; 
