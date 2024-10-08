import React from "react";

const Footer = () => {
  return (
    <div className="bg-amber-400 w-full h-full text-center p-2 border-t-2 border-orange-100">
      <ul className=" px-4 flex justify-evenly">
        <li
          className="hover:cursor-pointer my-2 noto-sans-mono text-[7px]
sm:text-[10px] hover:scale-105"
        >
          <a href="https://www.openphone.com/policies/ORe0ElvwEk">SMS disclaimer</a>
        </li>
        <li
          className="hover:cursor-pointer my-2 noto-sans-mono text-[7px]
sm:text-[10px]  hover:scale-105"
        >
          <a href="https://www.privacypolicyonline.com/live.php?token=DF2O66e7n8qTOOfvcsM2TOM5OOGDRISz">
            Privacy Policy
          </a>
        </li>
        <li
          className="hover:cursor-pointer my-2 noto-sans-mono text-[7px]
sm:text-[10px]  hover:scale-105"
        >
          <a href="https://www.facebook.com/profile.php?id=61561637463880">
            Facebook Page
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
