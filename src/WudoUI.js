import React from 'react';
import './WudoUI.css';

function WudoUI() {
  return (
    <div className="App">
      <div className="navbar">
        <span className="logo">WUDO</span>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#furniture">Furniture</a>
          <a href="#product">Product</a>
          <a href="#store">Store</a>
        </nav>
        <div className="icons">
          <i className="fas fa-search"></i>
          <i className="fas fa-shopping-cart"></i>
        </div>
      </div>
      <div className="content">
        <div className="image-section">
          <img src="https://th.bing.com/th?id=OPHS.IenweISo2%2bIatQ474C474&w=592&h=550&o=5&dpr=1.1&pid=21.1" alt="Chair" className="main-image" />
          <div className="thumbnail-images">
            <img src="https://th.bing.com/th?id=OPHS.IenweISo2%2bIatQ474C474&w=592&h=550&o=5&dpr=1.1&pid=21.1" alt="Chair thumbnail" />
            <img src="https://th.bing.com/th?id=OPHS.IenweISo2%2bIatQ474C474&w=592&h=550&o=5&dpr=1.1&pid=21.1" alt="Chair thumbnail" />
            <img src="https://th.bing.com/th?id=OPHS.IenweISo2%2bIatQ474C474&w=592&h=550&o=5&dpr=1.1&pid=21.1" alt="Chair thumbnail" />
          </div>
        </div>
        <div className="details-section">
          <p>PREMIUM CHAIRS</p>
          <h1>Drop type cusion chair</h1>
          <p className="star-icon">8/10.15 Reviews</p>
          <div className="circles">
            <div className="circle light-grey"></div>
            <div className="circle navy-blue"></div>
          </div>
          <p>Premium & comfortable memory foam with a strong structure built with teakwood, it feels amazing.</p>
          <div className="dimensions-section">
            <div className="dimensions">
              <div className="dimension">
                <span className="label">HEIGHT</span>
                <span className="value">52 cm</span>
              </div>
              <div className="dimension">
                <span className="label">WIDTH</span>
                <span className="value">43 cm</span>
              </div>
            </div>
            <div className="view-inches">view in inches</div>
          </div>
          <div className="actions">
            <button className="divided-button"></button>
            <span className="price-bold">$265.50</span>
            <div className="quantity-buttons">
              <button className="btn minus-btn">-</button>
              <span className="quantity">1</span>
              <button className="btn plus-btn">+</button>
            </div> 
          </div>
          <div className="action-buttons">
            <button className="add-to-cart">Add to Cart</button>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default WudoUI;
