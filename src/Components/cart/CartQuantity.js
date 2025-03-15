import React from "react";

export const CartQuantity = ({ cartItem }) => {
    const { quantity } = cartItem;
    return (
        <div className="col-md-2">
            <div className="input-group">
                <button className="btn btn-outline-secondary btn-sm" type="button">-</button>
                    <input style={{maxWidth:"100px"}} type="text" className="form-control  form-control-sm text-center quantity-input" value={quantity} />
                <button className="btn btn-outline-secondary btn-sm" type="button">+</button>
            </div>
        </div>
    )
}