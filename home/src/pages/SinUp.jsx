import React from "react";

import { Img, Text,  Button } from "components";
import { Line } from "components/Line";

const SignupdPagePage = () => {
  return (
    <>
      <div className="bg-white_A700 font-poppins h-[1117px] mx-auto relative w-full">
        <Img
          src="images/img_zmalllogos21.png"
          className="h-[113px] ml-auto mt-12 object-cover w-[17%]"
          alt="zmalllogosTwentyOne"
        />
        <div className="absolute md:h-[1109px] h-[1118px] inset-[0] justify-center m-auto md:px-5 w-full">
          <Img
            src="images/img_profileee1.png"
            className="absolute bottom-[3%] h-[919px] object-cover right-[0] w-[55%]"
            alt="profileeeOne"
          />
          <div className="absolute bg-red_600 flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto p-[9px] rounded-bl-none rounded-br-[75px] rounded-tl-none rounded-tr-[75px] w-[52%]">
            <div className="flex flex-col gap-11 items-center justify-start mb-[108px] md:ml-[0] ml-[37px] w-[81%] md:w-full">
              <div className="flex flex-col justify-start w-full">
                <div className="h-16 relative w-[32%]">
                  <Text
                    className="absolute left-[0] text-left text-white_A700 top-[17%] w-auto"
                    as="h2"
                    variant="h2"
                  >
                    English (UK)
                  </Text>
                  <Img
                    src="images/img_materialsymbol.svg"
                    className="absolute h-16 inset-y-[0] my-auto right-[0] w-16"
                    alt="materialsymbol"
                  />
                </div>
                <Text
                  className="md:ml-[0] ml-[186px] mt-[109px] text-left text-white_A700 w-auto"
                  as="h1"
                  variant="h1"
                >
                  Register Account
                </Text>
                <Text
                  className="md:ml-[0] ml-[79px] mt-[67px] text-left text-white_A700 w-auto"
                  as="h3"
                  variant="h3"
                >
                  First Name
                </Text>
                <div className="flex flex-col justify-start md:ml-[0] ml-[59px] mt-1.5 w-[92%] md:w-full">
                  <div className="h-[81px] relative w-[99%] md:w-full">
                    <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[4%] my-auto w-[11%]">
                      <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                        <Img
                          src="images/img_minimize.svg"
                          className="h-[43px] mt-[38px] w-auto"
                          alt="minimize"
                        />
                        <Line className="bg-red_600 h-16 mb-[17px] w-px" />
                      </div>
                    </div>
                    <div className="absolute bg-white_A700 flex flex-row gap-[17px] inset-x-[0] items-center justify-start mx-auto sm:px-5 px-[25px] rounded-[22px] top-[2%] w-full">
                      <Img
                        src="images/img_iconparkeditname.svg"
                        className="h-12 w-12"
                        alt="iconparkeditnam"
                      />
                      <Line className="bg-red_600 h-16 w-px" />
                    </div>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[21px] mt-2 text-left text-white_A700 w-auto"
                    as="h3"
                    variant="h3"
                  >
                    Last Name
                  </Text>
                  <div className="h-[65px] md:h-[70px] mt-1.5 relative w-full">
                    <div className="absolute bg-white_A700 flex flex-col h-max inset-[0] items-start justify-center m-auto p-3 rounded-[22px] w-full">
                      <Img
                        src="images/img_group.svg"
                        className="h-[38px] mb-0.5 ml-4 md:ml-[0] w-[37px]"
                        alt="group"
                      />
                    </div>
                    <Img
                      src="images/img_materialsymbol_red_600.svg"
                      className="absolute h-16 inset-y-[0] my-auto right-[0] w-16"
                      alt="materialsymbol_One"
                    />
                    <Line className="absolute bg-red_600 h-16 inset-y-[0] left-[14%] my-auto w-px" />
                  </div>
                  <Text
                    className="md:ml-[0] ml-[21px] mt-8 text-left text-white_A700 w-auto"
                    as="h3"
                    variant="h3"
                  >
                    Country
                  </Text>
                  <div className="bg-white_A700 flex flex-row gap-3.5 items-center justify-start mr-1.5 mt-[5px] sm:px-5 px-[23px] rounded-[22px] w-[99%] md:w-full">
                    <Img
                      src="images/img_ionearthsharp.svg"
                      className="h-[52px] w-[52px]"
                      alt="ionearthsharp"
                    />
                    <Line className="bg-red_600 h-16 w-px" />
                  </div>
                  <Text
                    className="md:ml-[0] ml-[21px] mt-[29px] text-left text-white_A700 w-auto"
                    as="h3"
                    variant="h3"
                  >
                    Phone Number
                  </Text>
                  <div className="h-[65px] md:h-[71px] mt-[7px] relative w-[99%] md:w-full">
                    <div className="absolute bg-white_A700 flex flex-col h-max inset-[0] items-start justify-center m-auto p-[11px] rounded-[22px] w-full">
                      <Img
                        src="images/img_materialsymbol_red_600_40x40.svg"
                        className="h-10 mb-0.5 ml-4 md:ml-[0] w-10"
                        alt="materialsymbol_Two"
                      />
                    </div>
                    <Line className="absolute bg-red_600 h-16 inset-y-[0] left-[14%] my-auto w-px" />
                  </div>
                  <Text
                    className="font-black md:ml-[0] ml-[475px] mt-[21px] text-left text-white_A700 w-auto"
                    as="h4"
                    variant="h4"
                  >
                    Go to ZMall Global
                  </Text>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[226px] md:ml-[0] ml-[198px] mr-[219px] mt-[22px] text-2xl md:text-[22px] text-center text-red_600 sm:text-xl w-auto"
                    shape="RoundedBorder22"
                    size="sm"
                    variant="FillWhiteA700"
                  >
                    Verify{" "}
                  </Button>
                </div>
              </div>
              <div className="flex flex-row gap-[18px] items-center justify-center w-[36%] md:w-full">
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-auto"
                  as="h4"
                  variant="h4"
                >
                  Already have an account
                </Text>
                <a
                  href="javascript:"
                  className="font-extrabold text-[15px] text-left text-white_A700 w-auto"
                >
                  <Text className="">Login</Text>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupdPagePage;
