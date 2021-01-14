import React, { useCallback, useEffect } from 'react';
import queryString from 'query-string';
import { getAppointment } from '../../services/scheduleService';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
import img from '../../services/imgService';

const AppointmentCard = ({ location, history, user }) => {
  let id;
  if (location.search !== 'undefined') {
    let result = queryString.parse(location.search);
    id = result.id;
  }
  const [appointment, setAppointment] = React.useState({});

  const fetchAppointment = useCallback(async () => {
    const { data } = await getAppointment(id);
    setAppointment(data[0]);
    setCenter(data[0].coordinates);
  }, [id]);

  useEffect(() => {
    fetchAppointment();
  }, [fetchAppointment]);

  console.log(appointment);
  // eslint-disable-next-line
  const [map, setMap] = React.useState(null);
  // eslint-disable-next-line
  const [center, setCenter] = React.useState({
    lat: 28.5445894,
    lng: -81.5883121,
  });
  // eslint-disable-next-line
  const [zoom, setZoom] = React.useState(17);
  // eslint-disable-next-line
  const [error, setError] = React.useState({});
  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds();
    // map.fitBounds(bounds);
    // setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  const containerStyle = {
    width: '100%',
    height: '450px',
  };
  const options = {
    disableDefaultUI: false,
  };

  let image;
  switch (appointment.service) {
    case 'Tile Installation':
    case 'Instalación de Losas': {
      image = 'srvTiles';
      break;
    }
    case 'Backsplash':
      image = 'srvBacksplash';
      break;
    case 'Landscape & Irrigation':
      image = 'catLandscaping';
      break;
    default:
      image = 'login';
  }
  const date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <div
      className="flex min-h-screen items-center w-full p-20 bg-cover bg-center"
      style={{
        backgroundImage: 'url(' + img.login + ')',
      }}>
      <div className="flex w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} language="en" region="us">
          <div className="w-1/2">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={zoom}
              onLoad={onLoad}
              onUnmount={onUnmount}
              options={options}>
              {/* Child components, such as markers, info windows, etc. */}
              {zoom > 8 ? <Marker position={center} /> : null}
            </GoogleMap>
          </div>
        </LoadScript>
        <div className="w-1/2">
          <div
            id="header"
            className="bg-pink-800 h-52 p-4 bg-cover bg-center relative"
            style={{
              backgroundImage:
                'url(' + 'https://res.cloudinary.com/dgt2j8jc0/image/upload/c_scale,q_80,w_1000/' + img[image] + ')',
            }}>
            <h1 className="text-white font-bold text-4xl text-shadow-xl absolute right-2 bottom-1">
              {appointment.service}
            </h1>
          </div>
          <div className="p-4">
            <h2 className="text-gray-900 font-bold text-2xl">{appointment.name}</h2>
            <h2 className="text-gray-700 font-bold text-xl">{appointment.phone}</h2>
            <p className="mt-2 text-gray-600 text-sm">{appointment.address}</p>
            <p className="mt-2 text-gray-600 text-sm">{new Date(appointment.date).toLocaleDateString('en-US', date)}</p>
          </div>

          <div className="flex item-center justify-between mt-3 p-4">
            {user.isAdmin ? (
              <button
                onClick={history.goBack}
                className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                Close
              </button>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
