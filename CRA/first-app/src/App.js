import Nav from './components/Nav'
import Products from './components/Products'
import './App.css'
import MyContext from "./MyContext";
import { useEffect, useState } from 'react';

const App = () => {

    const [productsData, setProductsData] = useState([])

    const getAllProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json();
      setProductsData(data)
    }
  
  useEffect(()=>{
    getAllProducts()
  },[])
  
    return(
        <MyContext.Provider value={{productsData, setProductsData}}>
            <div>
                <Nav />
                <Products />
            </div>
        </MyContext.Provider>
    )
}

export default App