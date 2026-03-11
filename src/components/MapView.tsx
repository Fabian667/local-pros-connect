import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Professional } from "@/data/professionals";
import { useEffect } from "react";

// Fix default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const createColoredIcon = (isOpen: boolean) => {
  const color = isOpen ? "#34C759" : "#FF3B30";
  return L.divIcon({
    className: "custom-marker",
    html: `<div style="
      width: 24px; height: 24px; border-radius: 50% 50% 50% 0;
      background: ${color}; border: 2px solid white;
      transform: rotate(-45deg);
      box-shadow: 0 0 0 1px ${color};
    "></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24],
  });
};

function MapController({ lat, lng, zoom, selectedLat, selectedLng }: {
  lat: number; lng: number; zoom: number;
  selectedLat: number | null; selectedLng: number | null;
}) {
  const map = useMap();

  // Fly to city when center changes
  useEffect(() => {
    map.flyTo([lat, lng], zoom, { duration: 0.5 });
  }, [lat, lng, zoom, map]);

  // Fly to selected marker
  useEffect(() => {
    if (selectedLat !== null && selectedLng !== null) {
      map.flyTo([selectedLat, selectedLng], 15, { duration: 0.5 });
    }
  }, [selectedLat, selectedLng, map]);

  return null;
}

interface MapViewProps {
  professionals: Professional[];
  selectedId: string | null;
  onMarkerClick: (id: string) => void;
  center: [number, number];
  zoom: number;
}

const MapView = ({ professionals, selectedId, onMarkerClick, center, zoom }: MapViewProps) => {
  const selected = professionals.find((p) => p.id === selectedId);

  return (
    <div className="w-full h-full">
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapController
          lat={center[0]}
          lng={center[1]}
          zoom={zoom}
          selectedLat={selected?.lat ?? null}
          selectedLng={selected?.lng ?? null}
        />
        {professionals.map((p) => (
          <Marker
            key={p.id}
            position={[p.lat, p.lng]}
            icon={createColoredIcon(p.isOpen)}
            eventHandlers={{ click: () => onMarkerClick(p.id) }}
          >
            <Popup>
              <span className="font-mono text-sm font-semibold">{p.name}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
