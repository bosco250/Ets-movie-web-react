import React from "react";

const LogIn = () => {
  return (
    <div className="flex flex-row flex-wrap gap-20 justify-center pt-[14vh] font-inter  bg-black text-white h-[87vh] ">
      
        <form className="flex flex-col gap-2 text-xl">
          <h1 className="text-2xl mb-10 font-[500] text-white text-start leading-10">Sign up</h1>
            <label className="flex justify-start flex-col gap-2 font-[450] text-gray-300">
            Email:
            <input
              required
              placeholder="Enter your email"
              type="email"
              className="border border-orange-100 h-10 bg-gray-100 w-64 md:w-80 rounded-xl px-4 font-[300] font-sans text-gray-950"
            />
          </label>
          <label className="flex justify-start flex-col gap-2 font-[450] text-gray-300">
            Password:
            <input
              required
              placeholder="Write strong password"
              type="password"
              className="border border-orange-100 h-10 bg-gray-100 w-64 md:w-80 rounded-xl px-4 font-[300] font-sans text-gray-950"
            />
          </label>
          <button
            type="submit"
            className="px-4 py-2 bg-white rounded-xl mt-8 hover:cursor-pointer hover:bg-gray-200 text-gray-600 text-2xl font-[500]"
          >
            Sign up
          </button>
        </form>
      
    </div>
  );
};

export default LogIn;
