import React from "react";
import quots from "../../../public/Assests/svg/quots.svg";
import b_play from "../../../public/Assests/svg/black_play.svg";
import euro from "../../../public/Assests/svg/euro.svg";
import go_arrow from "../../../public/Assests/svg/go_arrow.svg";

import person1 from "../../../public/Assests/img/Ellipse54.png";
import person2 from "../../../public/Assests/img/Ellipse55.png";
import person3 from "../../../public/Assests/img/Ellipse56.png";
import person4 from "../../../public/Assests/img/Ellipse57.png";
import Image from "next/image";

const Footer = () => {
  return (
    <main className="bg-[#161C28] py-12 gap-8 grid grid-cols-1 md:grid-cols-2 md:w-full md:px-[10%]">
      <section className="footer_review_section p-4 md:w-full w-fit md:space-y-6 ">
        <h1 className="text-white text-xl  md:text-4xl font-bold ">
          People are Saying About DoWhith
        </h1>
        <p className="text-[#A6A6A6] text-sm pb-3 md:px-[2%]">
          Everything you need to accept to payment and grow your money of manage
          anywhere on planet
        </p>
        <span className="">
          <Image src={quots} alt="quots" width={40} />
        </span>
        <p className="text-[#A6A6A6] text-sm">
          I am very helped by this E-wallet application , my days are very easy
          to use this application and its very helpful in my life , even I can
          pay a short time 😍
        </p>
        <p className="text-[#A6A6A6] text-sm">_ Aria Zinanrio</p>
        <span className="users_images flex md:space-x-2">
          <Image src={person1} alt="person1" width={40} />
          <Image src={person2} alt="person2" width={40} />
          <Image src={person3} alt="person3" width={40} />
          <Image src={person4} alt="person4" width={40} />
          <Image src={b_play} alt="black_play" width={40} />
        </span>
      </section>

      <section className="request_demo_form w-full md:px-[10%] p-6">
        <div className="bg-[#222938] flex justify-center items-center space-y-3 flex-col p-3 rounded-lg">
          <Image src={euro} alt="euro" width={50} />
          <h1 className="text-white">Get Started</h1>
          <form className="p-5">
            <h1 className="text-white text-sm space-y-1 text-wrap">Email</h1>
            <input
              className="rounded-lg p-2 md:px-[10%] border-none"
              id="emial"
              placeholder="Enter the email"
              type="text"
            />
            <h1 className="text-white text-sm space-y-3">Message</h1>
            <textarea
              className="md:pr-24 rounded-lg p-1"
              id="text"
              name="text"
              rows={4}
              cols={20}
              placeholder="What are you say ?"
            ></textarea>
          </form>
          <button
            className="bg-[#54BD95] px-[18%] p-3 rounded-lg"
            type="button"
          >
            Request Demo
          </button>
          <span className="text-end text-white text-xs w-full ">
            <p>or Start Free Trial</p>
          </span>
        </div>
      </section>

      <section className="try_product_section flex md:px-[10%] p-5 flex-col space-y-5">
        <div className="log w-[5rem] md:w-[10rem]  flex justify-center items-center">
          <h1 className="text-[#54BD95] text-4xl font-bold">Biccas</h1>
        </div>
        <h1 className="Navtext">Get started noew try our product</h1>
        <div className="flex border p-1 justify-center items-center rounded-full">
          <input
            className="bg-transparent p-1 rounded-full text-white"
            placeholder="Enter your Email here"
            type="email"
            name=""
            id=""
          />
          <span className="rounded-full bg-[#54BD95] p-1">
            <Image src={go_arrow} alt="go_arrow" />
          </span>
        </div>
        <span className="pt-10">
          <p className="text-white">
            © 2022 Biccas Inc. Copyright and rights reserved
          </p>
        </span>
      </section>

      <section className="footer_links">
        <div className="flex justify-between">
          <div className="flex-col flex">
            <h1 className="text-white  text-xl py-2">Support</h1>
            <p className="Navtext">Help Center</p>
            <p className="Navtext">Account information</p>
            <p className="Navtext">About</p>
            <p className="Navtext">Contact us</p>
          </div>
          <div>
            <h1 className="text-white  text-xl py-2">Help and Solution</h1>
            <p className="Navtext">Talk to support</p>
            <p className="Navtext">Support docs</p>
            <p className="Navtext">System status</p>
            <p className="Navtext">Covid responde</p>
          </div>
          <div>
            <h1  className="text-white  text-xl py-2">Product</h1>
            <p className="Navtext">Update</p>
            <p className="Navtext">Security</p>
            <p className="Navtext">Beta test</p>
            <p className="Navtext">Pricing product</p>
          </div>
        </div>
          <div className="flex pt-5 text-white text-end w-full ">
            <p>Terms and Condtions . </p>
            <p> Privacy Policy</p>
          </div>
      </section>
    </main>
  );
};

export default Footer;
