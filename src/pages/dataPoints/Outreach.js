import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { LinearProgress } from "@mui/material";
import SectionHead from "../../components/SectionHead";
import { FaHands } from "react-icons/fa";
import { outreachColumns, outreachRows } from "../../data";

const Outreach = () => {
  return (
    <div
      className="container grid__points"
      style={{ height: 350, width: "90%" }}
    >
      <SectionHead icon={<FaHands />} title="Outreach" />
      <DataGrid
        rows={outreachRows}
        columns={outreachColumns}
        slots={{ toolbar: GridToolbar, loadingOverlay: LinearProgress }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default Outreach;
