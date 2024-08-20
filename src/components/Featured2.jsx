import tradeImg from "../assets/trade.png";
import { useState } from "react";

function Featured2() {
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
    <section className=" w-full mx-auto">
      <div className=" grid lg:grid-cols-2 gap-4 max-w-[1240px] mx-auto  py-6 px-6">
        {/*Left*/}
        <div className=" order-last sm:order-none">
          <img
            className=" w-[60%] mx-auto mt-6  transition ease-in-out delay-150 duration-300 hover:scale-110"
            src={tradeImg}
            alt="Trade Dashboard"
          />
        </div>
        {/*Right*/}
        <div className=" mx-auto my-auto">
          <h2 className=" font-bold text-xl sm:text-2xl md:text-4xl">
            Earn passive income with crypto.
          </h2>
          <p className=" font-normal text-lg md:text-xl text-gray-700 my-4">
            Earn up to 12% annual rewards on 30+ digital assets. Simply hold
            your assets in the app to automaticaly earn rewards at the end of
            each month with no lockups and no limits.
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
              Learn More
            </button>
          </div>
          {formErr && (
            <p className=" font-light text-sm text-red-600">{formErr}</p>
          )}
          {formSuccess && (
            <p className=" font-light text-sm text-green-600">{formSuccess}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Featured2;
