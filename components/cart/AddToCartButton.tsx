"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/lib/products";
import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import Link from "next/link";

interface AddToCartButtonProps {
  product: Product;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";
  className?: string;
}

export function AddToCartButton({
  product,
  variant = "default",
  size = "lg",
  className,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Button
      size={size}
      variant={variant}
      className={`w-full uppercase ${className || ""}`}
      onClick={handleAddToCart}
    >
      {added ? (
        <>
          <Check className="mr-2 h-4 w-4" />
          Added to Cart
        </>
      ) : (
        <>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </>
      )}
    </Button>
  );
}

interface BuyNowButtonProps {
  product: Product;
  size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";
  className?: string;
}

export function BuyNowButton({
  product,
  size = "lg",
  className,
}: BuyNowButtonProps) {
  const { addToCart } = useCart();

  const handleBuyNow = () => {
    addToCart(product);
  };

  return (
    <Link href="/cart" onClick={handleBuyNow}>
      <Button
        variant="outline"
        size={size}
        className={`w-full uppercase ${className || ""}`}
      >
        Buy Now
      </Button>
    </Link>
  );
}

