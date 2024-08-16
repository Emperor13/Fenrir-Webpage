import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

// image
import icon from "../assets/icon.svg";


function SlideShow() {
  return (
    <>
      <div className="mt-10">
        <div
          className="slider"
          style={{
            "--width": "600px",
            "--height": "64px",
            "--quantity": 10,
          }}
        >
          <div className="list">
            <div className="item" style={{ "--position": 1 }}>
              <div className="bg-slideshow">
                <div className="flex justify-center items-center">
                  <div className="w-[50px]">
                    <img className="w-[32px] h-[32px] " src={icon} alt="" />
                  </div>

                  <a
                    href="https://github.com/nostr-protocol/nips/blob/master/01.md"
                    target="_blank"
                  >
                    NIP-01 Basic Protocol Flow
                  </a>
                </div>
              </div>
            </div>
            <div className="item" style={{ "--position": 2 }}>
              <p className="bg-slideshow">
                <div className="flex justify-center">
                  <div className="w-[50px]">
                    <img className="w-[32px] h-[32px] " src={icon} alt="" />
                  </div>
                  <a
                    href="https://github.com/nostr-protocol/nips/blob/master/02.md"
                    target="_blank"
                  >
                    NIP-02 Follow List
                  </a>
                </div>
              </p>
            </div>
            <div className="item " style={{ "--position": 3 }}>
              <p className="bg-slideshow">
                <div className="flex justify-center">
                  <div className="w-[50px]">
                    <img className="w-[32px] h-[32px] " src={icon} alt="" />
                  </div>
                  <a
                    href="https://github.com/nostr-protocol/nips/blob/master/04.md"
                    target="_blank"
                  >
                    NIP-04 Encrypted Direct Messages
                  </a>
                </div>
              </p>
            </div>
            <div className="item" style={{ "--position": 4 }}>
              <p className="bg-slideshow">
                <div className="flex justify-center">
                  <div className="w-[50px]">
                    <img className="w-[32px] h-[32px] " src={icon} alt="" />
                  </div>
                  <a
                    href="https://github.com/nostr-protocol/nips/blob/master/09.md"
                    target="_blank"
                  >
                    NIP-09 Event Deletion
                  </a>
                </div>
              </p>
            </div>
            <div className="item " style={{ "--position": 5 }}>
              <p className="bg-slideshow">
                <div className="flex justify-center">
                  <div className="w-[50px]">
                    <img className="w-[32px] h-[32px] " src={icon} alt="" />
                  </div>
                  <a
                    href="https://github.com/nostr-protocol/nips/blob/master/11.md"
                    target="_blank"
                  >
                    NIP-11 Relay Information
                  </a>
                </div>
              </p>
            </div>
            <div className="item " style={{ "--position": 6 }}>
              <p className="bg-slideshow">
                <div className="flex justify-center">
                  <div className="w-[50px]">
                    <img className="w-[32px] h-[32px] " src={icon} alt="" />
                  </div>
                  <a
                    href="https://github.com/nostr-protocol/nips/blob/master/13.md"
                    target="_blank"
                  >
                    NIP-13 Proof of Work
                  </a>
                </div>
              </p>
            </div>
            <div className="item " style={{ "--position": 7 }}>
              <p className="bg-slideshow">
                <div className="flex justify-center">
                  <div className="w-[50px]">
                    <img className="w-[32px] h-[32px] " src={icon} alt="" />
                  </div>
                  <a
                    href="https://github.com/nostr-protocol/nips/blob/master/15.md"
                    target="_blank"
                  >
                    NIP-15 Marketplace
                  </a>
                </div>
              </p>
            </div>
            <div className="item " style={{ "--position": 8 }}>
              <p className="bg-slideshow">
                <div className="flex  justify-center">
                  <div className="w-[50px]">
                    <img className="w-[32px] h-[32px] " src={icon} alt="" />
                  </div>
                  <a
                    href="https://github.com/nostr-protocol/nips/blob/master/28.md"
                    target="_blank"
                  >
                    NIP-28 Public Chat
                  </a>
                </div>
              </p>
            </div>
            <div className="item " style={{ "--position": 9 }}>
              <p className="bg-slideshow">
                <div className="flex justify-center">
                  <div className="w-[50px]">
                    <img className="w-[32px] h-[32px] " src={icon} alt="" />
                  </div>
                  <a
                    href="https://github.com/nostr-protocol/nips/blob/master/40.md"
                    target="_blank"
                  >
                    NIP-40 Expiration Timestamp
                  </a>
                </div>
              </p>
            </div>
            <div className="item " style={{ "--position": 10 }}>
              <p className="bg-slideshow">
                <div className="flex justify-center">
                  <div className="w-[50px]">
                    <img className="w-[32px] h-[32px] " src={icon} alt="" />
                  </div>
                  <a
                    href="https://github.com/nostr-protocol/nips/blob/master/50.md"
                    target="_blank"
                  >
                    NIP-50 Search Capability
                  </a>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SlideShow;
