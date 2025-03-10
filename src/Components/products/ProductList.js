import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { sendRequest } from "../../utils/service";

export const ProductList = (props) => {
    const { product } = props;

    const handleAddToCart = async (product_id, price) => {
        const data = {
            "items": {
                product_id: product_id,
                quantity: 1,
                price: price
            }
        };

        const addToCartRes = await sendRequest('post', 'cart', data);
    }

    return (
        <div key={product._id} className='col-md-4'>
            <Card style={{ width: '24rem' }}>
                <Card.Img variant="top" src={`http://localhost:5000${product.product_image || '/public/uploads/products/dummy_product.jpg'}`} height={250} />
                <Card.Body>
                    <Card.Title>
                        <Link style={{ textDecoration: "none" }}>{product?.name.slice(0, 35)}</Link>
                    </Card.Title>
                    <Card.Text style={{fontSize: "large", height: "70px"}}>
                        {product?.description.length > 130 ? product?.description.slice(0, 130)+"..." : product?.description}
                    </Card.Text>
                    <Card.Text style={{fontSize: "x-large", height: "45px"}}>
                        {`$ ${product?.price}`}
                    </Card.Text>
                    <div>
                        <Button variant="primary" style={{ marginRight: "100px" }} onClick={() => {handleAddToCart(product._id, product.price)}}>Add to Cart</Button>
                        <Button>Add to Wishlist</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}