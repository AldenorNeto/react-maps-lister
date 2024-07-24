import {
  DirectionsRenderer,
  GoogleMap,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { iconW3SVG } from "../../constants/svgURL";
import { getEmojiForPlace } from "../../constants/typeToEmoji";
import { Place } from "../placeList";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

interface MapComponentProps {
  location: {
    lat: number;
    lng: number;
  } | null;
  destination: {
    lat: number;
    lng: number;
  } | null;
  places: Place[];
}

export const MapComponent = ({
  location,
  destination,
  places,
}: MapComponentProps) => {
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);

  const mapContainerStyle = {
    width: "100vw",
    height: "50vh",
  };

  useEffect(() => {
    if (location && destination) {
      const directionsService = new google.maps.DirectionsService();
      directionsService.route(
        {
          origin: location,
          destination: destination,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK && result) {
            setDirections(result);
          } else {
            console.error(`Error fetching directions ${result}`);
          }
        }
      );
    } else {
      setDirections(null);
    }
  }, [location, destination]);

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={destination ?? location ?? undefined}
        zoom={17}
        options={{
          gestureHandling: "greedy",
          disableDefaultUI: true,
        }}
      >
        {location && !directions && (
          <Marker
            position={location}
            icon={{
              url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            }}
            title="Localização Atual"
          />
        )}

        {destination && !directions && (
          <Marker
            position={destination}
            icon={{
              url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
            }}
            title="Destino"
          />
        )}

        {directions && <DirectionsRenderer directions={directions} />}

        {places.map((place) => (
          <Marker
            key={place.place_id}
            position={place.geometry.location}
            icon={{
              url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
                `${iconW3SVG(getEmojiForPlace(place.types))}`
              )}`,
            }}
            title={place.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};
