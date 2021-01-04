import React from 'react';
import { GoogleMap, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';

const styles = {
  form: '',
  input: 'px-3 py-3 h-12 placeholder-indigo-500 w-full',
  button:
    'mt-6 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-lg font-normal rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ',
  h2: 'mt-2 text-lg text-gray-600 font-normal text-left',
  map: 'rounded-md shadow select-none overflow-hidden sm:w-1/2',
  mainDiv: 'sm:flex justify-between px-20 ',
  boxDiv: 'px-8 py-6 rounded-md shadow sm:w-1/2 mr-6 bg-white',
};

const containerStyle = {
  width: '100%',
  height: '100%',
};

const libraries = ['places'];

const options = {
  disableDefaultUI: true,
};

//COMPONENT
const ServiceAddress = () => {
  // eslint-disable-next-line
  const [map, setMap] = React.useState(null);
  const [searchBox, setSearchBox] = React.useState(null);
  // eslint-disable-next-line
  const [address, setAddress] = React.useState(null);
  // eslint-disable-next-line
  const [center, setCenter] = React.useState({
    lat: 28.5445894,
    lng: -81.5883121,
  });

  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds();
    // map.fitBounds(bounds);
    // setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const onSearchBoxLoad = React.useCallback((ref) => {
    setSearchBox(ref);
  }, []);

  const onPlacesChanged = React.useCallback(() => {
    setAddress(searchBox.getPlaces());
  }, [searchBox]);

  return (
    <div className={styles.mainDiv}>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        libraries={libraries}
        language="en"
        region="us">
        <div className={styles.boxDiv}>
          <form className={styles.form}>
            <h2 className={styles.h2}>Name:</h2>
            <input type="text" name="name" placeholder="Full Name" autoComplete="off" className={styles.input}></input>
            <h2 className={styles.h2}>Phone Number:</h2>
            <input
              type="text"
              name="phone"
              placeholder="407-321-0000"
              autoComplete="off"
              className={styles.input}></input>
            <h2 className={styles.h2}>Service Address:</h2>
            <StandaloneSearchBox onLoad={onSearchBoxLoad} onPlacesChanged={onPlacesChanged}>
              <input
                type="text"
                name="address"
                placeholder="777 E Washington St, Orlando, FL"
                autocomplete="off"
                className={styles.input}></input>
            </StandaloneSearchBox>
            <h2 className={styles.h2}>Preferred Date</h2>
            <input type="date" name="date" autoComplete="off" className={styles.input}></input>
            <button type="button" className={styles.button}>
              Request Estimate Appointment
            </button>
          </form>
        </div>
        <div className={styles.map}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={options}>
            {/* Child components, such as markers, info windows, etc. */}
          </GoogleMap>
        </div>
      </LoadScript>
    </div>
  );
};

export default React.memo(ServiceAddress);
