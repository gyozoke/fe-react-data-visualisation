import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "../MeteorList.css";

export default function MeteorList(props) {
  const { meteors, searchTerm } = props;
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 180 },
    { field: "mass", headerName: "Mass (g)", width: 180 },
    { field: "fall", headerName: "Fall", width: 180 },
    { field: "year", headerName: "Year", width: 180 },
  ];

  return (
    <section>
      <h2>Meteor List</h2>
      {searchTerm === "" ? <h3>Currently displaying all meteors</h3> : <h3>Currently displaying meteor ID: {searchTerm}</h3>} 
      <div id="data-table">
        <DataGrid
          rows={meteors}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          filterModel={{
            items: [{field: "id", operator: "equals", value: searchTerm }],
          }}
          slots={{ toolbar: GridToolbar }}
          pageSizeOptions={[10, 20, 50, 100]}
          checkboxSelection
        />
      </div>
    </section>
  );
}
