import axios from "axios";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const FullPizza: React.FC = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://665b7403003609eda460ec36.mockapi.io/item/${id}`
        );
        console.log(data);
        setPizza(data);
      } catch (e) {
        alert("Ошибка получение пиццы");
        navigate("/");
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <>"Загрузка..."</>;
  }

  return (
    <div className="container">
      <Link to={"/"} className="pizza-block__bottom">
        <div className="button button--outline button--add">
          <span>Назад</span>
        </div>
      </Link>
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} p</h4>
    </div>
  );
};

export default FullPizza;
