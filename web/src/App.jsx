import { useState } from "react";
import viteLogo from "/vite.svg";
import NewDog from "./components/newDog/newDog";
import TrainingPlan from "./components/trainingPlan/trainingPlan";
import "./App.css";

function App() {
  return (
    <div>
      <NewDog />
      <TrainingPlan />
    </div>
  )
}

export default App;
