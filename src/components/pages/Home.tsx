import React, { useEffect } from "react";
import Categories from "../Categories";
import PizzaBlock from "../PizzaBlock";
import Skeleton from "../PizzaBlock/Skeleton";
import Pagination from "../Pagination";
import qs from "qs";
import { useSelector } from "react-redux";
import { setCategoryId, setPageCount } from "../../redux/filter/slice";
import { useNavigate } from "react-router-dom";
import Sort from "../Sort";
import { useAppDispatch } from "../../redux/store";
import { selectFilter } from "../../redux/filter/selectors";
import { selectPizzaData } from "../../redux/pizza/selectors";
import { fetchPizzas } from "../../redux/pizza/asyncActions";

const Home: React.FC = () => {
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { categoryId, input, sort, pageCount } = useSelector(selectFilter);
  const searchValue = input;
  const sortType = sort.sortProperty;

  const { itemsPizzas, status } = useSelector(selectPizzaData);
  const onClickCategoty = React.useCallback((id: number) => {
    dispatch(setCategoryId(id));
  }, []);

  const onChangePage = (number: number) => {
    dispatch(setPageCount(number));
  };

  const getfetchPizzas = () => {
    const fetchData = async () => {
      const order = sortType.includes("-") ? "asc" : "desc";
      const sortBy = sortType.replace("-", "");
      const category = categoryId === 0 ? "" : categoryId;

      dispatch(
        fetchPizzas({
          order,
          sortBy,
          category,
          pageCount,
        })
      );
    };

    fetchData();
  };

  useEffect(() => {
    if (!isSearch.current) {
      getfetchPizzas();
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
        <Categories value={categoryId} onClickCategory={onClickCategoty} />
        <Sort value={sort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <h2>Ошибка при получении данных</h2>
      ) : (
        <div className="content__items">
          {status === "loading"
            ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
            : itemsPizzas
                .filter((item: any) =>
                  item.title.toUpperCase().includes(searchValue.toUpperCase())
                )
                .map((obj: any) => <PizzaBlock {...obj} />)}
        </div>
      )}

      <Pagination value={pageCount} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
