import React from "react";
import ProductCard from "./ProductCard";
import More from "./More";

const Gadgets = () => {
  return (
    <div className="p-16 bg-black">
      <h1 className="text-2xl font-bold mb-8 text-cyan-400 text-center">
        Gadżety
      </h1>
      <h3 className="text-white text-center mb-16">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        excepturi iure voluptate commodi dolor blanditiis illum natus
        perferendis impedit vel, ullam sit, ipsam vero laboriosam odit omnis
        enim laudantium rem.
      </h3>
      <div className="flex justify-center">
        <div className="w-[1000px] grid grid-cols-3 gap-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <More />
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
