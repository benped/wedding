import { LatLngExpression } from "leaflet";

export type MarkerType =
  | "hotel"
  | "venue"
  | "activity"
  | "restaurant"
  | "bakery"
  | "reception";

interface MapLocation {
  position: LatLngExpression;
  title: string;
  address: string;
  description: string;
  type: MarkerType;
  website?: string;
}

export const hotels: MapLocation[] = [
  {
    position: [44.984956, -93.272568],
    title: "Hewing Hotel",
    address: "300 Washington Ave N, Minneapolis, MN 55401",
    description: "Boutique hotel in the North Loop neighborhood",
    website: "https://hewinghotel.com",
    type: "hotel",
  },
  {
    position: [44.970966, -93.222717],
    title: "Hilton Garden Inn Minneapolis University",
    address: "511 Huron Blvd SE, Minneapolis, MN 55414",
    description: "Modern hotel near University of Minnesota",
    website: "https://hilton.com/garden-inn-minneapolis-university",
    type: "hotel",
  },
  {
    position: [44.97345, -93.229512],
    title: "The Graduate Hotel University",
    address: "615 Washington Ave SE, Minneapolis, MN 55414",
    description: "Stylish hotel in the heart of campus",
    website: "https://graduatehotels.com/minneapolis",
    type: "hotel",
  },
  {
    position: [44.861069, -93.218529],
    title: "Hilton Minneapolis-St. Paul Airport",
    address: "3800 American Blvd E, Bloomington, MN 55425",
    description: "Convenient airport location with shuttle service",
    website: "https://hilton.com/minneapolis-st-paul-airport",
    type: "hotel",
  },
  {
    position: [44.971039, -93.216743],
    title: "Hampton Inn & Suites Minneapolis University Area",
    address: "2812 University Ave SE, Minneapolis, MN 55414",
    description: "Comfortable accommodations near campus",
    website: "https://hamptoninn.com/minneapolis-university",
    type: "hotel",
  },
];

export const restaurants: MapLocation[] = [
  {
    position: [44.945565, -93.298244],
    title: "Black Walnut Bakery",
    address: "3157 Hennepin Ave, Minneapolis, MN 55408",
    description: "Must try the almond or pistachio raspberry croissant",
    type: "bakery",
  },
  {
    position: [44.952099, -93.298737],
    title: "Isles & Buns",
    address: "1424 W 28th St, Minneapolis, MN 55408",
    description:
      "Grab a coffee, puppy-dog tail (cinnamon bun), and take a stroll around Lake of the Isles",
    type: "bakery",
  },
  {
    position: [44.987905, -93.257399],
    title: "Kramarczuk's",
    address: "215 E Hennepin Ave, Minneapolis, MN 55414",
    description:
      "Eastern European deli, pierogis, reubens, sausages, soups, + more",
    type: "restaurant",
  },
  {
    position: [44.988476, -93.256111],
    title: "Surdyk's Deli",
    address: "303 E Hennepin Ave, Minneapolis, MN 55414",
    description: "The Minneapple Melt",
    type: "restaurant",
  },
  {
    position: [44.94945, -93.321035],
    title: "Punch Pizza",
    address: "3226 W Lake St, Minneapolis, MN 55416",
    description: "Classic. We love the Toto pizza and the Punch Salad",
    type: "restaurant",
  },
  {
    position: [44.939339, -93.277527],
    title: "Hola Arepa",
    address: "3501 Nicollet Ave, Minneapolis, MN 55408",
    description: "Arepas spot with fun cocktails and some vintage shops nearby",
    type: "restaurant",
  },
  {
    position: [44.948146, -93.288372],
    title: "Wrecktangle Pizza",
    address: "703 W Lake St, Minneapolis, MN 55408",
    description: "Detroit style pizza. Emma loves the burger",
    type: "restaurant",
  },
];

export const venue: MapLocation[] = [
  {
    position: [44.936000,-93.299200],
    title: "Lakewood Cemetery Chapel",
    address: "3600 Hennepin Ave, Minneapolis, MN 55408",
    description:
      "Historic Byzantine-style chapel built in 1910, featuring stunning mosaics and a domed ceiling",
    website: "https://www.lakewoodcemetery.org/visit/memorial-chapel/",
    type: "venue",
  },
];

export const reception: MapLocation[] = [
  {
    position: [44.9570789,-93.1910000],
    title: "Paikka",
    address: "550 Vandalia St #165, St Paul, MN 55114",
    description:
      "Modern industrial venue space featuring exposed brick, wood beams, and large windows",
    website: "https://www.paikkamn.com/",
    type: "reception",
  },
];
