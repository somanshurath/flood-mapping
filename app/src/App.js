import './style.css';
import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { GeoJSON } from 'react-leaflet';
import {
    DombivliBanks,
    DombivliCentral,
    DombivliWestBanks,
} from './roads/DombivliRoads.js';
import { KalyanRoads_Bank, KalyanRoads_KalWest } from './roads/KalyanRoads.js';
import { DivaRoads, LowerMumbra } from './roads/Mumbra-DivaRoads.js';

function App() {
    const darktileUrl =
        'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png';

    const lighttileUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';

    const satellitetileUrl =
        'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';

    const [tileUrl, setTileUrl] = useState(
        localStorage.getItem('lastTileUrl') || lighttileUrl
    );

    const switchTileProvider = () => {
        let newTileUrl;
        if (tileUrl === darktileUrl) {
            newTileUrl = lighttileUrl;
        } else if (tileUrl === lighttileUrl) {
            newTileUrl = satellitetileUrl;
        } else {
            newTileUrl = darktileUrl;
        }
        setTileUrl(newTileUrl);
        localStorage.setItem('lastTileUrl', newTileUrl);
    };

    return (
        <div className='App'>
            <h2 className='heading'>Flood Mapping and Prediction</h2>
            <button className='toggle' onClick={switchTileProvider}>
                <i className='material-icons' style={{ marginRight: '0.3em' }}>
                    {tileUrl === darktileUrl
                        ? 'nights_stay'
                        : tileUrl === lighttileUrl
                        ? 'wb_sunny'
                        : 'public'}
                </i>{' '}
                Change View
            </button>
            <div className='map' id='map'>
                <MapContainer
                    center={[19.211535193126418, 73.0936981566158]}
                    zoom={13}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        url={tileUrl}
                    />

                    {DombivliBanks.features.map((road, index) => (
                        <GeoJSON
                            key={index}
                            data={road}
                            style={() => ({
                                color: 'orange',
                                weight: 2,
                                opacity: 0.7,
                            })}
                        />
                    ))}
                    {DombivliCentral.features.map((road, index) => (
                        <GeoJSON
                            key={index}
                            data={road}
                            style={() => ({
                                color: 'green',
                                weight: 2,
                                opacity: 0.6,
                            })}
                        />
                    ))}
                    {KalyanRoads_Bank.features.map((road, index) => (
                        <GeoJSON
                            key={index}
                            data={road}
                            style={() => ({
                                color: 'red',
                                weight: 2,
                                opacity: 0.5,
                            })}
                        />
                    ))}
                    {KalyanRoads_KalWest.features.map((road, index) => (
                        <GeoJSON
                            key={index}
                            data={road}
                            style={() => ({
                                color: 'orange',
                                weight: 2,
                                opacity: 0.7,
                            })}
                        />
                    ))}
                    {DivaRoads.features.map((road, index) => (
                        <GeoJSON
                            key={index}
                            data={road}
                            style={() => ({
                                color: 'green',
                                weight: 2,
                                opacity: 0.6,
                            })}
                        />
                    ))}
                    {LowerMumbra.features.map((road, index) => (
                        <GeoJSON
                            key={index}
                            data={road}
                            style={() => ({
                                color: 'red',
                                weight: 2,
                                opacity: 0.6,
                            })}
                        />
                    ))}
                    {DombivliWestBanks.features.map((road, index) => (
                        <GeoJSON
                            key={index}
                            data={road}
                            style={() => ({
                                color: 'red',
                                weight: 2,
                                opacity: 0.6,
                            })}
                        />
                    ))}
                </MapContainer>
            </div>
            <footer>
                <p>
                    Made by{' '}
                    <a href='https://github.com/somanshurath/flood-mapping'>
                        Somanshu Rath
                    </a>
                </p>
            </footer>
        </div>
    );
}

export default App;
