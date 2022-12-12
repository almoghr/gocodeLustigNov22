import Product from "./Product";
import { useContext } from "react";
import MyContext from "../MyContext";


const Products = () => {
  const {productsData, setProductsData} = useContext(MyContext)
  return (
    <section className="products">
      {productsData && productsData.map((product,i) => { 
        // const RandomNumber = Math.floor(Math.random()*1000000 + i)
        return(
        <Product
          key={product.id}
          imgUrl={product.image}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      )})}
    </section>
  );
};

export default Products;
