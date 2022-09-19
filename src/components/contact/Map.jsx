import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GAPI,
  });
  const center = useMemo(
    () => ({ lat: 23.0122841610936, lng: 91.40081391237013 }),
    []
  );

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap zoom={17} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
      <div className="shadow"></div>
    </GoogleMap>
  );
};
export default Map;
