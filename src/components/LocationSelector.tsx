import { MapPin, Navigation } from "lucide-react";
import { cities, City } from "@/data/professionals";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface LocationSelectorProps {
  selectedCity: string;
  onCityChange: (cityId: string) => void;
  onUseMyLocation: () => void;
}

const LocationSelector = ({ selectedCity, onCityChange, onUseMyLocation }: LocationSelectorProps) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 border-b border-border">
      <MapPin className="w-4 h-4 text-primary shrink-0" />
      <Select value={selectedCity} onValueChange={onCityChange}>
        <SelectTrigger className="h-8 text-xs font-mono flex-1 max-w-[220px] bg-background">
          <SelectValue placeholder="Elegí una ciudad" />
        </SelectTrigger>
        <SelectContent>
          {cities.map((city) => (
            <SelectItem key={city.id} value={city.id} className="font-mono text-xs">
              {city.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        variant="outline"
        size="sm"
        className="h-8 text-xs font-mono gap-1.5"
        onClick={onUseMyLocation}
      >
        <Navigation className="w-3.5 h-3.5" />
        Mi ubicación
      </Button>
    </div>
  );
};

export default LocationSelector;
