import "./scss/app.scss";
import Loadable from "react-loadable";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import MainLauoyt from "./layouts/MainLayout";
import React from "react";

const Cart = Loadable({
  loader: () => import(/* webpackChunkName:'Cart'*/ "./pages/Cart"),
  loading: () => <div>Загрузка...</div>,
});
const FullPizza = React.lazy(
  () => import(/* webpackChunkName:'FullPizza'*/ "./pages/FullPizza")
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
