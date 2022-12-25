import { useContext } from "react"
import MyContext from "../MyContext"
const Product =({imgUrl, title, price})=> {
    const {example} = useContext(MyContext)
    console.log(example)
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

