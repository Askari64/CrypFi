import { useState, useEffect } from "react";
import { IoMdMenu, IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handlenav = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setToggle(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className=" z-50 sticky w-full top-0 bg-slate-50">
      <div className=" flex justify-between items-center mx-auto my-auto h-20 px-6 max-w-[1240px]">
        <h1 className=" cursor-pointer text-xl sm:text-2xl md:text-3xl text-gray-800 font-bold">
          Cryp<span className=" text-green-600">Fi</span>
        </h1>
        <ul className=" hidden md:flex font-medium">
          <li className=" cursor-pointer hover:text-green-600">Home</li>
          <li className=" ml-8 cursor-pointer hover:text-green-600">Featured</li>
          <li className=" ml-8 cursor-pointer hover:text-green-600">Earn</li>
          <li className=" ml-8 cursor-pointer hover:text-green-600">Contact</li>
        </ul>
        <button className=" hidden md:block bg-green-600 text-white px-4 py-2 rounded-md border font-medium hover:bg-white hover:text-green-600">
          Connect Wallet
        </button>
        <div className=" block md:hidden" onClick={handlenav}>
          {!toggle ? <IoMdMenu size={30} /> : <IoIosClose size={30} />}
        </div>
        <div
          className={
            toggle
              ? " fixed top-0 left-0  h-full w-[60%] bg-gray-50 border-r border-green-600 ease-in-out duration-500"
              : " fixed left-[-100%]"
          }
        >
          <ul>
            <li className="cursor-pointer text-xl sm:text-2xl md:text-3xl text-gray-800 font-bold my-6 px-6">
              Cryp<span className=" text-green-600">Fi</span>
            </li>
            <li className=" p-4 cursor-pointer border-gray-600">Home</li>
            <li className=" p-4 cursor-pointer border-gray-600">Featured</li>
            <li className=" p-4 cursor-pointer border-gray-600">Earn</li>
            <li className=" p-4 cursor-pointer border-gray-600">Contact</li>
          </ul>
          <button className=" ml-4 mt-4 bg-green-600 text-white px-4 py-2 rounded-md border font-normal hover:bg-white hover:text-green-600">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
