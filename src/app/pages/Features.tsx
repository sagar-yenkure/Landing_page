import React from "react";
import Image from "next/image";
import collarabet_image from "../../../public/Assests/img/collarbt.png";
import storage_image from "../../../public/Assests/img/storage.png";
import analytics_image from "../../../public/Assests/img/performance.png";
import laptop_img from "../../../public/Assests/img/Rectangle.png";
import greentick_logo from "../../../public/Assests/svg/green_tick.svg";
import Plan_section from "./Plan_section";

const Features = () => {

    
  interface Feature {
    id: number;
    image: any;
    title: string;
    desc: string;
  }

  interface Benefit {
    id: number;
    title: string;
  }

  const features: Feature[] = [
    {
      id: 1,
      image: collarabet_image,
      title: "Collboration Teams",
      desc: "Here you can handle projects together with team virtually",
    },
    {
      id: 2,
      image: storage_image,
      title: "Cloud Storage",
      desc: "No nedd to worry about storage because we provide storage up to 2 TB",
    },
    {
      id: 3,
      image: analytics_image,
      title: "Daily Analytics",
      desc: "We always provide useful informatin to make it easier for you every day",
    },
  ];

  const benefit_list: Benefit[] = [
    { id: 1, title: "Free Consulting With Experet Saving Money" },
    { id: 2, title: "Online Banking" },
    { id: 3, title: "Investment Report Every Month" },
    { id: 4, title: "Saving Money For The Future" },
    { id: 5, title: "Online Transection" },
  ];

  return (
    <main className="main__ py-6 px-8 md:px-[10%]">
      <section className="heading_text flex md:flex-row flex-col items-center justify-between md:space-x-4">
        <h1 className="text-black font-bold text-4xl w-full md:w-[25%]">
          Our Features you can get
        </h1>
        <p className="Navtext w-full md:w-[35%] py-5">
          We offer a variety of interesting features that you can help increase
          yor productivity at work and manage your projrct esaly
        </p>
        <button className="bg-[#54BD95] rounded-3xl p-2">Get Started</button>
      </section>

      <section className="features_tab_section">
        <div className="flex md:flex-row w-full flex-col justify-center space-x-6 space-y-6 md:space-y-0 md:justify-evenly py-10">
          {features.map((feat) => {
            return (
              <div
                key={feat.id}
                className="flex justify-center items-center md:items-start md:w-[15rem] flex-col space-y-2"
              >
                <span className="py-3">
                  <Image src={feat.image} alt={feat.title} width={200} />
                </span>
                <h1 className="font-black text-xl">{feat.title}</h1>
                <p className="Navtext text-sm ">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="benefits__section w-full py-16 space-y-11 md:space-y-1 flex flex-col md:flex-row ">
        <div className="benefits_list w-full md:w-1/2">
          <h1 className="text-4xl text-black  font-bold py-5 md:w-[50%]">
            What Benifit Will You Get
          </h1>
          <div className="flex flex-col">
            {benefit_list.map((benf) => {
              return (
                <span
                  key={benf.id}
                  className="flex items-center py-3 space-x-2"
                >
                  <Image src={greentick_logo} alt="green_tik_log" width={20} />
                  <h1>{benf.title}</h1>
                </span>
              );
            })}
          </div>
        </div>

        <div className="images flex items-center justify-center  w-full md:w-1/2 ">
          <div>
            <Image src={laptop_img} alt="laptop_img" width={300} />
          </div>
        </div>
      </section>
      <Plan_section/>
    </main>
  );
};

export default Features;
