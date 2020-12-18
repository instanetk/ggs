import React, { useState, useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import NavBar from './components/common/navBar.jsx';
import Footer from './components/common/footer';
import Translate from './components/common/translate';
import User from './components/common/user';
import Home from './components/home';
import Schedule from './components/schedule';
import Services from './components/services';
import Pinboard from './components/pinboard';
import Login from './components/login';
import Registration from './components/registration';
import NotFound from './components/notFound';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [user, setUser] = useState({});

  const decode = () => {
    // Decode the JWT and set it as the user state.
    const jwt = localStorage.getItem('token');
    const user = jwtDecode(jwt);
    setUser(user);
  };

  useEffect(() => {
    try {
      decode();
    } catch (ex) {}
  }, []);

  return (
    <div id="App" className="min-h-screen antialiasing bg-gray-100 sm:flex">
      <ToastContainer />
      <NavBar />
      <div className="sm:flex-col sm:w-full">
        <Switch>
          <Route path="/schedule" component={Schedule} />
          <Route path="/services" component={Services} />
          <Route path="/pinboard" component={Pinboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Registration} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
        <Translate />
        <User user={user.name} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
