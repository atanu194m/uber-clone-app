import React, { useState, useEffect } from 'react'

const LiveTracking = () => {
    // Default coordinates (updated live by browser geolocation)
    const [ currentPosition, setCurrentPosition ] = useState({
        lat: 22.5726,
        lng: 88.3639
    });

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setCurrentPosition({
                        lat: latitude,
                        lng: longitude
                    });
                },
                (err) => console.log('Geolocation error:', err.message),
                { enableHighAccuracy: true }
            );

            const watchId = navigator.geolocation.watchPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setCurrentPosition({
                        lat: latitude,
                        lng: longitude
                    });
                },
                (err) => console.log('WatchPosition error:', err.message),
                { enableHighAccuracy: true }
            );

            return () => navigator.geolocation.clearWatch(watchId);
        }
    }, []);

    const zoomDelta = 0.015;
    const bbox = `${currentPosition.lng - zoomDelta}%2C${currentPosition.lat - zoomDelta}%2C${currentPosition.lng + zoomDelta}%2C${currentPosition.lat + zoomDelta}`;
    const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${currentPosition.lat}%2C${currentPosition.lng}`;

    return (
        <div className="w-full h-full relative overflow-hidden bg-slate-100">
            <iframe
                title="Live GPS Tracking Map"
                src={mapUrl}
                className="w-full h-full border-0 pointer-events-auto filter saturate-[1.1] contrast-[1.05]"
            />
            {/* Live GPS Status Badge */}
            <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-2 border border-slate-200 z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-slate-800 tracking-wide">LIVE GPS</span>
            </div>
        </div>
    );
}

export default LiveTracking