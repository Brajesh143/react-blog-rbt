import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom'
import PaginationComponent from '../PaginationComponent';
import { sendRequest } from '../../utils/service';
import { ProductList } from './ProductList';

export default function Product() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [searchInput, setSearchInput] = useState();

  useEffect(() => {
    getProducts()
  }, []);

  const getProducts = async () => {
    const productDatas = await sendRequest('get', 'product');
    if (productDatas.status === 200) {
        setProducts(productDatas.data.data);
        setSearchedProducts(productDatas.data.data);
        setIsLoading(false);
    }
  }

  const handleProductSearch = () => {
    let filterProducts = [];
    if (searchInput === undefined || searchInput === '') {
      filterProducts = products;
    } else {
      filterProducts = products.filter(product => product.name.toLowerCase().includes(searchInput.toLowerCase()));
    }
    setSearchedProducts(filterProducts);
    setSearchInput();
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
                onChange={(e) => setSearchInput(e.target.value)}
                value={searchInput}
              />
              <Button variant="outline-primary" id="button-addon2" onClick={handleProductSearch}>
                Search
              </Button>
            </InputGroup>
          </div>
        </div>
        {isLoading ?
          <div className="text-center">
            <div className="spinner-border m-5" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div> :
          <div className='row'>
            { searchedProducts.length > 0 && searchedProducts.map(product => (
              <ProductList product={product} />
            ))}
          </div>
        }

        <PaginationComponent />
    </div>
  )
}
