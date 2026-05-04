import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
    const [boundaries, setBoundaries] = useState(() => []);
    const bounds = [
        [import.meta.env.VITE_SOUTH_BOUND, import.meta.env.VITE_WEST_BOUND],
        [import.meta.env.VITE_NORTH_BOUND, import.meta.env.VITE_EAST_BOUND]
    ]

    useEffect(() => {
        fetch("/boundaries.geojson")
            .then((res) => res.json())
            .then((data) => {
                setBoundaries({
                    ...data,
                    features: data.features.filter(feature => feature.geometry.type == "Polygon")
                });
            });
    }, []);

    const markers = [
        {
            geocode: [import.meta.env.VITE_TEMP_LONG, import.meta.env.VITE_TEMP_LAT],
            popUp: "Person"
        }
    ]

    const customIcon = new Icon({
        iconUrl: import.meta.env.VITE_TEMP_ICON_URL,
        iconSize: [16, 16]
    });
    return (
        <MapContainer
            center={[import.meta.env.VITE_CITY_LONG, import.meta.env.VITE_CITY_LAT]}
            zoom={11.5}
            zoomSnap={0.25}
            zoomDelta={0.25}
            minZoom={11.5}
            maxBounds={bounds}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            {markers.map(marker =>
                <Marker
                    position={marker.geocode}
                    icon={customIcon}
                >
                    <Popup>{marker.popUp}</Popup>
                </Marker>
            )}
            <GeoJSON
                key={JSON.stringify(boundaries)}
                data={boundaries}
                style={(feature) => {
                    return {
                        color: feature.properties.fill,
                        weight: 2,
                        fillOpacity: feature.properties["fill-opacity"],
                        fillColor: feature.properties.fill
                    }
                }}
            />
        </MapContainer>
    );
}

export default Map;