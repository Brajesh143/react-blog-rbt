import React from "react";
import { CartQuantity } from "./CartQuantity";
import { CartDelete } from "./CartDelete";

export const CartItems = ({ data }) => {
    const { product } = data;

    return (
        <div class="row cart-item mb-3">
            <div class="col-md-3">
                <img src={`http://localhost:5000${product.product_image || '/public/uploads/products/dummy_product.jpg'}`} alt="Product 1" class="img-fluid rounded" style={{ height: "100px" }} />
            </div>
            <div class="col-md-5">
                <h5 class="card-title">{ product.name }</h5>
                <p class="text-muted">Category: Electronics</p>
            </div>
            <CartQuantity cartItem={data} />
            <CartDelete cartItem={data} />
        </div>
    )
}