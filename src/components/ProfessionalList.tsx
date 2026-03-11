import { useRef, useEffect } from "react";
import ProfessionalCard from "./ProfessionalCard";
import { Professional } from "@/data/professionals";

interface ProfessionalListProps {
  professionals: Professional[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

const ProfessionalList = ({ professionals, selectedId, onSelect }: ProfessionalListProps) => {
  const listRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    if (selectedId) {
      const el = cardRefs.current.get(selectedId);
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [selectedId]);

  return (
    <div ref={listRef} className="h-full overflow-y-auto bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background border-b border-border px-4 py-3">
        <h1 className="font-mono text-sm font-bold text-foreground tracking-wide uppercase">
          Directorio de Profesionales
        </h1>
        <p className="font-mono text-xs text-muted-foreground mt-0.5">
          {professionals.filter((p) => p.isOpen).length} disponibles ahora
        </p>
      </div>

      {/* List */}
      <div className="divide-y divide-border">
        {professionals.map((p) => (
          <div
            key={p.id}
            ref={(el) => {
              if (el) cardRefs.current.set(p.id, el);
            }}
          >
            <ProfessionalCard
              professional={p}
              isSelected={selectedId === p.id}
              onClick={() => onSelect(p.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalList;
