import React from "react";
import ProductOnScreen from "./ProductOnScreen";

const ProductList = (props) => {
    
    return (
            <>
            {props.productsArr.map((product) => (
                <ProductOnScreen title={product.title} price={product.price} imageUrl={product.imageUrl} />
            ))

            }
        </>
    );
};

export default ProductList;