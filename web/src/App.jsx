import { useState, useEffect } from "react";
import viteLogo from "/vite.svg";
import NewDog from "./components/newDog/newDog";
import TrainingPlan from "./components/trainingPlan/trainingPlan";
import AllDogs from "./components/allDogs/allDogs";
import "./App.css";

function App() {
  const [dogs, setDogs] = useState([]);

  const fetchDogs = async () => {
    try {
      const response = await fetch("http://localhost:3000/dogs");
      const data = await response.json();
      setDogs(data);
    } catch (error) {
      console.error("Error fetching dogs:", error);
    }
  };

  useEffect(() => {
    fetchDogs();
  }, []);

  return (
    <div>
      <NewDog onDogCreated={fetchDogs} />
      <TrainingPlan />
      <AllDogs dogs={dogs} />
    </div>
  );
}

export default App;
