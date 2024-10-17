import React from "react";
import { FaArrowUp } from "react-icons/fa6";

const Review = () => {
  return (
    <div>
      <h1 className="text-[4.1rem] pl-14 pb-10 border-b border-slate-100 font-['neue'] font-light">
        Clients' reviews
      </h1>
      <div className="flex font-['neue'] mt-5 pl-14">
        <div className="w-1/2 flex text-xl">
          <div className="w-1/2 underline">Karman Ventures</div>
          <div className="w-1/2">
            Services:
            <div className="mt-20">
              <button className="w-60 text-lg font-['neue'] ps-6 mt-5 h-16 bg-zinc-900 rounded-full border border-white btn-hoverable text-zinc-100 flex items-center justify-between gap-3 uppercase">
                INVESTOR DECK
                <div className="rounded-full w-3 h-3 mr-6 text-zinc-900 flex items-center justify-center bg-zinc-100">
                  <div className="hidden rotate-45 justify-center items-center">
                    <FaArrowUp />
                  </div>
                </div>
              </button>
              <button className="w-60 font-['neue'] ps-6 mt-5 h-16 bg-zinc-900 rounded-full border border-white btn-hoverable text-zinc-100 flex items-center justify-between gap-3 uppercase">
                SALES DECK
                <div className="rounded-full w-3 h-3 mr-6 text-zinc-900 flex items-center justify-center bg-zinc-100">
                  <div className="hidden rotate-45 justify-center items-center">
                    <FaArrowUp />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex text-xl">
          <div className="w-2/3">
            William Barnes
            <img
              src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
              className="rounded-3xl w-32 mt-20"
              alt=""
            />
            <p className="mt-7 w-11/12 leading-[1.7rem]">
              They were transparent about the time and the stages of the
              project. The end product is high quality, and I feel confident
              about how they were handholding the client through the process. I
              feel like I can introduce them to someone who needs to put a sales
              deck together from scratch, and they would be able to handhold the
              client experience from 0 to 100 very effectively from story to
              design. 5/5
            </p>
          </div>
          <div className="w-1/3 text-right pr-10 opacity-70">READ</div>
        </div>
      </div>
      <div className="columns font-['neue'] mt-14 border-t border-white">
      {
    [
        {title: "Planetly", author: "Nina Walloch"},
        {title: "Workiz Easy", author: "Tomer Levy"},
        {title: "Premium Blend", author: "Ellen Kim"},
        {title: "Hypercare Systems", author: "Brendan Goss"},
        {title: "Officevibe", author: "Raff Labrie"},
        {title: "Orderlion", author: "Stefan Strohmer"},
        {title: "Black Book", author: "Jaci Smith"},
        {title: "Trawa Energy", author: "David Budde"}
    ].map(c => (
        <div className="flex ps-14 text-xl border-b border-white py-6">
          <div className="w-1/2 ">
            <h1 className="relative inline-block after:absolute after:left-0 after:right-0 after:bottom-[-1px] after:h-[1px] after:bg-white after:content-['']">{c.title}</h1>
          </div>
          <div className="w-1/2 flex">
            <div className="w-2/3">
              <h1>{c.author}</h1>
            </div>
            <div className="w-1/3 text-right pr-10">
              <h1 className="relative inline-block after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[1px] after:bg-white after:content-['']">
                READ
              </h1>
            </div>
          </div>
        </div>
    ))
      }
      </div>
    </div>
  );
};

export default Review;
