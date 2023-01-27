import React from "react";
import Link from "next/link";

import HeartIcon from "../icons/HeartIcon";
import CartIcon from "../icons/CartIcon";
import LogoIcon from "../icons/LogoIcon";
import SearchIcon from "../icons/SearchIcon";
import {
  platformEntity,
  toggleAuthWidget,
  toggleCartWidget,
} from "../../entities/platformEntity";
import Cart from "../widget/Cart";
import Auth from "../widget/Auth";

// import {
//   toggleAuthWidget,
//   toggleCartWidget,
// } from "../../entities/platform.entity";

function NavBar() {
  const { isAuthWidgetActive, isCartWidgetAction } = platformEntity.use();

  return (
    <nav className="flex sticky top-0 left-0 h-[5rem] px-6 items-center bg-white z-40">
      <div className="flex items-center">
        <Link href="/" className="mr-4">
          <LogoIcon />
        </Link>
        <Link href="/search">
          <span className="ml-4 link">All</span>
        </Link>
        <span className="ml-3 link">Clothes</span>
        <span className="ml-4 link">Accessories</span>
        <span className="ml-4 link">Shoes</span>
      </div>

      <span className="flex-grow" />

      <form onSubmit={(e) => e.preventDefault()} className="nav-search">
        <input
          type="text"
          className="flex-grow bg-transparent focus:outline-none"
          placeholder="Search for products..."
        />
        <button>
          <SearchIcon />
        </button>
      </form>

      <span className="flex-grow" />

      <div className="items-center grid grid-cols-3 gap-x-4">
        <CartIcon onClick={toggleCartWidget} className="link" />
        <Link href="/wishlist" className="link">
          <HeartIcon />
        </Link>
        <div
          className="w-8 h-8 rounded-full bg-[blueviolet] cursor-pointer hover:border-2 border-gray-800"
          onClick={toggleAuthWidget}
        />
      </div>
      {isCartWidgetAction && (
        <div className="fixed z-50 inset-0 overflow-hidden">
          <Cart />
        </div>
      )}
      {isAuthWidgetActive && <Auth />}
    </nav>
  );
}

export default NavBar;
