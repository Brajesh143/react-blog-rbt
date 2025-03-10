import React, { useEffect, useState } from "react";
import './Cart.css';
import { CartItems } from "./CartItems";
import { sendRequest } from "../../utils/service";
import { Link } from "react-router-dom";

export const Cart = () => {
    const [carts, setCarts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        getCarts()
    }, []);

    const getCarts = async() => {
        const cartDatas = await sendRequest('GET', 'cart');
        if (cartDatas.status === 200 && cartDatas.data.length > 0) {
            setCarts(cartDatas?.data?.cart);
            setTotalPrice(cartDatas?.data?.totalPrice);
        }
    }

    return (
        <>
            <div class="container py-5">
                <h1 class="mb-5">Your Shopping Cart</h1>
                <div class="row">
                    <div class="col-lg-8">
                        <div class="card mb-4" style={{ height: "500px", overflowY: "auto" }}>
                            <div class="card-body">
                                { carts.length > 0 && carts.map((cart) => (
                                    <div key={cart._id}>
                                        <CartItems data={cart}  />
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div class="text-start mb-4">
                            <Link to="/product" class="btn btn-outline-primary">
                                <i class="bi bi-arrow-left me-2"></i>Continue Shopping
                            </Link>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card cart-summary">
                            <div class="card-body">
                                <h5 class="card-title mb-4">Order Summary</h5>
                                <div class="d-flex justify-content-between mb-3">
                                    <span>Subtotal</span>
                                    <span>${totalPrice}</span>
                                </div>
                                <div class="d-flex justify-content-between mb-3">
                                    <span>Shipping</span>
                                    <span>$10.00</span>
                                </div>
                                <div class="d-flex justify-content-between mb-3">
                                    <span>Tax</span>
                                    <span>$00.00</span>
                                </div>
                                <hr />
                                <div class="d-flex justify-content-between mb-4">
                                    <strong>Total</strong>
                                    <strong>${totalPrice}</strong>
                                </div>
                                <button class="btn btn-primary w-100">Proceed to Checkout</button>
                            </div>
                        </div>
                        {/* <div class="card mt-4">
                            <div class="card-body">
                                <h5 class="card-title mb-3">Apply Promo Code</h5>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Enter promo code" />
                                    <button class="btn btn-outline-secondary" type="button">Apply</button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}