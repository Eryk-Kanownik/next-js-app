import React from "react";
import Image from "next/image";
const CD = () => {
  return (
    <div className="bg-black text-white p-16 flex flex-col items-center border-b-2 border-cyan-500">
      <h1 className="text-2xl font-bold mb-8 text-cyan-400 text-center">
        Najnowsza Płyta
      </h1>
      <h3 className="mb-16 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ducimus,
        sed, quos veritatis cum, dolores eos ipsa aperiam harum incidunt dolorum
        esse optio debitis quibusdam voluptates sunt nihil. Magnam, laboriosam.
      </h3>
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="flex justify-end">
          <Image
            unoptimized
            width={400}
            height={400}
            src="https://picsum.photos/300/300"
            alt="hello"
          />
        </div>
        <div className=" ">
          <h2 className="text-xl font-semibold mb-4 text-cyan-400">
            Lista tracków
          </h2>
          <ul>
            <li>Track #1</li>
            <li>Track #2</li>
            <li>Track #3</li>
            <li>Track #4</li>
            <li>Track #5</li>
            <li>Track #6</li>
            <li>Track #7</li>
            <li>Track #8</li>
            <li>Track #9</li>
            <li>Track #10</li>
            <li>Track #11</li>
          </ul>
        </div>
      </div>
      <button className="bg-cyan-400 px-6 py-3 duration-200 text-black rounded-lg font-bold hover:bg-black hover:border-opacity-100 border-opacity-0 border-2 border-cyan-400 hover:text-cyan-400">
        Dodaj do koszyka
      </button>
    </div>
  );
};

export default CD;
