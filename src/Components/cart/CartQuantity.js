import React, { useContext, useState } from "react";
import { sendRequest } from "../../utils/service";
import { MyContext } from "../../MyContext";

export const CartQuantity = ({ cartItem, onUpdate, setItemPrice }) => {
    const { quantity, _id, product } = cartItem;
    const [qty, setQty] = useState(quantity);
    const { data, setData } = useContext(MyContext);

    const handleCartItem = async(id, type) => {
        const updateCartItem = await sendRequest('put', 'cart/'+id+'/'+type);
        if (updateCartItem.status === 200) {
            if (type === 'inc') {
                setQty((prevQty) => prevQty + 1)
                setItemPrice((prevPrice) => prevPrice + product.price);
                setData({
                    ...data,
                    cartCount: data.cartCount + 1,
                    totalPrice: data.totalPrice + product.price
                })
            } else {
                setQty((prevQty) => prevQty - 1)
                setItemPrice((prevPrice) => prevPrice - product.price);
                setData({
                    ...data,
                    cartCount: data.cartCount - 1,
                    totalPrice: data.totalPrice - product.price
                })
            }
        }
    }

    return (
        <div className="col-md-2">
            <div className="input-group">
                <button onClick={() => handleCartItem(_id, 'dec')} className="btn btn-outline-secondary btn-sm" type="button">-</button>
                    <input style={{maxWidth:"100px"}} type="text" className="form-control  form-control-sm text-center quantity-input" value={qty} minLength={1} />
                <button onClick={() => handleCartItem(_id, 'inc')} className="btn btn-outline-secondary btn-sm" type="button">+</button>
            </div>
        </div>
    )
}