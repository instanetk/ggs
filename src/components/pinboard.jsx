import React from 'react';
import ReactPinboard from 'react-pinboard';

const cols = [{ media: '', cols: 2 }];

const Pinboard = () => {
  return (
    <main>
      <div className="px-4 sm:px-20 sm:py-4">
        <h1 className="text-4xl py-4 font-bold text-pink-600">It begins with a little inspiration...</h1>
        <ReactPinboard cols={cols} spacing="1.5em">
          <div>
            <img
              className="rounded-xl"
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
          {/* New Pin */}
          <div>
            <img
              className="rounded-xl"
              src="https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
          {/* New Pin */}
          <div>
            <img
              className="rounded-xl"
              src="https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
          {/* New Pin */}
          <div>
            <img
              className="rounded-xl"
              src="https://images.pexels.com/photos/769585/pexels-photo-769585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
          {/* New Pin */}
          <div>
            <img
              className="rounded-xl"
              src="https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
          {/* New Pin */}
          <div>
            <img
              className="rounded-xl"
              src="https://images.pexels.com/photos/1303085/pexels-photo-1303085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
          {/* New Pin */}
          <div>
            <img
              className="rounded-xl"
              src="https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
          {/* New Pin */}
          <div>
            <img
              className="rounded-xl"
              src="https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
          {/* New Pin */}
          <div>
            <img
              className="rounded-xl"
              src="https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
        </ReactPinboard>
      </div>
    </main>
  );
};

export default Pinboard;
