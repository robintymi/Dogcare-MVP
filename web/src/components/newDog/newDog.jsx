import "./newDog.css";
import { useState } from "react";

function NewDog({ onDogCreated }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    breed: "",
    gender: "male",
    food: "standard",
    health: "yes",
    dailyRoutine: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/dogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const text = await response.text(); // <- wichtig
console.log("STATUS:", response.status);
console.log("RESPONSE:", text);
      if (response.ok && onDogCreated) {
        await onDogCreated();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    // das hier ist eine form
    <section>
      <div className="new-dog-header">
        <h2>Hund anlegen</h2>
        <p>Stammdaten</p>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          value={formData.name}
          type="text"
          onChange={handleChange}
          id="name"
          name="name"
        />
        <label htmlFor="age">Alter</label>
        <input
          value={formData.age}
          type="number"
          onChange={handleChange}
          id="age"
          name="age"
        />
        <label htmlFor="breed">Rasse</label>
        <input
          value={formData.breed}
          type="text"
          onChange={handleChange}
          id="breed"
          name="breed"
        />
        <label htmlFor="gender">Geschlecht</label>
        <select name="gender" id="gender" onChange={handleChange} value={formData.gender}>
          <option value="male">Männlich</option>
          <option value="female">Weiblich</option>
        </select>
        <label htmlFor="food">Ernährung</label>
        <select name="food" id="food" onChange={handleChange} value={formData.food}>
          <option value="standard">Trocken</option>
          <option value="premium">Feucht</option>
          <option value="vegan">gemischt</option>
          <option value="barf">Barf</option>
        </select>
        <label htmlFor="health">Gesund?</label>
        <select name="health" id="health" onChange={handleChange} value={formData.health}>
          <option value="yes">Ja</option>
          <option value="no">Nein</option>
        </select>
        <label htmlFor="dailyRoutine">Tagesablauf</label>
        <input
          value={formData.dailyRoutine}
          type="text"
          onChange={handleChange}
          id="dailyRoutine"
          name="dailyRoutine"
        />
        <button type="submit">Hund anlegen</button>
      </form>
    </section>
  );
}

export default NewDog;
