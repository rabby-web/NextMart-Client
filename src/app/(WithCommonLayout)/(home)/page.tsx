import Category from "@/components/modules/home/Category";
import FeaturedProducts from "@/components/modules/home/FeaturedProducts";
import HeroSection from "@/components/modules/home/HeroSection";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Category></Category>
      <FeaturedProducts></FeaturedProducts>
    </div>
  );
};

export default HomePage;
