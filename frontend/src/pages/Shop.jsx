import React from "react";
import { Hero } from "../components/HeroSec/Hero";
import Popular from "../components/Popular/Popular";
import Offers from "../components/Offers/Offers";
import { NewCollections } from "../components/NewCollections/NewCollections";
import { Newsletter } from "../components/NewsLetter/Newsletter";

export const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <Newsletter />
    </div>
  );
};
