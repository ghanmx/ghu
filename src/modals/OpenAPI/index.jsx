import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Text } from "components";

const OpenAPIModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[22%]"
      overlayClassName="bg-gray-900_cc fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col gap-2 items-center justify-end p-4 md:px-5 rounded-[10px] shadow-bs w-full">
          <Text
            className="mt-[7px] text-blue-A700 text-lg"
            size="txtGilroyMedium18BlueA700"
          >
            Open API
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="leading-[26.00px] text-base text-blue_gray-900 text-center w-full"
              size="txtGilroyRegular16Bluegray900"
            >
              Access publicly available application programming.
            </Text>
            <div className="flex flex-row gap-4 items-center justify-between rounded-md w-full">
              <Button
                className="common-pointer cursor-pointer font-medium min-w-[134px] rounded-md text-center text-sm"
                onClick={props.onRequestClose}
                shape="round"
                color="blue_A700"
                size="lg"
                variant="outline"
              >
                Cancel
              </Button>
              <Button
                className="border border-blue-A700 border-solid cursor-pointer font-medium min-w-[134px] rounded-md text-center text-sm"
                shape="round"
                color="blue_A700"
                size="lg"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default OpenAPIModal;
