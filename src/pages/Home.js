import React from 'react';
import MainSection from "../components/MainSection";
import Community from "../components/Community";
import CollectSection from "../components/CollectSection";
import DropSection from "../components/DropSection";
import {getBrigades} from "../hooks";
import BrigadesSection from "../components/BrigadesSection";
import ShareSection from "../components/ShareSection";

const Home = () => {
    const [data, setData] = React.useState([]);

    const dataSetter = async () => {
        setData(await getBrigades());
    }

    React.useEffect(() => {
        dataSetter();
    }, [])

  return (
    <>
      <MainSection />
      <CollectSection />
      <DropSection data={data}/>
      <Community />
      <BrigadesSection data={data}/>
      <ShareSection />
    </>
  )
}

export default Home;