import React from "react";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../store/order/orderSlice";
import _ from "./Count.module.css";

const Count = ({ count, id }) => {
  const dispatch = useDispatch();

  const addCount = () => {
    dispatch(addProduct({ id }));
  };

  const removeCount = () => {
    dispatch(removeProduct({ id }));
  };

  return (
    <div className={_.count}>
      <button className={_.minus} onClick={removeCount}>
        -
      </button>
      <p className={_.amount}>{count}</p>
      <button className={_.plus} onClick={addCount}>
        +
      </button>
    </div>
  );
};

export default Count;
