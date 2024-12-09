import { Box, Skeleton } from "@radix-ui/themes";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngBoundsExpression } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { AppContext } from "../../AppContext";
import { useContext, useEffect } from "react";
import styles from "./MapChart.module.scss";
import "leaflet/dist/leaflet.css";
import { EuCountry } from "../../common/types";
import { euCountriesCoordinates } from "../../utils/eu-countries-coordinates";

type MapOptionsType = {
  center: [number, number];
  zoom: number;
  maxZoom: number;
  minZoom: number;
  maxBounds: LatLngBoundsExpression;
};

const mapOptions: MapOptionsType = {
  center: [50, 10],
  zoom: 4,
  maxZoom: 6,
  minZoom: 4,
  maxBounds: [
    [33, -25],
    [71, 50],
  ],
};

export default function MapChart() {
  const { euCountriesData, setEuCountriesData } = useContext(AppContext);

  useEffect(() => {
    const fetchCountries = async () => {
      // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      try {
        // await delay(3000);

        const data = await fetch(
          "https://portfolio-website-9jb0.onrender.com/fun-facts/all"
        );
        const responseArr = (await data.json()) as EuCountry[];

        const availableCountries = responseArr
          .map((countryData) => {
            const { latitude, longitude } =
              euCountriesCoordinates.find(
                (storedCountry) => storedCountry.name === countryData.country
              ) || {};

            return {
              ...countryData,
              latitude: latitude ?? 0,
              longitude: longitude ?? 0,
            };
          })
          .sort((a, b) => {
            if (a.country < b.country) return -1;
            if (a.country > b.country) return 1;
            return 0;
          });

        setEuCountriesData(availableCountries);
      } catch (err) {
        alert(err);
      }
    };

    fetchCountries();
  }, [setEuCountriesData]);

  if (euCountriesData.length === 0)
    return (
      <Skeleton
        width="60%"
        minHeight="400px"
        loading={euCountriesData.length === 0}
      />
    );

  return (
    <Box className={styles.mapContainer} width="60%" minHeight="400px">
      <MapContainer {...mapOptions} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
        />
        <MarkerClusterGroup>
          {euCountriesData.map((countryData) => {
            return countryData.facts.map((fact) => (
              <Marker
                key={fact}
                position={[countryData.latitude, countryData.longitude]}
              >
                <Popup>{fact}</Popup>
              </Marker>
            ));
          })}
        </MarkerClusterGroup>
      </MapContainer>
    </Box>
  );
}
