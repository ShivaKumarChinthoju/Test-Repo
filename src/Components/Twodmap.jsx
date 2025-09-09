import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useLocation } from 'react-router-dom'

export default function MapSwitcher() {
    const [mapType, setMapType] = useState(() => {
        // Read from localStorage on first render
        return localStorage.getItem('type') || 'default';
    });

    // Sync localStorage when mapType changes
    useEffect(() => {
        localStorage.setItem('type', mapType);

    }, [mapType]);

    // useEffect(() => {
    //     window.location.reload()
    // }, [])
    return (
        <div style={{ display: 'flex', height: '100vh', width: '100%', backgroundColor: "red" }}>
            {/* Leaflet Map Container - 60% */}
            <div style={{ width: '90%', borderRight: '1px solid #ccc' }}>

                <MapContainer
                    center={[20, 0]}
                    zoom={2}
                    style={{ height: '100%', width: '100%' }}
                >
                    {mapType === 'satellite' ? (
                        <TileLayer
                            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                            attribution='&copy; Esri, Maxar, Earthstar Geographics'
                        />
                    ) : (
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    )}
                </MapContainer>



            </div>

            {/* Map Type Selector - 40% */}
            <div style={{ width: '40%', padding: '20px' }}>
                <h3>Select Leaflet Map Type</h3>
                <button
                    onClick={() => setMapType('default')}
                    style={{
                        display: 'block',
                        margin: '10px 0',
                        width: '100%',
                        padding: '10px',
                        fontSize: '16px',
                        cursor: 'pointer',
                    }}
                >
                    Default Map
                </button>
                <button
                    onClick={() => setMapType('satellite')}
                    style={{
                        display: 'block',
                        margin: '10px 0',
                        width: '100%',
                        padding: '10px',
                        fontSize: '16px',
                        cursor: 'pointer',
                    }}
                >
                    Satellite View
                </button>
            </div>
        </div>
    )
}
