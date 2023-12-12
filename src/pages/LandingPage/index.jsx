import React from "react";

import { Button, GoogleMap, Img, Line, List, Text } from "components";

const LandingPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto p-8 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start max-w-[1268px] mx-auto md:px-5 w-full">
          <Text
            className="md:mt-0 mt-[15px] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
            size="txtGilroySemiBold32"
          >
            Landing Page
          </Text>
          <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[927px] p-2 rounded-[50%] w-14">
            <div className="md:h-9 h-[35px] mb-1 relative w-9">
              <Img
                className="absolute bottom-[0] h-8 left-[0] w-8"
                src="images/img_notification.svg"
                alt="notification"
              />
              <Text
                className="absolute bg-red-700 border border-blue_gray-50 border-solid h-[18px] justify-center pb-[5px] pt-0.5 px-[5px] right-[0] rounded-[50%] text-white-A700 text-xs top-[0] w-[18px]"
                size="txtOpenSansRomanSemiBold12"
              >
                2
              </Text>
            </div>
          </div>
          <div className="border border-blue-A700_01 border-solid flex flex-col h-14 items-center justify-start ml-6 md:ml-[0] p-1 rounded-[50%] w-14">
            <Img
              className="h-12 md:h-auto rounded-[50%] w-12"
              src="images/img_profileimglarg.png"
              alt="ProfileImgLarg"
            />
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[83px] items-start justify-center max-w-[941px] mb-60 mx-auto md:px-5 w-full">
          <Text
            className="leading-[26.00px] md:mt-0 mt-[3px] text-base text-blue_gray-900"
            size="txtGilroyMedium16Bluegray900"
          >
            <span className="md:text-[22px] sm:text-xl text-colors3 font-gilroy text-left text-2xl font-bold">
              <>
                What Is a Landing Page?
                <br />
                <br />
              </>
            </span>
            <span className="text-colors3 font-gilroy text-left font-medium">
              <>
                Diagram of a landing page
                <br />
                <br />
              </>
            </span>
            <span className="text-colors2 font-gilroy text-left font-medium">
              <>
                In digital marketing, a landing page is a standalone web page,
                created specifically for a marketing or advertising campaign.
                It’s where a visitor “lands” after they click on a link in an
                email, or ads from Google, Bing, YouTube, Facebook, Instagram,
                Twitter, or similar places on the web.
                <br />
                <br />
                Unlike web pages, which typically have many goals and encourage
                exploration, landing pages are designed with a single focus or
                goal, known as a call to action (or CTA, for short).
                <br />
                <br />
                It’s this focus that makes landing pages the best option for
                increasing the conversion rates of your marketing campaigns and
                lowering your cost of acquiring a lead or sale.
                <br />
                <br />
              </>
            </span>
            <span className="text-colors2 font-gilroy text-left font-medium">
              <>
                Unlike web pages, which typically have many goals and encourage
                exploration, landing pages are designed with a single focus or
                goal, known as a call to action (or CTA, for short).
                <br />
                <br />
                It’s this focus that makes landing pages the best option for
                increasing the conversion rates of your marketing campaigns and
                lowering your cost of acquiring a lead or sale.
              </>
            </span>
          </Text>
          <div className="flex md:flex-1 flex-col font-lato items-center justify-start shadow-bs3 w-[35%] md:w-full">
            <div className="bg-white-A700 h-[241px] md:h-[381px] px-1.5 relative w-full">
              <div className="absolute bg-gray-100 h-[241px] md:h-[381px] inset-y-[0] my-auto right-[2%] w-[56%]">
                <GoogleMap
                  className="absolute h-[241px] w-full"
                  showMarker={false}
                ></GoogleMap>
                <div className="absolute bg-gray-100 flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-full">
                  <Img
                    className="md:h-auto h-px object-cover w-full"
                    src="images/img_rectangle1.png"
                    alt="RectangleOne"
                  />
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[50px] items-center justify-start mt-[157px] p-1 w-full"
                    style={{
                      backgroundImage: "url('images/img_group4566.png')",
                    }}
                  >
                    <div className="flex flex-col items-center justify-start mb-1 w-[85%] md:w-full">
                      <Text
                        className="text-[3.47px] text-white-A700"
                        size="txtLatoBold347"
                      >
                        Featured Listings
                      </Text>
                      <List
                        className="sm:flex-col flex-row gap-[3.72px] grid grid-cols-3 justify-center mt-1 w-full"
                        orientation="horizontal"
                      >
                        <div className="md:h-[23px] h-[29px] relative w-full">
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto rounded-[0.99px] w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_group4567.png')",
                            }}
                          >
                            <div className="bg-white-A700 md:h-[23px] h-[3px] mb-[22px] p-[0.99px] relative rounded-[50%] w-[3px]">
                              <Img
                                className="absolute h-px inset-[0] justify-center m-auto w-px"
                                src="images/img_bookmarkborder.svg"
                                alt="bookmarkborder"
                              />
                            </div>
                          </div>
                          <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto rounded-bl-[0.99px] rounded-br-[0.99px] shadow-bs4 w-full">
                            <div className="flex flex-col items-start justify-start w-[89%] md:w-full">
                              <div className="flex flex-row gap-[9px] items-start justify-between w-full">
                                <div className="h-1.5 md:h-[3px] relative w-[58%]">
                                  <div className="absolute flex flex-col items-start justify-start left-[0] top-[0] w-auto">
                                    <Text
                                      className="text-[1.98px] sm:text-[1px] text-black-900_02 w-auto"
                                      size="txtLatoSemiBold198"
                                    >
                                      Orchard House
                                    </Text>
                                  </div>
                                  <div className="absolute bottom-[0] flex flex-row gap-[0.5px] inset-x-[0] items-center justify-end mx-auto w-auto">
                                    <Img
                                      className="h-px w-px"
                                      src="images/img_locationon.svg"
                                      alt="locationon"
                                    />
                                    <Text
                                      className="text-[1.73px] sm:text-[1px] text-gray-600 w-auto"
                                      size="txtLatoMedium173"
                                    >
                                      3 W Marble Place, Chicago
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  className="sm:text-[1px] text-[2.23px] text-teal-500"
                                  size="txtLatoBold223"
                                >
                                  $25,500
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[1.73px] items-start justify-start w-auto">
                                <Button
                                  className="cursor-pointer flex items-center justify-center min-w-[5px]"
                                  leftIcon={
                                    <Img
                                      className="h-px my-px"
                                      src="images/img_singlebed.svg"
                                      alt="single-bed"
                                    />
                                  }
                                  shape="square"
                                >
                                  <div className="font-semibold sm:text-[1px] text-[1.73px] text-left">
                                    3
                                  </div>
                                </Button>
                                <Button
                                  className="cursor-pointer flex items-center justify-center min-w-[5px]"
                                  leftIcon={
                                    <Img
                                      className="h-px my-px"
                                      src="images/img_bathtub.svg"
                                      alt="bathtub"
                                    />
                                  }
                                  shape="square"
                                >
                                  <div className="font-semibold sm:text-[1px] text-[1.73px] text-left">
                                    3
                                  </div>
                                </Button>
                                <Button
                                  className="cursor-pointer flex items-center justify-center min-w-[11px]"
                                  leftIcon={
                                    <Img
                                      className="h-px my-px"
                                      src="images/img_bxarea.svg"
                                      alt="bx:area"
                                    />
                                  }
                                  shape="square"
                                >
                                  <div className="font-semibold sm:text-[1px] text-[1.73px] text-left">
                                    2000 sqft.
                                  </div>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="md:h-[23px] h-[29px] relative w-full">
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto rounded-[0.99px] w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_group4568.png')",
                            }}
                          >
                            <div className="bg-white-A700 md:h-[23px] h-[3px] mb-[22px] p-[0.99px] relative rounded-[50%] w-[3px]">
                              <Img
                                className="absolute h-px inset-[0] justify-center m-auto w-px"
                                src="images/img_bookmarkborder.svg"
                                alt="bookmarkborder One"
                              />
                            </div>
                          </div>
                          <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto rounded-bl-[0.99px] rounded-br-[0.99px] shadow-bs4 w-full">
                            <div className="flex flex-col items-start justify-start w-[89%] md:w-full">
                              <div className="flex flex-row gap-[9px] items-start justify-between w-full">
                                <div className="h-1.5 md:h-[3px] relative w-[58%]">
                                  <div className="absolute flex flex-col items-start justify-start left-[0] top-[0] w-auto">
                                    <Text
                                      className="text-[1.98px] sm:text-[1px] text-black-900_02 w-auto"
                                      size="txtLatoSemiBold198"
                                    >
                                      Orchard House
                                    </Text>
                                  </div>
                                  <div className="absolute bottom-[0] flex flex-row gap-[0.5px] inset-x-[0] items-center justify-end mx-auto w-auto">
                                    <Img
                                      className="h-px w-px"
                                      src="images/img_locationon.svg"
                                      alt="locationon One"
                                    />
                                    <Text
                                      className="text-[1.73px] sm:text-[1px] text-gray-600 w-auto"
                                      size="txtLatoMedium173"
                                    >
                                      3 W Marble Place, Chicago
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  className="sm:text-[1px] text-[2.23px] text-teal-500"
                                  size="txtLatoBold223"
                                >
                                  $25,500
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[1.73px] items-start justify-start w-auto">
                                <Button
                                  className="cursor-pointer flex items-center justify-center min-w-[5px]"
                                  leftIcon={
                                    <Img
                                      className="h-px my-px"
                                      src="images/img_singlebed.svg"
                                      alt="single-bed"
                                    />
                                  }
                                  shape="square"
                                >
                                  <div className="font-semibold sm:text-[1px] text-[1.73px] text-left">
                                    3
                                  </div>
                                </Button>
                                <Button
                                  className="cursor-pointer flex items-center justify-center min-w-[5px]"
                                  leftIcon={
                                    <Img
                                      className="h-px my-px"
                                      src="images/img_bathtub.svg"
                                      alt="bathtub"
                                    />
                                  }
                                  shape="square"
                                >
                                  <div className="font-semibold sm:text-[1px] text-[1.73px] text-left">
                                    3
                                  </div>
                                </Button>
                                <Button
                                  className="cursor-pointer flex items-center justify-center min-w-[11px]"
                                  leftIcon={
                                    <Img
                                      className="h-px my-px"
                                      src="images/img_bxarea.svg"
                                      alt="bx:area"
                                    />
                                  }
                                  shape="square"
                                >
                                  <div className="font-semibold sm:text-[1px] text-[1.73px] text-left">
                                    2000 sqft.
                                  </div>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="md:h-[23px] h-[29px] relative w-full">
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto rounded-[0.99px] w-full"
                            style={{
                              backgroundImage:
                                "url('images/img_group4569.png')",
                            }}
                          >
                            <div className="bg-white-A700 md:h-[23px] h-[3px] mb-[22px] p-[0.99px] relative rounded-[50%] w-[3px]">
                              <Img
                                className="absolute h-px inset-[0] justify-center m-auto w-px"
                                src="images/img_bookmarkborder.svg"
                                alt="bookmarkborder Two"
                              />
                            </div>
                          </div>
                          <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto rounded-bl-[0.99px] rounded-br-[0.99px] shadow-bs4 w-full">
                            <div className="flex flex-col items-start justify-start w-[89%] md:w-full">
                              <div className="flex flex-row gap-[9px] items-start justify-between w-full">
                                <div className="h-1.5 md:h-[3px] relative w-[58%]">
                                  <div className="absolute flex flex-col items-start justify-start left-[0] top-[0] w-auto">
                                    <Text
                                      className="text-[1.98px] sm:text-[1px] text-black-900_02 w-auto"
                                      size="txtLatoSemiBold198"
                                    >
                                      Orchard House
                                    </Text>
                                  </div>
                                  <div className="absolute bottom-[0] flex flex-row gap-[0.5px] inset-x-[0] items-center justify-end mx-auto w-auto">
                                    <Img
                                      className="h-px w-px"
                                      src="images/img_locationon.svg"
                                      alt="locationon Two"
                                    />
                                    <Text
                                      className="text-[1.73px] sm:text-[1px] text-gray-600 w-auto"
                                      size="txtLatoMedium173"
                                    >
                                      3 W Marble Place, Chicago
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  className="sm:text-[1px] text-[2.23px] text-teal-500"
                                  size="txtLatoBold223"
                                >
                                  $25,500
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[1.73px] items-start justify-start w-auto">
                                <Button
                                  className="cursor-pointer flex items-center justify-center min-w-[5px]"
                                  leftIcon={
                                    <Img
                                      className="h-px my-px"
                                      src="images/img_singlebed.svg"
                                      alt="single-bed"
                                    />
                                  }
                                  shape="square"
                                >
                                  <div className="font-semibold sm:text-[1px] text-[1.73px] text-left">
                                    3
                                  </div>
                                </Button>
                                <Button
                                  className="cursor-pointer flex items-center justify-center min-w-[5px]"
                                  leftIcon={
                                    <Img
                                      className="h-px my-px"
                                      src="images/img_bathtub.svg"
                                      alt="bathtub"
                                    />
                                  }
                                  shape="square"
                                >
                                  <div className="font-semibold sm:text-[1px] text-[1.73px] text-left">
                                    3
                                  </div>
                                </Button>
                                <Button
                                  className="cursor-pointer flex items-center justify-center min-w-[11px]"
                                  leftIcon={
                                    <Img
                                      className="h-px my-px"
                                      src="images/img_bxarea.svg"
                                      alt="bx:area"
                                    />
                                  }
                                  shape="square"
                                >
                                  <div className="font-semibold sm:text-[1px] text-[1.73px] text-left">
                                    2000 sqft.
                                  </div>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-between mt-[13px] w-[81%] md:w-full">
                    <Text
                      className="text-[4.46px] text-black-900_02"
                      size="txtLatoBold446"
                    >
                      Most Popular
                    </Text>
                    <Img
                      className="h-[3px] w-[3px]"
                      src="images/img_arrowforward.svg"
                      alt="arrowforward"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start mt-1 w-[81%] md:w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[29px] items-center justify-start rounded-[0.99px] w-[32%]"
                      style={{
                        backgroundImage: "url('images/img_group9835.png')",
                      }}
                    >
                      <div className="flex flex-col gap-3 items-end justify-start w-full">
                        <div className="bg-white-A700 h-[3px] md:h-px p-[0.99px] relative rounded-[50%] w-[3px]">
                          <Img
                            className="absolute h-px inset-[0] justify-center m-auto w-px"
                            src="images/img_bookmarkborder.svg"
                            alt="bookmarkborder Three"
                          />
                        </div>
                        <div className="bg-white-A700 flex flex-col items-center justify-end rounded-bl-[0.99px] rounded-br-[0.99px] shadow-bs4 w-full">
                          <div className="flex flex-col items-start justify-start w-[89%] md:w-full">
                            <div className="flex flex-row gap-[9px] items-start justify-between w-full">
                              <div className="h-1.5 md:h-[3px] relative w-[58%]">
                                <div className="absolute flex flex-col items-start justify-start left-[0] top-[0] w-auto">
                                  <Text
                                    className="text-[1.98px] sm:text-[1px] text-black-900_02 w-auto"
                                    size="txtLatoSemiBold198"
                                  >
                                    Orchard House
                                  </Text>
                                </div>
                                <div className="absolute bottom-[0] flex flex-row gap-[0.5px] inset-x-[0] items-center justify-end mx-auto w-auto">
                                  <Img
                                    className="h-px w-px"
                                    src="images/img_locationon.svg"
                                    alt="locationon Three"
                                  />
                                  <Text
                                    className="text-[1.73px] sm:text-[1px] text-gray-600 w-auto"
                                    size="txtLatoMedium173"
                                  >
                                    3 W Marble Place, Chicago
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="sm:text-[1px] text-[2.23px] text-teal-500"
                                size="txtLatoBold223"
                              >
                                $25,500
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[1.73px] items-start justify-start w-auto">
                              <List
                                className="sm:flex-col flex-row gap-[1.73px] grid grid-cols-2 w-[49%]"
                                orientation="horizontal"
                              >
                                <div className="bg-gray-50_01 flex flex-col items-start justify-start px-[0.74px] py-[0.25px] rounded-[0.5px] w-auto">
                                  <div className="flex flex-row gap-[0.5px] items-center justify-start w-1">
                                    <Img
                                      className="h-px w-px"
                                      src="images/img_singlebed.svg"
                                      alt="singlebed"
                                    />
                                    <Text
                                      className="text-[1.73px] sm:text-[1px] text-gray-600"
                                      size="txtLatoSemiBold173"
                                    >
                                      3
                                    </Text>
                                  </div>
                                </div>
                                <div className="bg-gray-50_01 flex flex-col items-start justify-start px-[0.74px] py-[0.25px] rounded-[0.5px] w-auto">
                                  <div className="flex flex-row gap-[0.5px] items-center justify-start w-1">
                                    <Img
                                      className="h-px w-px"
                                      src="images/img_bathtub.svg"
                                      alt="bathtub"
                                    />
                                    <Text
                                      className="text-[1.73px] sm:text-[1px] text-gray-600"
                                      size="txtLatoSemiBold173"
                                    >
                                      3
                                    </Text>
                                  </div>
                                </div>
                              </List>
                              <div className="bg-gray-50_01 flex flex-col items-start justify-start px-[0.74px] py-[0.25px] rounded-[0.5px] w-auto">
                                <div className="flex flex-row gap-[0.5px] items-center justify-start w-auto">
                                  <Img
                                    className="h-px w-px"
                                    src="images/img_bxarea.svg"
                                    alt="bxarea"
                                  />
                                  <Text
                                    className="text-[1.73px] sm:text-[1px] text-gray-600 w-auto"
                                    size="txtLatoSemiBold173"
                                  >
                                    2000 sqft.
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-[3.72px] grid grid-cols-2 ml-[3px] w-[66%]"
                      orientation="horizontal"
                    >
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[29px] items-center justify-start rounded-[0.99px] w-full"
                        style={{
                          backgroundImage:
                            "url('images/img_group9835_29X45.png')",
                        }}
                      >
                        <div className="flex flex-col gap-3 items-end justify-start w-full">
                          <div className="bg-white-A700 h-[3px] md:h-px p-[0.99px] relative rounded-[50%] w-[3px]">
                            <Img
                              className="absolute h-px inset-[0] justify-center m-auto w-px"
                              src="images/img_bookmarkborder.svg"
                              alt="bookmarkborder Four"
                            />
                          </div>
                          <div className="bg-white-A700 flex flex-col items-center justify-end rounded-bl-[0.99px] rounded-br-[0.99px] shadow-bs4 w-full">
                            <div className="flex flex-col items-start justify-start w-[89%] md:w-full">
                              <div className="flex flex-row gap-[9px] items-start justify-between w-full">
                                <div className="h-1.5 md:h-[3px] relative w-[58%]">
                                  <div className="absolute flex flex-col items-start justify-start left-[0] top-[0] w-auto">
                                    <Text
                                      className="text-[1.98px] sm:text-[1px] text-black-900_02 w-auto"
                                      size="txtLatoSemiBold198"
                                    >
                                      Orchard House
                                    </Text>
                                  </div>
                                  <div className="absolute bottom-[0] flex flex-row gap-[0.5px] inset-x-[0] items-center justify-end mx-auto w-auto">
                                    <Img
                                      className="h-px w-px"
                                      src="images/img_locationon.svg"
                                      alt="locationon Four"
                                    />
                                    <Text
                                      className="text-[1.73px] sm:text-[1px] text-gray-600 w-auto"
                                      size="txtLatoMedium173"
                                    >
                                      3 W Marble Place, Chicago
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  className="sm:text-[1px] text-[2.23px] text-teal-500"
                                  size="txtLatoBold223"
                                >
                                  $25,500
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[1.73px] items-start justify-start w-auto">
                                <Button
                                  className="cursor-pointer flex items-center justify-center min-w-[5px]"
                                  leftIcon={
                                    <Img
                                      className="h-px my-px"
                                      src="images/img_singlebed.svg"
                                      alt="single-bed"
                                    />
                                  }
                                  shape="square"
                                >
                                  <div className="font-semibold sm:text-[1px] text-[1.73px] text-left">
                                    3
                                  </div>
                                </Button>
                                <Button
                                  className="cursor-pointer flex items-center justify-center min-w-[5px]"
                                  leftIcon={
                                    <Img
                                      className="h-px my-px"
                                      src="images/img_bathtub.svg"
                                      alt="bathtub"
                                    />
                                  }
                                  shape="square"
                                >
                                  <div className="font-semibold sm:text-[1px] text-[1.73px] text-left">
                                    3
                                  </div>
                                </Button>
                                <Button
                                  className="cursor-pointer flex items-center justify-center min-w-[11px]"
                                  leftIcon={
                                    <Img
                                      className="h-px my-px"
                                      src="images/img_bxarea.svg"
                                      alt="bx:area"
                                    />
                                  }
                                  shape="square"
                                >
                                  <div className="font-semibold sm:text-[1px] text-[1.73px] text-left">
                                    2000 sqft.
                                  </div>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[29px] items-center justify-start rounded-[0.99px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group9835_1.png')",
                        }}
                      >
                        <div className="flex flex-col gap-3 items-end justify-start w-full">
                          <div className="bg-white-A700 h-[3px] md:h-px p-[0.99px] relative rounded-[50%] w-[3px]">
                            <Img
                              className="absolute h-px inset-[0] justify-center m-auto w-px"
                              src="images/img_bookmarkborder.svg"
                              alt="bookmarkborder Five"
                            />
                          </div>
                          <div className="bg-white-A700 flex flex-col items-center justify-end rounded-bl-[0.99px] rounded-br-[0.99px] shadow-bs4 w-full">
                            <div className="flex flex-col items-start justify-start w-[89%] md:w-full">
                              <div className="flex flex-row gap-[9px] items-start justify-between w-full">
                                <div className="h-1.5 md:h-[3px] relative w-[58%]">
                                  <div className="absolute flex flex-col items-start justify-start left-[0] top-[0] w-auto">
                                    <Text
                                      className="text-[1.98px] sm:text-[1px] text-black-900_02 w-auto"
                                      size="txtLatoSemiBold198"
                                    >
                                      Orchard House
                                    </Text>
                                  </div>
                                  <div className="absolute bottom-[0] flex flex-row gap-[0.5px] inset-x-[0] items-center justify-end mx-auto w-auto">
                                    <Img
                                      className="h-px w-px"
                                      src="images/img_locationon.svg"
                                      alt="locationon Five"
                                    />
                                    <Text
                                      className="text-[1.73px] sm:text-[1px] text-gray-600 w-auto"
                                      size="txtLatoMedium173"
                                    >
                                      3 W Marble Place, Chicago
                                    </Text>
                                  </div>
                                </div>
                                <Text
                                  className="sm:text-[1px] text-[2.23px] text-teal-500"
                                  size="txtLatoBold223"
                                >
                                  $25,500
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[1.73px] items-start justify-start w-auto">
                                <Button
                                  className="cursor-pointer flex items-center justify-center min-w-[5px]"
                                  leftIcon={
                                    <Img
                                      className="h-px my-px"
                                      src="images/img_singlebed.svg"
                                      alt="single-bed"
                                    />
                                  }
                                  shape="square"
                                >
                                  <div className="font-semibold sm:text-[1px] text-[1.73px] text-left">
                                    3
                                  </div>
                                </Button>
                                <Button
                                  className="cursor-pointer flex items-center justify-center min-w-[5px]"
                                  leftIcon={
                                    <Img
                                      className="h-px my-px"
                                      src="images/img_bathtub.svg"
                                      alt="bathtub"
                                    />
                                  }
                                  shape="square"
                                >
                                  <div className="font-semibold sm:text-[1px] text-[1.73px] text-left">
                                    3
                                  </div>
                                </Button>
                                <Button
                                  className="cursor-pointer flex items-center justify-center min-w-[11px]"
                                  leftIcon={
                                    <Img
                                      className="h-px my-px"
                                      src="images/img_bxarea.svg"
                                      alt="bx:area"
                                    />
                                  }
                                  shape="square"
                                >
                                  <div className="font-semibold sm:text-[1px] text-[1.73px] text-left">
                                    2000 sqft.
                                  </div>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                  <div className="bg-gray-400 flex flex-col items-center justify-start mt-3 rounded-[1.98px] w-[81%] md:w-full">
                    <div className="bg-gray-900_01 md:h-[31px] h-[39px] p-0.5 relative rounded-[1.98px] w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto w-[88%]">
                        <Text
                          className="leading-[6.45px] text-[4.13px] text-white-A700 w-[31%] sm:w-full"
                          size="txtLatoRegular413"
                        >
                          <span className="text-colors4 font-lato text-left font-normal">
                            Selling or Buying a{" "}
                          </span>
                          <span className="text-colors4 font-lato text-left text-[8.25px] font-bold">
                            Home?
                          </span>
                        </Text>
                        <Text
                          className="mt-0.5 text-[3.1px] text-gray-400_01"
                          size="txtLatoMedium31"
                        >
                          Navigate the real estate mark with global expert !
                        </Text>
                        <Line className="bg-teal-500 h-[0.3px] mt-[3px] w-full" />
                        <Text
                          className="text-[3.1px] text-white-A700"
                          size="txtLatoMedium31WhiteA700"
                        >
                          Call Us - 1-656-988-1212
                        </Text>
                      </div>
                      <Text
                        className="absolute bottom-[5%] right-[5%] text-[3.1px] text-white-A700"
                        size="txtLatoMedium31WhiteA700"
                      >
                        John Fox Real Estate
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-between mt-[13px] w-[81%] md:w-full">
                    <Text
                      className="text-[4.46px] text-black-900_02"
                      size="txtLatoBold446"
                    >
                      Nearby Your Area
                    </Text>
                    <Img
                      className="h-[3px] w-[3px]"
                      src="images/img_arrowforward.svg"
                      alt="arrowforward One"
                    />
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[3.71px] grid grid-cols-3 justify-start mt-1 w-auto"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-center justify-start w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col gap-3 h-[29px] items-end justify-start rounded-[0.99px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group4869.png')",
                        }}
                      >
                        <div className="bg-white-A700 h-[3px] md:h-px p-[0.99px] relative rounded-[50%] w-[3px]">
                          <Img
                            className="absolute h-px inset-[0] justify-center m-auto w-px"
                            src="images/img_bookmarkborder.svg"
                            alt="bookmarkborder Six"
                          />
                        </div>
                        <div className="bg-white-A700 flex flex-col items-center justify-end rounded-bl-[0.99px] rounded-br-[0.99px] shadow-bs4 w-full">
                          <div className="flex flex-col items-start justify-start w-[89%] md:w-full">
                            <div className="flex flex-row gap-[9px] items-start justify-between w-full">
                              <div className="h-1.5 md:h-[3px] relative w-[58%]">
                                <div className="absolute flex flex-col items-start justify-start left-[0] top-[0] w-auto">
                                  <Text
                                    className="text-[1.98px] sm:text-[1px] text-black-900_02 w-auto"
                                    size="txtLatoSemiBold198"
                                  >
                                    Orchard House
                                  </Text>
                                </div>
                                <div className="absolute bottom-[0] flex flex-row gap-[0.5px] inset-x-[0] items-center justify-end mx-auto w-auto">
                                  <Img
                                    className="h-px w-px"
                                    src="images/img_locationon.svg"
                                    alt="locationon Six"
                                  />
                                  <Text
                                    className="text-[1.73px] sm:text-[1px] text-gray-600 w-auto"
                                    size="txtLatoMedium173"
                                  >
                                    3 W Marble Place, Chicago
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="sm:text-[1px] text-[2.23px] text-teal-500"
                                size="txtLatoBold223"
                              >
                                $25,500
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[1.73px] items-start justify-start w-auto">
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[5px]"
                                leftIcon={
                                  <Img
                                    className="h-px my-px"
                                    src="images/img_singlebed.svg"
                                    alt="single-bed"
                                  />
                                }
                                shape="square"
                              >
                                <div className="font-semibold sm:text-[1px] text-[1.73px] text-left">
                                  3
                                </div>
                              </Button>
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[5px]"
                                leftIcon={
                                  <Img
                                    className="h-px my-px"
                                    src="images/img_bathtub.svg"
                                    alt="bathtub"
                                  />
                                }
                                shape="square"
                              >
                                <div className="font-semibold sm:text-[1px] text-[1.73px] text-left">
                                  3
                                </div>
                              </Button>
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[11px]"
                                leftIcon={
                                  <Img
                                    className="h-px my-px"
                                    src="images/img_bxarea.svg"
                                    alt="bx:area"
                                  />
                                }
                                shape="square"
                              >
                                <div className="font-semibold sm:text-[1px] text-[1.73px] text-left">
                                  2000 sqft.
                                </div>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col gap-3 h-[29px] items-end justify-start rounded-[0.99px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group4870.png')",
                        }}
                      >
                        <div className="bg-white-A700 h-[3px] md:h-px p-[0.99px] relative rounded-[50%] w-[3px]">
                          <Img
                            className="absolute h-px inset-[0] justify-center m-auto w-px"
                            src="images/img_bookmarkborder.svg"
                            alt="bookmarkborder Seven"
                          />
                        </div>
                        <div className="bg-white-A700 flex flex-col items-center justify-end rounded-bl-[0.99px] rounded-br-[0.99px] shadow-bs4 w-full">
                          <div className="flex flex-col items-start justify-start w-[89%] md:w-full">
                            <div className="flex flex-row gap-[9px] items-start justify-between w-full">
                              <div className="h-1.5 md:h-[3px] relative w-[58%]">
                                <div className="absolute flex flex-col items-start justify-start left-[0] top-[0] w-auto">
                                  <Text
                                    className="text-[1.98px] sm:text-[1px] text-black-900_02 w-auto"
                                    size="txtLatoSemiBold198"
                                  >
                                    Orchard House
                                  </Text>
                                </div>
                                <div className="absolute bottom-[0] flex flex-row gap-[0.5px] inset-x-[0] items-center justify-end mx-auto w-auto">
                                  <Img
                                    className="h-px w-px"
                                    src="images/img_locationon.svg"
                                    alt="locationon Seven"
                                  />
                                  <Text
                                    className="text-[1.73px] sm:text-[1px] text-gray-600 w-auto"
                                    size="txtLatoMedium173"
                                  >
                                    3 W Marble Place, Chicago
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="sm:text-[1px] text-[2.23px] text-teal-500"
                                size="txtLatoBold223"
                              >
                                $25,500
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[1.73px] items-start justify-start w-auto">
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[5px]"
                                leftIcon={
                                  <Img
                                    className="h-px my-px"
                                    src="images/img_singlebed.svg"
                                    alt="single-bed"
                                  />
                                }
                                shape="square"
                              >
                                <div className="font-semibold sm:text-[1px] text-[1.73px] text-left">
                                  3
                                </div>
                              </Button>
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[5px]"
                                leftIcon={
                                  <Img
                                    className="h-px my-px"
                                    src="images/img_bathtub.svg"
                                    alt="bathtub"
                                  />
                                }
                                shape="square"
                              >
                                <div className="font-semibold sm:text-[1px] text-[1.73px] text-left">
                                  3
                                </div>
                              </Button>
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[11px]"
                                leftIcon={
                                  <Img
                                    className="h-px my-px"
                                    src="images/img_bxarea.svg"
                                    alt="bx:area"
                                  />
                                }
                                shape="square"
                              >
                                <div className="font-semibold sm:text-[1px] text-[1.73px] text-left">
                                  2000 sqft.
                                </div>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col gap-3 h-[29px] items-end justify-start rounded-[0.99px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group4871.png')",
                        }}
                      >
                        <div className="bg-white-A700 h-[3px] md:h-px p-[0.99px] relative rounded-[50%] w-[3px]">
                          <Img
                            className="absolute h-px inset-[0] justify-center m-auto w-px"
                            src="images/img_bookmarkborder.svg"
                            alt="bookmarkborder Eight"
                          />
                        </div>
                        <div className="bg-white-A700 flex flex-col items-center justify-end rounded-bl-[0.99px] rounded-br-[0.99px] shadow-bs4 w-full">
                          <div className="flex flex-col items-start justify-start w-[89%] md:w-full">
                            <div className="flex flex-row gap-[9px] items-start justify-between w-full">
                              <div className="h-1.5 md:h-[3px] relative w-[58%]">
                                <div className="absolute flex flex-col items-start justify-start left-[0] top-[0] w-auto">
                                  <Text
                                    className="text-[1.98px] sm:text-[1px] text-black-900_02 w-auto"
                                    size="txtLatoSemiBold198"
                                  >
                                    Orchard House
                                  </Text>
                                </div>
                                <div className="absolute bottom-[0] flex flex-row gap-[0.5px] inset-x-[0] items-center justify-end mx-auto w-auto">
                                  <Img
                                    className="h-px w-px"
                                    src="images/img_locationon.svg"
                                    alt="locationon Eight"
                                  />
                                  <Text
                                    className="text-[1.73px] sm:text-[1px] text-gray-600 w-auto"
                                    size="txtLatoMedium173"
                                  >
                                    3 W Marble Place, Chicago
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="sm:text-[1px] text-[2.23px] text-teal-500"
                                size="txtLatoBold223"
                              >
                                $25,500
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[1.73px] items-start justify-start w-auto">
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[5px]"
                                leftIcon={
                                  <Img
                                    className="h-px my-px"
                                    src="images/img_singlebed.svg"
                                    alt="single-bed"
                                  />
                                }
                                shape="square"
                              >
                                <div className="font-semibold sm:text-[1px] text-[1.73px] text-left">
                                  3
                                </div>
                              </Button>
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[5px]"
                                leftIcon={
                                  <Img
                                    className="h-px my-px"
                                    src="images/img_bathtub.svg"
                                    alt="bathtub"
                                  />
                                }
                                shape="square"
                              >
                                <div className="font-semibold sm:text-[1px] text-[1.73px] text-left">
                                  3
                                </div>
                              </Button>
                              <Button
                                className="cursor-pointer flex items-center justify-center min-w-[11px]"
                                leftIcon={
                                  <Img
                                    className="h-px my-px"
                                    src="images/img_bxarea.svg"
                                    alt="bx:area"
                                  />
                                }
                                shape="square"
                              >
                                <div className="font-semibold sm:text-[1px] text-[1.73px] text-left">
                                  2000 sqft.
                                </div>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-row items-start justify-between mt-[13px] w-[81%] md:w-full">
                    <Text
                      className="text-[4.46px] text-black-900_02"
                      size="txtLatoBold446"
                    >
                      News & Articles
                    </Text>
                    <Img
                      className="h-[3px] w-[3px]"
                      src="images/img_arrowforward.svg"
                      alt="arrowforward Two"
                    />
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[3.72px] grid grid-cols-3 justify-center mt-[5px] w-[81%]"
                    orientation="horizontal"
                  >
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[29px] items-end justify-start rounded-[0.99px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group9959.png')",
                      }}
                    >
                      <div className="bg-white-A700 md:h-[23px] h-[3px] mb-[22px] p-[0.99px] relative rounded-[50%] w-[3px]">
                        <Img
                          className="absolute h-px inset-[0] justify-center m-auto w-px"
                          src="images/img_bookmarkborder.svg"
                          alt="bookmarkborder Nine"
                        />
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[29px] items-end justify-start rounded-[0.99px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group9960.png')",
                      }}
                    >
                      <div className="bg-white-A700 md:h-[23px] h-[3px] mb-[22px] p-[0.99px] relative rounded-[50%] w-[3px]">
                        <Img
                          className="absolute h-px inset-[0] justify-center m-auto w-px"
                          src="images/img_bookmarkborder.svg"
                          alt="bookmarkborder Ten"
                        />
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[29px] items-end justify-start rounded-[0.99px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group9961.png')",
                      }}
                    >
                      <div className="bg-white-A700 md:h-[23px] h-[3px] mb-[22px] p-[0.99px] relative rounded-[50%] w-[3px]">
                        <Img
                          className="absolute h-px inset-[0] justify-center m-auto w-px"
                          src="images/img_bookmarkborder.svg"
                          alt="bookmarkborder Eleven"
                        />
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="absolute bg-gray-100 bottom-[0] flex flex-col items-center justify-start left-[2%] rounded-tl-[4.82px] rounded-tr-[4.82px] shadow-bs5 w-3/5">
                <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[106px] items-center justify-start p-[3px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group4570.png')",
                    }}
                  >
                    <div className="flex flex-col items-start justify-start mb-[3px] w-[85%] md:w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row gap-[1.06px] items-center justify-start w-auto">
                          <Img
                            className="h-1.5 w-1.5"
                            src="images/img_location.svg"
                            alt="location"
                          />
                          <Text
                            className="sm:text-[1px] text-[2.39px] text-blue_gray-900_02 w-auto"
                            size="txtLatoSemiBold239"
                          >
                            Property Brothers
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[5.3px] items-start justify-start w-auto">
                          <div className="flex flex-col items-start justify-start p-[1.33px] w-auto">
                            <Text
                              className="sm:text-[1px] text-[2.39px] text-teal-700 w-auto"
                              size="txtLatoExtraBold239"
                            >
                              Home
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start p-[1.33px] w-auto">
                            <Text
                              className="sm:text-[1px] text-[2.39px] text-white-A700 w-auto"
                              size="txtLatoMedium239"
                            >
                              Explore
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start p-[1.33px] w-auto">
                            <Text
                              className="sm:text-[1px] text-[2.39px] text-white-A700 w-auto"
                              size="txtLatoMedium239"
                            >
                              About Us
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start p-[1.33px] w-auto">
                            <Text
                              className="sm:text-[1px] text-[2.39px] text-white-A700 w-auto"
                              size="txtLatoMedium239"
                            >
                              Help & Support
                            </Text>
                          </div>
                          <Text
                            className="bg-white-A700 justify-center px-0.5 rounded-[0.8px] sm:text-[1px] text-[2.39px] text-black-900_02 text-shadow-ts w-auto"
                            size="txtLatoMedium239Black90002"
                          >
                            Add Property
                          </Text>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-row h-[3px] items-center justify-center w-[3px]"
                          style={{
                            backgroundImage: "url('images/img_group9935.svg')",
                          }}
                        >
                          <div className="bg-red-600 h-px ml-0.5 rounded-[50%] w-px"></div>
                        </div>
                        <Img
                          className="h-[5px] md:h-auto rounded-[50%] w-[5px]"
                          src="images/img_ellipse1.png"
                          alt="EllipseOne"
                        />
                      </div>
                      <Text
                        className="leading-[11.13px] mt-[17px] text-[6.89px] text-white-A700 w-[41%] sm:w-full"
                        size="txtLatoExtraBold689"
                      >
                        Easiest Way To Find Your Dream Place
                      </Text>
                      <Text
                        className="leading-[3.71px] mt-0.5 sm:text-[1px] text-[2.39px] text-white-A700 w-[46%] sm:w-full"
                        size="txtLatoMedium239"
                      >
                        A Place where you can find a dream place for you of
                        various types, all over the world at affordable prices.
                      </Text>
                      <div className="bg-gray-100 flex flex-col items-start justify-start md:ml-[0] ml-[7px] mt-2.5 p-[3.18px] rounded-[1.59px] shadow-bs6 w-auto">
                        <div className="flex flex-row gap-[4.37px] items-center justify-start w-auto">
                          <div className="flex flex-row gap-[3.05px] items-start justify-start w-auto">
                            <div className="flex flex-col gap-[2.78px] items-start justify-start w-auto">
                              <div className="bg-white-A700 flex flex-col items-start justify-start px-[2.12px] py-[0.13px] rounded-[2.96px] w-auto">
                                <div className="flex flex-row gap-[0.8px] items-center justify-start w-auto">
                                  <div className="flex flex-row gap-[1.33px] items-center justify-start p-[1.33px] w-auto">
                                    <Img
                                      className="h-0.5 w-0.5"
                                      src="images/img_dollarsign1.svg"
                                      alt="dollarsignOne"
                                    />
                                    <Text
                                      className="text-[1.86px] sm:text-[1px] text-black-900_02 w-auto"
                                      size="txtLatoMedium186"
                                    >
                                      Rent
                                    </Text>
                                  </div>
                                  <Img
                                    className="h-0.5 w-0.5"
                                    src="images/img_keyboardarrow.svg"
                                    alt="keyboardarrow"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-[0.53px] items-start justify-start w-auto">
                                <Text
                                  className="sm:text-[1px] text-[2.12px] text-black-900_02 w-[11px]"
                                  size="txtLatoSemiBold212"
                                >
                                  Price Range
                                </Text>
                                <div className="bg-white-A700 flex flex-col items-start justify-start px-[2.12px] rounded-[3.18px] w-auto">
                                  <div className="flex flex-row gap-[1.59px] items-center justify-start w-auto">
                                    <div className="flex flex-row gap-[1.33px] items-center justify-start p-[1.33px] w-auto">
                                      <Text
                                        className="sm:text-[1px] text-[2.12px] text-teal-500"
                                        size="txtLatoRegular212"
                                      >
                                        $
                                      </Text>
                                      <Text
                                        className="text-[1.86px] sm:text-[1px] text-black-900_02 w-auto"
                                        size="txtLatoMedium186"
                                      >
                                        USD
                                      </Text>
                                    </div>
                                    <Img
                                      className="h-0.5 w-0.5"
                                      src="images/img_keyboardarrow.svg"
                                      alt="keyboardarrow One"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[4.24px] items-start justify-start w-auto">
                              <div className="h-[5px] relative rounded-[2.98px] w-full">
                                <Line className="bg-white-A700 h-[5.96px] m-auto rounded-[2.98px] w-full" />
                                <Text
                                  className="absolute h-max inset-y-[0] left-[5%] my-auto text-[1.86px] sm:text-[1px] text-black-900_4c"
                                  size="txtLatoMedium186Black9004c"
                                >
                                  Your desiered location goes here
                                </Text>
                              </div>
                              <div className="flex flex-col gap-[0.53px] items-center justify-start w-auto">
                                <Img
                                  className="h-0.5 w-[62px]"
                                  src="images/img_group902.svg"
                                  alt="Group902"
                                />
                                <div className="flex flex-row gap-[25.72px] items-start justify-start w-auto">
                                  <div className="h-1 relative rotate-[90deg] w-[22%]">
                                    <Img
                                      className="h-1 m-auto w-full"
                                      src="images/img_union.svg"
                                      alt="Union"
                                    />
                                    <Text
                                      className="absolute bottom-[0] inset-x-[0] mx-auto rotate-[-90deg] text-[1.86px] sm:text-[1px] text-white-A700 w-max"
                                      size="txtLatoSemiBold186"
                                    >
                                      $ 4,600
                                    </Text>
                                  </div>
                                  <div className="h-1 relative rotate-[90deg] w-[24%]">
                                    <Img
                                      className="h-1 m-auto w-full"
                                      src="images/img_union.svg"
                                      alt="Union One"
                                    />
                                    <Text
                                      className="absolute bottom-[0] inset-x-[0] mx-auto rotate-[-90deg] text-[1.86px] sm:text-[1px] text-white-A700 w-max"
                                      size="txtLatoSemiBold186"
                                    >
                                      $ 12,000
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <List
                              className="flex flex-col gap-[4.37px] items-start w-auto"
                              orientation="vertical"
                            >
                              <div className="bg-white-A700 flex flex-col items-start justify-start my-0 px-[2.12px] py-[0.13px] rounded-[2.96px] w-auto">
                                <div className="flex flex-row gap-[4.77px] items-center justify-start w-auto">
                                  <div className="flex flex-row gap-[1.33px] items-center justify-start p-[1.33px] w-auto">
                                    <Img
                                      className="h-0.5 w-0.5"
                                      src="images/img_frame.svg"
                                      alt="Frame"
                                    />
                                    <Text
                                      className="text-[1.86px] sm:text-[1px] text-black-900_02 w-auto"
                                      size="txtLatoMedium186"
                                    >
                                      House
                                    </Text>
                                  </div>
                                  <Img
                                    className="h-0.5 w-0.5"
                                    src="images/img_keyboardarrow.svg"
                                    alt="keyboardarrow Two"
                                  />
                                </div>
                              </div>
                              <div className="bg-white-A700 flex flex-col items-start justify-start my-0 px-[2.12px] py-[0.13px] rounded-[2.96px] w-auto">
                                <div className="flex flex-row gap-[4.51px] items-center justify-start w-auto">
                                  <div className="flex flex-row gap-[1.33px] items-center justify-start p-[1.33px] w-auto">
                                    <Img
                                      className="h-0.5 w-0.5"
                                      src="images/img_meetingroom.svg"
                                      alt="meetingroom"
                                    />
                                    <Text
                                      className="text-[1.86px] sm:text-[1px] text-black-900_02 w-auto"
                                      size="txtLatoMedium186"
                                    >
                                      Rooms
                                    </Text>
                                  </div>
                                  <Img
                                    className="h-0.5 w-0.5"
                                    src="images/img_keyboardarrow.svg"
                                    alt="keyboardarrow Three"
                                  />
                                </div>
                              </div>
                            </List>
                          </div>
                          <Line className="bg-teal-500 h-4 w-px" />
                          <div className="flex flex-col gap-[0.93px] items-center justify-start w-[15px]">
                            <div className="flex flex-col items-center justify-start w-2">
                              <Text
                                className="text-[2.65px] text-black-900_02 w-auto"
                                size="txtLatoBold265"
                              >
                                563
                              </Text>
                              <Text
                                className="sm:text-[1px] text-[2.12px] text-gray-500 w-1.5"
                                size="txtLatoMedium212"
                              >
                                Results
                              </Text>
                            </div>
                            <Text
                              className="bg-black-900_02 justify-center px-1 rounded-[3.06px] sm:text-[1px] text-[2.12px] text-shadow-ts1 text-white-A700 w-auto"
                              size="txtLatoSemiBold212WhiteA700"
                            >
                              Search
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start w-[82%] md:w-full">
                    <div className="md:h-[59px] h-[79px] relative w-3/4">
                      <Img
                        className="absolute bottom-[0] h-[59px] left-[10%] w-[74%]"
                        src="images/img_computer.svg"
                        alt="computer"
                      />
                      <Text
                        className="absolute leading-[7.56px] left-[0] text-[4.77px] text-black-900_02 top-[5%] w-[48%] sm:w-full"
                        size="txtLatoBold477"
                      >
                        Explore Our Valuable Services That You Can’t Miss
                      </Text>
                      <div className="absolute bottom-[19%] flex flex-row gap-6 inset-x-[0] items-start justify-between mx-auto w-full">
                        <Text
                          className="leading-[3.71px] sm:text-[1px] text-[2.39px] text-gray-600"
                          size="txtLatoMedium239Gray600"
                        >
                          We are pleased to give you unique service that you
                          won’t find anywhere and would love to explore beyond
                          just property.
                        </Text>
                        <div className="bg-white-A700 flex flex-col items-center justify-start mt-[3px] p-[5px] rounded-[2.12px]">
                          <Img
                            className="h-1.5 w-1.5"
                            src="images/img_star.svg"
                            alt="star"
                          />
                          <Text
                            className="my-[3px] text-[2.65px] text-black-900_02"
                            size="txtLatoBold265"
                          >
                            Explore Best Realtor
                          </Text>
                        </div>
                      </div>
                      <div className="absolute bg-teal-50 flex flex-col items-center justify-end p-1 right-[0] rounded-[2.12px] top-[0] w-[31%]">
                        <Img
                          className="h-1.5 mt-0.5 w-1.5"
                          src="images/img_home_6X6.svg"
                          alt="home One"
                        />
                        <Text
                          className="leading-[4.24px] mt-0.5 text-[2.65px] text-black-900_02 text-center w-[82%] sm:w-full"
                          size="txtLatoBold265"
                        >
                          Post a Property For Free
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start ml-[3px] w-[23%]">
                      <div className="bg-white-A700 flex flex-col items-center justify-end p-1 rounded-[2.12px] w-full">
                        <Img
                          className="h-1.5 mt-0.5 w-1.5"
                          src="images/img_user_6X6.svg"
                          alt="user"
                        />
                        <Text
                          className="leading-[4.24px] mt-0.5 text-[2.65px] text-black-900_02 text-center w-3/4 sm:w-full"
                          size="txtLatoBold265"
                        >
                          Direct Contact To Seller
                        </Text>
                      </div>
                      <div className="bg-white-A700 flex flex-col items-center justify-end mt-[3px] p-1 rounded-[2.12px] w-full">
                        <Img
                          className="h-1.5 mt-0.5 w-1.5"
                          src="images/img_location_6X6.svg"
                          alt="location One"
                        />
                        <Text
                          className="leading-[4.24px] mt-0.5 text-[2.65px] text-black-900_02 text-center w-[86%] sm:w-full"
                          size="txtLatoBold265"
                        >
                          Search Property From Map
                        </Text>
                      </div>
                    </div>
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

export default LandingPagePage;
