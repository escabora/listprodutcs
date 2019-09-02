import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Main extends Component {
  state = {
    products: [],
    productsInfo: [],
    page: 1,
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const { dots, ...productsInfo } = response.data;

    this.setState({ products: docs, productIfo, page });
  }

  prevPage = () => {
    const { page, productIfo } = this.state;

    if(page === 1) return;
    const pageNumber = page - 1;

    this.loadProducts(pageNumber);
  }

  nexPage = () => {
    const { page, productIfo } = this.state;

    if(page === productIfo.page) return;
    const pageNumber = page + 1;

    this.loadProducts(pageNumber);
  }

  render() {
    const { products, page, productIfo } = this.products;

    return(
      <div className="product-list">
        {products.map(product => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>
            <Link to={`/products/${product._id}`}>Acessar</Link>
          </article>
        ))}
        
        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>   
          <button disabled={page === productIfo.page} onClick={this.nextPage}>Próximo</button>
        </div>
      </div>
    )

  }
}