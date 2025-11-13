import Link from "next/link";
import { products } from "@/lib/products";

const BoardSection = () => {
  const product = products.filter(
    (product) => product.category === "Skateboards"
  );

  return (
    <div className="bg-zinc-100 flex py-8 sm:py-12 md:py-16 justify-center items-center flex-col min-h-[70vh] w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-black mb-8 text-center">
          Featured Skateboards
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6">
          {product.slice(0, 6).map((board) => (
            <Link
              key={board.id}
              href={`/product/${board.id}`}
              className="group cursor-pointer"
            >
              <div className="border-black border relative w-full aspect-square transition-transform group-hover:scale-105 overflow-hidden">
                <img
                  src={board.imageUrl}
                  alt={board.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex relative text-black uppercase text-xs sm:text-sm justify-between px-2 mt-2">
                <p className="truncate">{board.name}</p>
                <p className="ml-2 font-semibold">{board.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoardSection;
