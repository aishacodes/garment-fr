import React from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

import HeartIcon from "../components/icons/HeartIcon";
import NavBar from "../components/partials/NavBar";
import Footer from "../components/partials/Footer";
import Cart from "../components/widget/Cart";
import { platformEntity } from "../entities/platformEntity";

const products = [
  {
    name: "Black Hat",
    price: "80 USD",
    picture: "hat",
    bg_color: "#603dc4",
    color: "#5a3aba",
  },
  {
    name: "Lightweight Jacket",
    price: "249.77 USD",
    picture: "jacket",
    bg_color: "#222629",
    color: "black",
  },
  {
    name: "T-shirt",
    price: "160.12 USD",
    picture: "tshirt",
    bg_color: "#e64980",
    color: "#e64980",
  },
];

const index = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.IndexPage}>
        <div className={styles.hero}>
          {products.map((product, productIn) => (
            <a
              className={styles.product_card}
              style={{ background: product.bg_color }}
            >
              <img src={`./images/${product.picture}.png`} alt="" />
              <div className={styles.name_box}>
                <h1 className="text-3xl font-bold py-7 bg-white">
                  {product.name}
                </h1>
                <p className="font-semibold py-3 bg-white">{product.price}</p>
              </div>
              <span className="py-2 px-2 h-auto bg-white absolute right-0 top-0 like">
                <HeartIcon />
              </span>
            </a>
          ))}
        </div>
        <div className="bg-black">
          <div className={`${styles.product_marquee} bg-black`}>
            {products.map((product, productIn) => (
              <a>
                <img src={`./images/${product.picture}.png`} alt="" />
              </a>
            ))}
          </div>
        </div>
        <div className={styles.news}>
          <div className="mx-auto max-w-8xl px-6 py-24 grid grid-cols-2 gap-4">
            <p className="text-4xl leading-10 font-extrabold text-white sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
              Release Details: The Yeezy BOOST 350 V2 ‘Natural'
            </p>
            <p className="mt-5 text-xl leading-7 text-accent-2 text-white">
              The Yeezy BOOST 350 V2 lineup continues to grow. We recently had
              the ‘Carbon’ iteration, and now release details have been locked
              in for this ‘Natural’ joint. Revealed by Yeezy Mafia earlier this
              year, the shoe was originally called ‘Abez’, which translated to
              ‘Tin’ in Hebrew. It’s now undergone a name change, and will be
              referred to as ‘Natural’.
              <br /> Read it here
            </p>
          </div>
        </div>
        <div className={styles.productgrid}>
          {products.map((product, productIn) => (
            <a
              className={`${styles.product_card}`}
              style={{ background: product.color }}
            >
              <img src={`./images/${product.picture}.png`} alt="" />
              <div className={styles.name_box}>
                <h1 className="text-3xl font-bold py-7 bg-white">
                  {product.name}
                </h1>
                <p className="font-semibold py-3 bg-white">{product.price}</p>
              </div>
              <span className="py-2 px-2 h-auto bg-white absolute right-0 top-0 like">
                <HeartIcon />
              </span>
            </a>
          ))}
        </div>
        <div className={`${styles.product_marquee2} bg-white`}>
          {products.map((product, productIn) => (
            <a>
              <img src={`./images/${product.picture}.png`} alt="" />
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
