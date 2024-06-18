import { Link } from 'react-router-dom';

const ProductCard = ({ offer }) => {
  if (!offer) {
    return null;
  }

  const { _id, owner, product_pictures, product_price, product_details } =
    offer;

  const avatarUrl = owner?.account?.avatar?.secure_url;
  const productName = product_pictures?.[0]?.secure_url;
  const size = product_details?.[1]?.TAILLE;
  const brand = product_details?.[0]?.MARQUE;

  return (
    <Link to={`/offers/${_id}`} key={_id}>
      <div className='product-card' key={owner?._id}>
        <div className='owner'>
          <img src={avatarUrl} alt='' className='avatar' />
          <p>{owner?.account?.username}</p>
        </div>

        <img className='product-img' src={productName} alt={productName} />
        <p>Price: {product_price} €</p>
        <p>{size}</p>
        <p>{brand}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
