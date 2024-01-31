import React from "react";
import Image from "next/image";
import green_tick from "../../../public/Assests/svg/green_tick.svg";

const Plan_section = () => {
  interface feat {
    id: Number;
    title: string;
  }

  const free_feat: feat[] = [
    { id: 1, title: "2 Users" },
    { id: 2, title: "2 Files" },
    { id: 3, title: "Public Share & Comments" },
    { id: 4, title: "Chat Support" },
    { id: 5, title: "New income apps" },
  ];
  const pro_feat: feat[] = [
    { id: 1, title: "4 Users" },
    { id: 2, title: "All apps" },
    { id: 3, title: "Unlimited editable exports" },
    { id: 4, title: "Folders and collaboration" },
    { id: 5, title: "All incoming apps" },
  ];
  const bussiness_feat: feat[] = [
    { id: 1, title: "All the features of pro plan" },
    { id: 3, title: "Account success Manager" },
    { id: 4, title: "Single Sign-On (SSO)" },
    { id: 5, title: "Co-conception pogram" },
    { id: 6, title: "Collaboration-Soon" },
  ];

  return (
    <main className="py-[2%]">
      <section className="haeder___  flex flex-col items-center justify-center">
        <h1 className="font-bold text-4xl w-full md:w-[30%] text-center">
          Choose Plan
        </h1>
        <h1 className="font-bold text-4xl w-full md:w-[30%] text-center">
          {" "}
          That’s Right For You
        </h1>
        <p className="text-sm Navtext py-5">
          Choose plan that works best for you, feel free to contact us
        </p>
        <span className="flex px-1 py-1 box rounded-[10px] justify-center items-center">
          <p className="px-2 text-black">Bil Monthly</p>
          <span className="bg-[#54BD95] p-2 rounded-[10px] px-5">
            <p className="text-white">Bil Yearly</p>
          </span>
        </span>
      </section>
      <section className="price__cards py-10  flex flex-col space-y-5 md:flex-row md:space-x-10">
        {/* free plan card */}
        <div className="Free__plan md:w-[350px] md:h-[500px] box rounded-lg">
          <div className="text_area flex-col flex justify-center items-center space-y-1 p-2">
            <h1 className="font-bold text-2xl">Free</h1>
            <p className="Navtext text-sm w-[50%]">
              Have a go and test your superpowers
            </p>
            <p className="Navtext text-xs">$</p>
            <h1 className="font-bold text-4xl ml-10">0</h1>
            <span className="plan__info bg-[#F9FAFB] flex-col space-y-8 p-3 px-12 rounded-xl justify-center items-center">
              {free_feat.map((f) => {
                return (
                  <span className="flex space-x-2 ">
                    <Image src={green_tick} alt="greentick" width={20} />
                    <h6>{f.title}</h6>
                  </span>
                );
              })}
              <button className="box text-[#54BD95] py-2 px-6 rounded-lg m-5">
                Signup for free
              </button>
            </span>
          </div>
        </div>

        {/* pro plan card */}
        <div className="pro__plan  md:w-[30%] md:h-[60%] bg-[#54BD95] rounded-lg p-5">
          <div className="heder flex flex-col justify-center items-center">
            {" "}
            <h1 className="font-bold text-4xl text-white">Pro</h1>
            <p className="text-white text-sm  w-[50%]">
              Experiment the power of infinite possibilities
            </p>
            <p className="text-white text-xs">$</p>
            <h1 className="font-bold text-white text-5xl ml-10">8</h1>
            <button className="bg-[#85DAB9] text-white py-2 px-6 rounded-lg m-5">
              Save $50 a year
            </button>
            <span
              className="bg-white
            flex-col space-y-4 p-3 px-[15%] rounded-xl justify-center items-center"
            >
              {pro_feat.map((f) => {
                return (
                  <span className="flex space-x-2 ">
                    <Image src={green_tick} alt="greentick" width={20} />
                    <h6>{f.title}</h6>
                  </span>
                );
              })}
              <button className="bg-[#54BD95] text-white py-2 px-10 rounded-lg m-5">
                Go to pro
              </button>
            </span>
          </div>
        </div>
        
        {/* bussiness plan card */}
        <div className="Bussiness__plan md:w-[30%] md:h-[500px] box rounded-lg">
          <div className="text_area flex-col flex justify-center items-center space-y-1 p-2">
            <h1 className="font-bold text-2xl">Business</h1>
            <p className="Navtext text-sm w-[60%]">
              Unveil new superpowers and join the Design Leaque
            </p>
            <p className="Navtext text-xs">$</p>
            <h1 className="font-bold text-4xl ml-10">16</h1>
            <span className="plan__info bg-[#F9FAFB] flex-col space-y-8 p-3 px-12 rounded-xl justify-center items-center">
              {bussiness_feat.map((f) => {
                return (
                  <span className="flex space-x-2 ">
                    <Image src={green_tick} alt="greentick" width={20} />
                    <h6>{f.title}</h6>
                  </span>
                );
              })}
              <button className="box py-2 px-6 rounded-lg m-5 text-[#54BD95]">
                Goto Business
              </button>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Plan_section;
