import PropTypes from "prop-types";

const Button = ({ className, background, imageSource, alt, callBack }) => {
  return (
    <button
      className={className}
      onClick={callBack}
      style={{ background: background }}
    >
      <img src={imageSource} alt={alt} />
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  background: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  imageSource: PropTypes.string,
  alt: PropTypes.string,
  callBack: PropTypes.func,
};

export default Button;
