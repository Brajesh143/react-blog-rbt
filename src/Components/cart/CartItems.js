import React, { useState } from "react";
import { CartQuantity } from "./CartQuantity";
import { CartDelete } from "./CartDelete";

export const CartItems = ({ data, onDelete, onUpdate }) => {
    const { product, price } = data;
    const [itemPrice, setItemPrice] = useState(price);

    return (
        <div className="row cart-item mb-3">
            <div className="col-md-3">
                <img src={`http://localhost:5000${product.product_image || '/public/uploads/products/dummy_product.jpg'}`} alt="Product 1" className="img-fluid rounded" style={{ height: "100px" }} />
            </div>
            <div className="col-md-4">
                <h5 className="card-title">{ product.name }</h5>
                {/* <p className="text-muted">Category: Electronics</p> */}
            </div>
            <CartQuantity cartItem={data} onUpdate={onUpdate} setItemPrice={setItemPrice} />
            <CartDelete cartItem={data} onDelete={onDelete} itemPrice={itemPrice} />
        </div>
    )
}