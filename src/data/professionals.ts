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
  city: string;
}

export interface City {
  id: string;
  name: string;
  lat: number;
  lng: number;
  zoom: number;
}

export const cities: City[] = [
  { id: "caba", name: "Buenos Aires (CABA)", lat: -34.6037, lng: -58.3816, zoom: 13 },
  { id: "cordoba", name: "Córdoba", lat: -31.4201, lng: -64.1888, zoom: 13 },
  { id: "rosario", name: "Rosario", lat: -32.9468, lng: -60.6393, zoom: 13 },
  { id: "mendoza", name: "Mendoza", lat: -32.8895, lng: -68.8458, zoom: 13 },
  { id: "la-plata", name: "La Plata", lat: -34.9215, lng: -57.9545, zoom: 13 },
];

export const professionals: Professional[] = [
  // CABA
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
    city: "caba",
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
    city: "caba",
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
    city: "caba",
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
    city: "caba",
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
    city: "caba",
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
    city: "caba",
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
    city: "caba",
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
    city: "caba",
  },
  // Córdoba
  {
    id: "9",
    name: "Dra. Valentina Ríos",
    specialty: "Dermatología",
    phone: "+54 351 421-3456",
    address: "Av. Colón 1200, Córdoba",
    lat: -31.4178,
    lng: -64.1835,
    schedule: "Lun-Vie 08:00–16:00",
    isOpen: true,
    city: "cordoba",
  },
  {
    id: "10",
    name: "Abog. Nicolás Peralta",
    specialty: "Derecho Laboral",
    phone: "+54 351 489-7654",
    address: "Bv. San Juan 456, Córdoba",
    lat: -31.4235,
    lng: -64.1920,
    schedule: "Lun-Vie 09:00–17:00",
    isOpen: true,
    city: "cordoba",
  },
  {
    id: "11",
    name: "Lic. Camila Ortiz",
    specialty: "Nutrición",
    phone: "+54 351 456-1122",
    address: "Av. Vélez Sarsfield 780, Córdoba",
    lat: -31.4260,
    lng: -64.1870,
    schedule: "Lun-Sáb 08:00–14:00",
    isOpen: false,
    city: "cordoba",
  },
  // Rosario
  {
    id: "12",
    name: "Dr. Federico Blanco",
    specialty: "Cardiología",
    phone: "+54 341 430-2233",
    address: "Bv. Oroño 1500, Rosario",
    lat: -32.9520,
    lng: -60.6490,
    schedule: "Lun-Vie 07:00–15:00",
    isOpen: true,
    city: "rosario",
  },
  {
    id: "13",
    name: "Arq. Luciana Paz",
    specialty: "Diseño de Interiores",
    phone: "+54 341 455-6677",
    address: "Córdoba 1234, Rosario",
    lat: -32.9440,
    lng: -60.6350,
    schedule: "Lun-Vie 10:00–18:00",
    isOpen: true,
    city: "rosario",
  },
  // Mendoza
  {
    id: "14",
    name: "Dra. Soledad Vega",
    specialty: "Ginecología",
    phone: "+54 261 420-8899",
    address: "Av. San Martín 800, Mendoza",
    lat: -32.8870,
    lng: -68.8420,
    schedule: "Lun-Vie 08:00–17:00",
    isOpen: true,
    city: "mendoza",
  },
  {
    id: "15",
    name: "Ing. Tomás Quiroga",
    specialty: "Ingeniería Civil",
    phone: "+54 261 411-3344",
    address: "Las Heras 550, Mendoza",
    lat: -32.8910,
    lng: -68.8500,
    schedule: "Lun-Vie 09:00–16:00",
    isOpen: false,
    city: "mendoza",
  },
  // La Plata
  {
    id: "16",
    name: "Dr. Emilio Castañeda",
    specialty: "Traumatología",
    phone: "+54 221 425-7788",
    address: "Calle 7 N° 1234, La Plata",
    lat: -34.9200,
    lng: -57.9530,
    schedule: "Lun-Sáb 08:00–20:00",
    isOpen: true,
    city: "la-plata",
  },
  {
    id: "17",
    name: "Lic. Marina Acosta",
    specialty: "Fonoaudiología",
    phone: "+54 221 430-1122",
    address: "Diagonal 73 N° 456, La Plata",
    lat: -34.9230,
    lng: -57.9560,
    schedule: "Lun-Vie 09:00–15:00",
    isOpen: true,
    city: "la-plata",
  },
];
