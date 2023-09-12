export default function ExampleArrayMapping() {
  const animals = ['tiger', 'lion', 'dog', 'cat', 'mouse'];

  const teamMembers = [
    { id: 0, name: 'Tatli' },
    { id: 1, name: 'Mohammad' },
  ];
  return (
    <div>
      {animals.map((animal) => {
        return (
          <div key={`animal-div-${animal}`}>
            <div>{animal}</div>
          </div>
        );
      })}
      {teamMembers.map((teamMember, id) => {
        console.log(teamMember.id);
        return (
          <div key={`Member: ${teamMember.id}`}>Name: {teamMember.name}</div>
        );
      })}
    </div>
  );
}

/*
Modified code which includes a key, making each key unique, even if the animal names are the same. Prevents duplicate keys in React component's rendering and ensures that updated elements are accurately tracked

// {animals.map((animal, index) => {
//   return <div key={`animal-div-${animal}-${index}`}>{animal}</div>;
// })}
*/
