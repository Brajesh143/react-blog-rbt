import React from "react";

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
            <div class="col-md-2">
                <div class="input-group">
                    <button class="btn btn-outline-secondary btn-sm" type="button">-</button>
                    <input style={{maxWidth:"100px"}} type="text" class="form-control  form-control-sm text-center quantity-input" value={quantity} />
                    <button class="btn btn-outline-secondary btn-sm" type="button">+</button>
                </div>
            </div>
            <div class="col-md-2 text-end">
                <p class="fw-bold">$ {price}</p>
                <button class="btn btn-sm btn-outline-danger">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>
    )
}