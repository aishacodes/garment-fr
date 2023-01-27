import React from "react";
import {
  toggleAuthWidget,
  toggleCartWidget,
} from "../../entities/platformEntity";
import CartIcon from "../icons/CartIcon";
import CloseIcon from "../icons/CloseIcon";
import HeartIcon from "../icons/HeartIcon";

import styles from "../../styles/Cart.module.scss";

const Cart = () => {
  const openAuth = () => {
    toggleAuthWidget();
    toggleCartWidget();
  };
  return (
    <div className={styles.Cart}>
      <div className="flex-grow" onClick={toggleCartWidget} />
      <aside className="bg-black w-[28rem] flex flex-col h-screen">
        <header className="px-4 pt-6 pb-4 sm:px-6 flex items-center justify-between">
          <button className="link" onClick={toggleCartWidget}>
            <CloseIcon color="white" />
          </button>
          <div className="flex items-center">
            <span>
              <CartIcon color="white" />
            </span>
            <span className="mx-3">
              <HeartIcon color="white" />
            </span>
            <div
              className="w-8 h-8 rounded-full bg-[blueviolet] cursor-pointer hover:border-2 border-gray-800"
              onClick={openAuth}
            />{" "}
          </div>
        </header>
        <div className="flex flex-grow flex-col justify-center items-center px-12 py-24">
          <span className="border border-dashed border-white flex items-center justify-center w-24 h-24 rounded-full">
            <CartIcon color="white" />
          </span>
          <h2 className="pt-6 text-2xl text-white font-bold tracking-wide text-center">
            Your cart is empty
          </h2>
          <p class="px-10 text-center pt-2 text-[#868e96]">
            Biscuit oat cake wafer icing ice cream tiramisu pudding cupcake.
          </p>
        </div>
      </aside>
    </div>
  );
};

export default Cart;
