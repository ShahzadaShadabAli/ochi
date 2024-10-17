import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

function FeaturedProjects() {
  const [hovering, setHovering] = useState(null);

  return (
    <div className="w-full py-32">
      <div className="w-full px-20 border-b border-zinc-700 pb-14">
        <h1 className='text-7xl font-["neue"] font-light'>Featured projects</h1>
      </div>
      <div className="px-20 relative">
        <div className="cards  mt-10">
          {[
          [{name: "FYDE", img: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png", tags:['branded templates', 'sales deck', 'social media templates']}, {name: "HERITAGE", img: "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1100.png", tags:['pitch deck']}],
          [{name: "CARDBOARD SPACESHIP", img: "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png", tags:['branded templates', 'sales deck', 'social media templates']}, {name: "AH2 & MATT HORN", img: "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png", tags:['pitch deck']}],
          [{name: "TRAWA", img: "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg", tags:['branded templates', 'sales deck', 'social media templates']}, {name: "PREMIUM BLEND", img: "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png", tags:['pitch deck']}]
          ].map((c, i) => (
          <div className="unit relative">
          <div className="headings font-['founder'] text-center w-[80vw] pointer-events-none absolute z-20 top-1/2 overflow-hidden -translate-y-1/2 left-1/2 -translate-x-1/2">
            <h1 className="text-[10vw] text-[#cdea68] overflow-hidden">
              { c.find(c => c.name === hovering) && hovering?.split("").map((c, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={hovering ? { y: "0%" } : { y: "100%" }}
                  transition={{ duration: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  {c ? c : ' '}
                </motion.span>
              ))}
            </h1>
          </div>
              <div className="flex gap-5">
              {c.map((card, i) => (
            <div className="card-container w-1/2 ">
              <div className="flex mb-5 mt-8 gap-3 items-center ">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="font-['neue'] text-xl">{card.name}</div>
              </div>
              <div className="w-full da-card">
                <img
                  width="100%"
                  onMouseOver={() => setHovering(card.name)}
                  onMouseOut={() => setHovering(null)}
                  className="rounded-xl cursor-pointer"
                  src={card.img}
                  alt=""
                />
              </div>
              <div className="flex gap-4 mt-5 uppercase">
                {card.tags.map(t => (
                  <div className="px-5 text-center py-1 cursor-pointer border-[2px] border-zinc-400 text-[17px] rounded-full">{t}</div>           
                ))}
              </div>
            </div>
              ))}
              </div>
          
          </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-16">
      <button className="w-80 font-['neue'] ps-6 mt-5 h-16 bg-zinc-900 rounded-full border border-white btn-hoverable text-zinc-100 flex items-center justify-between gap-3 uppercase">
            VIEW ALL CASE STUDIES
            <div className="rounded-full w-3 h-3 mr-6 text-zinc-900 flex items-center justify-center bg-zinc-100">
              <div className="hidden rotate-45 justify-center items-center">
                <FaArrowUp />
              </div>
            </div>
          </button>
      </div>
    </div>
  );
}

export default FeaturedProjects;
