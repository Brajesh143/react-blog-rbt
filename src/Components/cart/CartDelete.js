import React from "react";
import { sendRequest } from "../../utils/service";

export const CartDelete = ({ cartItem }) => {
    const { price, product } = cartItem;

    const handleCartDelete = async(id) => {
        const dataToPost = {
            product_id: id
        };

        const deleteCart = await sendRequest('POST', 'cart/remove-item', dataToPost);
    }

    return (
        <div class="col-md-2 text-end">
            <p class="fw-bold">$ {price}</p>
            <button class="btn btn-sm btn-outline-danger" onClick={() => handleCartDelete(product._id)}>
                <i class="bi bi-trash"></i>
            </button>
        </div>
    )
}