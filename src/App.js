import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import detectBrowserLanguage from 'detect-browser-language';
import NavBar from './components/common/navBar.jsx';
import Footer from './components/common/footer';
import Home from './components/home';
import Schedule from './components/schedule';
import Services from './components/services';
import Pinboard from './components/pinboard';
import Login from './components/login';
import NotFound from './components/notFound';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // Returns a string: 'en' or 'es'
  // If 'es' render site in Spanish -- all others in English
  const lang = detectBrowserLanguage().split('-')[0];

  // Login page quote generator

  const quotes = [
    'Home is waiting...',
    'Home awaits...',
    'Home is where the heart is...',
    "There's no place like home...",
    'Mi casa es tu casa...',
    'Home sweet home!',
    'Hogar dulce hogar...',
    'Welcome home!',
  ];

  const slogan = () => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    let chosen = getRandomInt(8);
    return quotes[chosen];
  };

  let quote = slogan();

  return (
    <div id="App" className="min-h-screen antialiasing bg-gray-100 sm:flex">
      <ToastContainer />
      <NavBar />
      <div className="sm:flex-col sm:w-full">
        <Switch>
          <Route path="/schedule" component={Schedule} />
          <Route path="/services" component={Services} />
          <Route path="/pinboard" component={Pinboard} />
          <Route path="/login" render={(props) => <Login {...props} quote={quote} />} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact render={(props) => <Home {...props} lang={lang} />} />
          <Redirect to="/not-found" />
        </Switch>
        <Footer />
      </div>
    </div>
  );
};

export default App;
