import MeteorItem from "./MeteorItem";

export default function MeteorList(props) {
  const { meteors } = props;
  return (
    <section>
      <h2>Meteor List</h2>
      <ul>
        {meteors.map((meteor) => {
          const { name, id, mass, fall, year } = meteor;
          return (
            <MeteorItem
              key={`${name}${id}${mass}${fall}${year}`}
              name={name}
              id={id}
              mass={mass}
              fall={fall}
              year={year}
            />
          );
        })}
      </ul>
    </section>
  );
}
