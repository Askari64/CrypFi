import heroImg from "../assets/hero-img.png";
import { useState } from "react";

const Hero = () => {
  const [formVal, setFormVal] = useState("");
  const [formErr, setFormErr] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const handleMail = () => {
    if (formVal === "") {
      setFormErr("Enter Email");
      setFormSuccess("");

      setTimeout(() => {
        setFormErr("");
      }, 3000);
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formVal)) {
      setFormErr("Invalid Email");
      setFormSuccess("");

      setTimeout(() => {
        setFormErr("");
      }, 3000);
    } else {
      setFormErr("");
      setFormSuccess("Subscribed Successfully");
      setFormVal("");

      setTimeout(() => {
        setFormSuccess("");
      }, 3000);
    }
  };

  return (
    <section className=" w-full ">
      <div className=" grid lg:grid-cols-2 gap-4 max-w-[1240px] mx-auto md:my-[150px] sm:my-[100px] my-[60px] px-6">
        {/*Left*/}
        <div>
          <h2 className=" font-normal text-lg md:text-xl text-gray-700">
            Buy & Sell Crypto 24/7 using your retirement account
          </h2>
          <p className=" font-bold text-2xl sm:text-4xl md:text-6xl my-4">
            Invest in Cryptocurrency with your IRA
          </p>
          <p className=" font-normal text-lg md:text-xl text-gray-700">
            Buy, Sell and Store hundreds of Cryptocurrencies
          </p>
          <div className=" flex my-8">
            <input
              type="email"
              placeholder="Enter your Email"
              className=" w-[40%] sm:w-[30%] md:text-medium font-normal text-sm rounded-md px-2 text-gray-700 border-2 border-green-600 "
              value={formVal}
              onChange={(e) => setFormVal(e.target.value)}
            />
            <button
              onClick={handleMail}
              className=" ml-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-white hover:text-green-600"
            >
              Subscribe
            </button>
          </div>
          {formErr && (
            <p className=" font-light text-sm text-red-600">{formErr}</p>
          )}
          {formSuccess && (
            <p className=" font-light text-sm text-green-600">{formSuccess}</p>
          )}
        </div>
        {/*Right*/}
        <div>
          <img
            className=" w-[60%] mx-auto mt-6"
            src={heroImg}
            alt="Crypto Dashboard"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
