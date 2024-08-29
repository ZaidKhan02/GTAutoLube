import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./Data/data";
import ProductButtons from "./Product Buttons/ProductButtons";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./Components/Card";
import "./index.css";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Copyright from "./Copyright/Copyright";
import Carousel from "./Carousel/Carousel";

function App() {
  const [mode, setMode] = useState('products');
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const handleCartClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    })
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false)
      }, 2000)
      return;
    }
    setCart([...cart, item])
  }

  const [query, setQuery] = useState("");
  const [selectedButton, setSelectedButton] = useState(null);

  const handleInputChange = (evt) => {
    setQuery(evt.target.value)
  }

  const handleChange = (evt) => {
    setSelectedButton(evt.target.value)
  }

  const handleClick = (evt) => {
    setSelectedButton(evt.target.value)
  }

  const filteredItems = products.filter(
    (product) => product.productName.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, subCategory }) =>
          category === selected ||
          subCategory === selected
      );
    }

    return filteredProducts.map(
      (item) => (
        <Card
          item={item}
          key={item.id}
          handleCartClick={handleCartClick}
        />
      )
    );
  }

  const data = filteredData(products, selectedButton, query);

  return (
    <>
      <Sidebar handleChange={handleChange} setMode={setMode} />
      <Navigation size={cart.length} query={query} handleInputChange={handleInputChange} setMode={setMode} />
      {mode === 'products' && (
        <>
          <Carousel />
          <ProductButtons handleClick={handleClick} />
          <Products handleCartClick={handleCartClick} data={data} />
        </>
      )}
      {mode === 'cart' && (
        <Cart cart={cart} setCart={setCart} />
      )}
      {mode === 'contact' && (
        <Contact />
      )}
      {warning && <div className="warning">Item is already added to your cart</div>}
      <Copyright setMode={setMode} />
    </>
  );
};
export default App;