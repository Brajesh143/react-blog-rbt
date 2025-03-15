import React, { useState } from "react";
import { sendRequest } from "../../utils/service";

export const CartQuantity = ({ cartItem }) => {
    const { quantity, _id } = cartItem;
    const [qty, setQty] = useState(quantity);

    const handleCartItem = async(id, type) => {
        const updateCartItem = await sendRequest('put', 'cart/'+id+'/'+type);
        if (updateCartItem.status === 200) {
            if (type === 'inc') {
                setQty((prevQty) => prevQty + 1)
            } else {
                setQty((prevQty) => prevQty - 1)
            }
        }
    }

    return (
        <div className="col-md-2">
            <div className="input-group">
                <button onClick={() => handleCartItem(_id, 'dec')} className="btn btn-outline-secondary btn-sm" type="button">-</button>
                    <input style={{maxWidth:"100px"}} type="text" className="form-control  form-control-sm text-center quantity-input" value={qty} />
                <button onClick={() => handleCartItem(_id, 'inc')} className="btn btn-outline-secondary btn-sm" type="button">+</button>
            </div>
        </div>
    )
}