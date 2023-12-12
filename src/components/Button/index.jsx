import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-[0.5px]", round: "rounded" };
const variants = {
  fill: {
    blue_A700: "bg-blue-A700 text-white-A700",
    white_A700: "bg-white-A700",
    blue_50: "bg-blue-50 text-blue-A700",
    blue_gray_100: "bg-blue_gray-100 text-black-900_01",
    gray_50_01: "bg-gray-50_01 text-gray-600",
  },
  outline: {
    blue_A700: "border border-blue-A700 border-solid text-blue-A700",
    blue_gray_400: "border border-blue_gray-400 border-solid text-black-900_01",
    blue_gray_100_01: "border border-blue_gray-100_01 border-solid",
    blue_gray_100: "border border-blue_gray-100 border-solid",
  },
};
const sizes = {
  xs: "pr-px py-px",
  sm: "p-1",
  md: "pl-1.5 py-1.5",
  lg: "p-2.5",
  xl: "p-[13px]",
  "2xl": "p-[18px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "gray_50_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
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
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "blue_A700",
    "white_A700",
    "blue_50",
    "blue_gray_100",
    "gray_50_01",
    "blue_gray_400",
    "blue_gray_100_01",
  ]),
};

export { Button };
