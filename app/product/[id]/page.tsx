import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductById } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import {
  AddToCartButton,
  BuyNowButton,
} from "@/components/cart/AddToCartButton";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const productId = parseInt(id, 10);

  if (isNaN(productId)) {
    notFound();
  }

  const product = getProductById(productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-100 pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Back Button */}
        <Link href="/products">
          <Button variant="ghost" className="mb-4 sm:mb-6 text-sm sm:text-base">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </Link>

        {/* Product Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="relative w-full aspect-square border border-black bg-white">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
            {product.category && (
              <p className="text-xs sm:text-sm uppercase tracking-wider text-zinc-600">
                {product.category}
              </p>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-black">
              {product.name}
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold text-black">{product.price}</p>

            {product.description && (
              <div className="space-y-2">
                <h2 className="text-base sm:text-lg font-semibold uppercase text-black">
                  Description
                </h2>
                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            <div className="pt-4 space-y-3 sm:space-y-4">
              <AddToCartButton product={product} />
              <BuyNowButton product={product} />
            </div>

            {/* Additional Info */}
            <div className="pt-4 sm:pt-6 border-t border-zinc-300 space-y-4">
              <div>
                <h3 className="text-xs sm:text-sm font-semibold uppercase text-black mb-2">
                  Shipping
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600">
                  Free shipping on orders over $100. Standard shipping takes 5-7
                  business days.
                </p>
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-semibold uppercase text-black mb-2">
                  Returns
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600">
                  30-day return policy. Items must be in original condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
