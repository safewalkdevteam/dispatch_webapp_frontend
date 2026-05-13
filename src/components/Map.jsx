import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useLocation } from "react-router-dom";
import useWebSocketModule from "react-use-websocket";

const Map = ({ boundaries }) => {
    const useWebSocket = useWebSocketModule.default;
    const [markers, setMarkers] = useState(() => []);
    const location = useLocation();     
    const { lastJsonMessage, readyState } = useWebSocket(`ws://${import.meta.env.VITE_SERVER_HOST}/ws`);

    const bounds = [
        [import.meta.env.VITE_SOUTH_BOUND, import.meta.env.VITE_WEST_BOUND],
        [import.meta.env.VITE_NORTH_BOUND, import.meta.env.VITE_EAST_BOUND]
    ]

    useEffect(() => {
        if (lastJsonMessage) {
            const new_marker = {
                team: lastJsonMessage.Team,
                geocode: [lastJsonMessage.Latitude, lastJsonMessage.Longitude],
                popUp: `Team ${lastJsonMessage.Team} - ${lastJsonMessage.LastPing}`
            }
            if (!markers.some(marker => marker.team === lastJsonMessage.Team)) {
                setMarkers([...markers, new_marker]);
            } else {
                setMarkers(markers.map(marker => new_marker.team === marker.team ? new_marker : marker));
            }
        }
    }, [lastJsonMessage]);

    const customIcon = new Icon({
        iconUrl: import.meta.env.VITE_TEMP_ICON_URL,
        iconSize: [16, 16]
    });
    
    return (
        <MapContainer
            key={JSON.stringify(location.pathname === "/")}
            center={[import.meta.env.VITE_CITY_LONG, import.meta.env.VITE_CITY_LAT]}
            zoom={11.5}
            zoomSnap={0.25}
            zoomDelta={0.25}
            minZoom={11.5}
            maxBounds={bounds}
            style={{flex: 1}}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            {markers.map(marker =>
                <Marker
                    key={`${marker.team}${marker.geocode.join(",")}`}
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