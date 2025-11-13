"use client";

import { useCart } from "@/contexts/CartContext";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus, Minus, Trash2 } from "lucide-react";

export default function CartPage() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    getTotalPrice,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Continue Shopping
            </Button>
          </Link>
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <h1 className="text-4xl font-bold uppercase text-black mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-zinc-600 mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link href="/">
              <Button size="lg" className="uppercase">
                Start Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Button>
        </Link>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1 space-y-4">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold uppercase text-black">
                Shopping Cart
              </h1>
              <Button
                variant="ghost"
                onClick={clearCart}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Clear Cart
              </Button>
            </div>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-white border border-black p-4 flex flex-col sm:flex-row gap-4"
                >
                  {/* Product Image */}
                  <Link
                    href={`/product/${item.product.id}`}
                    className="relative w-full sm:w-32 h-32 border border-black flex-shrink-0"
                  >
                    <Image
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </Link>

                  {/* Product Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <Link href={`/product/${item.product.id}`}>
                        <h3 className="text-lg font-semibold uppercase text-black hover:underline">
                          {item.product.name}
                        </h3>
                      </Link>
                      {item.product.category && (
                        <p className="text-sm text-zinc-600 uppercase">
                          {item.product.category}
                        </p>
                      )}
                      <p className="text-xl font-semibold text-black mt-2">
                        {item.product.price}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2 border border-black">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity - 1
                            )
                          }
                          className="h-8 w-8 rounded-none"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="px-4 py-1 text-sm font-semibold min-w-[3rem] text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity + 1
                            )
                          }
                          className="h-8 w-8 rounded-none"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="flex items-center gap-4">
                        <p className="text-lg font-semibold text-black">
                          ${(
                            parseFloat(item.product.price.replace("$", "")) *
                            item.quantity
                          ).toFixed(2)}
                        </p>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-96">
            <div className="bg-white border border-black p-6 sticky top-8">
              <h2 className="text-2xl font-bold uppercase text-black mb-6">
                Order Summary
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-600">Subtotal</span>
                  <span className="font-semibold text-black">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-600">Shipping</span>
                  <span className="font-semibold text-black">
                    {getTotalPrice() >= 100 ? "FREE" : "$10.00"}
                  </span>
                </div>
                <div className="border-t border-zinc-300 pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-black">Total</span>
                    <span className="text-black">
                      $
                      {(
                        getTotalPrice() + (getTotalPrice() >= 100 ? 0 : 10)
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              <Button size="lg" className="w-full uppercase">
                Proceed to Checkout
              </Button>
              <Link href="/">
                <Button variant="outline" size="lg" className="w-full mt-4 uppercase">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

