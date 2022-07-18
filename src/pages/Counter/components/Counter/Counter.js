import PropTypes from "prop-types";

import Button from "pages/Counter/components/Button/Button";

import zero from "static/icons/0-solid.svg";
import plus from "static/icons/plus-solid.svg";
import minus from "static/icons/minus-solid.svg";
import background from "static/background/numbers.png";

import styles from "pages/Counter/components/Counter/Counter.module.scss";
import colors from "static/colors/colors.scss";

const Counter = ({ count, isEven, onIncrement, onDecrement, onReset }) => {
  const changeBackground = isEven ? colors.outputWindowIfEven : "";

  return (
    <div
      className={styles.wrapper}
      style={{ background: `url(${background})` }}
    >
      <div className={styles.screenHolder}>
        <div
          className={styles.outputWindow}
          style={{ background: changeBackground }}
        >
          {count}
        </div>
        <div
          className={styles.outputWindow}
          style={{ background: changeBackground }}
        >
          {isEven ? "Number is even" : "Number is odd"}
        </div>
      </div>

      <div className={styles.buttonHolder}>
        <Button
          className={styles.counterButton}
          backgroundWhenNumberIsEven={changeBackground}
          imageSource={minus}
          alt="minus"
          callBack={onDecrement}
        />
        <Button
          className={styles.counterButton}
          backgroundWhenNumberIsEven={changeBackground}
          imageSource={zero}
          alt="reset"
          callBack={onReset}
        />
        <Button
          className={styles.counterButton}
          backgroundWhenNumberIsEven={changeBackground}
          imageSource={plus}
          alt="plus"
          callBack={onIncrement}
        />
      </div>
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number,
  isEven: PropTypes.bool,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onReset: PropTypes.func,
};

export default Counter;
