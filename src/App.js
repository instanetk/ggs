import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import detectBrowserLanguage from 'detect-browser-language';
import NavBar from './components/common/navBar.jsx';
import Home from './components/home';
import Login from './components/login';

const App = () => {
  // Returns a string: 'en' or 'es'
  // If 'es' render site in Spanish -- all others in English
  const lang = detectBrowserLanguage().split('-')[0];

  return (
    <div id="App" className="min-h-screen antialiasing bg-gray-100 sm:flex">
      <NavBar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" render={(props) => <Home {...props} lang={lang} />} />
      </Switch>
    </div>
  );
};

export default App;
