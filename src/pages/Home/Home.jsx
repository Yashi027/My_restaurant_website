import React from 'react';
import './Home.css'
import Header from '../../components/Header/Header';
import Exploremenu from '../../components/ExploreMenu/Exploremenu';
import { useState } from 'react';

function Home() {

  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
    </div>
  );
}

export default Home;
