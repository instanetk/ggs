import React from 'react';
import { GoogleMap, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';

const styles = {
  input: 'px-3 py-3 h-12 placeholder-indigo-500 w-full',
  h2: 'py-4 text-3xl text-gray-600 font-normal text-left',
  map: 'mt-6 rounded-md select-none overflow-hidden sm:w-1/2',
  mainDiv: 'sm:flex justify-between px-20',
  boxDiv: 'sm:w-1/2 mr-6',
};

const containerStyle = {
  width: '100%',
  height: '350px',
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
          <h2 className={styles.h2}>What is your service address?</h2>
          <form>
            <StandaloneSearchBox onLoad={onSearchBoxLoad} onPlacesChanged={onPlacesChanged}>
              <input
                type="text"
                name="address"
                placeholder="777 E Washington St, Orlando, FL"
                autoComplete="off"
                className={styles.input}></input>
            </StandaloneSearchBox>
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
