import { Button } from "@/components/ui/button";
import React from "react";

const PaymentDetails = () => {
  return (
    <div>
      <div className="border-2 border-white bg-background brightness-105 rounded-md col-span-4 h-fit p-5">
        <h1 className="text-2xl font-bold">Payment Details</h1>
        <div className="space-y-2 mt-4">
          <div className="flex justify-between">
            <p className="text-gray-500 ">Subtotal</p>
            <p className="font-semibold">subTotal</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500 ">Discount</p>
            <p className="font-semibold">0</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500 ">Shipment Cost</p>
            <p className="font-semibold">shippingCost</p>
          </div>
        </div>
        <div className="flex justify-between mt-10 mb-5">
          <p className="text-gray-500 ">Grand Total</p>
          <p className="font-semibold">grandTotal</p>
        </div>
        <Button className="w-full text-xl font-semibold py-5">Order Now</Button>
      </div>
    </div>
  );
};

export default PaymentDetails;
<div className="border-2 border-white bg-background brightness-105 rounded-md col-span-4 h-fit p-5">
  <h1 className="text-2xl font-bold">Payment Details</h1>
  <div className="space-y-2 mt-4">
    <div className="flex justify-between">
      <p className="text-gray-500 ">Subtotal</p>
      <p className="font-semibold">subTotal</p>
    </div>
    <div className="flex justify-between">
      <p className="text-gray-500 ">Discount</p>
      <p className="font-semibold"></p>
    </div>
    <div className="flex justify-between">
      <p className="text-gray-500 ">Shipment Cost</p>
      <p className="font-semibold">shippingCost</p>
    </div>
  </div>
  <div className="flex justify-between mt-10 mb-5">
    <p className="text-gray-500 ">Grand Total</p>
    <p className="font-semibold">grandTotal</p>
  </div>
  <Button className="w-full text-xl font-semibold py-5">Order Now</Button>
</div>;
