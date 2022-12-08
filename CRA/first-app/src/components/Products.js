import Product from "./Product";
import { useEffect, useState } from "react";


const Products = () => {
  
  const [productsData, setProductsData] = useState([])
  
  const getAllProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json();
    setProductsData(data)
  }

useEffect(()=>{
  getAllProducts()
},[])

// useEffect(()=>{console.log(productsData)},[productsData])

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
