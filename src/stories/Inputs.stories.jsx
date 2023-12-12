import React from "react";

import { Input } from "components";

export default {
  title: "israel_s_application3/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  color: "white_A700",
  size: "xl",
  shape: "RoundedBorder6",
  variant: "fill",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
