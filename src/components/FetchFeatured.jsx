import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./Card";
import Skeleton from "./Skeleton";

const FetchFeatured = () => {
  const [data, setData] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=20&price_change_percentage=24h";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-y-5 justify-center place-items-center">
      {!data
        ? Array.from({ length: 20 }, (_, index) => <Skeleton key={index} />)
        : data.map((fetchedData) => (
            <Card
              key={fetchedData.id}
              imgSrc={fetchedData.image}
              altText={fetchedData.name}
              name={fetchedData.name}
              price={fetchedData.current_price.toLocaleString() ?? "-"}
              change={
                typeof fetchedData.price_change_percentage_24h === "number"
                  ? fetchedData.price_change_percentage_24h.toFixed(2)
                  : "0.00"
              }
            />
          ))}
    </div>
  );
};

export default FetchFeatured;
