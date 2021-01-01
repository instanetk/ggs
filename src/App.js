import React, { useState, useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './components/common/protectedRoute';
import NavBar from './components/common/navBar.jsx';
import Translate from './components/common/translate';
import User from './components/common/user';
import Footer from './components/common/footer';
import Home from './components/home';
import Schedule from './components/schedule';
import Services from './components/services';
import Pinboard from './components/pinboard';
import Coverings from './components/categories/coverings';
import Irrigation from './components/categories/irrigation';
import Painting from './components/categories/painting';
import Cleaning from './components/categories/cleaning';
import Plumbing from './components/categories/plumbing';
import Pavers from './components/categories/pavers';
import Granite from './components/categories/granite';
import Pool from './components/categories/pool';
import Misc from './components/categories/misc';
import Login from './components/login';
import Registration from './components/registration';
import Logout from './components/logout';
import NotFound from './components/notFound';
import Account from './components/account';
import auth from './services/authService';
import 'react-toastify/dist/ReactToastify.css';
import Tiles from './components/services/tileinstallation';

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    try {
      const user = auth.getCurrentUser();
      setUser(user);
    } catch (ex) {}
  }, []);

  return (
    <div id="App" className="min-h-screen antialiasing bg-gray-100 sm:flex">
      <ToastContainer />
      <NavBar />
      <div className="sm:flex-col sm:w-full">
        <Switch>
          <Route path={['/services/floors-coverings', '/services/pisos-y-revestimientos']} component={Coverings} />
          <Route
            path={['/services/landscape-irrigation', '/services/jardinería-e-irrigación']}
            component={Irrigation}
          />
          <Route path={['/services/painting', '/services/pintura']} component={Painting} />
          <Route path={['/services/cleaning', '/services/limpieza']} component={Cleaning} />
          <Route path={['/services/plumbing', '/services/plomería']} component={Plumbing} />
          <Route path={['/services/pavers-stones', '/services/pavimentos-y-piedras']} component={Pavers} />
          <Route path={['/services/granite-countertops', '/services/superficies-de-granito']} component={Granite} />
          <Route path={['/services/pool-service', '/services/servicio-de-piscina']} component={Pool} />
          <Route path={['/services/miscellaneous', '/services/misceláneos']} component={Misc} />
          <Route path={['/services/tile-installation', '/services/instalación-de-losas']} component={Tiles} />
          <Route path="/services" component={Services} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/pinboard" component={Pinboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Registration} />
          <Route path="/logout" component={Logout} />
          <Route path="/not-found" component={NotFound} />
          <ProtectedRoute path="/account" component={Account} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
        <Translate />
        <User user={user} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
