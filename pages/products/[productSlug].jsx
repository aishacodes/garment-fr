import { useRouter } from "next/router";
import React from "react";
import HeartIcon from "../../components/icons/HeartIcon";
import Footer from "../../components/partials/Footer";
import NavBar from "../../components/partials/NavBar";

const products = [
  {
    name: "Black Hat",
    price: "80 USD",
    picture: "hat",
    description: {
      colors: ["red", "white"],
      sizes: ["XL", "L"],
      text:
        "This t-shirt is a must-have in your wardrobe, combining the timeless fit of a classic tee with an intricate embroidered detail that brings the shirt to a whole new level. It's soft and durable, so be prepared to have a new favorite t-shirt!",
    },
    color: "#5a3aba",
  },
  {
    name: "Lightweight Jacket",
    price: "249.77 USD",
    picture: "jacket",
    description: {
      colors: ["red", "white"],
      sizes: ["XL", "L"],
      text:
        "This t-shirt is a must-have in your wardrobe, combining the timeless fit of a classic tee with an intricate embroidered detail that brings the shirt to a whole new level. It's soft and durable, so be prepared to have a new favorite t-shirt!",
    },
    color: "black",
  },
  {
    name: "T-shirt",
    price: "160.12 USD",
    picture: "tshirt",
    description: {
      colors: ["red", "white"],
      sizes: ["XL", "L"],
      text:
        "This t-shirt is a must-have in your wardrobe, combining the timeless fit of a classic tee with an intricate embroidered detail that brings the shirt to a whole new level. It's soft and durable, so be prepared to have a new favorite t-shirt!",
    },
    color: "#e64980",
  },

  {
    name: "Lightweight Jacket",
    price: "249.77 USD",
    picture: "jacket",
    color: "black",
  },
  {
    name: "T-shirt",
    price: "160.12 USD",
    picture: "tshirt",
    color: "#e64980",
  },
  {
    name: "Lightweight Jacket",
    price: "249.77 USD",
    picture: "jacket",
    color: "black",
  },
  {
    name: "T-shirt",
    price: "160.12 USD",
    picture: "tshirt",
    color: "#e64980",
  },
  {
    name: "Lightweight Jacket",
    price: "249.77 USD",
    picture: "jacket",
    color: "black",
  },
  {
    name: "T-shirt",
    price: "160.12 USD",
    picture: "tshirt",
    color: "#e64980",
  },
];

const Product = () => {
  const router = useRouter();
  const { productSlug } = router.query;

  const searchResult = products.filter(
    (product, productId) => product.name.split(" ").join("-") === productSlug
  );

  return (
    <div>
      <NavBar />
      <div className="w-full h-screen">
        {searchResult.length ? (
          searchResult.map((product, productIn) => (
            <div className="grid grid-cols-2">
              <div className="">
                <img src={`./images/${product.picture}.png`} alt="" />
              </div>
              <div className="">
                <span className="py-2 px-2 h-auto bg-white absolute right-0 top-0 like">
                  <HeartIcon />
                </span>

                {product.description && product.description.colors && (
                  <div>
                    {" "}
                    <p className="mb-7">COLOR</p>{" "}
                    <div className="flex ">
                      {product.description.colors.map((color) => (
                        <span className="w-8 h-8 flex items-center justify-center border border-gray-400 rounded-full mr-3">
                          {/* {color} */}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {product.description && product.description.sizes && (
                  <div>
                    {" "}
                    <p className="pb-5">SIZE</p>{" "}
                    <div className="flex mt-6">
                      {product.description.sizes.map((size) => (
                        <span className="w-8 h-8 flex items-center justify-center border border-gray-400 rounded-full mr-3">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <p>{product.description.text && product.description.text}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading.....</p>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default Product;
