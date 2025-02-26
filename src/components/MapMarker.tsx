import { Marker, Popup } from 'react-leaflet';
import { LatLngExpression, DivIcon } from 'leaflet';
import { MapPin } from 'lucide-react';
import { renderToString } from 'react-dom/server';
import { MarkerType } from '../constants/mapData';
import MarkerClusterGroup from 'react-leaflet-cluster';

interface MapMarkerProps {
    position: LatLngExpression;
    type: MarkerType;
    title: string;
    address: string;
    description?: string;
    website?: string;
    rating?: number;
}

const MapMarker = ({ position, type, title, address, description, website, rating }: MapMarkerProps) => {
    const getIcon = (type: MarkerType) => {
        let icon;
        switch (type) {
            case 'hotel':
                icon = `<img src="/assets/images/hotel.svg" class="w-12 h-12" alt="hotel" />`;
                break;
            case 'venue':
                icon = `<img src="/assets/images/wedding.svg" class="w-12 h-12" alt="venue" />`;
                break;
            case 'reception':
                icon = `<img src="/assets/images/reception.svg" class="w-18 h-18" alt="reception" />`;
                break;
            case 'activity':
                icon = `<img src="/assets/images/shop.svg" class="w-12 h-12" alt="activity" />`;
                break;
            case 'restaurant':
            case 'bakery':
                icon = `<img src="/assets/images/food.svg" class="w-12 h-12" alt="food" />`;
                break;
            default:
                icon = renderToString(
                    <MapPin className="text-sage-green w-12 h-12" />
                );
        }

        return new DivIcon({
            html: icon,
            className: 'custom-div-icon',
            iconSize: [48, 48],
            iconAnchor: [24, 48],
        });
    };

    const getGoogleMapsUrl = (address: string) => {
        return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
    };


    return (
        <MarkerClusterGroup
            chunkedLoading
            spiderfyOnMaxZoom={true}
            showCoverageOnHover={false}
            maxClusterRadius={40}
            disableClusteringAtZoom={15}
        >
            <Marker position={position} icon={getIcon(type)}>
                <Popup className="w-72">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-sans text-lg font-bold text-sage-green">{title}</h3>
                        <p className="text-sm text-gray-600">{address}</p>
                        {rating && (
                            <p className="text-sm text-amber-600">
                                Rating: {rating.toFixed(1)} ★
                            </p>
                        )}
                        {description && (
                            <p className="text-sm text-gray-500">{description}</p>
                        )}

                        <div className="flex gap-2 text-sm">
                            {website && (
                                <a
                                    href={website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sage-green hover:text-green-700 underline"
                                >
                                    Visit Website
                                </a>
                            )}
                            <a
                                href={getGoogleMapsUrl(address)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sage-green hover:text-green-700 underline"
                            >
                                Get Directions
                            </a>
                        </div>
                    </div>
                </Popup>
            </Marker>
        </MarkerClusterGroup>
    );
};

export default MapMarker; 