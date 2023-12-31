import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { selectPage, setPage } from "./features/appSlice";

import "./App.css";
import Checkout from "./pages/Checkout";
import Basket from "./pages/Basket";
import Vending1 from "./pages/Vending1";
import Vending2 from "./pages/Vending2";
import Header from "./components/Header";

const App = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  const getInitialData = async () => {
    console.log(page);
    dispatch(setPage());
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <div className="appCont">
          <Routes>
            <Route path="/" element={<Checkout />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/vending1" element={<Vending1 />} />
            <Route path="/vending2" element={<Vending2 />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
export default App;
