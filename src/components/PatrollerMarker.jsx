import { useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import useTimeSince from '../hooks/useTimeSince';

const PatrollerMarker = ({ marker, customIcon }) => {
    const timeSince = useTimeSince(marker.lastPing);

    return (
        <Marker
            position={marker.geocode}
            icon={customIcon}
        >
            <Popup>{`${marker.team} - ${timeSince}`}</Popup>
        </Marker>
    );
};

export default PatrollerMarker;