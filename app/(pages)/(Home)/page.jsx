import Banner from "@/app/Component/Banner/Banner";
import Categories from "@/app/Component/Categories/Categories";
import Display from "@/app/Component/Display/Display";
import FAQs from "@/app/Component/FAQs/FAQs";
import Feature from "@/app/Component/Feature/Feature";
import Footer from "@/app/Component/Footer/Footer";
import Searchbar from "@/app/Component/SearchBar/Searchbar";
import React from "react";

const Home = () => {
  return (
    <div>
      <Searchbar />
      <Banner />
      <Feature />
      <Display />
      <Categories />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Home;
