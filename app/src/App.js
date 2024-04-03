import './style.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { GeoJSON } from 'react-leaflet';
import { DombivliRoads } from './roads/DombivliRoads.js';
import { newRoads } from './roads/newRoads.js';

function App() {
    return (
        <div className='App'>
            <h2 className='heading'>Flood Mapping and Prediction</h2>
            <div className='map' id='map'>
                <MapContainer
                    center={[19.22946599675518, 73.0800348686054]}
                    zoom={15}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        url={`https://tile.openstreetmap.org/{z}/{x}/{y}.png`}
                    />

                    {DombivliRoads.features.map((road, index) => (
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

                    {newRoads.features.map((road, index) => (
                        <GeoJSON
                            key={index}
                            data={road}
                            style={() => ({
                                color: 'blue',
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
