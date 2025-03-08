import React from "react";

export const CartQuantity = ({ cartItem }) => {
    const { quantity } = cartItem;
    return (
        <div class="col-md-2">
            <div class="input-group">
                <button class="btn btn-outline-secondary btn-sm" type="button">-</button>
                <input style={{maxWidth:"100px"}} type="text" class="form-control  form-control-sm text-center quantity-input" value={quantity} />
                <button class="btn btn-outline-secondary btn-sm" type="button">+</button>
            </div>
        </div>
    )
}