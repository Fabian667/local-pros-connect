export interface Professional {
  id: string;
  name: string;
  specialty: string;
  phone: string;
  address: string;
  lat: number;
  lng: number;
  schedule: string;
  isOpen: boolean;
}

export const professionals: Professional[] = [
  {
    id: "1",
    name: "Dr. María García",
    specialty: "Medicina General",
    phone: "+54 11 4555-1234",
    address: "Av. Corrientes 1234, CABA",
    lat: -34.6037,
    lng: -58.3816,
    schedule: "Lun-Vie 08:00–18:00",
    isOpen: true,
  },
  {
    id: "2",
    name: "Arq. Roberto Méndez",
    specialty: "Arquitectura",
    phone: "+54 11 4321-5678",
    address: "Av. Santa Fe 2456, CABA",
    lat: -34.5955,
    lng: -58.3972,
    schedule: "Lun-Vie 09:00–17:00",
    isOpen: true,
  },
  {
    id: "3",
    name: "Abog. Laura Fernández",
    specialty: "Derecho Civil",
    phone: "+54 11 4789-0123",
    address: "Av. de Mayo 789, CABA",
    lat: -34.6089,
    lng: -58.3804,
    schedule: "Lun-Vie 10:00–16:00",
    isOpen: false,
  },
  {
    id: "4",
    name: "Lic. Carlos Ruiz",
    specialty: "Psicología",
    phone: "+54 11 4567-8901",
    address: "Av. Rivadavia 3456, CABA",
    lat: -34.6101,
    lng: -58.4095,
    schedule: "Lun-Sáb 08:00–20:00",
    isOpen: true,
  },
  {
    id: "5",
    name: "Dra. Ana Martínez",
    specialty: "Odontología",
    phone: "+54 11 4234-5670",
    address: "Av. Callao 567, CABA",
    lat: -34.6045,
    lng: -58.3925,
    schedule: "Lun-Vie 09:00–19:00",
    isOpen: true,
  },
  {
    id: "6",
    name: "Ing. Pedro Sánchez",
    specialty: "Ingeniería Eléctrica",
    phone: "+54 11 4890-1234",
    address: "Av. Belgrano 1890, CABA",
    lat: -34.6132,
    lng: -58.3870,
    schedule: "Lun-Vie 08:00–15:00",
    isOpen: false,
  },
  {
    id: "7",
    name: "Cont. Sofía López",
    specialty: "Contabilidad",
    phone: "+54 11 4345-6789",
    address: "Florida 345, CABA",
    lat: -34.6020,
    lng: -58.3745,
    schedule: "Lun-Vie 09:00–18:00",
    isOpen: true,
  },
  {
    id: "8",
    name: "Dr. Martín Herrera",
    specialty: "Pediatría",
    phone: "+54 11 4678-9012",
    address: "Av. Cabildo 2100, CABA",
    lat: -34.5620,
    lng: -58.4570,
    schedule: "Lun-Sáb 07:00–21:00",
    isOpen: true,
  },
];
