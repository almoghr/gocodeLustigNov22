
const Product =({imgUrl, title, price})=> {

    return(
      <div className="product-card">
        <div className="product-image">
          <img
            alt="something amazing"
            src={imgUrl}
          />
        </div>
        <div className="product-info">
          <h5>{title}</h5>
          <h6>{price}</h6>
        </div>
      </div>
    )
  }

  export default Product