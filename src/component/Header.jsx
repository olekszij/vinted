import { Link } from 'react-router-dom';

const Header = ({ token, search, handleToken, setSearch }) => {
  return (
    <header>
      <Link to='/' className='logo'>
        <img src='../../logo.svg' alt='' />
      </Link>

      <input
        type='text'
        className='searchbar'
        placeholder='Rechercher des articles'
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />

      {token ? (
        <button
          className='disconnect'
          onClick={() => {
            handleToken(null);
          }}
        >
          Se deconnecter
        </button>
      ) : (
        <div className='nav'>
          {' '}
          <Link to='/signup' className='btn_nav'>
            S'inscrire
          </Link>
          <Link to='/login' className='btn_nav'>
            Se connecter
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
