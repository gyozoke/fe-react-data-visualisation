import { useState } from "react";

export default function MeteorSearch(props) {
  const [userSearch, setUsersSearch] = useState("");
  const { searchTerm, setSearchTerm } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsersSearch("");
    setSearchTerm(userSearch);
  };

  return (
    <>
      <h2>Currently searching: {searchTerm}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchTerm">Search meteors:</label>
        <input
          type="text"
          id="searchTerm"
          value={userSearch}
          onChange={(event) => {
            setUsersSearch(event.target.value);
          }}
        />
        <button>Search</button>
      </form>
    </>
  );
}
