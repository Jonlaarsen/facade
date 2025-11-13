export interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  description?: string;
  category?: string;
}

export const products: Product[] = [
  // Skateboards
  {
    id: 1,
    name: "Classic Deck",
    price: "$50",
    imageUrl:
      "https://image.made-in-china.com/2f0j00jRnoTMBhAvbU/Facade-Classic-Professional-Dyed-7ply-Yellow-Birch-Skateboard-Deck-with-Factory-Price.webp",
    description:
      "Professional 7-ply yellow birch skateboard deck. Classic design with premium quality construction for durability and performance.",
    category: "Skateboards",
  },
  {
    id: 2,
    name: "Pro Series Deck",
    price: "$75",
    imageUrl:
      "https://image.made-in-china.com/2f0j00jRnoTMBhAvbU/Facade-Classic-Professional-Dyed-7ply-Yellow-Birch-Skateboard-Deck-with-Factory-Price.webp",
    description:
      "Premium 7-ply maple skateboard deck designed for professional skaters. Enhanced pop and durability for street and park skating.",
    category: "Skateboards",
  },
  {
    id: 3,
    name: "Street Cruiser",
    price: "$60",
    imageUrl:
      "https://image.made-in-china.com/2f0j00jRnoTMBhAvbU/Facade-Classic-Professional-Dyed-7ply-Yellow-Birch-Skateboard-Deck-with-Factory-Price.webp",
    description:
      "Perfect for cruising the streets. Medium concave with optimal wheelbase for stability and control.",
    category: "Skateboards",
  },
  {
    id: 4,
    name: "Vintage Deck",
    price: "$55",
    imageUrl:
      "https://image.made-in-china.com/2f0j00jRnoTMBhAvbU/Facade-Classic-Professional-Dyed-7ply-Yellow-Birch-Skateboard-Deck-with-Factory-Price.webp",
    description:
      "Retro-inspired design with classic graphics. Built with traditional construction methods for authentic feel.",
    category: "Skateboards",
  },
  {
    id: 5,
    name: "Wide Body Deck",
    price: "$65",
    imageUrl:
      "https://image.made-in-china.com/2f0j00jRnoTMBhAvbU/Facade-Classic-Professional-Dyed-7ply-Yellow-Birch-Skateboard-Deck-with-Factory-Price.webp",
    description:
      "Wider platform for better stability and landing. Ideal for transition skating and larger riders.",
    category: "Skateboards",
  },
  {
    id: 6,
    name: "Mini Deck",
    price: "$45",
    imageUrl:
      "https://image.made-in-china.com/2f0j00jRnoTMBhAvbU/Facade-Classic-Professional-Dyed-7ply-Yellow-Birch-Skateboard-Deck-with-Factory-Price.webp",
    description:
      "Compact deck perfect for younger skaters or those who prefer a smaller board. Lightweight and maneuverable.",
    category: "Skateboards",
  },
  // Upper (Tops/Shirts)
  {
    id: 7,
    name: "Classic Tee",
    price: "$30",
    imageUrl:
      "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C619qZz2TJKL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
    description:
      "Premium cotton t-shirt with classic fit. Soft, breathable fabric perfect for everyday wear.",
    category: "Upper",
  },
  {
    id: 8,
    name: "Long Sleeve Tee",
    price: "$40",
    imageUrl:
      "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C619qZz2TJKL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
    description:
      "Comfortable long sleeve t-shirt with ribbed cuffs. Great for layering or cooler weather.",
    category: "Upper",
  },
  {
    id: 9,
    name: "Hoodie",
    price: "$65",
    imageUrl:
      "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C619qZz2TJKL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
    description:
      "Cozy pullover hoodie with drawstring hood and kangaroo pocket. Perfect for casual wear.",
    category: "Upper",
  },
  {
    id: 10,
    name: "Tank Top",
    price: "$25",
    imageUrl:
      "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C619qZz2TJKL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
    description:
      "Lightweight tank top for warm weather. Moisture-wicking fabric keeps you cool and comfortable.",
    category: "Upper",
  },
  {
    id: 11,
    name: "Flannel Shirt",
    price: "$55",
    imageUrl:
      "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C619qZz2TJKL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
    description:
      "Classic flannel button-up shirt. Soft brushed cotton with timeless plaid patterns.",
    category: "Upper",
  },
  {
    id: 12,
    name: "Sweatshirt",
    price: "$50",
    imageUrl:
      "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C619qZz2TJKL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
    description:
      "Comfortable crewneck sweatshirt. Perfect for lounging or casual outings.",
    category: "Upper",
  },
  // Pants
  // {
  //   id: 13,
  //   name: "Cargo Pants",
  //   price: "$70",
  //   imageUrl:
  //     "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C619qZz2TJKL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
  //   description:
  //     "Durable cargo pants with multiple pockets. Made from tough cotton canvas for long-lasting wear.",
  //   category: "Pants",
  // },
  {
    id: 14,
    name: "Sweatpants",
    price: "$55",
    imageUrl:
      "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C619qZz2TJKL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
    description:
      "Comfortable sweatpants with elastic waistband and drawstring. Perfect for relaxation or workouts.",
    category: "Pants",
  },
  {
    id: 15,
    name: "Jeans",
    price: "$80",
    imageUrl:
      "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C619qZz2TJKL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
    description:
      "Classic denim jeans with straight fit. Premium denim that gets better with age.",
    category: "Pants",
  },
  {
    id: 16,
    name: "Joggers",
    price: "$60",
    imageUrl:
      "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C619qZz2TJKL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
    description:
      "Stylish joggers with tapered fit and elastic cuffs. Versatile for both casual and active wear.",
    category: "Pants",
  },
  {
    id: 17,
    name: "Chinos",
    price: "$65",
    imageUrl:
      "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C619qZz2TJKL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
    description:
      "Classic chino pants with modern fit. Perfect for smart casual occasions.",
    category: "Pants",
  },
  {
    id: 18,
    name: "Track Pants",
    price: "$50",
    imageUrl:
      "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C619qZz2TJKL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
    description:
      "Athletic track pants with side stripes. Lightweight and breathable for active lifestyles.",
    category: "Pants",
  },
  // Hats
  {
    id: 19,
    name: "Snapback Cap",
    price: "$35",
    imageUrl:
      "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C619qZz2TJKL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
    description:
      "Classic snapback cap with adjustable fit. Structured crown and flat brim for timeless style.",
    category: "Hats",
  },
  {
    id: 20,
    name: "Beanie",
    price: "$25",
    imageUrl:
      "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C619qZz2TJKL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
    description:
      "Warm beanie made from soft acrylic blend. One-size-fits-all with stretchy construction.",
    category: "Hats",
  },
  {
    id: 21,
    name: "Dad Hat",
    price: "$30",
    imageUrl:
      "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C619qZz2TJKL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
    description:
      "Unstructured dad hat with curved brim. Low profile design for a relaxed, casual look.",
    category: "Hats",
  },
  {
    id: 22,
    name: "Bucket Hat",
    price: "$28",
    imageUrl:
      "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C619qZz2TJKL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
    description:
      "Stylish bucket hat with wide brim. Perfect for sun protection and street style.",
    category: "Hats",
  },
  {
    id: 23,
    name: "Trucker Hat",
    price: "$32",
    imageUrl:
      "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C619qZz2TJKL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
    description:
      "Classic trucker hat with mesh back panel. Adjustable snapback closure for comfortable fit.",
    category: "Hats",
  },
  {
    id: 24,
    name: "5-Panel Cap",
    price: "$33",
    imageUrl:
      "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C619qZz2TJKL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
    description:
      "Modern 5-panel cap with clean design. Minimalist style for everyday wear.",
    category: "Hats",
  },
  // Accessories
  {
    id: 25,
    name: "Skateboard Wheels",
    price: "$40",
    imageUrl:
      "https://image.made-in-china.com/2f0j00jRnoTMBhAvbU/Facade-Classic-Professional-Dyed-7ply-Yellow-Birch-Skateboard-Deck-with-Factory-Price.webp",
    description:
      "High-quality urethane wheels with excellent grip and durability. Perfect for street and park skating.",
    category: "Accessories",
  },
  {
    id: 26,
    name: "Trucks Set",
    price: "$55",
    imageUrl:
      "https://image.made-in-china.com/2f0j00jRnoTMBhAvbU/Facade-Classic-Professional-Dyed-7ply-Yellow-Birch-Skateboard-Deck-with-Factory-Price.webp",
    description:
      "Premium aluminum trucks with precision engineering. Smooth turning and reliable performance.",
    category: "Accessories",
  },
  {
    id: 27,
    name: "Grip Tape",
    price: "$12",
    imageUrl:
      "https://image.made-in-china.com/2f0j00jRnoTMBhAvbU/Facade-Classic-Professional-Dyed-7ply-Yellow-Birch-Skateboard-Deck-with-Factory-Price.webp",
    description:
      "High-grip sandpaper tape for maximum board control. Easy to apply and long-lasting.",
    category: "Accessories",
  },
  {
    id: 28,
    name: "Backpack",
    price: "$75",
    imageUrl:
      "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C619qZz2TJKL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
    description:
      "Durable backpack with skateboard straps. Multiple compartments for all your essentials.",
    category: "Accessories",
  },
  {
    id: 29,
    name: "Wrist Guards",
    price: "$20",
    imageUrl:
      "https://m.media-amazon.com/images/I/B1pppR4gVKL._CLa%7C2140%2C2000%7C619qZz2TJKL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UY1000_.png",
    description:
      "Protective wrist guards with adjustable straps. Essential safety gear for skaters.",
    category: "Accessories",
  },
  {
    id: 30,
    name: "Skate Tool",
    price: "$15",
    imageUrl:
      "https://image.made-in-china.com/2f0j00jRnoTMBhAvbU/Facade-Classic-Professional-Dyed-7ply-Yellow-Birch-Skateboard-Deck-with-Factory-Price.webp",
    description:
      "Multi-functional skate tool for adjusting trucks, wheels, and hardware. Compact and portable.",
    category: "Accessories",
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}

export function getAllCategories(): string[] {
  const categories = products
    .map((product) => product.category)
    .filter((category): category is string => category !== undefined);
  return Array.from(new Set(categories));
}

