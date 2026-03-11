import { Phone, MapPin, Clock } from "lucide-react";
import { Professional } from "@/data/professionals";

interface ProfessionalCardProps {
  professional: Professional;
  isSelected: boolean;
  onClick: () => void;
}

const ProfessionalCard = ({ professional, isSelected, onClick }: ProfessionalCardProps) => {
  const { name, specialty, phone, address, schedule, isOpen } = professional;

  return (
    <button
      onClick={onClick}
      className={`w-full text-left border bg-card p-4 transition-colors ${
        isSelected ? "border-primary ring-1 ring-primary" : "border-border"
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="min-w-0">
          <h3 className="font-mono text-sm font-semibold text-card-foreground truncate">
            {name}
          </h3>
          <p className="font-mono text-xs text-muted-foreground mt-0.5">
            {specialty}
          </p>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          {isOpen && (
            <span className="w-2 h-2 rounded-full bg-success pulse-live" />
          )}
          <span
            className={`font-mono text-xs font-semibold ${
              isOpen ? "text-success" : "text-destructive"
            }`}
          >
            {isOpen ? "Abierto" : "Cerrado"}
          </span>
        </div>
      </div>

      {/* Data rows */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-2">
          <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            onClick={(e) => e.stopPropagation()}
            className="font-mono text-xs text-primary hover:underline truncate"
          >
            {phone}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
          <span className="font-mono text-xs text-card-foreground truncate">
            {address}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
          <span className="font-mono text-xs text-card-foreground truncate">
            {schedule}
          </span>
        </div>
      </div>
    </button>
  );
};

export default ProfessionalCard;
