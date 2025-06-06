import React, { useEffect } from "react";
import Order from "../Order/Order";
import Container from "../Container/Container";
import _ from "./Catalog.module.css";
import CatalogProduct from "../CatalogProduct/CatalogProduct";
import { useDispatch, useSelector } from "react-redux";
import { productRequestAsync } from "../../store/product/productSlice";

const Catalog = () => {
  const { products, flagProduct } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { category, activeCategory } = useSelector((state) => state.category);

  useEffect(() => {
    if (category.length) {
      dispatch(productRequestAsync(category[activeCategory].title));
    }
  }, [category, activeCategory]);

  return (
    <section className={_.catalog}>
      <Container className={_.container}>
        <Order />
        <div className={_.wrapper}>
          <h2 className={_.title}>{category[activeCategory]?.rus}</h2>
          <div className={_.wrap_list}>
            {products.length ? (
              <ul className={_.list}>
                {products.map((item) => (
                  <li className={_.item} key={item.id}>
                    <CatalogProduct item={item} />
                  </li>
                ))}
              </ul>
            ) : (
              flagProduct && (
                <p className={_.empty}>
                  К сожалению товаров в данной категории нет
                </p>
              )
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Catalog;
