import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../component/Card';
import Slider from '../component/Slider';

const Home = ({ search }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/v2/offers?title=${search}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [search]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <>
      <Slider />

      <main>
        {data && data.offers.length > 0 ? (
          data.offers.map((offer) => (
            <ProductCard offer={offer} key={offer._id} />
          ))
        ) : (
          <p>No offers found</p>
        )}
      </main>
    </>
  );
};

export default Home;
