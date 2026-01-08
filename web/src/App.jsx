import { useState } from "react";
import viteLogo from "/vite.svg";
import NewDog from "./components/newDog/newDog";
import TrainingPlan from "./components/trainingPlan/trainingPlan";
import AllDogs from "./components/allDogs/allDogs";
import "./App.css";

function App() {
  return (
    <div>
      <NewDog />
      <TrainingPlan />
      <AllDogs />
    </div>
  )
}

export default App;
