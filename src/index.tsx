import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { store } from "./redux/store";
import { Provider } from "react-redux";

const rootElem = document.getElementById("root");

if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}
// const pizzas = [
//   {
//     "id": 0,
//     "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
//     "title": "Пепперони Фреш с перцем",
//     "types": [0, 1],
//     "sizes": [26, 30, 40],
//     "price": 803,
//     "category": 1,
//     "rating": 4
//   },
//   {
//     "id": 1,
//     "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
//     "title": "Сырная",
//     "types": [0],
//     "sizes": [26, 40],
//     "price": 245,
//     "category": 1,
//     "rating": 6
//   },
//   {
//     "id": 2,
//     "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
//     "title": "Цыпленок барбекю",
//     "types": [0],
//     "sizes": [26, 40],
//     "price": 295,
//     "category": 1,
//     "rating": 4
//   },
//   {
//     "id": 3,
//     "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
//     "title": "Кисло-сладкий цыпленок",
//     "types": [1],
//     "sizes": [26, 30, 40],
//     "price": 275,
//     "category": 2,
//     "rating": 2
//   },
//   {
//     "id": 4,
//     "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
//     "title": "Чизбургер-пицца",
//     "types": [0, 1],
//     "sizes": [26, 30, 40],
//     "price": 415,
//     "category": 3,
//     "rating": 8
//   },
//   {
//     "id": 5,
//     "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
//     "title": "Крэйзи пепперони",
//     "types": [0],
//     "sizes": [30, 40],
//     "price": 580,
//     "category": 2,
//     "rating": 2
//   },
//   {
//     "id": 6,
//     "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
//     "title": "Пепперони",
//     "types": [0, 1],
//     "sizes": [26, 30, 40],
//     "price": 675,
//     "category": 1,
//     "rating": 9
//   },
//   {
//     "id": 7,
//     "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
//     "title": "Маргарита",
//     "types": [0, 1],
//     "sizes": [26, 30, 40],
//     "price": 450,
//     "category": 4,
//     "rating": 10
//   },
//   {
//     "id": 8,
//     "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
//     "title": "Четыре сезона",
//     "types": [0, 1],
//     "sizes": [26, 30, 40],
//     "price": 395,
//     "category": 5,
//     "rating": 10
//   },
//   {
//     "id": 9,
//     "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
//     "title": "Овощи и грибы 🌱",
//     "types": [0, 1],
//     "sizes": [26, 30, 40],
//     "price": 285,
//     "category": 5,
//     "rating": 7
//   }
// ]
