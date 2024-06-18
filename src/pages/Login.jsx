import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'https://lereacteur-vinted-api.herokuapp.com/user/login',
        {
          email,
          password,
        }
      );
      if (response.data.token) {
        handleToken(response.data.token);
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className='login'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
        <label htmlFor='password'>Votre mot de passe</label>
        <input
          type='password'
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
        />
        <input type='submit' id='call_to_action' value='Se connecter' />
      </form>
    </main>
  );
};
export default Login;
