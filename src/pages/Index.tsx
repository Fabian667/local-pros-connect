import { useState, useMemo, useCallback } from "react";
import MapView from "@/components/MapView";
import ProfessionalList from "@/components/ProfessionalList";
import LocationSelector from "@/components/LocationSelector";
import { professionals, cities } from "@/data/professionals";
import { toast } from "sonner";

const Index = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState("caba");

  const currentCity = cities.find((c) => c.id === selectedCity) ?? cities[0];

  const filteredProfessionals = useMemo(
    () => professionals.filter((p) => p.city === selectedCity),
    [selectedCity]
  );

  const handleCityChange = useCallback((cityId: string) => {
    setSelectedCity(cityId);
    setSelectedId(null);
  }, []);

  const handleUseMyLocation = useCallback(() => {
    if (!navigator.geolocation) {
      toast.error("Tu navegador no soporta geolocalización");
      return;
    }
    toast.loading("Obteniendo ubicación...", { id: "geo" });
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        // Find nearest city
        let nearest = cities[0];
        let minDist = Infinity;
        for (const city of cities) {
          const d = Math.hypot(city.lat - latitude, city.lng - longitude);
          if (d < minDist) {
            minDist = d;
            nearest = city;
          }
        }
        setSelectedCity(nearest.id);
        setSelectedId(null);
        toast.success(`Ubicación: ${nearest.name}`, { id: "geo" });
      },
      () => {
        toast.error("No se pudo obtener tu ubicación", { id: "geo" });
      }
    );
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      {/* Location selector */}
      <LocationSelector
        selectedCity={selectedCity}
        onCityChange={handleCityChange}
        onUseMyLocation={handleUseMyLocation}
      />

      {/* Map — 40% */}
      <div className="h-[35vh] w-full shrink-0">
        <MapView
          professionals={filteredProfessionals}
          selectedId={selectedId}
          onMarkerClick={setSelectedId}
          center={[currentCity.lat, currentCity.lng]}
          zoom={currentCity.zoom}
        />
      </div>

      {/* List — rest */}
      <div className="flex-1 min-h-0">
        <ProfessionalList
          professionals={filteredProfessionals}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
      </div>
    </div>
  );
};

export default Index;
