import React from 'react';
import MainSection from "../components/MainSection";
import Community from "../components/Community";
import CollectSection from "../components/CollectSection";
import DropSection from "../components/DropSection";

const Home = () => {
  return (
    <>
       <MainSection />
      <CollectSection />
        <DropSection/>
       <Community />
    </>
  )
}

export default Home;