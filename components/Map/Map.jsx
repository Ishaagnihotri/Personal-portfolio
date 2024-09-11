import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { mapData } from './MapData';

const containerStyle = {
  width: '100%',
  height: '350px',
  borderRadius: '0.5em',
  boxShadow: '0 8px 26px 0 rgba(22, 24, 26, 0.11)',
  transition: 'ease-out 0.16s',
  marginTop: '1.5rem',
};

const center = {
  lat: mapData.mainData.lat,
  lng: mapData.mainData.lng
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
    </GoogleMap>
  ) : <></>
}

export default Map