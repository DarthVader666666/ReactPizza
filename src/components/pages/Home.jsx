import { useContext, useEffect, useState } from "react";
import Categories from "../Categories";
import PizzaBlock from "../PizzaBlock";
import Skeleton from "../PizzaBlock/Skeleton";
import Sort from "../Sort";
import Pagination from "../Pagination";
import { SearchContext } from "../../App";
import axios from "axios";

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

function Home() {
  const { searchValue } = useContext(SearchContext);

  let [itemsPizzas, setItemsPizzas] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  const [sortType, setSortType] = useState({
    name: "популярности",
    sortProperty: "rating",
  });
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCarrentPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
      const sortBy = sortType.sortProperty.replace("-", "");
      const category = categoryId === 0 ? "" : categoryId;
      try {
        let item = await axios.get(
          `https://665b7403003609eda460ec36.mockapi.io/item?page=${currentPage}&limit=4&category=${category}&sortBy=${sortBy}&order=${order}`
        );
        console.log(item.data);

        setItemsPizzas(item.data);
        setIsLoading(false);
      } catch {
        alert("ошибка");
      }
    };

    fetchData();

    window.scrollTo(0, 0);
  }, [categoryId, sortType, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(i) => setCategoryId(i)}
        />
        <Sort value={sortType} onClickSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : itemsPizzas
              .filter((item) =>
                item.title.toUpperCase().includes(searchValue.toUpperCase())
              )
              .map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>

      <Pagination onChangePage={(number) => setCarrentPage(number)} />
    </div>
  );
}

export default Home;
