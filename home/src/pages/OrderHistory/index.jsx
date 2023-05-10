import React from "react";

import { Img, Text, Button, Input, List } from "components";
import "../../styles/index.css";
import { NavLink } from "react-router-dom";

const OrderHistoryPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-montserrat items-start justify-end mx-auto pt-[37px] w-full">


        {/* added nav bar */}


        <nav className=" h-[60px] flex flex-row w-full px-11 justify-between">
          <Img
            src="images/img_zmalllogos21.png"
            className="h-[100%] justify-center object-cover"
            alt="zmalllogosTwentyOne_One"
          />
          <div className=" flex flex-row nav-links items-center">
            <Text
              className="cursor-pointer text-sm font-bold m-auto text-left text-red_600 w-auto"
              variant="body2"
            >
              About Us
            </Text>

            <Text
              className="cursor-pointer text-sm font-bold m-auto text-left text-red_600 w-auto"
              variant="body2"
            >
              All Restautant
            </Text>

            <Text
              className="cursor-pointer text-sm font-bold m-auto text-left text-red_600 w-auto"
              variant="body2"
            >
              News and Blogs
            </Text>

            <NavLink className="cursor-NavLink-sm font-bold m-auto text-left text-red_600 w-auto" to="/sinUp">Sign Up</NavLink>

            <Button
              className=" cursor-pointer font-bold text-center text-white_A700 text-sm ml-5"
              size="sm"
              variant="FillRed600"
            >
              Sign In
            </Button>
          </div>
        </nav>


        {/* /end of added navbar */}


        {/* welcome section */}
        <div className="bg-gray-200 md:h-[518px] h-[490px] w-full flex items-center mt-[50px]">
          <div className="flex flex-col justify-center pl-[100px] w-full box-border basis-10/12">
            <Text
              className="h-max text-black_900 text-left"
              as="h5"
              variant="h5"
            >
              <>
                ORDER YOUR FOOD
                <br />
                FROM YOUR FAVOURITE
                <br />
                RESTAURANT
              </>
            </Text>

            {/* search input */}
            <Input
              wrapClassName="flex w-[70%] my-[20px] outline outline-gray-300 outline-1 outline-offset-4"
              className="font-light leading-[normal] md:text-[22px] p-0 placeholder:text-black_900 sm:text-xl text-black_900  w-full text-lg text-center"
              name="groupSeven"
              placeholder="Search Your Favorite&#39;s Restaurant"
              suffix={
                <button className=" bg-red_600 shadow-bs rounded-full">
                  <Img
                    src="images/img_materialsymbol.svg"
                    className="my-auto"
                    alt="material-symbols:arrow-right-alt"
                  />
                </button>
              }
              shape="RoundedBorder37"
              size="sm"
              variant="FillWhiteA700"
            ></Input>
            <div className="flex flex-row items-center justify-center pl-[20px]">
              <Img
                src="images/img_location.svg"
                className="h-[31px] w-[30px]"
                alt="location_One"
              />
              <Text
                className="font-bold text-black_900 w-full text-sm"
                variant="body2"
              >
                EXPLORE RESTAURANTS
              </Text>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-red_600 h-[450px] rounded-bl-[250px] rounded-br-none rounded-tl-[250px] rounded-tr-none w-full flex overflow-x-hidden pl-[20px]">
              <Img
                src="images/img_dishsplashscreen2.png"
                className="h-[400px] w-[700px] m-auto object-cover rounded-full mr-[10px] "
                alt="dishsplashscree_Two"
              />
              <Img
                src="images/img_image1.png"
                className="h-[400px] w-[400px] m-auto object-cover rounded-l-full"
                alt="imageOne_One"
              />
            </div>
          </div>
        </div>


        {/* end of welcom section */}


        {/* sliding cart */}

        <div className="h-[250px] w-full my-[100px] flex justify-evenly items-center">
          <div className="flex justify-center items-center">
            <Img
              src="images/img_group30.svg"
              className="h-[68px] w-[68px]"
              alt="materialsymbol_One"
            />
          </div>

          <div className="flex w-[60%] overflow-x-scroll scrollNone slide">

            <Img
              src="images/img_rectangle27.png"
              className="h-[100px] object-cover  w-[180px]"
              alt="rectangleTwentySeven"
            />
            <Img
              src="images/img_rectangle23.png"
              className="h-[100px] object-cover  w-[180px]"
              alt="rectangleTwentyOne"
            />
            <Img
              src="images/img_rectangle23.png"
              className="h-[100px] justify-center object-cover  w-[180px]"
              alt="rectangleTwentyOne_One"
            />
            <Img
              src="images/img_rectangle24.png"
              className="h-[100px] object-cover  w-[180px]"
              alt="rectangleTwentyFour"
            />
            <Img
              src="images/img_rectangle27.png"
              className="h-[100px] object-cover  w-[180px]"
              alt="rectangleTwentySeven"
            />
            <Img
              src="images/img_rectangle24.png"
              className="h-[100px] justify-center object-cover  w-[180px]"
              alt="rectangleTwentyFour_One"
            />
            <Img
              src="images/img_rectangle23.png"
              className="h-[100px] object-cover  w-[180px]"
              alt="rectangleTwentyOne"
            />
          </div>

          <div className="flex justify-center items-center">
            <Img
              src="images/img_group29.svg"
              className="h-[68px] w-[68px]"
              alt="materialsymbol_Two"
            />
          </div>

        </div>

        {/* end sliding cart */}



        {/* special offers */}


        <div className="flex flex-col items-center w-full" >
          <Text
            className="font-extrabold m-auto text-center text-red_600 w-auto"
            as="h5"
            variant="h5"
          >
            SPECIAL FOR YOU
          </Text>

          <div className="w-full flex flex-col items-center pt-10" style={{
            backgroundImage: "url('images/img_group13.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}>

            <div className=" w-full relative h-[600px]">
              {/* top content */}
              <div className="absolute w-full flex flex-col items-center">
                <div className="absolute bg-gray-200 pt-[300px] pb-[70px] w-[300px] rounded-t-[200px] rounded-b-[60px]">
                  <div className="flex flex-col h-full items-center justify-end mt-auto mx-auto w-full">
                    <Text
                      className="text-black_900 text-center w-auto text-3xl"
                      as="h4"
                      variant="h4"
                    >
                      KITFO
                    </Text>
                    <Text
                      className="font-normal text-black_900 text-center w-auto text-xl"
                      as="h6"
                      variant="h6"
                    >
                      ABERUS KITFO
                    </Text>
                    <div className="flex flex-col items-center justify-start mt-3.5  md:w-full">
                      <Text
                        className="font-normal line-through text-black_900 text-center w-full text-lg"
                        as="h6"
                        variant="h6"
                      >
                        350 BIRR
                      </Text>
                      <Text
                        className="font-bold text-black_900 text-center w-full text-lg"
                        as="h6"
                        variant="h6"
                      >
                        250 BIRR
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_dishsplashscreen2_1.png"
                  className="h-[300px] m-auto rotate-[-1deg] rounded-[50%]"
                  alt="dishsplashscree_Seven"
                />
                
              </div>
              {/* second contents */}
              <div className="absolute w-full flex justify-between mt-[260px] px-14">
                <Img
                  src="images/img_image1_411x428.png"
                  className="h-[240px] md:h-auto rotate-[-1deg] rounded-[50%]"
                  alt="imageOne_Three"
                />
                <Img
                  src="images/img_dishsplashscreen2_2.png"
                  className="h-[240px] md:h-auto rotate-[-1deg] rounded-[50%]"
                  alt="dishsplashscree_Twelve"
                />
              </div>
              {/* third content */}
              <div className="absolute w-full flex justify-evenly mt-[120px]">
                <Img
                  src="images/img_dishsplashscreen2_2.png"
                  className="h-[270px] md:h-auto rotate-[-1deg] rounded-[50%]"
                  alt="dishsplashscree_Eleven"
                />
                <Img
                  src="images/img_dishsplashscreen2_2.png"
                  className="h-[270px] md:h-auto rotate-[-1deg] rounded-[50%]"
                  alt="dishsplashscree_Eleven"
                />
              </div>
            </div>

            
          </div>


        </div>


        {/* end of special offers */}




        <div className="flex flex-col md:px-5 w-full">
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[93px] mt-[37px] w-[95%] md:w-full">

            {/* <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[47px] w-[87%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[88px] items-center justify-start md:mt-0 mt-[58px] w-[88px]"
                style={{ backgroundImage: "url('images/img_group30.svg')" }}
              >
                <Img
                  src="images/img_group30.svg"
                  className="h-[88px] w-[88px]"
                  alt="materialsymbol_One"
                />
              </div>
              <div className="h-[163px] md:ml-[0] ml-[159px] md:mt-0 mt-[9px] relative w-[162px]">
                <Img
                  src="images/img_rectangle23.png"
                  className="h-[163px] m-auto object-cover rounded-[37px] w-[162px]"
                  alt="rectangleTwentyThree"
                />
                <Img
                  src="images/img_rectangle23.png"
                  className="absolute h-[163px] inset-[0] justify-center m-auto object-cover rounded-[37px] w-[162px]"
                  alt="rectangleTwentyThree_One"
                />
              </div>
              <div className="h-[163px] ml-5 md:ml-[0] md:mt-0 mt-[9px] relative w-[164px]">
                <Img
                  src="images/img_rectangle22.png"
                  className="h-[163px] m-auto object-cover rounded-[37px] w-[164px]"
                  alt="rectangleTwentyTwo"
                />
                <Img
                  src="images/img_rectangle22.png"
                  className="absolute h-[163px] inset-[0] justify-center m-auto object-cover rounded-[37px] w-[164px]"
                  alt="rectangleTwentyTwo_One"
                />
              </div>
              <div className="h-[181px] md:ml-[0] ml-[66px] relative w-[182px]">
                <Img
                  src="images/img_rectangle27.png"
                  className="h-[181px] m-auto object-cover rounded-[37px] w-[182px]"
                  alt="rectangleTwentySeven"
                />
                <Img
                  src="images/img_rectangle27.png"
                  className="absolute h-[181px] inset-[0] justify-center m-auto object-cover rounded-[37px] w-[182px]"
                  alt="rectangleTwentySeven_One"
                />
              </div>
              <List
                className="sm:flex-col flex-row gap-[35px] grid grid-cols-2 md:ml-[0] ml-[53px] md:mt-0 mt-[9px] w-1/4 md:w-full"
                orientation="horizontal"
              >
                <div className="h-[163px] relative w-full">
                  <Img
                    src="images/img_rectangle23.png"
                    className="h-[163px] m-auto object-cover rounded-[37px] w-[163px]"
                    alt="rectangleTwentyOne"
                  />
                  <Img
                    src="images/img_rectangle23.png"
                    className="absolute h-[163px] inset-[0] justify-center m-auto object-cover rounded-[37px] w-[163px]"
                    alt="rectangleTwentyOne_One"
                  />
                </div>
                <div className="h-[163px] relative w-full">
                  <Img
                    src="images/img_rectangle24.png"
                    className="h-[163px] m-auto object-cover rounded-[37px] w-[163px]"
                    alt="rectangleTwentyFour"
                  />
                  <Img
                    src="images/img_rectangle24.png"
                    className="absolute h-[163px] inset-[0] justify-center m-auto object-cover rounded-[37px] w-[163px]"
                    alt="rectangleTwentyFour_One"
                  />
                </div>
              </List>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[88px] items-center justify-start md:ml-[0] ml-[132px] md:mt-0 mt-[58px] w-[88px]"
                style={{ backgroundImage: "url('images/img_group29.svg')" }}
              >
                <Img
                  src="images/img_group29.svg"
                  className="h-[88px] w-[88px]"
                  alt="materialsymbol_Two"
                />
              </div>
            </div> */}

            <div className="md:h-[177px] h-[79px] mt-[98px] relative w-[37%] md:w-full">
              {/* <Text
                className="m-auto text-center text-red_600 w-auto"
                as="h2"
                variant="h2"
              >
                SPECIAL FOR YOU
              </Text>
              <Text
                className="absolute h-full inset-[0] justify-center m-auto text-center text-red_600 w-max"
                as="h2"
                variant="h2"
              >
                SPECIAL FOR YOU
              </Text> */}
            </div>
          </div>


          <div className="h-[123px] md:h-[211px] md:ml-[0] ml-[139px] mr-[361px] mt-[118px] relative w-[73%] md:w-full">
            <div className="h-[123px] md:h-[93px] m-auto w-full">
              <Text
                className="absolute inset-x-[0] mx-auto text-black_900 text-left top-[0] w-max"
                as="h1"
                variant="h1"
              >
                What Would You Like to Order ??
              </Text>
              <Img
                src="images/img_arrowdown.svg"
                className="absolute bottom-[0] h-[87px] left-[35%] w-auto"
                alt="arrowdown"
              />
            </div>
            <Text
              className="absolute inset-x-[0] mx-auto text-black_900 text-left top-[0] w-max"
              as="h1"
              variant="h1"
            >
              What Would You Like to Order ?
            </Text>
          </div>
          <div className="flex flex-col justify-start ml-20 md:ml-[0] mt-[54px] w-[96%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[96%] md:w-full">
              <div className="h-[316px] relative w-[24%] md:w-full">
                <Img
                  src="images/img_materialsymbol_white_a700.svg"
                  className="h-[130px] ml-auto mr-[119px] my-auto w-[130px]"
                  alt="materialsymbol_Three"
                />
                <div className="absolute bg-red_600 flex flex-col h-full inset-[0] items-end justify-center m-auto p-[92px] md:px-10 sm:px-5 w-full">
                  <Img
                    src="images/img_materialsymbol_white_a700.svg"
                    className="h-[130px] mr-[27px] mt-0.5 w-[130px]"
                    alt="materialsymbol_Four"
                  />
                </div>
              </div>
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[119px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[69%] md:w-full"
                orientation="horizontal"
              >
                <div className="h-[301px] relative w-full">
                  <Img
                    src="images/img_rectangle57.png"
                    className="h-[301px] m-auto object-cover rounded-bl-[70px] rounded-br-none rounded-tl-none rounded-tr-[70px] w-[300px]"
                    alt="rectangleFiftySeven"
                  />
                  <Img
                    src="images/img_rectangle57.png"
                    className="absolute h-[301px] inset-[0] justify-center m-auto object-cover rounded-bl-[70px] rounded-br-none rounded-tl-none rounded-tr-[70px] w-[300px]"
                    alt="rectangleFiftySeven_One"
                  />
                </div>
                <div className="h-[301px] relative w-full">
                  <Img
                    src="images/img_rectangle58.png"
                    className="h-[301px] m-auto object-cover rounded-bl-[70px] rounded-br-none rounded-tl-none rounded-tr-[70px] w-[300px]"
                    alt="rectangleFiftyEight"
                  />
                  <Img
                    src="images/img_rectangle58.png"
                    className="absolute h-[301px] inset-[0] justify-center m-auto object-cover rounded-bl-[70px] rounded-br-none rounded-tl-none rounded-tr-[70px] w-[300px]"
                    alt="rectangleFiftyEight_One"
                  />
                </div>
                <div className="h-[301px] relative w-full">
                  <Img
                    src="images/img_rectangle59.png"
                    className="h-[301px] m-auto object-cover rounded-bl-[70px] rounded-br-none rounded-tl-none rounded-tr-[70px] w-[300px]"
                    alt="rectangleFiftyNine"
                  />
                  <Img
                    src="images/img_rectangle59.png"
                    className="absolute h-[301px] inset-[0] justify-center m-auto object-cover rounded-bl-[70px] rounded-br-none rounded-tl-none rounded-tr-[70px] w-[300px]"
                    alt="rectangleFiftyNine_One"
                  />
                </div>
              </List>
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end ml-auto w-[63%] md:w-full">
              <Img
                src="images/img_vector.svg"
                className="h-[104px] md:mt-0 mt-[9px] w-auto"
                alt="vector"
              />
              <div className="h-[38px] ml-8 md:ml-[0] relative w-[9%] md:w-full">
                <Text
                  className="font-bold m-auto text-black_900 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  FOOD
                </Text>
                <Text
                  className="absolute font-bold h-full inset-[0] justify-center m-auto text-black_900 text-left w-max"
                  as="h6"
                  variant="h6"
                >
                  FOOD
                </Text>
              </div>
              <div className="h-[38px] md:ml-[0] ml-[254px] relative w-[23%] md:w-full">
                <Text
                  className="font-bold m-auto text-black_900 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  SUPERMARKET
                </Text>
                <Text
                  className="absolute font-bold h-full inset-[0] justify-center m-auto text-black_900 text-left w-max"
                  as="h6"
                  variant="h6"
                >
                  SUPERMARKET
                </Text>
              </div>
              <div className="h-[38px] md:ml-[0] ml-[255px] relative w-[12%] md:w-full">
                <Text
                  className="font-bold m-auto text-black_900 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  PASTRY
                </Text>
                <Text
                  className="absolute font-bold h-full inset-[0] justify-center m-auto text-black_900 text-left w-max"
                  as="h6"
                  variant="h6"
                >
                  PASTRY
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[60px] mt-9 w-[97%] md:w-full">
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[119px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[69%] md:w-full"
                orientation="horizontal"
              >
                <div className="h-[301px] relative w-full">
                  <Img
                    src="images/img_rectangle60.png"
                    className="h-[301px] m-auto object-cover rounded-bl-none rounded-br-[70px] rounded-tl-[70px] rounded-tr-none w-[300px]"
                    alt="rectangleSixty"
                  />
                  <Img
                    src="images/img_rectangle60.png"
                    className="absolute h-[301px] inset-[0] justify-center m-auto object-cover rounded-bl-none rounded-br-[70px] rounded-tl-[70px] rounded-tr-none w-[300px]"
                    alt="rectangleSixty_One"
                  />
                </div>
                <div className="h-[301px] relative w-full">
                  <Img
                    src="images/img_rectangle61.png"
                    className="h-[301px] m-auto object-cover rounded-bl-none rounded-br-[70px] rounded-tl-[70px] rounded-tr-none w-[300px]"
                    alt="rectangleSixtyOne"
                  />
                  <Img
                    src="images/img_rectangle61.png"
                    className="absolute h-[301px] inset-[0] justify-center m-auto object-cover rounded-bl-none rounded-br-[70px] rounded-tl-[70px] rounded-tr-none w-[300px]"
                    alt="rectangleSixtyOne_One"
                  />
                </div>
                <div className="h-[301px] relative w-full">
                  <Img
                    src="images/img_rectangle62.png"
                    className="h-[301px] m-auto object-cover rounded-bl-none rounded-br-[70px] rounded-tl-[70px] rounded-tr-none w-[300px]"
                    alt="rectangleSixtyTwo"
                  />
                  <Img
                    src="images/img_rectangle62.png"
                    className="absolute h-[301px] inset-[0] justify-center m-auto object-cover rounded-bl-none rounded-br-[70px] rounded-tl-[70px] rounded-tr-none w-[300px]"
                    alt="rectangleSixtyTwo_One"
                  />
                </div>
              </List>
              <div className="md:h-[315px] h-[316px] relative w-[24%] md:w-full">
                <Img
                  src="images/img_materialsymbol_white_a700_137x138.svg"
                  className="h-[137px] ml-[55px] my-auto w-[138px]"
                  alt="materialsymbol_Five"
                />
                <div className="absolute bg-red_600 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[55px] md:px-10 sm:px-5 w-full">
                  <Img
                    src="images/img_materialsymbol_white_a700_137x138.svg"
                    className="h-[137px] my-[34px] w-[138px]"
                    alt="materialsymbol_Six"
                  />
                </div>
              </div>
            </div>
            <div className="h-[1065px] md:h-[1131px] md:ml-[0] ml-[5px] mt-[66px] relative w-[98%] md:w-full">
              <Img
                src="images/img_87781.png"
                className="h-[1065px] m-auto object-cover w-full"
                alt="87781"
              />
              <div className="absolute h-[1065px] inset-[0] justify-center m-auto w-full">
                <Img
                  src="images/img_87781.png"
                  className="h-[1065px] m-auto object-cover w-full"
                  alt="87781_One"
                />
                <Img
                  src="images/img_vector.svg"
                  className="absolute bottom-[41%] h-[137px] right-[28%] w-auto"
                  alt="vector_One"
                />
              </div>
            </div>
            <div className="h-14 md:h-[214px] md:ml-[0] ml-[150px] mt-[158px] relative w-[22%]">
              <Text
                className="m-auto text-black_900 text-center w-auto"
                as="h4"
                variant="h4"
              >
                Missing Home?
              </Text>
              <Text
                className="absolute h-full inset-[0] justify-center m-auto text-black_900 text-center w-max"
                as="h4"
                variant="h4"
              >
                Missing Home?
              </Text>
            </div>
            <div className="h-[440px] md:h-[478px] mt-[38px] relative w-full">
              <Img
                src="images/img_rectangle13.png"
                className="h-[440px] m-auto object-cover w-full"
                alt="rectangleThirteen"
              />
              <Img
                src="images/img_rectangle13.png"
                className="absolute h-[440px] inset-[0] justify-center m-auto object-cover w-full"
                alt="rectangleThirteen_One"
              />
            </div>
            <div className="h-[57px] md:ml-[0] ml-[150px] relative w-[45%] md:w-full">
              <Text
                className="m-auto text-black_900 text-center w-auto"
                as="h4"
                variant="h4"
              >
                Thinking of Sending Anything ?
              </Text>
              <Text
                className="absolute h-full inset-[0] justify-center m-auto text-black_900 text-center w-max"
                as="h4"
                variant="h4"
              >
                Thinking of Sending Anything ?
              </Text>
            </div>
            <div className="h-[380px] md:h-[464px] ml-8 md:ml-[0] mt-[84px] relative w-[96%] md:w-full">
              <Img
                src="images/img_rectangle14.png"
                className="h-[380px] m-auto object-cover w-full"
                alt="rectangleFourteen"
              />
              <Img
                src="images/img_rectangle14.png"
                className="absolute h-[380px] inset-[0] justify-center m-auto object-cover w-full"
                alt="rectangleFourteen_One"
              />
            </div>
            <div className="h-[57px] md:ml-[0] ml-[150px] relative w-[13%]">
              <Text
                className="m-auto text-black_900 text-center w-auto"
                as="h4"
                variant="h4"
              >
                Discover
              </Text>
              <Text
                className="absolute h-full inset-[0] justify-center m-auto text-black_900 text-center w-max"
                as="h4"
                variant="h4"
              >
                Discover
              </Text>
            </div>
            <div className="h-[389px] md:h-[485px] ml-11 md:ml-[0] mt-24 relative w-[96%] md:w-full">
              <Img
                src="images/img_rectangle15.png"
                className="h-[389px] m-auto object-cover w-full"
                alt="rectangleFifteen"
              />
              <Img
                src="images/img_rectangle15.png"
                className="absolute h-[389px] inset-[0] justify-center m-auto object-cover w-full"
                alt="rectangleFifteen_One"
              />
            </div>
            <div className="md:h-[1839px] sm:h-[1932px] h-[2032px] md:ml-[0] ml-[11px] mt-[54px] relative w-[98%] md:w-full">
              <div
                className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[1785px] inset-x-[0] items-end justify-start mx-auto p-[15px] w-full"
                style={{ backgroundImage: "url('images/img_group11.svg')" }}
              >
                <div className="flex flex-col gap-[13px] items-end justify-start mb-[1681px] mr-[349px] w-[35%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <Text
                      className="font-semibold mb-[7px] text-left text-white_A700 underline w-auto"
                      variant="body2"
                    >
                      Privacy and Policy
                    </Text>
                    <a
                      href="https://metahuaddis.com/user/signup?role=Vendor"
                      className="font-semibold mb-[7px] sm:ml-[0] ml-[83px] text-left text-white_A700 text-xl underline w-auto"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Text className="">For Gifts Shops</Text>
                    </a>
                    <Img
                      src="images/img_materialsymbol_white_a700_23x23.svg"
                      className="h-[23px] sm:ml-[0] ml-[126px] sm:mt-0 mt-[7px] w-[23px]"
                      alt="materialsymbol_Seven"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-between ml-auto w-[54%] md:w-full">
                    <a
                      href="https://metahuaddis.com/user/signup?role=Vendor"
                      className="font-semibold mb-2 text-left text-white_A700 text-xl underline w-auto"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Text className="">For Liquor Store</Text>
                    </a>
                    <Img
                      src="images/img_materialsymbol_white_a700_23x23.svg"
                      className="h-[23px] mt-2 w-[23px]"
                      alt="materialsymbol_Eight"
                    />
                  </div>
                </div>
              </div>
              <Text
                className="absolute font-normal left-[3%] not-italic text-left text-white_A700 top-[6%] w-[35%] sm:w-full"
                variant="body2"
              >
                Zmall delivery, a registered trademark of ETTA Solution, is an
                on-demand delivery platform driven by state-of-the-art
                technology accompanied by, immaculate customer service and
                unlimited options for customers to access their favorite
                restaurants, grocery stores, pharmaceuticals, and gift shops in
                an easy and fast way.
              </Text>
              <div className="absolute flex sm:flex-col flex-row sm:gap-5 items-center justify-start right-[22%] top-[9%] w-[34%]">
                <Text
                  className="font-semibold text-left text-white_A700 underline w-auto"
                  variant="body2"
                >
                  Our Story
                </Text>
                <a
                  href="https://metahuaddis.com/user/signup?role=Vendor"
                  className="font-semibold sm:ml-[0] ml-[168px] text-left text-white_A700 text-xl underline w-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Text className="">For Restaurants</Text>
                </a>
                <Img
                  src="images/img_mdiaddressmarker.svg"
                  className="h-[23px] sm:ml-[0] ml-[117px] w-[23px]"
                  alt="mdiaddressmarke"
                />
              </div>
              <Text
                className="absolute font-semibold right-[2%] text-left text-white_A700 top-[9%]"
                variant="body2"
              >
                <>
                  Behind Sur Construction Budling
                  <br />
                  info@zmalldelivery.com
                  <br />
                  +251 944 51 11 11
                  <br />
                  +251 944 61 11 11
                </>
              </Text>
              <div className="absolute flex sm:flex-col flex-row gap-[57px] items-center justify-center right-[32%] top-[11%] w-[24%]">
                <Text
                  className="font-semibold text-left text-white_A700 underline w-auto"
                  variant="body2"
                >
                  Terms and Condition
                </Text>
                <a
                  href="https://metahuaddis.com/user/signup?role=Vendor"
                  className="font-semibold text-left text-white_A700 text-xl underline w-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Text className="">For Essentials</Text>
                </a>
              </div>
              <div className="absolute flex md:flex-col flex-row md:gap-5 items-center justify-start right-[13%] top-[6%] w-[43%]">
                <Text
                  className="font-semibold text-left text-white_A700 w-auto"
                  as="h6"
                  variant="h6"
                >
                  About Us
                </Text>
                <Text
                  className="font-semibold md:ml-[0] ml-[117px] text-left text-white_A700 w-auto"
                  as="h6"
                  variant="h6"
                >
                  Join us
                </Text>
                <Text
                  className="font-semibold md:ml-[0] ml-[163px] text-left text-white_A700 w-auto"
                  as="h6"
                  variant="h6"
                >
                  Contact Us
                </Text>
              </div>
              <Img
                src="images/img_materialsymbolsattachemail.svg"
                className="absolute h-[23px] right-[22%] top-[11%] w-[23px]"
                alt="materialsymbols_One"
              />
              <div className="absolute bg-blue_gray_900 flex flex-col inset-x-[0] items-center justify-start mx-auto p-[13px] top-[0] w-[99%]">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-4 w-[99%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-[38%] md:w-full">
                    <Img
                      src="images/img_zmalllogos22.png"
                      className="h-28 md:h-auto object-cover w-1/2"
                      alt="zmalllogosTwentyTwo"
                    />
                    <div className="h-[267px] md:h-[269px] mt-0.5 relative w-full">
                      <Text
                        className="absolute font-normal h-full inset-[0] justify-center m-auto not-italic text-left text-white_A700 w-[99%] sm:w-full"
                        variant="body2"
                      >
                        Zmall delivery, a registered trademark of ETTA Solution,
                        is an on-demand delivery platform driven by
                        state-of-the-art technology accompanied by, immaculate
                        customer service and unlimited options for customers to
                        access their favorite restaurants, grocery stores,
                        pharmaceuticals, and gift shops in an easy and fast way.
                      </Text>
                      <Img
                        src="images/img_playstoreandapp.png"
                        className="absolute bottom-[1%] h-[71px] left-[0] object-cover w-[82%]"
                        alt="playstoreandapp"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start md:mt-0 mt-[105px] w-[56%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-4/5 md:w-full">
                      <Text
                        className="font-semibold text-left text-white_A700 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        About Us
                      </Text>
                      <Text
                        className="font-semibold md:ml-[0] ml-[117px] text-left text-white_A700 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Join us
                      </Text>
                      <Text
                        className="font-semibold md:ml-[0] ml-[163px] text-left text-white_A700 w-auto"
                        as="h6"
                        variant="h6"
                      >
                        Contact Us
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                      <div className="flex md:flex-1 flex-col items-start justify-start w-[64%] md:w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                          <Text
                            className="font-semibold text-left text-white_A700 underline w-auto"
                            variant="body2"
                          >
                            Our Story
                          </Text>
                          <a
                            href="https://metahuaddis.com/user/signup?role=Vendor"
                            className="font-semibold sm:ml-[0] ml-[168px] text-left text-white_A700 text-xl underline w-auto"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Text className="">For Restaurants</Text>
                          </a>
                          <Img
                            src="images/img_mdiaddressmarker.svg"
                            className="h-[23px] sm:ml-[0] ml-[117px] w-[23px]"
                            alt="mdiaddressmarke_One"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-5 w-full">
                          <Text
                            className="font-semibold mb-[7px] text-left text-white_A700 underline w-auto"
                            variant="body2"
                          >
                            Terms and Condition
                          </Text>
                          <a
                            href="https://metahuaddis.com/user/signup?role=Vendor"
                            className="font-semibold mb-[7px] sm:ml-[0] ml-[57px] text-left text-white_A700 text-xl underline w-auto"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Text className="">For Essentials</Text>
                          </a>
                          <Img
                            src="images/img_materialsymbolsattachemail.svg"
                            className="h-[23px] sm:ml-[0] ml-[138px] sm:mt-0 mt-[7px] w-[23px]"
                            alt="materialsymbols_Two"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-3.5 w-full">
                          <Text
                            className="font-semibold mb-[7px] text-left text-white_A700 underline w-auto"
                            variant="body2"
                          >
                            Privacy and Policy
                          </Text>
                          <a
                            href="https://metahuaddis.com/user/signup?role=Vendor"
                            className="font-semibold mb-[7px] sm:ml-[0] ml-[83px] text-left text-white_A700 text-xl underline w-auto"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Text className="">For Gifts Shops</Text>
                          </a>
                          <Img
                            src="images/img_materialsymbol_white_a700_23x23.svg"
                            className="h-[23px] sm:ml-[0] ml-[126px] sm:mt-0 mt-[7px] w-[23px]"
                            alt="materialsymbol_Nine"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-between ml-auto mt-[13px] w-[54%] md:w-full">
                          <a
                            href="https://metahuaddis.com/user/signup?role=Vendor"
                            className="font-semibold mb-2 text-left text-white_A700 text-xl underline w-auto"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Text className="">For Liquor Store</Text>
                          </a>
                          <Img
                            src="images/img_materialsymbol_white_a700_23x23.svg"
                            className="h-[23px] mt-2 w-[23px]"
                            alt="materialsymbol_Ten"
                          />
                        </div>
                      </div>
                      <Text
                        className="font-semibold text-left text-white_A700"
                        variant="body2"
                      >
                        <>
                          Behind Sur Construction Budling
                          <br />
                          info@zmalldelivery.com
                          <br />
                          +251 944 51 11 11
                          <br />
                          +251 944 61 11 11
                        </>
                      </Text>
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

export default OrderHistoryPage;
