import { useState, useEffect } from 'react';

const useTimeSince = (lastPing) => {
    const [timeSince, setTimeSince] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            if (!lastPing) {
                setTimeSince('No ping yet');
                return;
            }

            const seconds = Math.floor((Date.now() / 1000 - lastPing));

            if (seconds < 60) {
                setTimeSince(`${seconds}s ago`);
            } else if (seconds < 3600) {
                setTimeSince(`${Math.floor(seconds / 60)}m ago`);
            } else {
                setTimeSince(`${Math.floor(seconds / 3600)}h ago`);
            }
        }, 1000);

        return () => clearInterval(interval); // cleanup on unmount
    }, []); // recalculates when lastPing changes

    return timeSince;
};

export default useTimeSince;