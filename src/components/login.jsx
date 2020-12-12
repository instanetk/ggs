import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../images/stock-photo-front-view-of-a-pink-sofa-with-pillows-and-blanket-vintage-cupboard-in-the-background-in-a-1100648855.jpg';
import img2 from '../images/stock-photo-real-photo-of-a-pink-armchair-standing-on-a-rug-and-under-a-lamp-in-spacious-living-room-interior-1105805627.jpg';
import img3 from '../images/stock-photo-interior-of-the-living-room-d-illustration-1656221158.jpg';

const Login = () => {
  // Choose random background image
  const bgRandom = () => {
    // List imported images in this array
    let array = [img1, img2, img3];
    // Generates a number between 0 and max-1
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    let chosen = getRandomInt(3);
    return array[chosen];
  };

  return (
    <div
      className="sm:flex-col sm:w-full flex justify-center h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url(' + bgRandom() + ')',
      }}>
      <main>
        <div className="px-4 mt-14 sm:mt-0 flex-shrink-0">
          <div className="flex content-center items-center justify-center mx-auto">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white opacity-90 border-0">
                <div className="rounded-t mb-0 px-6 py-6"></div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-gray-500 text-center mb-3">
                    <small>Home awaits...</small>
                  </div>
                  <form>
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Email
                      </label>
                      <input
                        type="email"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Email"
                        style={{ transition: 'all .15s ease' }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Password
                      </label>
                      <input
                        type="password"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Password"
                        style={{ transition: 'all .15s ease' }}
                      />
                    </div>
                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          id="customCheckLogin"
                          type="checkbox"
                          className="form-checkbox border-0 focus:ring-0 focus:ring-offset-0"
                          style={{ transition: 'all .15s ease' }}
                        />
                        <span className="ml-2 text-sm font-semibold text-gray-600">Remember me</span>
                      </label>
                    </div>

                    <div className="text-center mt-6">
                      <button
                        className="bg-indigo-700 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="button"
                        style={{ transition: 'all .15s ease' }}>
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex flex-wrap mt-6">
                <div className="w-1/2">
                  <Link to="password" className="text-gray-300">
                    <small>Forgot password?</small>
                  </Link>
                </div>
                <div className="w-1/2 text-right">
                  <Link to="register" className="text-gray-300">
                    <small>Create new account</small>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
