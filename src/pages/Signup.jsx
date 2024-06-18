import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ({ handleToken }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setErrorMessage('');

    try {
      const response = await axios.post(
        'https://lereacteur-vinted-api.herokuapp.com/user/signup',
        {
          email: email.trim(),
          username: username.trim(),
          password,
          newsletter,
        }
      );

      if (response.data && response.data.token) {
        handleToken(response.data.token);

        navigate('/');
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrorMessage('Cet email est déjà utilisé');
      } else if (
        error.response &&
        error.response.data.message === 'Missing parameters'
      ) {
        setErrorMessage('Veuillez remplir tous les champs');
      } else {
        console.error(error);
      }
    }
  };

  return (
    <main className='signup'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Nom de l'utilisateur</label>
        <input
          type='text'
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          value={username}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
        <label htmlFor='password'>Mote de passe</label>
        <input
          type='password'
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
        />
        <input
          type='checkbox'
          onChange={() => {
            setNewsletter(!newsletter);
          }}
          checked={newsletter}
        />
        <input type='submit' id='call_to_action' value="S'inscrire" />
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </main>
  );
};

export default Signup;
