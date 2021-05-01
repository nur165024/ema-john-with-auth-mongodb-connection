import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const [product, setproduct] = useState({});

    useEffect(() => {
        fetch('http://localhost:4000/product/details/'+productKey)
        .then(res => res.json())
        .then(data => setproduct(data))
    },[productKey])
    
    console.log(product);

    return (
        <div>
            <h1>Your Product Details.</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;