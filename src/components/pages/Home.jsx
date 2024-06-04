import React, { useEffect, useState } from "react";
import Categories from "../Categories";
import PizzaBlock from "../PizzaBlock";
import Skeleton from "../PizzaBlock/Skeleton";
import Sort, { list } from "../Sort";
// import Sort from "../Sort";
import Pagination from "../Pagination";
import axios from "axios";
import qs from "qs";

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

import { useSelector, useDispatch } from "react-redux";
import {
  setCategoryId,
  setFiltersUrl,
  setPageCount,
} from "../../redux/slices/filterSlice";
import { useNavigate } from "react-router-dom";

function Home() {
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categoryId, input, sort, pageCount } = useSelector(
    (state) => state.filter
  );
  const searchValue = input;
  const sortType = sort.sortProperty;

  let [itemsPizzas, setItemsPizzas] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  // const [currentPage, setCarrentPage] = useState(1);

  const onClickCategoty = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setPageCount(number));
  };

  const fetchPizzas = () => {
    const fetchData = async () => {
      setIsLoading(true);

      const order = sortType.includes("-") ? "asc" : "desc";
      const sortBy = sortType.replace("-", "");
      const category = categoryId === 0 ? "" : categoryId;
      try {
        let item = await axios.get(
          `https://665b7403003609eda460ec36.mockapi.io/item?page=${pageCount}&limit=4&category=${category}&sortBy=${sortBy}&order=${order}`
        );

        setItemsPizzas(item.data);
        setIsLoading(false);
      } catch {
        alert("ошибка");
      }
    };

    fetchData();
    // console.log(itemsPizzas);
  };

  useEffect(() => {
    if (!isSearch.current) {
      fetchPizzas();
    }

    isSearch.current = false;

    window.scrollTo(0, 0);
  }, [categoryId, sortType, pageCount]);

  useEffect(() => {
    if (isMounted.current) {
      const querySrting = qs.stringify({
        sortProperty: sortType,
        categoryId,
        pageCount,
      });

      navigate(`?${querySrting}`);
    }
    isMounted.current = true;
  }, [categoryId, sortType, pageCount]);

  // useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1));

  //     const sort = list.find((obj) => obj.sortProperty === params.sortProperty);

  //     dispatch(
  //       setFiltersUrl({
  //         ...params,
  //         sort,
  //       })
  //     );
  //     isSearch.current = true;
  //   }
  // }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(i) => onClickCategoty(i)}
        />
        <Sort />
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

      <Pagination value={pageCount} onChangePage={onChangePage} />
    </div>
  );
}

export default Home;
