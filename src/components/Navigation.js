import { AiOutlineSearch } from "react-icons/ai";
import { BsBellFill } from "react-icons/bs";
import { GoMailRead } from "react-icons/go";

const Navigation = () => {
  return (
    <div className="sticky top-0 bg-white">
      {/* This is the navigation Bar of Yahoo clone. */}
      <div className="flex justify-between mx-12 py-4 mt-2">
        <div className="logo-name text-5xl text-[#6001d2] font-extrabold">
          yahoo<span className="rotate">!</span>
        </div>
        <div className="search-bar mt-2 inline-flex h-10 shadow-lg w-1/2 justify-between">
          <AiOutlineSearch className="m-2 text-xl" />
          <input className="input-field   w-full p-4 text-xl focus:ring-0" />

          <button className="px-8  bg-blue-500 hover:bg-blue-600 rounded-r-md text-white font-bold text-2xl ">
            <AiOutlineSearch />
          </button>
        </div>

        <div className="items-center justify-between">
          <button className="outline-[hsl(267,99%,41%)] ring-violet-600 ring-2 text-[#6001d2] font-bold  rounded-full focus:outline-none mr-4 px-4 hover:text-white hover:bg-[#6001d2]">
           Sign in
          </button>
          <div className="inline-flex ">
            <button className=" text-orange-400 ">
              <BsBellFill  className="text-2xl mx-4"/>
            </button>
            <button className="inline-flex text-blue-700  m-3">
              <GoMailRead className="text-2xl" />
              <span className="font-semibold text-black ml-2 mb-0">Mail</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
