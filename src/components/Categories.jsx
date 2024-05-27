import React from "react";

function Categories({ onClickCategory }) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const onClickCategor = (i) => {
    setActiveIndex(i);
    onClickCategory(i);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((categor, index) => (
          <li
            key={index}
            onClick={() => {
              onClickCategor(index);
            }}
            className={activeIndex === index ? "active" : ""}
          >
            {categor}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
