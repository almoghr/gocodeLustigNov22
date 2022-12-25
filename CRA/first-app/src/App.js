import Nav from "./components/Nav";
import Products from "./components/Products";
import "./App.css";
import MyContext from "./MyContext";
import { useEffect, useState } from "react";
import TemporaryDrawer from "./components/Drawer";

const App = () => {
  const [productsData, setProductsData] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  // const [cartChosenItems, setCartChosenItems] = useState([])
  const onClose = () => {
    setCartOpen(false);
  };
  const getAllProducts = async () => {
    const response = await fetch("http://fakestoreapi.com/products");
    const data = await response.json();
    setProductsData(data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  

  return (
    <MyContext.Provider
      value={{ productsData, setProductsData }}
    >
      <div>
        <TemporaryDrawer open={cartOpen}>
          {/* <CartDrawer /> */}
          something
          <button onClick={onClose}>CLOSE DRAWER</button>
        </TemporaryDrawer>
        <button onClick={() => setCartOpen(true)}>OPEN DRAWER</button>
        <Nav />
        <Products />
      </div>
    </MyContext.Provider>
  );
};

export default App;
