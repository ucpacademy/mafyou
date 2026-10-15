export const WHATSAPP_NUMBER = "212604556403";

export type Bike = {
  slug: string;
  name: string;
  type: string;
  price: number;
  tagline: string;
  description: string;
  accent: string;
  specs: { label: string; value: string }[];
};

export const bikes: Bike[] = [
  {
    slug: "phantom-r1",
    name: "Phantom R1",
    type: "Sport",
    price: 18900,
    tagline: "Born on the track. Built for the night.",
    description:
      "A razor-sharp superbike with quickshifter, launch control and carbon aero for riders who want everything.",
    accent: "#ff3d00",
    specs: [
      { label: "Engine", value: "998cc inline-4" },
      { label: "Power", value: "200 hp" },
      { label: "Weight", value: "199 kg" },
      { label: "Top speed", value: "299 km/h" },
    ],
  },
  {
    slug: "sahara-x",
    name: "Sahara X",
    type: "Adventure",
    price: 14500,
    tagline: "Where the road ends, the story begins.",
    description:
      "Long-travel suspension, 24 L tank and rally-grade protection to conquer dunes, mountains and everything between.",
    accent: "#ffb300",
    specs: [
      { label: "Engine", value: "850cc twin" },
      { label: "Power", value: "95 hp" },
      { label: "Weight", value: "220 kg" },
      { label: "Range", value: "520 km" },
    ],
  },
  {
    slug: "urban-volt",
    name: "Urban Volt",
    type: "Electric",
    price: 9900,
    tagline: "Silent. Instant. Electric.",
    description:
      "Zero-emission city rocket with instant torque, swappable battery and app connectivity.",
    accent: "#00e5ff",
    specs: [
      { label: "Motor", value: "Electric 60 kW" },
      { label: "Power", value: "80 hp" },
      { label: "Weight", value: "175 kg" },
      { label: "Range", value: "210 km" },
    ],
  },
  {
    slug: "classic-61",
    name: "Classic 61",
    type: "Cruiser",
    price: 12400,
    tagline: "Chrome, soul and open road.",
    description:
      "Timeless cruiser styling with a torquey V-twin and a low, comfortable seat for endless highway miles.",
    accent: "#c6a15b",
    specs: [
      { label: "Engine", value: "1200cc V-twin" },
      { label: "Power", value: "78 hp" },
      { label: "Weight", value: "243 kg" },
      { label: "Seat", value: "690 mm" },
    ],
  },
];

export const getBike = (slug: string) => bikes.find((b) => b.slug === slug);

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n) + " MAD";
