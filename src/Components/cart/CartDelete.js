import React from "react";

export const CartDelete = ({ cartItem }) => {
    const { price } = cartItem;
    return (
        <div class="col-md-2 text-end">
            <p class="fw-bold">$ {price}</p>
            <button class="btn btn-sm btn-outline-danger">
                <i class="bi bi-trash"></i>
            </button>
        </div>
    )
}