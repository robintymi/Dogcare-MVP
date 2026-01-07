import "./trainingPlan.css"

function TrainingPlan() {
  return (
    <section>
      <div className="training-plan-header">
        <h2>Trainingsplan für</h2>
        <select name="" aria-placeholder="Hundename"id=""></select>
      </div>
      <form action="">
        <label htmlFor="">1. Übung</label>
        <select name="" id=""></select>
        <label htmlFor="">2. Übung</label>
        <select name="" id=""></select>
        <label htmlFor="">3. Übung</label>
        <select name="" id=""></select>
        <label htmlFor="">4. Übung</label>
        <select name="" id=""></select>
        <label htmlFor="">5. Übung</label>
        <select name="" id=""></select>

        <button type="submit">Trainingsplan speichern</button>
      </form>
    </section>
  );
}
export default TrainingPlan;
