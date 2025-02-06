import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';
import MapMarker from './MapMarker';
import { hotels, restaurants, venue, MarkerType, reception } from '../constants/mapData';
import { useState } from 'react';

const WeddingMap = () => {
    const [activeFilter, setActiveFilter] = useState<'all' | 'hotels' | 'restaurants' | 'venue' | 'reception'>('all');

    const FilterButton = ({ type, label }: { type: typeof activeFilter, label: string }) => (
        <button
            onClick={() => setActiveFilter(type)}
            className={`px-6 py-2 rounded-full font-altivo transition-colors duration-200 focus:outline-none active:outline-none ${activeFilter === type
                ? 'bg-sage-green text-white border border-sage-green hover:border-sage-green'
                : 'bg-white text-sage-green border border-sage-green hover:bg-sage-green/10 hover:border-sage-green'
                }`}
        >
            {label}
        </button>
    );

    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="p-2 md:pr-20">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-wrap gap-4">
                        <FilterButton type="all" label="SHOW ALL" />
                        <FilterButton type="hotels" label="HOTELS" />
                        <FilterButton type="restaurants" label="RESTAURANTS" />
                        <FilterButton type="venue" label={`CEREMONY and RECEPTION`} />
                    </div>

                    <div className="w-full h-[800px] rounded-lg overflow-hidden">
                        <MapContainer
                            center={[44.9484, -93.2785] as LatLngExpression}
                            zoom={12}
                            style={{ height: '100%', width: '100%' }}
                            scrollWheelZoom={true}
                            zoomControl={true}
                        >
                            <TileLayer
                                url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
                            />

                            {(activeFilter === 'all' || activeFilter === 'hotels') && hotels.map((hotel, index) => (
                                <MapMarker
                                    key={index}
                                    position={hotel.position}
                                    type="hotel"
                                    title={hotel.title}
                                    address={hotel.address}
                                    description={hotel.description}
                                    website={hotel.website}
                                />
                            ))}

                            {(activeFilter === 'all' || activeFilter === 'restaurants') && restaurants.map((restaurant, index) => (
                                <MapMarker
                                    key={index}
                                    position={restaurant.position}
                                    type={restaurant.type as MarkerType}
                                    title={restaurant.title}
                                    address={restaurant.address}
                                    description={restaurant.description}
                                />
                            ))}

                            {(activeFilter === 'all' || activeFilter === 'venue') && venue.map((venue, index) => (
                                <MapMarker
                                    key={index}
                                    position={venue.position}
                                    type={venue.type as MarkerType}
                                    title={venue.title}
                                    address={venue.address}
                                    description={venue.description}
                                    website={venue.website}
                                />
                            ))}

                            {(activeFilter === 'all' || activeFilter === 'venue') && reception.map((reception, index) => (
                                <MapMarker
                                    key={index}
                                    position={reception.position}
                                    type={reception.type as MarkerType}
                                    title={reception.title}
                                    address={reception.address}
                                    description={reception.description}
                                    website={reception.website}
                                />
                            ))}
                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeddingMap;