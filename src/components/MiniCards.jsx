import React from "react";

function MiniCards() {
  return (
    <div className="w-full h-screen bg-zinc-900 items-center px-32 flex gap-5">
      <div className="cardcontainer h-[58vh] w-1/2">
        <div className="card relative rounded-xl w-full h-full flex justify-center items-center bg-[#004d43]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            className="w-40"
            alt=""
          />
          <button className='text-lg font-["neue"] border-2 border-[#cdea68] text-[#cdea68] p-2 px-4 absolute bottom-10 left-10 rounded-full'>
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer h-[58vh] w-1/2 flex gap-5">
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-zinc-900 border-2 border-zinc-100">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            className="w-40"
            alt=""
          />
          <button className='text-lg font-["neue"] border-2 border-white text-white p-2 px-4 absolute bottom-10 left-10 rounded-full'>
            &copy;2019-2022
          </button>
        </div>
        <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-zinc-900 border-2 border-zinc-100">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            className="w-40"
            alt=""
          />
          <button className='text-lg font-["neue"] border-2 border-white text-white p-2 px-4 absolute bottom-10 left-10 rounded-full'>
            &copy;2019-2022
          </button>
        </div>
      </div>
    </div>
  );
}

export default MiniCards;
