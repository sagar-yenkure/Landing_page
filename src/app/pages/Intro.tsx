import React from "react";
import Header from "./Header";
import Image from "next/image";
//svg around charlie image
import line from "../../../public/Assests/svg/line.svg";
import play from "../../../public/Assests/svg/play.svg";
import db from "../../../public/Assests/svg/db.svg";
import cheack from "../../../public/Assests/svg/cheack.svg";
import msg from "../../../public/Assests/svg/msg.svg";
import chart from "../../../public/Assests/svg/chart.svg";
import dot from "../../../public/Assests/svg/dots.svg";
import card_circles from "../../../public/Assests/svg/card_circle.svg";
import charlie from "../../../public/Assests/img/charlie.png";
//svg of collab brands
import unsplash from "../../../public/Assests/svg/unsplash.svg";
import notion from "../../../public/Assests/svg/notion.svg";
import intetcome from "../../../public/Assests/svg/intercome.svg";
import descript from "../../../public/Assests/svg/descript.svg";
import grammerly from "../../../public/Assests/svg/grammerly.svg";

const Intro = () => {

  
  interface Brands {
    id: number;
    logo: any;
    name: string;
  }

  const brands: Brands[] = [
    { id: 1, logo: unsplash, name: "Unsplash" },
    { id: 2, logo: notion, name: "Notion" },
    { id: 3, logo: intetcome, name: "INTERCOM" },
    { id: 4, logo: descript, name: "Descript" },
    { id: 5, logo: grammerly, name: "Grammarly" },
  ];
  return (
    <>
      <main>
        <Header />
        <section className="heading_text_and_img w-full flex flex-col md:flex-row px-4 md:px-2 xl:px-16 md:py-5">
          {/* the text and button area */}
          <div className="heading_text_ w-full md:w-1/2 flex justify-center md:p-8">
            <div>
              <h1 className="p-4 md:p-8 text-4xl md:text-6xl font-bold ">
                We are here to Increase your Productivity
              </h1>
              <div className="md:w-full flex pl-6 w-[20rem]">
                <Image src={line} alt="enimate line" width={400} />
              </div>
              <p className="text-black font-bold text-sm md:py-8 p-4 md:p-8 md:px-10">
                Lets make your work more organized and easier using the Taskio
                Dashboard with many of the latest features in managing work
                every day.
              </p>
              <div className="buttons p-4 md:ml-5 flex space-x-4">
                <button className="bg-[#54BD95] rounded-xl p-2 text-white">
                  Try free trial
                </button>
                <div className="flex space-x-1 items-center">
                  <Image src={play} alt="enimate line" width={20} />
                  <button className="text-[#54BD95]">View mode</button>
                </div>
              </div>
            </div>
          </div>

          {/* the image area */}
          <div className="_img relative w-full md:w-1/2 flex justify-center md:py-0 items-center py-[3rem] md:p-5 ml-8">
            <div className="relative bg-[#30946D] flex justify-center items-center rounded-lg ">
              <Image src={charlie} alt="charlie" width={300} />
              {/* div for msg box */}

              {/* div for cheack mark */}
              <div className="bg-[#4535AF] p-2 rounded-md -rotate-12 bottom-36 absolute left-[-8%]  md:left-[-15%] md:bottom-40">
                <Image src={cheack} alt="cheack" width={20} />
              </div>
              {/* the message box div */}
              <div className="msg_iicon relative bg-[#FFAA94] p-[5px] rotate-12 rounded-md -bottom-[7rem] md:-bottom-[175px] right-1 md:right-8">
                <Image src={msg} alt="msg" width={20} />
              </div>
              {/* floating amount send div */}
              <div className="enter_amount_btn p-1 md:p-3 bg-white rounded-lg absolute -left-[10%] md:left-[-50%] bottom-52 md:bottom-60">
                <div className="border-b flex space-x-5 items-center justify-center">
                  <span className="flex flex-col">
                    <p className="text-xs md:text-sm">Enter amount</p>
                    <p className="font-bold">$ 450.00</p>
                  </span>
                  <span className="">
                    <button className="bg-[#52BD94] rounded-2xl p-1 px-3">
                      Send
                    </button>
                  </span>
                </div>
              </div>
              {/* flooating stat div */}
              <div className="stat_icon  px-2 md:p-2 flex bg-white rounded-lg absolute left-[-10%] md:left-[-25%] bottom-[25%] md:bottom-[10%]">
                <span>
                  <p>Total Income</p>
                  <p className="font-bold">$245.00</p>
                </span>
                <Image src={chart} alt="msg" width={15} />
              </div>
            </div>
            {/* floating database icon */}
            <div className="database_icon relative bg-[#FBC75E] p-[4px] rotate-12 rounded-md bottom-24 md:bottom-16 lg:bottom-32 right-2 md:right-5">
              <Image src={db} alt="db" width={30} />
            </div>
            {/* floating card div */}
            <div className="relative bg-[#161C28] p-[4px] w-[4rem] h-[5rem] md:w-[6rem] md:h-[8rem] rotate-12 rounded-md -bottom-[2rem] md:-bottom-[5rem] right-16 md:right-14 flex flex-col justify-evenly">
              <span className="circles_ ">
                <Image src={card_circles} alt="db" width={10} />
                <span className="card_numbers flex flex-col"></span>
                <p className=" text-white text-[5px] md:text-[10px]">
                  Credit card
                </p>
                <div className="credit_card_no flex space-x-1">
                  <div className="flex">
                    <Image src={dot} alt="db" width={5} />
                    <Image src={dot} alt="db" width={5} />
                    <Image src={dot} alt="db" width={5} />
                    <Image src={dot} alt="db" width={5} />
                  </div>
                  <p className="text-white md:text-[5px] text-[3px] ">1234</p>
                </div>
              </span>
              <span className="expiry_no flex flex-col justify-between">
                <div className="md:w-[25px] md:h-[15px] w-[15px] h-[5px] bg-gray-600"></div>
                <p className="text-[5px] text-white">09/25</p>
              </span>
            </div>
          </div>
        </section>

        {/* pattaerns sectionn */}
        <section className="patterns_section">
          <div className="text-2xl flex justify-center font-bold p-3">
            <h1>More than 25,000 teams use Collabs</h1>
          </div>
          <div className="logos grid grid-cols-2 md:flex justify-center  space-x-5 p-5">
            {brands.map((brand) => {
              return (
                <span
                  key={brand.id}
                  className="flex justify-center items-center space-x-1 p-2 md:p-5"
                >
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={20}
                    color="#A6A6A6"
                  />
                  <h1 className="text-xl font-bold text-[#A6A6A6]">
                    {brand.name}
                  </h1>
                </span>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Intro;
