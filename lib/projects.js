import { asset } from "@/lib/asset";
// Shared project data used by both the Portfolio section and the
// per-project details page, so each project shows its OWN image and
// a description written about that specific project.

export const projects = [
  {
    slug: "pure-bedroom-architecture",
    name: "Pure Bedroom Architecture",
    date: "December, 2018",
    img: asset("/img/portfolio1.png"),
    reversed: false,
    overview:
      "A calm, minimal bedroom where natural light, warm wood tones, and clean lines come together to create a restful private retreat.",
    body: [
      "This bedroom was designed around stillness. Soft neutral walls, a low platform bed, and large glazing let daylight wash across the room through the day, while concealed lighting keeps the evenings warm and quiet.",
      "Every element earns its place: built-in storage disappears into the walls, textures stay natural, and the palette never competes with the view. The result is a space that feels open, uncluttered, and deeply comfortable.",
    ],
  },
  {
    slug: "modern-living-space",
    name: "Modern Living Space",
    date: "November, 2018",
    img: asset("/img/portfolio2.png"),
    reversed: true,
    overview:
      "An open-plan living area that blends lounge, dining, and gathering zones into one flowing, light-filled room.",
    body: [
      "The living space removes the walls between how people actually live. A continuous floor plane ties the seating, dining, and circulation together, so the room can shift easily from a quiet morning to an evening with guests.",
      "Full-height openings pull the outside in, and a restrained material palette of stone, timber, and matte finishes keeps the space feeling modern without ever feeling cold.",
    ],
  },
  {
    slug: "luxury-villa-design",
    name: "Luxury Villa Design",
    date: "October, 2018",
    img: asset("/img/portfolio3.png"),
    reversed: false,
    overview:
      "A spacious villa that balances bold architectural volumes with private, comfortable family living.",
    body: [
      "The villa is organized around generous volumes and long sightlines, with living areas opening onto terraces and landscaped surroundings. The massing is confident, yet the interiors stay intimate and human in scale.",
      "Premium materials, careful shading, and a strong indoor-outdoor relationship give the home a sense of quiet luxury — refined, durable, and made to be lived in every day.",
    ],
  },
  {
    slug: "urban-office-tower",
    name: "Urban Office Tower",
    date: "September, 2018",
    img: asset("/img/portfolio4.png"),
    reversed: true,
    overview:
      "A high-rise workplace designed for light, flexibility, and a strong presence on the city skyline.",
    body: [
      "The office tower stacks efficient, column-free floor plates behind a crisp glazed facade, giving every level open views and abundant daylight. Shared spaces and vertical circulation are placed to keep the workplace connected and easy to navigate.",
      "The facade is both expressive and functional — its rhythm shades the interior and reduces heat gain, while giving the building a clear, memorable identity in the urban fabric.",
    ],
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
