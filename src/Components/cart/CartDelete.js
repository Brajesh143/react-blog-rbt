import React, { useContext } from "react";
import { sendRequest } from "../../utils/service";
import swal from "sweetalert";
import { MyContext } from "../../MyContext";

export const CartDelete = ({ cartItem, onDelete }) => {
    const { price, _id, quantity } = cartItem;
    const { data, setData } = useContext(MyContext);

    const handleCartDelete = async(id) => {
        const dataToPost = {
            id: id
        };

        const deleteCart = await sendRequest('post', 'cart/remove-item', dataToPost);
        if (deleteCart.status === 200) {
            setData({
                ...data,
                cartCount: data.cartCount - quantity
            })
            onDelete(id);
            swal("Success!", deleteCart.data.message, "success");
        }
    }

    return (
        <div className="col-md-2 text-end">
            <p className="fw-bold">$ {price}</p>
            <button className="btn btn-sm btn-outline-danger" onClick={() => handleCartDelete(_id)}>
                <i className="bi bi-trash"></i>
            </button>
        </div>
    )
}