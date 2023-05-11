import React from "react";
import "../styles/SinUp.css";
import { Img, Text, Button } from "components";
import { Line } from "components/Line";
import { NavLink } from "react-router-dom";

const SignupdPagePage = () => {
  return (
    <div className="flex ">
      <div className="bg-red_600 flex flex-col items-center h-[100vh] justify-start p-[9px] rounded-bl-none rounded-br-[75px] rounded-tl-none rounded-tr-[75px] w-full">

        {/* language selection */}
        <div className="h-16 relative w-[32%] self-start">

          <select id="countries" className=" border-0 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white text-white bg-red-600">
            <option selected value="UK" className="text-white bg-red-600">English(UK)</option>
            <option value="US" className="text-white bg-red-600">English(US)</option>
            <option value="IT" className="text-white bg-red-600">France</option>
            <option value="DE" className="text-white bg-red-600">Germany</option>
          </select>

        </div>

        <div className="flex flex-col justify-start w-[70%] pt-7">
          <Text
            className=" text-white_A700 w-auto text-center text-2xl"
          >
            Register Account
          </Text>

          {/* login form */}
          <form method="post" className="flex flex-col">
            <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
            <div class="relative mb-6">
              <span class="absolute flex items-center justify-center pointer-events-none ml-2 h-full">
                <Img
                  src="images/img_iconparkeditname.svg"
                  className="h-8 w-8 text-red"
                  alt="iconparkeditnam"
                />
                <Line className="bg-red_600 h-16 w-px" />
              </span>
              <input type="text" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center" placeholder="" name="firstName" />
            </div>

            <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
            <div class="relative mb-6">
              <span class="absolute flex items-center justify-center pointer-events-none ml-2 h-full">
                <Img
                  src="images/img_iconparkeditname.svg"
                  className="h-8 w-8 text-red"
                  alt="iconparkeditnam"
                />
                <Line className="bg-red_600 h-16 w-px" />
              </span>
              <input type="text" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center" placeholder="" name="lastName" />
            </div>

            <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
            <div class="relative mb-6">
              <span class="absolute flex items-center justify-center pointer-events-none ml-2 h-full">
                <Img
                  src="images/img_ionearthsharp.svg"
                  className="h-8 w-8"
                  alt="ionearthsharp"
                />
                <Line className="bg-red_600 h-16 w-px" />
              </span>
              <input type="text" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center" placeholder="" />
            </div>

            <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
            <div class="relative mb-6">
              <span class="absolute flex items-center justify-center pointer-events-none ml-2 h-full">
                <Img
                  src="images/img_materialsymbol_red_600_40x40.svg"
                  className="h-10 w-10"
                  alt="materialsymbol_Two"
                />
                <Line className="bg-red_600 h-16 w-px" />
              </span>
              <input type="tel" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center" placeholder="" />
            </div>
            <NavLink
              className="text-right text-sm text-white_A700 w-auto"
              to="/orderhistory"
            >
              Go to ZMall Global
            </NavLink><br />
            <Button
              className="p-3 mt-5 cursor-pointer bg-gray-200 w-[32%] text-center text-red_600 sm:text-xl self-center rounded-lg font-semibold"
              shape="RoundedBorder22"
              size="sm"
              variant="FillWhiteA700"
              type="submit"
            >
              Verify
            </Button>
          </form>


          {/*<div>
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
              </div>
 </div>*/}

        </div>


        <div className="flex flex-row gap-[18px] items-center justify-center w-[36%] md:w-full">
          <Text
            className="font-normal not-italic text-left text-white_A700 w-auto text-sm mt-5"
          >
            Already have an account
          </Text>
          <Text className="font-normal not-italic text-left text-white_A700 w-auto text-sm mt-5">Login</Text>
        </div>

      </div>
      <div className="w-full z-10 basis-11/12">
        <Img
          src="images/img_zmalllogos21.png"
          className="absolute right-[20px] top-[20px] h-[60px] object-cover"
          alt="zmalllogosTwentyOne"
        />
        <Img
          src="images/img_profileee1.png"
          className="absolute w-[45%] object-cover top-[40px] left-[47%]"
          alt="profileeeOne"
        />
      </div>
      {/* <div className="bg-white_A700 font-poppins h-[1117px] mx-auto relative w-full">
        
        <div className="absolute md:h-[1109px] h-[1118px] inset-[0] justify-center m-auto md:px-5 w-full">
          
          
        </div>
      </div> */}
    </div>
  );
};

export default SignupdPagePage;
