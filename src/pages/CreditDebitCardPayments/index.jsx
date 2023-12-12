import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const CreditDebitCardPaymentsPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="bg-white-A700 flex flex-row items-center justify-center p-6 sm:px-5 shadow-bs w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-[90%]">
              <Img
                className="h-[35px] w-[13%]"
                src="images/img_group_1.svg"
                alt="Group"
              />
              <Input
                name="InputField"
                placeholder="Search"
                value={inputfieldvalue}
                onChange={(e) => setInputfieldvalue(e)}
                className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                wrapClassName="border border-blue_gray-300 border-solid flex md:ml-[0] ml-[52px] w-2/5 md:w-full"
                prefix={
                  <Img
                    className="cursor-pointer h-5 my-4 mx-3"
                    src="images/img_search_black_900.svg"
                    alt="search"
                  />
                }
                suffix={
                  <CloseSVG
                    fillColor="#bac1ce"
                    className="cursor-pointer h-5 my-auto"
                    onClick={() => setInputfieldvalue("")}
                    style={{
                      visibility:
                        inputfieldvalue?.length <= 0 ? "hidden" : "visible",
                    }}
                    height={20}
                    width={20}
                    viewBox="0 0 20 20"
                  />
                }
                shape="round"
              ></Input>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center md:ml-[0] ml-[50px] w-[33%] md:w-full">
                <div className="flex flex-row gap-[19px] items-center justify-between pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="ml-[9px] text-base text-gray-900"
                    size="txtGilroyMedium16"
                  >
                    Orders
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_gray_901.svg"
                    alt="arrowdown"
                  />
                </div>
                <Text
                  className="sm:ml-[0] ml-[51px] sm:mt-0 mt-[11px] text-base text-gray-900"
                  size="txtGilroyMedium16"
                >
                  Categories
                </Text>
                <div className="flex flex-row gap-[26px] items-center justify-between sm:ml-[0] ml-[51px] pl-[5px] py-[5px] w-[27%] sm:w-full">
                  <Text
                    className="ml-4 text-base text-gray-900"
                    size="txtGilroyMedium16"
                  >
                    More
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_gray_901.svg"
                    alt="arrowdown One"
                  />
                </div>
              </div>
              <Img
                className="h-[26px] md:ml-[0] ml-[66px] w-[2%]"
                src="images/img_cart.svg"
                alt="cart"
              />
            </div>
          </div>
        </header>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-start justify-start max-w-[1268px] mx-auto pl-8 md:px-5 rounded-lg w-full">
          <div className="bg-white-A700 h-[1087px] sm:h-[1216px] md:h-[1291px] md:mt-0 mt-4 relative rounded-lg shadow-bs1 w-[64%] md:w-full">
            <div className="bg-white-A700 h-[895px] mx-auto rounded-lg shadow-bs1 w-full"></div>
            <div className="absolute flex flex-col gap-[23px] h-full inset-[0] items-center justify-center m-auto rounded-lg w-full">
              <Input
                name="Frame9983"
                placeholder="Payment Options"
                className="font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-black-900_01 sm:pr-5 sm:text-xl text-2xl text-left w-full"
                wrapClassName="pr-[35px] w-full"
                color="blue_gray_100"
                size="lg"
                variant="underline"
              ></Input>
              <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-center justify-start p-4 rounded w-full">
                <div className="flex flex-col gap-[30px] justify-start my-2 w-full">
                  <div className="flex flex-row gap-6 items-center justify-start w-[37%] md:w-full">
                    <Img
                      className="h-9 w-9"
                      src="images/img_radiobutton.svg"
                      alt="RadioButton"
                    />
                    <Text
                      className="text-black-900_03 text-xl"
                      size="txtGilroyMedium20"
                    >
                      Credit/Debit/ATM Card
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-start md:ml-[0] ml-[60px] w-[67%] md:w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[500px] sm:w-full">
                      <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                        <Text
                          className="text-black-900_03 text-lg"
                          size="txtGilroyMedium18"
                        >
                          Name On Card
                        </Text>
                      </div>
                      <Input
                        name="InputField One"
                        placeholder="Enter Your First Name"
                        className="!placeholder:text-blue_gray-400 !text-blue_gray-400 font-medium md:h-auto p-0 sm:h-auto text-left text-lg w-full"
                        wrapClassName="border border-blue_gray-100 border-solid rounded w-full"
                        type="text"
                        shape="round"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                        <Text
                          className="text-black-900_03 text-lg"
                          size="txtGilroyMedium18"
                        >
                          Card Number
                        </Text>
                      </div>
                      <div className="bg-white-A700 border border-blue_gray-100 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-3 rounded w-full">
                        <div className="flex flex-col items-start justify-end pr-1 py-1">
                          <Text
                            className="text-blue_gray-400 text-lg"
                            size="txtGilroyMedium18Bluegray400"
                          >
                            XXXX XXXX XXXX XX34
                          </Text>
                        </div>
                        <Img
                          className="sm:flex-1 h-[17px] md:h-auto object-cover w-[12%] sm:w-full"
                          src="images/img_rupaylogo1.png"
                          alt="RupayLogoOne"
                        />
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-[242px]">
                        <div className="flex flex-col items-start justify-start pr-[7px] pt-[7px] w-full">
                          <Text
                            className="text-black-900_03 text-lg"
                            size="txtGilroyMedium18"
                          >
                            Expiry Date
                          </Text>
                        </div>
                        <Input
                          name="InputField Two"
                          placeholder="00/0000"
                          className="!placeholder:text-blue_gray-400 !text-blue_gray-400 font-medium md:h-auto p-0 sm:h-auto text-left text-lg w-full"
                          wrapClassName="border border-blue_gray-100 border-solid rounded w-full"
                          shape="round"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-[242px]">
                        <div className="flex flex-col items-start justify-end pr-1 py-1 w-full">
                          <Text
                            className="text-black-900_03 text-lg"
                            size="txtGilroyMedium18"
                          >
                            CVV
                          </Text>
                        </div>
                        <Input
                          name="price One"
                          placeholder="XXX"
                          className="!placeholder:text-blue_gray-400 !text-blue_gray-400 font-medium md:h-auto p-0 sm:h-auto text-left text-lg w-full"
                          wrapClassName="border border-blue_gray-100 border-solid rounded w-full"
                          shape="round"
                        ></Input>
                      </div>
                    </div>
                    <Button
                      className="cursor-pointer font-medium text-base text-center w-[500px]"
                      shape="round"
                      color="blue_A700"
                      size="2xl"
                    >
                      Pay $1120.58
                    </Button>
                  </div>
                </div>
              </div>
              <List
                className="flex flex-col gap-6 items-center w-full"
                orientation="vertical"
              >
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-1 md:flex-col flex-row gap-4 items-center justify-between p-4 rounded w-full">
                  <Img
                    className="h-9 md:mt-0 my-2 w-9"
                    src="images/img_search.svg"
                    alt="search"
                  />
                  <div className="flex flex-row gap-4 items-center justify-start pr-1 py-1">
                    <Img
                      className="h-4 md:h-auto object-cover w-[7%]"
                      src="images/img_image46.png"
                      alt="imageFortySix"
                    />
                    <Text
                      className="text-black-900_01 text-xl"
                      size="txtGilroyMedium20Black90001"
                    >
                      UPI
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-1 flex-row gap-4 items-center justify-start p-4 rounded w-full">
                  <Img
                    className="h-9 my-2 w-9"
                    src="images/img_search.svg"
                    alt="search One"
                  />
                  <div className="flex flex-row gap-4 items-end justify-center w-[17%]">
                    <Img
                      className="h-[34px] w-[37%]"
                      src="images/img_cut.svg"
                      alt="cut"
                    />
                    <Text
                      className="mb-0.5 mt-2 text-black-900_01 text-xl"
                      size="txtGilroyMedium20Black90001"
                    >
                      Paypal
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-1 flex-row gap-4 items-center justify-start p-4 rounded w-full">
                  <Img
                    className="h-9 my-2 w-9"
                    src="images/img_search.svg"
                    alt="search Two"
                  />
                  <div className="flex flex-row gap-4 items-end justify-center w-[23%]">
                    <Img
                      className="h-[30px] w-[27%]"
                      src="images/img_paymentmethod.svg"
                      alt="PaymentMethod"
                    />
                    <Text
                      className="mt-1.5 text-black-900_01 text-xl"
                      size="txtGilroyMedium20Black90001"
                    >
                      Google Pay
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-1 md:flex-col flex-row gap-4 items-center justify-between p-4 rounded w-full">
                  <Img
                    className="h-9 md:mt-0 my-2 w-9"
                    src="images/img_search.svg"
                    alt="search Three"
                  />
                  <div className="flex md:flex-col flex-row gap-4 items-center justify-start">
                    <Img
                      className="h-[34px] w-[7%]"
                      src="images/img_computer.svg"
                      alt="computer"
                    />
                    <Text
                      className="text-black-900_01 text-xl"
                      size="txtGilroyMedium20Black90001"
                    >
                      Net Banking
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-1 md:flex-col flex-row gap-4 items-center justify-between p-4 rounded w-full">
                  <Img
                    className="h-9 md:mt-0 my-2 w-9"
                    src="images/img_search.svg"
                    alt="search Four"
                  />
                  <div className="flex md:flex-col flex-row gap-4 items-center justify-start">
                    <Img
                      className="h-[34px] w-[7%]"
                      src="images/img_offer.svg"
                      alt="offer"
                    />
                    <Text
                      className="text-black-900_01 text-xl"
                      size="txtGilroyMedium20Black90001"
                    >
                      Cash on Delivery
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="bg-white-A700 flex md:flex-1 flex-col gap-8 items-center justify-start mb-[552px] p-4 rounded-lg shadow-bs1 w-[32%] md:w-full">
            <div className="flex flex-col gap-[15px] items-start justify-start w-[92%] md:w-full">
              <Input
                name="Group1930"
                placeholder="Price Details"
                className="font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-black-900_01 sm:pr-5 sm:text-xl text-2xl text-left w-full"
                wrapClassName="pr-[35px] w-full"
                color="blue_gray_100"
                size="lg"
                variant="underline"
              ></Input>
              <div className="flex flex-col gap-7 items-center justify-start pt-[5px] w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-blue_gray-400 text-lg"
                    size="txtGilroyMedium18Bluegray400"
                  >
                    Price(2 iteam)
                  </Text>
                  <Text
                    className="text-black-900_01 text-lg"
                    size="txtGilroyMedium18Black90001"
                  >
                    $1110.58
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-blue_gray-400 text-lg"
                    size="txtGilroyMedium18Bluegray400"
                  >
                    Discount
                  </Text>
                  <Text
                    className="text-green-600 text-lg"
                    size="txtGilroyMedium18Green600"
                  >
                    -$111.98
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="text-blue_gray-400 text-lg"
                    size="txtGilroyMedium18Bluegray400"
                  >
                    Delivery Charges
                  </Text>
                  <Text
                    className="text-black-900_01 text-lg"
                    size="txtGilroyMedium18Black90001"
                  >
                    $10
                  </Text>
                </div>
              </div>
              <Line className="bg-blue_gray-100 h-px w-full" />
              <div className="flex flex-row gap-[68px] items-center justify-start w-[94%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                  size="txtGilroyMedium24"
                >
                  Total Amount
                </Text>
                <Text
                  className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                  size="txtGilroyMedium24"
                >
                  $1120.58
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-semibold text-base text-center w-[326px]"
              shape="round"
              color="blue_A700"
              size="2xl"
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditDebitCardPaymentsPage;
