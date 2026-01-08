import { useState, useEffect } from "react";

function CreateDog() {}

function AllDogs() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetchDogs();
  }, []);

  const fetchDogs = async () => {
    try {
      const response = await fetch("http://localhost:3000/dogs");
      const data = await response.json();
      setDogs(data);
    } catch (error) {
      console.error("Error fetching dogs:", error);
    }
  };

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Breed</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Health</th>
            <th>Food</th>
            <th>Daily Routine</th>
          </tr>
        </thead>
        <tbody>
          {dogs.map((dog) => (
            <tr key={dog.id}>
              <td>{dog.name}</td>
              <td>{dog.breed}</td>
              <td>{dog.age}</td>
              <td>{dog.gender}</td>
              <td>{dog.health}</td>
              <td>{dog.food}</td>
              <td>{dog.daily_routine}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
export default AllDogs;
