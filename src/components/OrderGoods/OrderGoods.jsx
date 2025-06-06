import React from "react";
import { API_URI } from "../../const";
import Count from "../Count/Count";
import _ from "./OrderGoods.module.css";

const OrderGoods = ({ title, price, image, count, id, weight }) => {
  return (
    <li className={_.item}>
      <img className={_.image} src={`${API_URI}/${image}`} alt={title} />
      <div className={_.goods}>
        <h3 className={_.title}>{title}</h3>
        <p className={_.weight}>{weight}г</p>
        <p className={_.price}>
          {price}
          <span className="currency">&nbsp;₽</span>
        </p>
      </div>
      <Count count={count} id={id} />
    </li>
  );
};

export default OrderGoods;
