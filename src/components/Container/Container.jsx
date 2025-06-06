import _ from "./Container.module.css";
import classNames from "classnames";

const Container = ({ children, className }) => {
  return <div className={classNames(_.container, className)}>{children}</div>;
};

export default Container;
