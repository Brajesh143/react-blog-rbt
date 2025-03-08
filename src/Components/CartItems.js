import React from "react";
import { CartQuantity } from "./cart/CartQuantity";
import { CartDelete } from "./cart/CartDelete";

export const CartItems = ({ data }) => {
    const { product_id, quantity, price, _id } = data;

    return (
        <div class="row cart-item mb-3">
            <div class="col-md-3">
                <img src="https://via.placeholder.com/100" alt="Product 1" class="img-fluid rounded" />
            </div>
            <div class="col-md-5">
                <h5 class="card-title">Product 1</h5>
                <p class="text-muted">Category: Electronics</p>
            </div>
            <CartQuantity cartItem={data} />
            <CartDelete cartItem={data} />
        </div>
    )
}