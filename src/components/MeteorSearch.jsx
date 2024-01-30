import { useState } from "react";
import "../MeteorList.css";
import Expandable from "./Expandable";

export default function MeteorSearch(props) {
  const [userSearch, setUsersSearch] = useState("");
  const { setSearchTerm } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsersSearch("");
    setSearchTerm(userSearch);
  };
  
  return (
    <Expandable>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchTerm">Search meteors ID:</label>
        <input
          type="text"
          id="searchTerm"
          value={userSearch}
          onChange={(event) => {
            setUsersSearch(event.target.value);
          }}
          />
        <button className="searchbutton">Search ID</button>
      </form>
    </Expandable>
  );
}
