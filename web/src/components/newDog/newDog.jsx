import "./newDog.css"

function NewDog() {
  return (
    // das hier ist eine form
   <section>
    <div className="new-dog-header">
        <h2>Hund anlegen</h2>
        <p>Stammdaten</p>
    </div>
    <form action="">
        <label >Name</label>
        <input type="text" />
        <label >Alter</label>
        <input type="number" />
        <label >Rasse</label>
        <input type="text" />
        <label htmlFor="">Geschlecht</label>
        <select name="gender" id="gender">
            <option value="male">Männlich</option>
            <option value="female">Weiblich</option>
        </select>
        <label htmlFor="">Ernährung</label>
        <select name="food" id="food">
            <option value="standard">Trocken</option>
            <option value="premium">Feucht</option>
            <option value="vegan">gemischt</option>
            <option value="barf">Barf</option>
        </select>
    <label htmlFor="">Gesund?</label>
        <select name="health" id="health">
            <option value="yes">Ja</option>
            <option value="no">Nein</option>
        </select>
        <label htmlFor="">Tagesablauf</label>
        <input type="text" />
        <button type="submit">Hund anlegen</button>
    </form>

   </section>
  )
}

export default NewDog