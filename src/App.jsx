import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

import './App.css';

// Pages
import Home from './pages/Home';
import Offer from './pages/Offer';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Publish from './pages/Publish';

// Components
import Header from './component/Header';

function App() {
  const [token, setToken] = useState(() => Cookies.get('vinted-token') ?? null);
  const [search, setSearch] = useState('');

  const handleToken = (token) => {
    if (token) {
      Cookies.set('vinted-token', token, { expires: 15 });
      setToken(token);
    } else {
      Cookies.remove('vinted-token');
      setToken(null);
    }
  };

  return (
    <Router>
      <Header
        token={token}
        search={search}
        handleToken={handleToken}
        setSearch={setSearch}
      />

      <Routes>
        <Route path='/' element={<Home search={search} />} />
        <Route path='/offers/:id' element={<Offer />} />

        <Route path='/signup' element={<Signup handleToken={handleToken} />} />
        <Route path='/login' element={<Login handleToken={handleToken} />} />
        <Route
          path='/publish'
          element={token ? <Publish token={token} /> : <Navigate to='/login' />}
        />
      </Routes>
    </Router>
  );
}

export default App;
