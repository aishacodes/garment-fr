import React from "react";
import LogoIcon from "../icons/LogoIcon";
import styles from "../../styles/Footer.module.scss";
const Footer = () => {
  return (
    <footer className="h-40">
      <div className="mx-auto max-w-8xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-accents-2 py-12 items-start">
          <div className="col-span-2">
            <a className="flex items-center">
              {" "}
              <LogoIcon />
              <span className="ml-2">ACME</span>
            </a>
          </div>
          <div className={`col-span-2 flex flex-col ${styles.links}`}>
            <a className="">Home</a>
            <a className="">About</a>
          </div>
          <div className={`col-span-2 flex flex-col ${styles.links}`}>
            <a>Terms of use</a>
            <a>Shipping & Returns</a>
            <a>Privacy Policy</a>
          </div>
          <div className="col-span-6 flex justify-end">
            <img src="./vectors/github.svg" className="w-5 mr-7" alt="" />
            <div className="border flex p-2 rounded">
              <img src="./vectors/flag-en-us.svg" className="w-5 mr-3" alt="" />
              <img src="./vectors/arrow.svg" className="w-5" alt="" />
            </div>
          </div>
        </div>
        <div className="py-12 flex flex-col md:flex-row justify-between items-center space-y-4">
          <span>© 2020 ACME, Inc. All rights reserved.</span>
          <div className="flex items-center">
            <span className="mr-5">Crafted by</span>
            <img src="./vectors/vercel.svg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
