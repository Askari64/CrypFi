import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <section className=" w-full h-full bg-slate-300">
      <div className=" grid lg:grid-cols-5 gap-8 justify-items-start lg:justify-around max-w-[1240px] lg:mx-auto py-[60px] px-6">
        <h1 className=" text-xl sm:text-2xl md:text-3xl text-gray-800 font-bold cursor-pointer">
          Cryp<span className=" text-green-600">Fi</span>
        </h1>

        <ul className=" font-medium text-gray-700">
          <li className="cursor-pointer font-bold underline underline-offset-4 decoration-2 decoration-green-600 text-black ">
            Support
          </li>
          <li className=" mt-2 mb-1 cursor-pointer">Contact Us</li>
          <li className=" mb-1 cursor-pointer">Chat</li>
          <li className=" mb-1 cursor-pointer">Help Center</li>
          <li className=" cursor-pointer">FAQ</li>
        </ul>

        <ul className=" font-medium text-gray-700">
          <li className="cursor-pointer font-bold underline underline-offset-4 decoration-2 decoration-green-600 text-black">
            Developers
          </li>
          <li className="cursor-pointer mt-2 mb-1">Cloud</li>
          <li className="cursor-pointer mb-1">Commerce</li>
          <li className="cursor-pointer mb-1">Pro</li>
          <li className=" cursor-pointer">API</li>
        </ul>

        <ul className=" font-medium text-gray-700">
          <li className="cursor-pointer font-bold underline underline-offset-4 decoration-2 decoration-green-600 text-black">
            Company
          </li>
          <li className="cursor-pointer mt-2 mb-1">About</li>
          <li className="cursor-pointer mb-1">Information</li>
          <li className="cursor-pointer mb-1">Legal</li>
          <li className=" cursor-pointer">Privacy</li>
        </ul>

        <ul className=" font-medium text-gray-700">
          <li className=" cursor-pointer font-bold underline underline-offset-4 decoration-2 decoration-green-600 text-black">
            Social
          </li>
          <li className="cursor-pointer mt-4 mb-3">
            <FaFacebook />
          </li>
          <li className="cursor-pointer mb-3">
            <FaTwitter />
          </li>
          <li className="cursor-pointer mb-3">
            <FaLinkedin />
          </li>
          <li className=" cursor-pointer">
            <FaGithub />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
