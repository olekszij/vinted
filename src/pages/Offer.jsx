import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Offer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/v2/offers/${id}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <main className='offer'>
      <img
        src={data.product_image.secure_url}
        alt={data.product_name}
        className='product-img'
      />
      <div className='product_details'>
        <div className='keys'>
          {data.product_details.map((detail, index) => {
            const keys = Object.keys(detail);
            const key = keys[0];
            return (
              <p key={index}>
                {key} : {detail[key]}
              </p>
            );
          })}
        </div>
        <div className='call_to_action'>Acheter</div>
      </div>
    </main>
  );
};

export default Offer;
