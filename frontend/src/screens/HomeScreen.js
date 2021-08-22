import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useState, useEffect } from 'react';
import axios from 'axios';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');

      setProducts(data);
    };

    fetchProducts();
  }, []);

  /*  useEffect will load on the the page load. We cant make the useEffect an async await
function so we can make inside a nested function that will be a/a. We use array destructuring to
set data = to the products json and change the setProducts state to equal data.
*/

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
