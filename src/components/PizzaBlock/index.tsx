import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/cart/slice";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";

type PizzaBlockPropsType = {
  id: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  count: number;
  imageUrl: string;
  rating: number;
};

export const PizzaBlock: React.FC<PizzaBlockPropsType> = (prop) => {
  const dispath = useDispatch();
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const cartItem = useSelector((state: RootState) =>
    state.cart.itemsAllTypeCart.find((obj) => obj.id === prop.id)
  );

  const addedCount = cartItem ? cartItem.count : 0;

  const typeName = ["тонкое", "традиционное"];

  const onClickAdd = () => {
    const item = {
      id: prop.id,
      title: prop.title,
      price: prop.price,
      imageUrl: prop.imageUrl,
      type: typeName[activeType],
      size: prop.sizes[activeSize], //size: prop.sizes[activeSize],
    };
    console.log(item);
    dispath(addItem(item));
    console.log(item);
  };

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <Link key={prop.id} to={`/pizza/${prop.id}`}>
          <img
            className="pizza-block__image"
            src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
            alt="Pizza"
          />
        </Link>
        <h4 className="pizza-block__title">{prop.title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {prop.types.map((typeId) => (
              <li
                key={typeId}
                onClick={() => setActiveType(typeId)}
                className={activeType === typeId ? "active" : ""}
              >
                {typeName[typeId]}
              </li>
            ))}
          </ul>
          <ul>
            {prop.sizes.map((size, i) => (
              <li
                key={size}
                onClick={() => setActiveSize(i)}
                className={activeSize === i ? "active" : ""}
              >
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {prop.price} ₽</div>
          <div
            onClick={onClickAdd}
            className="button button--outline button--add"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            <i>{addedCount}</i>
          </div>
        </div>
      </div>
    </div>
  );
};
