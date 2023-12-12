import React from "react";
import { Radio } from "components";

export default {
  title: "israel_s_application3/Radio",
  component: Radio,
};

export const SampleRadio = (args) => <Radio {...args} />;

SampleRadio.args = { label: "Radio", inputClassName: "mr-1" };
