import React, { useContext, useEffect, useState } from "react";
import './Cart.css';
import { CartItems } from "./CartItems";
import { sendRequest } from "../../utils/service";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { MyContext } from "../../MyContext";

export const Cart = () => {
    const [carts, setCarts] = useState([]);
    const navigate = useNavigate();
    const { data, setData } = useContext(MyContext);

    useEffect(() => {
        getCarts()
    }, []);

    const getCarts = async() => {
        const cartDatas = await sendRequest('GET', 'cart');
        if (cartDatas.status === 200 && cartDatas.data.cart.length > 0) {
            setCarts(cartDatas?.data?.cart);
            setData({
                ...data,
                totalPrice: cartDatas?.data?.totalPrice
            });
        }
    }

    const handleOrder = async() => {
        const createOrder = await sendRequest('post', 'order');
        if (createOrder.status === 201) {
            setData({
                ...data,
                cartCount: 0
            })
            swal("Success!", createOrder.data.message, "success");
            navigate('/');
        }
    }

    const removeItemFromCart = (itemId) => {
        setCarts((prevItems) => prevItems.filter(item => item._id !== itemId));
    };

    const updateCart = () => {
        // 
    }

    return (
        <>
            <div className="container py-5">
                <h1 className="mb-5">Your Shopping Cart</h1>
                { (carts.length > 0 &&
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card mb-4" style={{ height: "500px", overflowY: "auto" }}>
                            <div className="card-body">
                                { carts.length > 0 && carts.map((cart) => (
                                    <div key={cart._id}>
                                        <CartItems data={cart} onDelete={removeItemFromCart} onUpdate={updateCart} />
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="text-start mb-4">
                            <Link to="/product" className="btn btn-outline-primary">
                                <i className="bi bi-arrow-left me-2"></i>Continue Shopping
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card cart-summary">
                            <div className="card-body">
                                <h5 className="card-title mb-4">Order Summary</h5>
                                <div className="d-flex justify-content-between mb-3">
                                    <span>Subtotal</span>
                                    <span>${data.totalPrice}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <span>Shipping</span>
                                    <span>$00.00</span>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <span>Tax</span>
                                    <span>$00.00</span>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between mb-4">
                                    <strong>Total</strong>
                                    <strong>${data.totalPrice}</strong>
                                </div>
                                <button onClick={handleOrder} className="btn btn-primary w-100">Proceed to Checkout</button>
                            </div>
                        </div>
                        {/* <div className="card mt-4">
                            <div className="card-body">
                                <h5 className="card-title mb-3">Apply Promo Code</h5>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Enter promo code" />
                                    <button className="btn btn-outline-secondary" type="button">Apply</button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>)
                || 
                <div>Your cart is empty</div>
                }
            </div>
        </>
    )
}