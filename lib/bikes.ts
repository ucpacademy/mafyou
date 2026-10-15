export const WHATSAPP_NUMBER = "212604556403";

export type Bike = {
  slug: string;
  name: string;
  type: string;
  price: number;
  tagline: string;
  description: string;
  accent: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
  imageSource: string;
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
    image: "/bikes/sport-reference.jpg",
    imageAlt: "Honda CBR sport motorcycle at a bike exhibition, used as a style reference",
    imageCredit: "Merzperson, public domain",
    imageSource: "https://commons.wikimedia.org/wiki/File:HondaCBR.jpg",
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
    image: "/bikes/adventure-reference.jpg",
    imageAlt: "Adventure motorcycle fitted with touring luggage, used as a style reference",
    imageCredit: "winkyintheuk, CC BY 2.0",
    imageSource: "https://commons.wikimedia.org/wiki/File:KTM_Adventure_motorcycle_with_panniers.jpg",
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
    image: "/bikes/electric-reference.jpg",
    imageAlt: "Black electric motorcycle parked outdoors, used as a style reference",
    imageCredit: "Jan Ainali, CC BY 3.0",
    imageSource: "https://commons.wikimedia.org/wiki/File:Electrocat_-_electric_motorcycle.JPG",
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
    image: "/bikes/cruiser-reference.jpg",
    imageAlt: "Harley-Davidson Sportster motorcycle, used as a cruiser style reference",
    imageCredit: "Ronald Saunders, CC BY-SA 2.0",
    imageSource: "https://commons.wikimedia.org/wiki/File:Flickr_-_ronsaunders47_-_HARLEY-DAVIDSON_XR1200_SPORTSTER._2010..jpg",
    specs: [
      { label: "Engine", value: "1200cc V-twin" },
      { label: "Power", value: "78 hp" },
      { label: "Weight", value: "243 kg" },
      { label: "Seat", value: "690 mm" },
    ],
  },
];

export const showroomPhoto = {
  image: "/bikes/showroom-reference.jpg",
  imageAlt: "Exterior of a motorcycle dealership used as a demo showroom reference",
  imageCredit: "Steve Daniels, CC BY-SA 2.0",
  imageSource: "https://commons.wikimedia.org/wiki/File:Harley-Davidson_dealership_and_garage_in_Wootton_-_geograph.org.uk_-_1372898.jpg",
};

export const demoImageCredits = [
  { label: "Honda CBR reference", credit: bikes[0].imageCredit, source: bikes[0].imageSource },
  { label: "KTM Adventure reference", credit: bikes[1].imageCredit, source: bikes[1].imageSource },
  { label: "Electric motorcycle reference", credit: bikes[2].imageCredit, source: bikes[2].imageSource },
  { label: "Harley-Davidson Sportster reference", credit: bikes[3].imageCredit, source: bikes[3].imageSource },
  { label: "Dealership reference", credit: showroomPhoto.imageCredit, source: showroomPhoto.imageSource },
];

export const getBike = (slug: string) => bikes.find((b) => b.slug === slug);

export const formatPrice = (n: number, locale: "en" | "fr" | "ar" = "en") => {
  const numberLocale = locale === "ar" ? "ar-MA" : locale === "fr" ? "fr-MA" : "en-MA";
  const unit = locale === "ar" ? " د.م." : " MAD";
  return new Intl.NumberFormat(numberLocale, { maximumFractionDigits: 0 }).format(n) + unit;
};
