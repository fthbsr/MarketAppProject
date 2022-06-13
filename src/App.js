import Navi from "./Components/Navi";
import "./App.css";
import Basket from "./Components/Basket";
// import { Container, Row, Col } from "reactstrap";
import {  useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Urunler from "./Components/urunler";

function App() {
  const [basket, setBasket] = useState([]);

  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navi basket={basket} />}>
          <Route
              path="/"
              element={
                <Urunler basket={basket} setBasket={setBasket}></Urunler>
              }
            ></Route>
            <Route
              path="/product"
              element={
                <Urunler basket={basket} setBasket={setBasket}></Urunler>
              }
            ></Route>
            <Route
              path="/basket"
              element={
                <Basket
                  basket={basket}
                  addToCart={(t) => {
                    setBasket([...basket, t]);
                  }}
                  removeFromCart={(t) => {
                    const index = basket.findIndex((item) => item.id === t.id);
                    if (index !== -1) {
                      basket.splice(index, 1);
                    }
                    setBasket([...basket]);
                  }}
                  ClearBasket={() => {
                    setBasket([]);
                  }}
                  PayMoney={() => {
                    basket.length > 0 ? alert("Ödeme Yapıldı.Kuryemiz En Kisa Surede Teslimatinizi Ulastiracaktir!") : alert("Sepet Boş")
                   
                    setBasket([]);
                  }}
                />
              }
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
