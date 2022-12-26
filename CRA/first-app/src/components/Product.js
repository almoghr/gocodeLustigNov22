import { useNavigate } from "react-router-dom";
const Product =({imgUrl, title, price, id})=> {
  const navigate = useNavigate()
    return(
      <div className="product-card">
        <div className="product-image">
          <img
            onClick={() => {navigate(`products/${id}`)}}
            alt="something amazing"
            src={imgUrl}
          />
        </div>
        <div className="product-info">
          <h5>{title}</h5>
          <h6>{price}</h6>
          <div>
            <button>+</button>
            {/* <p>amount: {amount}</p> */}
            <button>-</button>
          </div>
        </div>
      </div>
    )
  }

  export default Product

