import React from "react";
import { motion } from "framer-motion";
// import CSS
import classes from "../styles/Banner.module.css";

//import image
import imgBanner from "../assets/fenrir.svg";
import btn from "../assets/btn.png";


function Banner() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-between items-center pt-[5%] col-lg-12 col-md-12 col-sm-12 flex-col-reverse lg:flex-row-reverse xl:flex-row grid lg:grid-rows-none lg:grid-cols-4 grid-rows-4">
          <div className="lg:p-[50px] text-center lg:text-start leading-none md:col-span-2 lg:row-span-2">
            <h1 id={classes.head1}>Fenrir-s</h1>
            <h2 id={classes.subhead1}>Nostr Relay</h2>
            <p id={classes.description}>
              Fenrir-s is a Nostr Relay implementation in Kotlin, this project
              is focused on personal use or for use within a group of friends
            </p>

            <div className="w-full flex justify-center lg:justify-start">
              <a href="https://nostrapps.com/" target="_blank">
                <img
                  className="mt-[50px] hover:scale-[1.05] active:translate-y-2"
                  src={btn}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="md:col-span-2 md:row-span-4 lg:row-span-2 row-span-4 order-first lg:order-last">
            <div className="lg:relative lg:w-[671px] lg:h-[671px]">
              <img
                className="hover:translate-y-3 active:-translate-y-2 inset-0 object-cover"
                src={imgBanner}
                alt=""
              />
              {/* <motion.div
              style={{rotate: -30}}
                initial={{ scale: 0 }}
                animate={{ scale: [0.9, 0.8, 0.9]}}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute w-full inset-y-[75%] inset-x-[30%] font-medium text-xl text-[#A97BFF] font-outline-2 invisible lg:visible"
              >
                Don't forget to pet this dawg . . .
              </motion.div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
