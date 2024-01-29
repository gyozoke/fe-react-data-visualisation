import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MeteorSearch from "./components/MeteorSearch";
import MeteorList from "./components/MeteorList";

function App() {
  const [meteors, setMeteors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchForMeteors = () => {
    fetch(
      `https://data.nasa.gov/resource/gh4g-9sfh.json?$query=SELECT%20name%2C%20id%2C%20nametype%2C%20recclass%2C%20mass%2C%20fall%2C%20year%2C%20reclat%2C%20reclong%2C%20geolocation%20ORDER%20BY%20name%20ASC`
    )
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        setMeteors(body);
      });
  };
  useEffect(() => {
    searchForMeteors();
  }, []);

  return (
    <>
      <Header />
      <MeteorSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <MeteorList meteors={meteors} />
    </>
  );
}

export default App;
