import React from "react";
import PropTypes from "prop-types";

const shapes = { icbRoundedBorder31: "rounded-[31px]" };
const variants = {
  FillRed600: "bg-red_600 text-white_A700",
  icbOutlineBlack9003f: "bg-red_600 shadow-bs",
};
const sizes = { sm: "p-2", smIcn: "p-[5px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["icbRoundedBorder31"]),
  variant: PropTypes.oneOf(["FillRed600", "icbOutlineBlack9003f"]),
  size: PropTypes.oneOf(["sm", "smIcn"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
