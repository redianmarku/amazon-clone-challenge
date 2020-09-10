import React from "react";
import "./Home.css";
import Product from "./Product";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { AnimationWrapper } from "react-hover-animation";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <AnimationWrapper>
            <Fade left>
              <Product
                id="3215"
                title="
          HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA..."
                price={163}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SL1500_.jpg"
              />
            </Fade>
          </AnimationWrapper>
          <AnimationWrapper>
            <Fade right>
              <Product
                id="6987"
                title="VicTsing MM057 2.4G Wireless Mouse Portable Mobile Optical Mouse with USB Receiver, 5 Adjustable DPI Levels, 6 Buttons for Notebook, PC, Laptop, Computer, Macbook - Black"
                price={11.49}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71gK7VlDnGL._AC_SL1280_.jpg"
              />
            </Fade>
          </AnimationWrapper>
        </div>

        <div className="home__row">
          <AnimationWrapper>
            <Zoom>
              <Product
                id="6457"
                title="
            Acer Nitro 5 Gaming Laptop, 9th Gen Intel Core i7-9750H, NVIDIA GeForce RTX 2060, 15.6 Full HD IPS 144Hz Display, 16GB DDR4, 256GB NVMe SSD, Wi-Fi 6,..."
                price={1018.05}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71s1LRpaprL._AC_SL1500_.jpg"
              />
            </Zoom>
          </AnimationWrapper>
          <AnimationWrapper>
            <Zoom>
              <Product
                id="6547"
                title="TP-Link AC1750 Smart WiFi Router - Dual Band Gigabit Wireless Internet Router for Home, Works with Alexa, VPN Server, Parental Control&QoS (Archer A7)"
                price={62.64}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/51R2a9p-vNL._AC_SL1000_.jpg"
              />
            </Zoom>
          </AnimationWrapper>
          <AnimationWrapper>
            <Zoom>
              <Product
                id="3259"
                title="Seagate BarraCuda 2TB Internal Hard Drive HDD – 3.5 Inch SATA 6Gb/s 7200 RPM 256MB Cache 3.5-Inch – Frustration Free Packaging (ST2000DM008)"
                price={54.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51nr%2B5uCFHL._AC_.jpg"
              />
            </Zoom>
          </AnimationWrapper>
        </div>

        <div className="home__row">
          <AnimationWrapper>
            <Bounce bottom>
              <Product
                id="9865"
                title="
            LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor with USB Type-C Connectivity sRGB 99% Color Gamut and HDR10 Compatibility, Black (2019)"
                price={549}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81WBbFOEHwL._AC_SL1500_.jpg"
              />
            </Bounce>
          </AnimationWrapper>
        </div>
      </div>
    </div>
  );
}

export default Home;
