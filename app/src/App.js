import './style.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

function App() {
    const markers = [
    ];

    const customIcon = new Icon({
        // location marker
        iconUrl:
            'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
        iconSize: [28, 28],
    });

    return (
        <div className='App'>
            <h2 className='heading'>Flood Mapping and Prediction</h2>
            <div className='map' id='map'>
                <MapContainer center={[19.1, 72.87]} zoom={14}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                        url={`https://tile.openstreetmap.org/{z}/{x}/{y}.png`}
                    />
                    {markers.map((marker, index) => (
                        <Marker
                            key={index}
                            position={marker.GeoJSON.coordinates}
                            icon={customIcon}
                        />
                    ))}
                </MapContainer>
            </div>
            <footer>
                <p>Made by <a href='https://github.com/somanshurath/flood-mapping'>Somanshu Rath</a></p>
            </footer>
        </div>
    );
}

export default App;
