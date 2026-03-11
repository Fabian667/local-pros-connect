import { useState } from "react";
import MapView from "@/components/MapView";
import ProfessionalList from "@/components/ProfessionalList";
import { professionals } from "@/data/professionals";

const Index = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      {/* Map — 40% */}
      <div className="h-[40vh] w-full shrink-0">
        <MapView
          professionals={professionals}
          selectedId={selectedId}
          onMarkerClick={setSelectedId}
        />
      </div>

      {/* List — 60% */}
      <div className="flex-1 min-h-0">
        <ProfessionalList
          professionals={professionals}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
      </div>
    </div>
  );
};

export default Index;
