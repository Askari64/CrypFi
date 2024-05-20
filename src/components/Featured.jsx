import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./Card";
const Featured = () => {
  const [data, setData] = useState(null);

  //const apiKey = import.meta.env.VITE_API_KEY;
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=6&price_change_percentage=24h";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className=" w-full mx-auto">
      <div className=" grid lg:grid-cols-2 gap-4 max-w-[1240px] mx-auto md:my-[150px] sm:my-[100px] my-[60px] px-6">
        {/*Left*/}
        <div>
          <h2 className=" font-bold text-xl sm:text-2xl md:text-4xl">
            Explore Top Cryptos like Bitcoin, Ethereum and Matic
          </h2>
          <p className=" font-normal text-lg md:text-xl text-gray-700 my-4">
            See all available Assets, Cryptocurrencies and NFTs
          </p>
          <button className=" my-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-white hover:text-green-600">
            See More Coins
          </button>
        </div>
        {/*Right*/}
        <div className=" grid grid-cols-2 md:grid-cols-3 gap-y-5 justify-center place-items-center">
          {data &&
            data.map((fetchedData) => (
              <Card
                key={fetchedData.id}
                imgSrc={fetchedData.image}
                altText={fetchedData.name}
                name={fetchedData.name}
                price={fetchedData.current_price.toLocaleString()}
                change={fetchedData.price_change_percentage_24h.toFixed(2)}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
