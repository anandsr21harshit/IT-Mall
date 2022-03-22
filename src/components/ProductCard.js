import "../css/product-card.css"

function ProductCard(props) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src="#" alt="" />
      </div>
      <div className="product-description">
        <h3 className="product-name">{props.productName}</h3>
        <h6 className="product-price">Rs {props.productPrice.toLocaleString("en-IN")}</h6>
      </div>

      <button className="btn btn-primary">Add to Cart</button>
    </div>  
  );
}

export {ProductCard}
