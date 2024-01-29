import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "../MeteorList.css";

export default function MeteorList(props) {
  const { meteors } = props;
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "mass", headerName: "Mass (g)", width: 130 },
    { field: "fall", headerName: "Fall", width: 130 },
    { field: "year", headerName: "Year", width: 130 },
    // { field: "geolocation", headerName: "GeoLocation", width: 130 },
  ];
  return (
    <section>
      <h2>Meteor List</h2>
      <div id="data-table" style={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={meteors}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          pageSizeOptions={[10, 20, 50, 100]}
          checkboxSelection
        />
      </div>
    </section>
  );
}
