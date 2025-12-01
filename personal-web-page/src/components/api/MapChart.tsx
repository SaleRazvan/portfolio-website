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
import { useTranslation } from "react-i18next";

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
  maxZoom: 7,
  minZoom: 4,
  maxBounds: [
    [33, -25],
    [71, 50],
  ],
};

export default function MapChart() {
  const { euCountriesData, setEuCountriesData } = useContext(AppContext);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://portfolio-website-9jb0.onrender.com/fun-facts/all"
        );

        if (!response.ok && response.status === 429)
          throw new Error(t("api.reqFail"));

        const responseArr: EuCountry[] = await response.json();

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
      } catch (error) {
        alert(error);
      }
    };

    fetchCountries();
  }, [setEuCountriesData, t]);

  if (euCountriesData.length === 0)
    return (
      <Skeleton
        width="60%"
        minHeight="400px"
        loading={euCountriesData.length === 0}
      />
    );

  return (
    <Box
      className={styles.mapContainer}
      width={{ initial: "100%", md: "60%" }}
      minHeight="400px"
    >
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
