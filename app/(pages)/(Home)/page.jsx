import Banner from "@/app/Component/HomePgComponents/Banner/Banner";
import Categories from "@/app/Component/HomePgComponents/Categories/Categories";
import Display from "@/app/Component/HomePgComponents/Display/Display";
import FAQs from "@/app/Component/HomePgComponents/FAQs/FAQs";
import Feature from "@/app/Component/HomePgComponents/Feature/Feature";
import Footer from "@/app/Component/HomePgComponents/Footer/Footer";
import Searchbar from "@/app/Component/HomePgComponents/SearchBar/Searchbar";
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
