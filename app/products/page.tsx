"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { products, getAllCategories } from "@/lib/products";
import { Button } from "@/components/ui/button";

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    categoryParam
  );
  const categories = getAllCategories();

  // Update selected category when URL parameter changes
  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    if (category) {
      router.push(`/products?category=${encodeURIComponent(category)}`);
    } else {
      router.push("/products");
    }
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="min-h-screen bg-zinc-100">
      <div className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold uppercase text-black mb-4">
            All Products
          </h1>
          <p className="text-zinc-600">
            {filteredProducts.length} product
            {filteredProducts.length !== 1 ? "s" : ""}
            {selectedCategory && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => handleCategoryChange(null)}
            className="uppercase"
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => handleCategoryChange(category)}
              className="uppercase"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-zinc-600 text-lg">
              No products found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group"
              >
                <div className="bg-white border border-black overflow-hidden transition-transform group-hover:scale-105">
                  {/* Product Image */}
                  <div className="relative w-full aspect-square border-b border-black">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    {product.category && (
                      <p className="text-xs uppercase text-zinc-600 mb-1">
                        {product.category}
                      </p>
                    )}
                    <h3 className="text-lg font-semibold uppercase text-black mb-2 group-hover:underline">
                      {product.name}
                    </h3>
                    <p className="text-xl font-bold text-black">
                      {product.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-zinc-100 flex items-center justify-center">
          <p className="text-zinc-600">Loading products...</p>
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
