import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFoundBlock";
import Cart from "./components/pages/Cart";
import React, { useState } from "react";
import FullPizza from "./components/pages/FullPizza";
import MainLauoyt from "./layouts/MainLayout";

// export const SearchContext = React.createContext();

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLauoyt />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
