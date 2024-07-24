import axios from "axios";
import { useEffect, useState } from "react";
import { getEmojiForPlace } from "../../constants/typeToEmoji";
import "../../index.css";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export interface Place {
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
  distance?: string;
  distanceValue?: number;
}

interface PlacesListProps {
  location: {
    lat: number;
    lng: number;
  } | null;
  onPlaceClick: (place: Place) => void;
  setPlaces: (places: Place[]) => void;
  selectedDestination: { lat: number; lng: number } | null;
}

export const PlacesList = ({
  location,
  onPlaceClick,
  setPlaces,
  selectedDestination,
}: PlacesListProps) => {
  const [localPlaces, setLocalPlaces] = useState<Place[]>([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      if (location) {
        try {
          const response = await axios.get(
            `/api/maps/api/place/nearbysearch/json`,
            {
              params: {
                location: `${location.lat},${location.lng}`,
                radius: 5000,
                key: GOOGLE_MAPS_API_KEY,
              },
            }
          );

          const placesData: Place[] = response.data.results;

          const placesWithDistance = await calculateDistances(
            location,
            placesData
          );

          placesWithDistance.sort((a, b) => {
            if (a.distanceValue && b.distanceValue) {
              return a.distanceValue - b.distanceValue;
            }
            return 0;
          });

          setLocalPlaces(placesWithDistance);
          setPlaces(placesWithDistance);
        } catch (error) {
          console.error("Error fetching places:", error);
        }
      }
    };

    fetchPlaces();
  }, [location, setPlaces]);

  const calculateDistances = async (
    origin: { lat: number; lng: number },
    places: Place[]
  ): Promise<Place[]> => {
    const destinations = places
      .map(
        (place) =>
          `${place.geometry.location.lat},${place.geometry.location.lng}`
      )
      .join("|");

    try {
      const response = await axios.get(`/api/maps/api/distancematrix/json`, {
        params: {
          origins: `${origin.lat},${origin.lng}`,
          destinations: destinations,
          key: GOOGLE_MAPS_API_KEY,
          units: "metric",
        },
      });

      const distanceResults = response.data.rows[0].elements;

      const placesWithDistances = places.map((place, index) => ({
        ...place,
        distance: distanceResults[index].distance.text,
        distanceValue: distanceResults[index].distance.value,
      }));

      return placesWithDistances;
    } catch (error) {
      console.error("Error fetching distances:", error);
      return places;
    }
  };

  return (
    <div className="overflow-y-scroll h-[50vh] p-4 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">Lugares Próximos</h2>
      <ul className="list-disc pl-5">
        {localPlaces.map((place) => {
          const isSelected =
            selectedDestination &&
            selectedDestination.lat === place.geometry.location.lat &&
            selectedDestination.lng === place.geometry.location.lng;

          return (
            <li
              key={place.place_id}
              className={`mb-4 p-3 rounded-lg cursor-pointer transition duration-300 ${
                isSelected
                  ? "bg-blue-800 text-white shadow-md"
                  : "bg-white shadow-md hover:bg-gray-200"
              }`}
              onClick={() => onPlaceClick(place)}
            >
              <strong className="text-lg font-bold">
                {getEmojiForPlace(place.types)} {place.name}
              </strong>
              <br />
              <span
                className={`${isSelected ? "text-white" : "text-gray-600"}`}
              >
                {place.vicinity}
              </span>
              <br />
              {place.distance && (
                <span
                  className={`${isSelected ? "text-white" : "text-gray-700"}`}
                >
                  Distância: {place.distance}
                </span>
              )}
              <br />
              {place.rating && (
                <span
                  className={`${isSelected ? "text-white" : "text-gray-700"}`}
                >
                  Classificação: {place.rating} ({place.user_ratings_total}{" "}
                  avaliações)
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
