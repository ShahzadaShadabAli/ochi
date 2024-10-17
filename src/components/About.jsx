import React from "react";
import { FaArrowUp, FaArrowUpLong } from "react-icons/fa6";

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.1"
      className='w-full font-["neue"] py-[7.4vw] bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl '
    >
      <h1 className=" text-[4.1vw] leading-none text-zinc-900 px-[4vw]">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to <u>raise funds, sell prod­ucts, ex­plain com­plex ideas</u>
        , and <u>hire great peo­ple</u>.
      </h1>
      <div className="w-full pb-20 flex border-t mt-20 border-[#5e6b2d] px-[4vw] pt-5">
        <div className="w-[51%]">
          <p className="text-[1.35rem] text-slate-900">What you can expect:</p>
        </div>
        <div className="flex-1 flex justify-between items-end mr-32">
          <div>
          <p className="text-[1.35rem] w-[22vw] text-slate-900">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </p>
          <p className="text-[1.35rem] mt-10 w-[22vw] text-slate-900">
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
          </div>
            <div className=" text-slate-900">
                <h1 className="text-[1.3rem] my-7 font-['neue']">S:</h1>
            <div className="flex flex-col gap-1">
            {['instagram', 'behance',  "facebook", "linkedin"].map((d, i) => (
                <a key={i} className='font-["neue"] capitalize underline text-[1.3rem]' href="">{d}</a>
            ))}
            </div>
            </div>
        </div>
      </div>
      <div className="w-full flex border-t mt-20 border-[#5e6b2d] px-[4vw]">
        <div className="w-1/2">
          <h1 className="text-7xl text-zinc-900 pt-10">Our approch:</h1>
          <button className="w-52 ps-6 mt-5 h-16 bg-zinc-900 rounded-full btn-hoverable text-white flex items-center justify-between gap-3 uppercase">
            Read More
            <div className="rounded-full w-3 h-3 mr-6 text-black flex items-center justify-center bg-white">
              <div className="hidden rotate-45 justify-center items-center">
                <FaArrowUp />
              </div>
            </div>
          </button>
        </div>
        <div className="w-1/2 mt-5">
          <img
            src="/images/img-about.jpg"
            className="w-full rounded-3xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
