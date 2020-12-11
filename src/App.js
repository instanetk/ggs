import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import detectBrowserLanguage from 'detect-browser-language';
import NavBar from './components/common/navBar.jsx';
import Home from './components/home';
import Schedule from './components/schedule';
import Services from './components/services';
import Chat from './components/chat';
import Login from './components/login';
import NotFound from './components/notFound';

const App = () => {
  // Returns a string: 'en' or 'es'
  // If 'es' render site in Spanish -- all others in English
  const lang = detectBrowserLanguage().split('-')[0];

  return (
    <div id="App" className="min-h-screen antialiasing bg-gray-100 sm:flex">
      <NavBar />
      <Switch>
        <Route path="/schedule" component={Schedule} />
        <Route path="/services" component={Services} />
        <Route path="/chat" component={Chat} />
        <Route path="/login" component={Login} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" exact render={(props) => <Home {...props} lang={lang} />} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default App;
