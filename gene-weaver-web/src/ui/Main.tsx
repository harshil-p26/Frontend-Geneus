import { exploreIcons } from "../data/data";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Main = () => {
  const buttonRef = useRef(null);

  useGSAP(() => {
    gsap.from(buttonRef.current, {
      stagger: 0.2,
      y: 100,
      duration: 1.5,
        opacity: 0,
      
    });
  });

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold  my-24">
        Explore GeneSets
      </h1>

      <div ref={buttonRef} className="flex justify-around">
        {exploreIcons.map((exploreIcon, index) => (
          <div key={index} className="flex flex-col items-center space-y-2 ">
            <button className="py-5 px-5 bg-gray-200 rounded-full">
              <img className="" width={40} src={exploreIcon.img} />
            </button>
            <h2 className="font-bold">{exploreIcon.name}</h2>
            <p>{exploreIcon.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex  items-center justify-center mt-52 space-x-64 ">
        <div className=" self-end  space-y-3">
          <h1 className="font-bold text-3xl">Subscribe to Updates</h1>
          <p>Stay informed about the latest gene set advancements</p>
        </div>
        <div className="flex flex-col w-[50%]">
          <label>Email Address</label>
          <input
            type="textarea"
            className="py-2 px-2 border w-[70%]"
            placeholder="Enter your email"
          />
          <p className="text-xs mt-1">We'll send updates to this address</p>
          <button className="px-7 py-3 mt-3 w-44 bg-black text-white rounded-md text-xs">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
