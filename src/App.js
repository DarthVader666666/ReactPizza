import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFoundBlock";
import Cart from "./components/pages/Cart";
import React, { useState } from "react";

export const SearchContext = React.createContext();

function App() {
  return (
    <div className="wrapper">
      <SearchContext.Provider>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
