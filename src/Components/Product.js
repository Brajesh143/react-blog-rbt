import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom'
import PaginationComponent from './PaginationComponent';
import { sendRequest } from '../utils/service';
import { ProductList } from './ProductList';

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
            <ProductList product={product} />
          ))}
        </div>

        <PaginationComponent />
    </div>
  )
}
