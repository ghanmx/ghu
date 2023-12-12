import React from "react";

const sizeClasses = {
  txtLatoRegular413: "font-lato font-normal",
  txtGilroyBold32: "font-bold font-gilroy",
  txtGilroyMedium18Red700: "font-gilroy font-medium",
  txtUrbanistItalicThin24: "font-hairline font-urbanist italic",
  txtLatoRegular212: "font-lato font-normal",
  txtGilroyMedium16BlueA700: "font-gilroy font-medium",
  txtLatoMedium173: "font-lato font-medium",
  txtLatoSemiBold173: "font-lato font-semibold",
  txtLatoMedium212: "font-lato font-medium",
  txtLatoMedium239Gray600: "font-lato font-medium",
  txtOpenSansMedium16: "font-medium font-opensans",
  txtLatoBold446: "font-bold font-lato",
  txtLatoExtraBold689: "font-extrabold font-lato",
  txtGilroyMedium18Black90001: "font-gilroy font-medium",
  txtGilroyMedium14BlueA700: "font-gilroy font-medium",
  txtGilroySemiBold32: "font-gilroy font-semibold",
  txtLatoSemiBold212WhiteA700: "font-lato font-semibold",
  txtLatoBold477: "font-bold font-lato",
  txtGilroyBold24: "font-bold font-gilroy",
  txtGilroyMedium20BlueA700: "font-gilroy font-medium",
  txtGilroyMedium16Bluegray900: "font-gilroy font-medium",
  txtLatoSemiBold239: "font-lato font-semibold",
  txtGilroyRegular16Bluegray900: "font-gilroy font-normal",
  txtGilroySemiBold16Green600: "font-gilroy font-semibold",
  txtGilroySemiBold36: "font-gilroy font-semibold",
  txtGilroyMedium18Bluegray900: "font-gilroy font-medium",
  txtLatoMedium186: "font-lato font-medium",
  txtOpenSansMedium24: "font-medium font-opensans",
  txtGilroySemiBold16BlueA700: "font-gilroy font-semibold",
  txtLatoMedium31: "font-lato font-medium",
  txtLatoBold265: "font-bold font-lato",
  txtGilroyBold18: "font-bold font-gilroy",
  txtGilroyMedium16Black900: "font-gilroy font-medium",
  txtLatoBold223: "font-bold font-lato",
  txtGilroyMedium20: "font-gilroy font-medium",
  txtGilroyMedium20Bluegray400: "font-gilroy font-medium",
  txtGilroyMedium18Green600: "font-gilroy font-medium",
  txtGilroyMedium24: "font-gilroy font-medium",
  txtGilroyMedium24Bluegray900: "font-gilroy font-medium",
  txtLatoSemiBold198: "font-lato font-semibold",
  txtGilroyMedium16Bluegray400: "font-gilroy font-medium",
  txtLatoMedium239Black90002: "font-lato font-medium",
  txtLatoBold347: "font-bold font-lato",
  txtGilroyMedium20Black90001: "font-gilroy font-medium",
  txtOpenSansRomanSemiBold16: "font-opensans font-semibold",
  txtGilroyMedium14: "font-gilroy font-medium",
  txtLatoMedium239: "font-lato font-medium",
  txtLatoSemiBold212: "font-lato font-semibold",
  txtGilroyMedium18BlueA700: "font-gilroy font-medium",
  txtGilroySemiBold18: "font-gilroy font-semibold",
  txtGilroyMedium18: "font-gilroy font-medium",
  txtGilroySemiBold16: "font-gilroy font-semibold",
  txtGilroyRegular16: "font-gilroy font-normal",
  txtGilroyMedium16: "font-gilroy font-medium",
  txtLatoMedium186Black9004c: "font-lato font-medium",
  txtGilroyRegular14: "font-gilroy font-normal",
  txtOpenSansRomanSemiBold12: "font-opensans font-semibold",
  txtLatoMedium31WhiteA700: "font-lato font-medium",
  txtGilroySemiBold16Bluegray700: "font-gilroy font-semibold",
  txtLatoSemiBold186: "font-lato font-semibold",
  txtGilroyMedium18Bluegray400: "font-gilroy font-medium",
  txtLatoExtraBold239: "font-extrabold font-lato",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
