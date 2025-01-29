import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom'
import PaginationComponent from './PaginationComponent';
import { sendRequest } from '../utils/service';

export default function Product() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
  }, []);

  const getProducts = async () => {
    const productDatas = await sendRequest('get', 'product');
    if (productDatas.status === 200) {
        setProducts(productDatas.data.data);
        setIsLoading(false);
    }
  }

  return (
    <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
          </div>
          <div className='col-md-4'>
          <h2 style={{ textAlign: 'center' }}>Products</h2>
          </div>
          <div className='col-md-4'>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="search..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-primary" id="button-addon2">
                Search
              </Button>
            </InputGroup>
          </div>
        </div>
        <div className='row'>
          { products.length > 0 && products.map(product => (
            <div key={product._id} className='col-md-4'>
              <Card style={{ width: '24rem' }}>
                <Card.Img variant="top" src={`http://localhost:5000${product.product_image || '/public/uploads/products/dummy_product.jpg'}`} height={250} />
                <Card.Body>
                  <Card.Title><Link style={{ textDecoration: "none" }}>{product?.name.slice(0, 35)}</Link></Card.Title>
                  <Card.Text style={{fontSize: "large", height: "70px"}}>
                    {product?.description.length > 130 ? product?.description.slice(0, 130)+"..." : product?.description}
                  </Card.Text>
                  <Card.Text style={{fontSize: "x-large", height: "45px"}}>
                    {`$ ${product?.price}`}
                  </Card.Text>
                  <div>
                    <Button variant="primary" style={{ marginRight: "100px" }}>Add to Cart</Button>
                    <Button>Add to Wishlist</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>

        <PaginationComponent />
    </div>
  )
}
