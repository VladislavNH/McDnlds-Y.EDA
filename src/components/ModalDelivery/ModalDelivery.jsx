import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { submitForm, updateFormValue } from "../../store/form/formSlice";
import { closeModal } from "../../store/modalDelivery/ModalDeliverySlice";
import _ from "./ModalDelivery.module.css";

export const ModalDelivery = () => {
  const { isOpen } = useSelector((state) => state.modal);
  const form = useSelector((state) => state.form);
  const { orderList } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const handleInputChange = (evt) => {
    dispatch(
      updateFormValue({
        field: evt.target.name,
        value: evt.target.value,
      })
    );
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(submitForm({ ...form, orderList }));
  };

  return (
    isOpen && (
      <div
        className={_.modal}
        onClick={({ target, currentTarget }) => {
          if (target === currentTarget) {
            dispatch(closeModal());
          }
        }}
      >
        <div className={_.mdelivery}>
          <div className={_.container}>
            <h2 className={_.title}>Доставка</h2>

            <form className={_.form} id="delivery" onSubmit={handleFormSubmit}>
              <fieldset className={_.fieldset}>
                <input
                  className={_.input}
                  type="text"
                  name="name"
                  value={form.name}
                  placeholder="Ваше имя"
                  onChange={handleInputChange}
                />
                <input
                  className={_.input}
                  type="tel"
                  name="phone"
                  value={form.phone}
                  placeholder="Телефон"
                  onChange={handleInputChange}
                />
              </fieldset>

              <fieldset className={_.fieldset_radio}>
                <label className={_.label}>
                  <input
                    className={_.radio}
                    type="radio"
                    name="format"
                    value="pickup"
                    checked={form.format === "pickup"}
                    onChange={handleInputChange}
                  />
                  <span>Самовывоз</span>
                </label>

                <label className={_.label}>
                  <input
                    className={_.radio}
                    type="radio"
                    name="format"
                    value="delivery"
                    checked={form.format === "delivery"}
                    onChange={handleInputChange}
                  />
                  <span>Доставка</span>
                </label>
              </fieldset>

              {form.format === "delivery" && (
                <fieldset className={_.fieldset}>
                  <input
                    className={_.input}
                    type="text"
                    name="address"
                    value={form.address}
                    placeholder="Улица, дом, квартира"
                    onChange={handleInputChange}
                  />
                  <input
                    className={classNames(_.input, _.input_half)}
                    type="number"
                    name="floor"
                    value={form.floor}
                    placeholder="Этаж"
                    onChange={handleInputChange}
                  />
                  <input
                    className={classNames(_.input, _.input_half)}
                    type="number"
                    name="intercom"
                    value={form.intercom}
                    placeholder="Домофон"
                    onChange={handleInputChange}
                  />
                </fieldset>
              )}
            </form>

            <button className={_.submit} type="submit" form="delivery">
              Оформить
            </button>
          </div>

          <button
            className={_.modal__close}
            type="button"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="5.07422"
                y="5.28247"
                width="1"
                height="20"
                transform="rotate(-45 5.07422 5.28247)"
              />
              <rect
                x="5.78125"
                y="19.4246"
                width="1"
                height="20"
                transform="rotate(-135 5.78125 19.4246)"
              />
            </svg>
          </button>
        </div>
      </div>
    )
  );
};
