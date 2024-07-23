import axios from "axios";
import { useEffect, useState } from "react";
import { typeToEmoji } from "../../constants/typeToEmoji";
import "../../index.css";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

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

interface PlacesListProps {
  location: {
    lat: number;
    lng: number;
  } | null;
}

export const PlacesList = ({ location }: PlacesListProps) => {
  const [places, setPlaces] = useState<Place[]>([]);

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
          setPlaces(response.data.results);
        } catch (error) {
          console.error("Error fetching places:", error);
        }
      }
    };

    fetchPlaces();
  }, [location]);

  const getEmojiForPlace = (types: string[]): string => {
    for (const type of types) {
      if (typeToEmoji[type]) {
        return typeToEmoji[type];
      }
    }
    return "🏠";
  };

  return (
    <div className="overflow-y-scroll h-[50vh] p-4 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">Lugares Próximos</h2>
      <ul className="list-disc pl-5">
        {places.map((place) => (
          <li
            key={place.place_id}
            className="mb-4 p-3 bg-white shadow-md rounded-lg"
          >
            <strong className="text-lg font-bold">
              {getEmojiForPlace(place.types)} {place.name}
            </strong>
            <br />
            <span className="text-gray-600">{place.vicinity}</span>
            <br />
            {place.rating && (
              <span className="text-gray-700">
                Classificação: {place.rating} ({place.user_ratings_total}{" "}
                avaliações)
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
