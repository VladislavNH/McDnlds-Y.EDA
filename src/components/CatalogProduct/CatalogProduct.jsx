import React from "react";
import { useDispatch } from "react-redux";
import { API_URI } from "../../const";
import { addProduct } from "../../store/order/orderSlice";
import _ from "./CatalogProduct.module.css";

const CatalogProduct = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <article className={_.product}>
      <img
        src={`${API_URI}/${item.image}`}
        alt={item.title}
        className={_.image}
      />
      <p className={_.price}>
        {item.price}
        <span className="currency">&nbsp;₽</span>
      </p>
      <h3 className={_.title}>
        <button className={_.detail}>{item.title}</button>
      </h3>
      <p className={_.weight}>{item.weight}</p>
      <button
        className={_.add}
        type="button"
        onClick={() => {
          dispatch(addProduct({ id: item.id }));
        }}
      >
        Добавить
      </button>
    </article>
  );
};

export default CatalogProduct;
