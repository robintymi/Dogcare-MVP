import { useState } from "react";
import "./newDog.css"

function NewDog() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [food, setFood] = useState("");
  const [health, setHealth] = useState("");
  const [dailyRoutine, setDailyRoutine] = useState("");

  const createDog = async (e) => {
    e.preventDefault();
    const data = {
      name,
      age: parseInt(age),
      breed,
      gender,
      food,
      health,
      daily_routine: dailyRoutine
    };
    try {
      const response = await fetch('http://localhost:3000/dogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        alert('Dog added successfully');
        // Reset form
        setName("");
        setAge("");
        setBreed("");
        setGender("");
        setFood("");
        setHealth("");
        setDailyRoutine("");
      } else {
        alert('Failed to add dog');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding dog');
    }
  };

  return (
    // das hier ist eine form
   <section>
    <div className="new-dog-header">
        <h2>Hund anlegen</h2>
        <p>Stammdaten</p>
    </div>
    <form onSubmit={createDog}>
        <label >Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label >Alter</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        <label >Rasse</label>
        <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
        <label htmlFor="gender">Geschlecht</label>
        <select name="gender" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select</option>
            <option value="male">Männlich</option>
            <option value="female">Weiblich</option>
        </select>
        <label htmlFor="food">Ernährung</label>
        <select name="food" id="food" value={food} onChange={(e) => setFood(e.target.value)}>
            <option value="">Select</option>
            <option value="standard">Trocken</option>
            <option value="premium">Feucht</option>
            <option value="vegan">gemischt</option>
            <option value="barf">Barf</option>
        </select>
    <label htmlFor="health">Gesund?</label>
        <select name="health" id="health" value={health} onChange={(e) => setHealth(e.target.value)}>
            <option value="">Select</option>
            <option value="yes">Ja</option>
            <option value="no">Nein</option>
        </select>
        <label htmlFor="dailyRoutine">Tagesablauf</label>
        <input type="text" value={dailyRoutine} onChange={(e) => setDailyRoutine(e.target.value)} />
        <button type="submit">Hund anlegen</button>
    </form>

   </section>
  )
}

export default NewDog