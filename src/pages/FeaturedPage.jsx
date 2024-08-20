import cryptoPortfolio from "../assets/crypto-portfolio.png";
import FetchFeatured from "../components/FetchFeatured";

function FeaturedPage() {
  return (
    <section className=" w-full ">
      <div className=" grid lg:grid-cols-2 gap-4 max-w-[1240px] mx-auto md:my-[150px] sm:my-[100px] my-[60px] px-6">
        {/*Left*/}
        <div>
          <h2 className=" font-normal text-lg md:text-xl text-gray-700">
            Trade Crypto Anytime, Anywhere
          </h2>
          <p className=" font-bold text-2xl sm:text-4xl md:text-6xl my-4">
            Diversify Your Portfolio with Cryptocurrency
          </p>
          <p className=" font-normal text-lg md:text-xl text-gray-700">
            Join Thousands of Investors and Start Trading Today!
          </p>
        </div>
        {/*Right*/}
        <div>
          <img
            className=" w-[60%] mx-auto mt-6"
            src={cryptoPortfolio}
            alt="Crypto Dashboard"
          />
        </div>
      </div>
      <div className=" gap-4 max-w-[1240px] mx-auto md:my-[150px] sm:my-[100px] my-[60px] px-6">
      <FetchFeatured/>
      </div>
    </section>
  );
}

export default FeaturedPage;
