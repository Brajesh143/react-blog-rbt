import React from "react";
import './Cart.css';

export const Cart = () => {
    return (
        <>
            <div class="container py-5">
                <h1 class="mb-5">Your Shopping Cart</h1>
                <div class="row">
                    <div class="col-lg-8">
                        <div class="card mb-4">
                            <div class="card-body">
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
                                            <input style={{maxWidth:"100px"}} type="text" class="form-control  form-control-sm text-center quantity-input" value="1" />
                                            <button class="btn btn-outline-secondary btn-sm" type="button">+</button>
                                        </div>
                                    </div>
                                    <div class="col-md-2 text-end">
                                        <p class="fw-bold">$99.99</p>
                                        <button class="btn btn-sm btn-outline-danger">
                                                <i class="bi bi-trash"></i>
                                            </button>
                                    </div>
                                </div>
                                <hr />
                                <div class="row cart-item">
                                    <div class="col-md-3">
                                        <img src="https://via.placeholder.com/100" alt="Product 2" class="img-fluid rounded" />
                                    </div>
                                    <div class="col-md-5">
                                        <h5 class="card-title">Product 2</h5>
                                        <p class="text-muted">Category: Clothing</p>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="input-group">
                                            <button class="btn btn-outline-secondary btn-sm" type="button">-</button>
                                            <input style={{maxWidth:"100px"}} type="text" class="form-control form-control-sm text-center quantity-input" value="2" />
                                            <button class="btn btn-outline-secondary btn-sm" type="button">+</button>
                                        </div>
                                    </div>
                                    <div class="col-md-2 text-end">
                                        <p class="fw-bold">$49.99</p>
                                        <button class="btn btn-sm btn-outline-danger">
                                                <i class="bi bi-trash"></i>
                                            </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-start mb-4">
                            <a href="#" class="btn btn-outline-primary">
                                <i class="bi bi-arrow-left me-2"></i>Continue Shopping
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card cart-summary">
                            <div class="card-body">
                                <h5 class="card-title mb-4">Order Summary</h5>
                                <div class="d-flex justify-content-between mb-3">
                                    <span>Subtotal</span>
                                    <span>$199.97</span>
                                </div>
                                <div class="d-flex justify-content-between mb-3">
                                    <span>Shipping</span>
                                    <span>$10.00</span>
                                </div>
                                <div class="d-flex justify-content-between mb-3">
                                    <span>Tax</span>
                                    <span>$20.00</span>
                                </div>
                                <hr />
                                <div class="d-flex justify-content-between mb-4">
                                    <strong>Total</strong>
                                    <strong>$229.97</strong>
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