import React from "react";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const LocationPage = () => {
  const [group10270value, setGroup10270value] = React.useState("");
  const [group11197value, setGroup11197value] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[91%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group10392_13.svg"
                alt="Group10392"
              />
              <Input
                name="Group10270"
                placeholder="Search"
                value={group10270value}
                onChange={(e) => setGroup10270value(e)}
                className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                wrapClassName="border border-blue_gray-300 border-solid flex md:ml-[0] ml-[60px] md:mt-0 my-0.5 rounded-lg w-2/5 md:w-full"
                suffix={
                  group10270value?.length > 0 ? (
                    <CloseSVG
                      className="mt-4 mb-[15px] cursor-pointer h-5 ml-[35px] mr-4"
                      onClick={() => setGroup10270value("")}
                      fillColor="#bac1ce"
                      height={20}
                      width={20}
                      viewBox="0 0 20 20"
                    />
                  ) : (
                    <Img
                      className="mt-4 mb-[15px] cursor-pointer h-5 ml-[35px] mr-4"
                      src="images/img_search_bluegray_900.svg"
                      alt="search"
                    />
                  )
                }
                shape="round"
              ></Input>
              <div className="flex sm:flex-col flex-row gap-6 items-start justify-center md:ml-[0] ml-[61px] w-[30%] md:w-full">
                <div className="flex flex-row gap-[11px] items-start justify-between w-[27%] sm:w-full">
                  <Text
                    className="mt-[3px] text-base text-gray-900"
                    size="txtGilroyMedium16"
                  >
                    Products
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_gray_900.svg"
                    alt="arrowdown"
                  />
                </div>
                <div className="flex flex-row gap-[9px] items-start justify-center w-[28%] sm:w-full">
                  <Text
                    className="mt-[3px] text-base text-gray-900"
                    size="txtGilroyMedium16"
                  >
                    Resouces
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_gray_900.svg"
                    alt="arrowdown One"
                  />
                </div>
                <Text
                  className="sm:mt-0 mt-1 text-base text-gray-900"
                  size="txtGilroyMedium16"
                >
                  Request a demo
                </Text>
              </div>
              <Img
                className="h-14 md:h-auto md:ml-[0] ml-[61px] rounded-[50%] w-14"
                src="images/img_profileimglarg.png"
                alt="ProfileImgLarg"
              />
            </div>
          </div>
        </header>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[980px] items-center justify-start p-6 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_group10039.png')" }}
        >
          <div className="flex flex-col md:gap-10 gap-[406px] justify-start max-w-[1392px] mb-[338px] mt-4 mx-auto md:px-5 w-full">
            <Input
              name="Group11197"
              placeholder="Search Anything"
              value={group11197value}
              onChange={(e) => setGroup11197value(e)}
              className="!placeholder:text-blue_gray-400 !text-blue_gray-400 font-medium p-0 text-base text-left w-full"
              wrapClassName="border border-blue_gray-100 border-solid flex mr-[1012px] rounded-lg w-[28%]"
              prefix={
                <Img
                  className="mt-3 mb-[11px] cursor-pointer h-5 ml-3 mr-2"
                  src="images/img_search_bluegray_400.svg"
                  alt="search"
                />
              }
              suffix={
                <CloseSVG
                  className="cursor-pointer h-5 my-auto"
                  onClick={() => setGroup11197value("")}
                  fillColor="#74839d"
                  style={{
                    visibility:
                      group11197value?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={20}
                  width={20}
                  viewBox="0 0 20 20"
                />
              }
              shape="round"
              size="md"
            ></Input>
            <div className="flex flex-row gap-6 items-end justify-end md:ml-[0] ml-[1278px] w-[9%] md:w-full">
              <div className="bg-blue-A700 md:h-32 h-[50px] mt-[78px] relative rounded-[50%] w-[50px]">
                <Img
                  className="absolute h-[50px] inset-[0] justify-center m-auto w-[50px]"
                  src="images/img_checkmark_50X50.svg"
                  alt="checkmark"
                />
              </div>
              <div className="flex flex-col gap-2 items-center justify-start w-[36%]">
                <Button
                  className="border border-blue_gray-400 border-solid flex h-10 items-center justify-center rounded-md w-10"
                  shape="round"
                  color="white_A700"
                  size="lg"
                >
                  <Img
                    className="h-6"
                    src="images/img_location.svg"
                    alt="location"
                  />
                </Button>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-white-A700 border border-blue_gray-400 border-solid flex flex-col gap-2 items-center justify-start rounded-md w-full">
                    <Img
                      className="h-6 mt-[7px] rounded-[50%] w-6"
                      src="images/img_plus_24X24.svg"
                      alt="plus"
                    />
                    <Line className="bg-blue_gray-400 h-px w-full" />
                    <Img
                      className="h-6 mb-[7px] rounded-[50%] w-6"
                      src="images/img_minussolid.svg"
                      alt="minusSolid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationPage;
