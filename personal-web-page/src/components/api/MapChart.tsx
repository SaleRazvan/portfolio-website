import { Box } from "@radix-ui/themes";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngBoundsExpression, LeafletMouseEvent } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import styles from "./MapChart.module.scss";
import { useEffect } from "react";

type MapOptionsType = {
  center: [number, number];
  zoom: number;
  maxZoom: number;
  minZoom: number;
  maxBounds: LatLngBoundsExpression;
};

type MapEventsHandlerProps = {
  handleMapClick: (e: LeafletMouseEvent) => void;
};

const mapOptions: MapOptionsType = {
  center: [50, 10],
  zoom: 4,
  maxZoom: 6,
  minZoom: 4,
  maxBounds: [
    [34.5, -25],
    [71, 50],
  ],
};

const euCountries = [
  { name: "Austria", latitude: 47.5162, longitude: 14.5501 },
  { name: "Belgium", latitude: 50.8503, longitude: 4.3517 },
  { name: "Bulgaria", latitude: 42.7339, longitude: 25.4858 },
  { name: "Croatia", latitude: 45.1, longitude: 15.2 },
  { name: "Cyprus", latitude: 35.1264, longitude: 33.4299 },
  { name: "Czech Republic", latitude: 49.8175, longitude: 15.473 },
  { name: "Denmark", latitude: 56.2639, longitude: 9.5018 },
  { name: "Estonia", latitude: 58.5953, longitude: 25.0136 },
  { name: "Finland", latitude: 61.9241, longitude: 25.7482 },
  { name: "France", latitude: 46.6034, longitude: 1.8883 },
  { name: "Germany", latitude: 51.1657, longitude: 10.4515 },
  { name: "Greece", latitude: 39.0742, longitude: 21.8243 },
  { name: "Hungary", latitude: 47.1625, longitude: 19.5033 },
  { name: "Ireland", latitude: 53.1424, longitude: -7.6921 },
  { name: "Italy", latitude: 41.8719, longitude: 12.5674 },
  { name: "Latvia", latitude: 56.8796, longitude: 24.6032 },
  { name: "Lithuania", latitude: 55.1694, longitude: 23.8813 },
  { name: "Luxembourg", latitude: 49.8153, longitude: 6.1296 },
  { name: "Malta", latitude: 35.8997, longitude: 14.5146 },
  { name: "Netherlands", latitude: 52.1326, longitude: 5.2913 },
  { name: "Poland", latitude: 51.9194, longitude: 19.1451 },
  { name: "Portugal", latitude: 39.3999, longitude: -8.2245 },
  { name: "Romania", latitude: 45.9432, longitude: 24.9668 },
  { name: "Slovakia", latitude: 48.669, longitude: 19.699 },
  { name: "Slovenia", latitude: 46.1512, longitude: 14.9955 },
  { name: "Spain", latitude: 40.4637, longitude: -3.7492 },
  { name: "Sweden", latitude: 60.1282, longitude: 18.6435 },
];

export default function MapChart() {
  const handleMapClick = (e: LeafletMouseEvent) => {
    console.log(e);
  };

  const MapEventsHandler = ({ handleMapClick }: MapEventsHandlerProps) => {
    useMapEvents({
      click: (e) => handleMapClick(e),
    });

    return null;
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await fetch(
          "https://portfolio-website-9jb0.onrender.com/fun-facts/allCountries"
        );
        const response = await data.json();

        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCountries();
  }, []);

  return (
    <Box
      className={styles.mapContainer}
      width="60%"
      height="60%"
      minHeight="400px"
      flexGrow="1"
    >
      <MapContainer {...mapOptions} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
        />
        <MarkerClusterGroup>
          {euCountries.map((country) => (
            <Marker
              key={country.name}
              position={[country.latitude, country.longitude]}
            >
              <Popup>A pretty popup</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
        <MapEventsHandler handleMapClick={handleMapClick} />
      </MapContainer>
    </Box>
  );
}
