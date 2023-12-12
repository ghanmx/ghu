import React from "react";

import { Button, Img, Input, Line, Radio, RadioGroup, Text } from "components";

import { CloseSVG } from "../../assets/images";

const GeofencePage = () => {
  const [group10270value, setGroup10270value] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy gap-12 items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-[22px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[91%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group10392_10.svg"
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
        <div className="md:h-[1045px] sm:h-[1142px] h-[931px] max-w-[1268px] mx-auto md:px-5 relative w-full">
          <div className="flex flex-col gap-2 h-full items-center justify-start ml-9 mt-[350px] w-[4%]">
            <Button
              className="border border-blue_gray-400 border-solid flex h-10 items-center justify-center rounded-md w-10"
              shape="round"
              color="white_A700"
              size="lg"
            >
              <Img className="h-5" src="images/img_edit_40X40.svg" alt="edit" />
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
          <div className="absolute flex flex-col gap-[53px] h-full inset-[0] items-center justify-center m-auto pt-2.5 w-full">
            <div className="flex flex-col gap-[23px] items-center justify-start w-[53%] md:w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900"
                size="txtGilroySemiBold36"
              >
                Create Geofence
              </Text>
              <div className="flex flex-col items-center justify-end pt-1.5 w-full">
                <div className="flex flex-col gap-[25px] items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-[50px] items-start justify-between w-full">
                    <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start rounded-lg w-3/5 md:w-full">
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtGilroyMedium18Bluegray900"
                      >
                        Name
                      </Text>
                      <Input
                        name="Group10198"
                        placeholder="Jon Doe"
                        className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                        wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                        shape="round"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[33%] md:w-full">
                      <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                        <Text
                          className="text-blue_gray-900 text-lg"
                          size="txtGilroyMedium18Bluegray900"
                        >
                          Geofence type
                        </Text>
                        <RadioGroup
                          selectedValue="Circular"
                          className="flex w-full"
                          name="radiogrouppolygon"
                        >
                          <Radio
                            value="Polygon"
                            className="font-medium text-blue_gray-900 text-left text-lg"
                            inputClassName="bg-white-A700 border border-blue_gray-200 border-solid h-6 mr-[5px] rounded-[12px] w-6"
                            checked={false}
                            name="radiogrouppolygon"
                            label="Polygon"
                            id="Polygon"
                          ></Radio>
                          <Radio
                            value="Circular"
                            className="font-medium mb-0.5 ml-6 text-blue_gray-900 text-left text-lg"
                            inputClassName="bg-blue-A700 h-6 mr-[5px] rounded-[12px] w-6"
                            checked={true}
                            name="radiogrouppolygon"
                            label="Circular"
                            id="Circular"
                          ></Radio>
                        </RadioGroup>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-8 items-start justify-between pt-[5px] rounded-lg w-[97%] md:w-full">
                    <div className="flex flex-col gap-[7px] items-start justify-start rounded-lg w-[31%] sm:w-full">
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtGilroyMedium18Bluegray900"
                      >
                        Lattitude
                      </Text>
                      <Input
                        name="Group10198 One"
                        placeholder="33.54343"
                        className="font-medium p-0 placeholder:text-blue_gray-700 text-base text-left w-full"
                        wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                        shape="round"
                      ></Input>
                    </div>
                    <div className="flex flex-col items-start justify-start rounded-lg w-[31%] sm:w-full">
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtGilroyMedium18Bluegray900"
                      >
                        Longitude
                      </Text>
                      <Input
                        name="Group10198 Two"
                        placeholder="33.54343"
                        className="font-medium p-0 placeholder:text-blue_gray-700 text-base text-left w-full"
                        wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                        shape="round"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-1.5 items-start justify-start rounded-lg w-[31%] sm:w-full">
                      <Text
                        className="text-blue_gray-900 text-lg"
                        size="txtGilroyMedium18Bluegray900"
                      >
                        Radius
                      </Text>
                      <Input
                        name="Group10198 Three"
                        placeholder="0.632"
                        className="font-medium p-0 placeholder:text-blue_gray-700 text-base text-left w-full"
                        wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                        shape="round"
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[619px] items-end justify-end p-[66px] md:px-10 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group11175.png')" }}
            >
              <div className="bg-blue-A700_23 border-[3px] border-blue-A700 border-solid h-[234px] mr-80 mt-[253px] rounded-[50%] w-[234px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeofencePage;
