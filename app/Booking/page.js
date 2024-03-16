import React from "react";
import Navbar from "../component/Navbar";
const page = () => {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen justify-center items-center text-black bg-slate-100">
        <div className="bg-slate-300 rounded-md h-screen my-5 w-80 bg-blend-darken">
          <div className="flex justify-center bg-slate-500 w-72 h-96 m-4 rounded-sm shadow-2xl ">
            <form>
              <div className="grid grid-cols-3 gap-3 m-2 font-medium"> {/**checkbox */}
                <label className="text-[19px] my-2 text-center">
                  <input type="checkbox" />
                  Moving
                </label>
                <label className="text-[19px] my-2">
                  <input type="checkbox" />
                  Landscaping
                </label>
                <label className="text-[19px] my-2">
                  <input type="checkbox" />
                  Property cleaning
                </label>
                <label className="text-[19px] my-2">
                  <input type="checkbox" />
                  Handyman services
                </label>
                <label className="text-[19px] my-2">
                  <input type="checkbox" />
                  General Labor
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
