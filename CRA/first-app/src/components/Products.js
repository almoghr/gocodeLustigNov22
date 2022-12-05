import Product from "./Product";
import { productsData } from "../data/products-data";

const Products = () => {
  return (
    <section className="products">
      {productsData.map((product,i) => { 
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
