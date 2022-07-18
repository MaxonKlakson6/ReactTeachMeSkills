import PropTypes from "prop-types";

const Button = ({
  className,
  backgroundWhenNumberIsEven,
  imageSource,
  alt,
  callBack,
}) => {
  return (
    <button
      className={className}
      onClick={callBack}
      style={{ background: backgroundWhenNumberIsEven }}
    >
      <img src={imageSource} alt={alt} />
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  backgroundWhenNumberIsEven: PropTypes.string,
  imageSource: PropTypes.string,
  alt: PropTypes.string,
  callBack: PropTypes.func,
};

export default Button;
