import React, { useEffect } from "react";
import Container from "../Container/Container";
import _ from "./Navigation.module.css";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryRequestAsync,
  changeCategory,
} from "../../store/category/categorySlice";
import { API_URI } from "../../const";

const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryRequestAsync("max"));
  }, []);

  return (
    <nav className={_.navigation}>
      <Container className={_.container}>
        <ul className={_.list}>
          {category.map((item, i) => (
            <li className={_.item} key={item.title}>
              <button
                className={classNames(
                  _.button,
                  activeCategory === i ? _.button_active : ""
                )}
                style={{ backgroundImage: `url(${API_URI}/${item.image})` }}
                onClick={() => {
                  dispatch(changeCategory({ indexCategory: i }));
                }}
              >
                {item.rus}
              </button>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};

export default Navigation;
