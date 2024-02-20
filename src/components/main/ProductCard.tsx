import React from "react";
import Image from "next/image";
const ProductCard = () => {
  return (
    <div className="text-white bg-gray-900 w-[300px]  rounded-md overflow-hidden">
      <Image
        unoptimized
        width={300}
        height={300}
        src="https://picsum.photos/300/300"
        alt="hello"
      />
      <div className=" p-4 text-center">
        <h3 className="text-lg mb-2">Kurtka</h3>
        <h3 className="text-md mb-2">59.99$</h3>
        <button className="bg-black px-4 py-2 rounded-sm">
          Dodaj do koszyka
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
