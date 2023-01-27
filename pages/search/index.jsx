import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import HeartIcon from "../../components/icons/HeartIcon";
import Footer from "../../components/partials/Footer";
import NavBar from "../../components/partials/NavBar";
import RelevanceNav from "../../components/partials/RelevanceNav";
import SideNav from "../../components/partials/SideBar";

import styles from "../../styles/Search.module.scss";

import { generateId } from "../../components/utils";

const SearchPage = () => {
  const products = [
    {
      name: "Black Hat",
      price: "80 USD",
      picture: "hat",
      color: "#5a3aba",
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
  const router = useRouter();
  const [id, setId] = useState("");

  useEffect(() => {
    setId(generateId());
  }, []);

  return (
    <div>
      <NavBar />
      <div className="px-6 mt-4 grid grid-cols-12">
        <div className="col-span-2">
          <SideNav />
        </div>
        <div className="col-span-8 grid grid-cols-3 gap-[0.75rem]">
          {products.map((product, productIn) => (
            <a
              className={styles.product_card}
              style={{ background: "#f8f9fa" }}
              onClick={() =>
                router.push(`/products/${product.name.split(" ").join("-")}`)
              }
              key={`products[${id}]-${productIn}`}
            >
              <img src={`./images/${product.picture}.png`} alt="" />
              <div className={styles.name_box}>
                <h1 className="text-xl font-bold py-5 bg-white">
                  {product.name}
                </h1>
                <p className="font-semibold py-2 text-xs bg-white">
                  {product.price}
                </p>
              </div>
              <span className="py-2 px-2 h-auto bg-white absolute right-0 top-0 like">
                <HeartIcon />
              </span>
            </a>
          ))}
        </div>
        <div className="col-span-2">
          <RelevanceNav />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
