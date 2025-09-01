import React from 'react';
import './Home.css'
import Header from '../../components/Header/Header';
import Exploremenu from '../../components/ExploreMenu/Exploremenu';
import { useState } from 'react';
import FoodDisplay from '../../components/foodDisplay/FoodDisplay';

function Home() {

  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  );
}

export default Home;
