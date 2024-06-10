import "./scss/app.scss";
import Home from "./components/pages/Home";
import { Route, Routes } from "react-router-dom";
// import NotFound from "./components/NotFoundBlock";
// import Cart from "./components/pages/Cart";
// import FullPizza from "./components/pages/FullPizza";
import MainLauoyt from "./layouts/MainLayout";
import React from "react";

const Cart = React.lazy(
  () => import(/* webpackChunkName:'Cart'*/ "./components/pages/Cart")
);
const FullPizza = React.lazy(
  () => import(/* webpackChunkName:'FullPizza'*/ "./components/pages/FullPizza")
);
const NotFound = React.lazy(
  () =>
    import(/* webpackChunkName:'NotFoundBlock'*/ "./components/NotFoundBlock")
);
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLauoyt />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <React.Suspense fallback={<div>Загрузка...</div>}>
              <Cart />
            </React.Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <React.Suspense fallback={<div>Загрузка...</div>}>
              <FullPizza />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense fallback={<div>Загрузка...</div>}>
              <NotFound />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
