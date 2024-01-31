import React from "react";
import Image from "next/image";
// svg for rating starts
import five_stars from "../../../public/Assests/svg/five_stars.svg";
import four_stars from "../../../public/Assests/svg/four_starts.svg";
// svg for work provided
import activity from "../../../public/Assests/svg/activity.svg";
import pie_chart from "../../../public/Assests/svg/pie_chart.svg";
import command from "../../../public/Assests/svg/command.svg";

const work_field = [
  {
    id: 1,
    logo: activity,
    title: "Publishing",
    desc: "Plan, collaborate, and publishing your contetn that drivees meaningful engagement and growth for your barnd",
  },
  {
    id: 2,
    logo: pie_chart,
    title: "Analytics",
    desc: "Analyze your performance and create goegeous report",
  },
  {
    id: 3,
    logo: command,
    title: "Engagement",
    desc: "Quiuckly navigate you anda engage with your adience",
  },
];

const Rating_page = () => {
  return (
    <main className="w-full flex p-3 py-9 flex-col md:flex-row bg-[#F9F8FE]">
      <section className="the_ratings flex flex-col w-full md:w-[50%] px-0 md:px-[5%]">
        <div className=" px-5 md:px-16">
          <h1 className="text-4xl font-bold">
            How we support our pratner all over the world
          </h1>
        </div>
        <div className="p-3 px-5 md:px-16">
          <p className="text-sm Navtext">
            SaaS become a common delivery model for many business application,
            including office software, messaging software, payroll processing
            software, DBMS software, management software
          </p>
        </div>
        <div className="stars flex px-5 md:px-16 space-x-8 py-10">
          <span className="1st_start_scetion">
            <span className="start_symbol">
              <Image src={five_stars} alt="five_stars" width={100} />
            </span>
            <p className="the_rating_text text-sm p-1">4.9 / 5 rating</p>
            <p className="the_client Navtext font-bold p-1">databriks</p>
          </span>
          <span className="2st_start_scetion">
            <span className="start_symbol">
              <Image src={four_stars} alt="four_stars" width={100} />
            </span>
            <p className="the_rating_text text-sm p-1">4.8 / 5 rating</p>
            <p className="the_client Navtext font-bold p-1">Chainalysis</p>
          </span>
        </div>
      </section>

      <section className="the_work__area w-full md:w-[50%]">
        <div className="grid grid-cols-1 gap-4">
          {work_field.map((work) => {
            return (
              <div key={work.id} className="flex p-2 space-x-3">
                <span className="box w-9 p-2 h-8 items-center flex jusc'">
                  <Image src={work.logo} alt={work.title} width={20} />
                </span>
                <div className="flex flex-col justify-between">
                  <h1 className="font-bold text-xl">{work.title}</h1>
                  <p className="pr-5 md:pr-[30%] Navtext text-sm">{work.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Rating_page;
