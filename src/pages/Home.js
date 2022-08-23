import React from 'react';
import MainSection from "../components/MainSection";
import Community from "../components/Community";
import CollectSection from "../components/CollectSection";
import ShareSection from "../components/ShareSection";

const Home = () => {
  return (
    <>
       <MainSection />
      <CollectSection />
       <Community />
        <ShareSection />
    </>
  )
}

export default Home;