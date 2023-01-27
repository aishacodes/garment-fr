import React from "react";

function SideNav() {
  const categories = ["Clothes", "Accessories", "Shoes"];
  const DesignerCategory = ["Sagaform", "OFS", "ACME"];

  return (
    <div className="w-full h-full mt-2">
      <div className="mb-10">
        <h2 className="text-gray-700 text-base font-bold tracking-wide hover:bg-transparent hover:text-gray-900 focus:text-gray-900 my-2 mx-4 cursor-pointer">
          All Categories
        </h2>
        {categories.map((category) => (
          <p className="my-2 mx-4 cursor-pointer">{category}</p>
        ))}
      </div>
      <div className="mt-3">
        <h2 className="text-gray-700 text-base font-bold tracking-wide hover:bg-transparent hover:text-gray-900  focus:text-gray-900 my-2 mx-4 cursor-pointer">
          All Designers
        </h2>
        {DesignerCategory.map((designer) => (
          <p className="my-2 mx-4 cursor-pointer">{designer}</p>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
