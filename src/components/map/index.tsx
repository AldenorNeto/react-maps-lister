import { APIProvider, Map } from "@vis.gl/react-google-maps";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

interface MapComponentProps {
  location: {
    lat: number;
    lng: number;
  } | null;
}

export const MapComponent = ({ location }: MapComponentProps) => {
  return (
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
      <Map
        style={{ width: "100vw", height: "50vh" }}
        defaultCenter={location ?? undefined}
        defaultZoom={15}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />
    </APIProvider>
  );
};
