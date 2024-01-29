export default function MeteorItem(props) {
  const { name, id, mass, fall, year } = props;
  return (
    <li>
      <h3>{name}</h3>
      <p>id: {id}</p>
      <p>Mass: {mass}g</p>
      <p>Fall: {fall}</p>
      <p>Year: {year}</p>
    </li>
  );
}
