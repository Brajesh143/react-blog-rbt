import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom'
import PaginationComponent from './PaginationComponent';

export default function Product() {
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
          <div className='col-md-4'>
            <Card style={{ width: '24rem' }}>
              <Card.Img variant="top" src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div className='col-md-4'>
            <Card style={{ width: '24rem' }}>
              <Card.Img variant="top" src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div className='col-md-4'>
            <Card style={{ width: '24rem' }}>
              <Card.Img variant="top" src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div className='col-md-4'>
            <Card style={{ width: '24rem' }}>
              <Card.Img variant="top" src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div className='col-md-4'>
            <Card style={{ width: '24rem' }}>
              <Card.Img variant="top" src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        <PaginationComponent />
    </div>
  )
}
