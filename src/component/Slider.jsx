import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <div className='slider'>
      <div className='call-to-action'>
        <h2>Prêts à faire du tri dans vos placards ?</h2>
        <Link to='/publish'>
          <div className='btn-slider'>Vends tes articles</div>
        </Link>
      </div>
    </div>
  );
};

export default Slider;
