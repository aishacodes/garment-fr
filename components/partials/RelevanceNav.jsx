import React from "react";

function RelevanceNav() {
  const relevance = ["Clothes", "Accessories", "Shoes"];

  return (
    <div className="w-full h-full mt-2">
      <div className="mb-10">
        <h2 className="text-gray-700 text-base font-bold tracking-wide hover:bg-transparent hover:text-gray-900 focus:text-gray-900 my-2 mx-4 cursor-pointer">
          Relevance{" "}
        </h2>
        {relevance.map((rel) => (
          <p className="my-2 mx-4 cursor-pointer">{rel}</p>
        ))}
      </div>
    </div>
  );
}

export default RelevanceNav;
