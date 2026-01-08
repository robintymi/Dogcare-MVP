
function AllDogs({ dogs }) {
 
  // get dogs from pgadmin and display in table
  return <section>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Breed</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Food</th>
          <th>Health</th>
          <th>Daily Routine</th>
        </tr>
      </thead>
      <tbody>
        {dogs.map((dog) => (
          <tr key={dog.id}>
            <td>{dog.id}</td>
            <td>{dog.name}</td> 
            <td>{dog.breed}</td>
            <td>{dog.age}</td>
            <td>{dog.gender}</td>
            <td>{dog.food}</td>
            <td>{dog.health}</td>
            <td>{dog.daily_routine}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
}

export default AllDogs;
