"use client";

import { useState } from "react";
import Image from "../assets/products/p-1.png";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  removeFromCart,
  updateQuantity,
} from "../redux/features/cart/cartSlice";
import { FaTrash } from "react-icons/fa6";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CheckoutPage() {
  const dispatch = useAppDispatch();
  const cartData = useAppSelector((state) => state.cart);

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
            <table className="w-full">
              <thead>
                <tr className="border-b border-b-gray-300">
                  <th className="text-left py-4 text-primary-text pr-8"></th>
                  <th className="text-left py-4 text-primary-text">Product</th>
                  <th className="text-left py-4 text-primary-text">Name</th>
                  <th className="text-left py-4 text-primary-text">Price</th>
                  <th className="text-left py-4 text-primary-text">Quantity</th>
                  <th className="text-right py-4 text-primary-text">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartData.items.map((item) => (
                  <tr key={item.product} className="border-b border-b-gray-300 last:border-b-0">
                    <td>
                      <button
                        onClick={() => dispatch(removeFromCart(item.product))}
                        className="cursor-pointer"
                      >
                        <FaTrash className="text-red-600" />
                      </button>
                    </td>
                    <td className="py-4">
                      <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center px-2">
                        <img
                          src={item.imageUrl || "/placeholder.svg"}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="object-cover"
                        />
                      </div>
                    </td>
                    <td className="py-4">{item.name}</td>
                    <td className="py-4">${item.price}</td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                id: item.product,
                                quantity: Math.max(item.quantity - 1, 1),
                              })
                            )
                          }
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                id: item.product,
                                quantity: Math.min(
                                  item.quantity + 1,
                                  item.stockQuantity
                                ),
                              })
                            )
                          }
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4 text-right">
                      ${item.price * item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Order Summary and User Info */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {/* User Information */}
            <div className="mb-6 pb-6 border-b border-b-gray-300">
              <h2 className="text-lg font-semibold mb-4 text-primary-text">
                Customer Information
              </h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${cartData.totalPrice}</span>
                </div>
                <div className="border-t border-t-gray-300 pt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${cartData.totalPrice}</span>
                  </div>
                </div>
                <button className="primary-btn w-full justify-center mt-10">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
