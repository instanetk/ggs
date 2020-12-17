import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/common/navBar.jsx';
import Footer from './components/common/footer';
import Home from './components/home';
import Schedule from './components/schedule';
import Services from './components/services';
import Pinboard from './components/pinboard';
import Login from './components/login';
import Registration from './components/registration';
import NotFound from './components/notFound';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
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
        <Footer />
      </div>
    </div>
  );
};

export default App;
