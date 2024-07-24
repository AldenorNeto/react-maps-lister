import { useEffect, useState } from "react";
import { MapComponent } from "./components/map";
import { PlacesList } from "./components/placeList";

interface Place {
  place_id: string;
  name: string;
  vicinity: string;
  rating?: number;
  user_ratings_total?: number;
  types: string[];
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
}

export const App = () => {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [destination, setDestination] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [places, setPlaces] = useState<Place[]>([]);

  // Handle location toggle
  const handlePlaceClick = (place: Place) => {
    if (destination && destination.lat === place.geometry.location.lat && destination.lng === place.geometry.location.lng) {
      // If the place is already selected as destination, deselect it
      setDestination(null);
    } else {
      // Otherwise, select this place as destination
      setDestination(place.geometry.location);
    }
  };

  useEffect(() => {
    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    fetchLocation();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <MapComponent
        location={location}
        destination={destination}
        places={places}
      />
      <PlacesList
        location={location}
        onPlaceClick={handlePlaceClick}
        setPlaces={setPlaces}
        selectedDestination={destination} // Pass the current selected destination
      />
    </div>
  );
};
