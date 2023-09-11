import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { LinearProgress } from "@mui/material";
import SectionHead from "../../components/SectionHead";
import { FaHands } from "react-icons/fa";

const StartUp = () => {
  const rows = [
    {
      id: 1,
      col1: "1",
      col2: "CC",
      col3: "JJ",
      col4: "mzp",
      col5: "hjhj",
      col6: "cla",
    },
    {
      id: 2,
      col1: "2",
      col2: "B.b",
      col3: "js",
      col4: "lp",
      col5: "new",
      col6: "ja",
    },
    {
      id: 2,
      col1: "2",
      col2: "B.b",
      col3: "js",
      col4: "lp",
      col5: "new",
      col6: "ja",
    },
    {
      id: 2,
      col1: "2",
      col2: "B.b",
      col3: "js",
      col4: "lp",
      col5: "new",
      col6: "ja",
    },
    {
      id: 2,
      col1: "2",
      col2: "B.b",
      col3: "js",
      col4: "lp",
      col5: "new",
      col6: "ja",
    },
    {
      id: 2,
      col1: "2",
      col2: "B.b",
      col3: "js",
      col4: "lp",
      col5: "new",
      col6: "ja",
    },
    {
      id: 2,
      col1: "2",
      col2: "B.b",
      col3: "js",
      col4: "lp",
      col5: "new",
      col6: "ja",
    },
    {
      id: 2,
      col1: "2",
      col2: "B.b",
      col3: "js",
      col4: "lp",
      col5: "new",
      col6: "ja",
    },
    {
      id: 2,
      col1: "2",
      col2: "B.b",
      col3: "js",
      col4: "lp",
      col5: "new",
      col6: "ja",
    },
    {
      id: 2,
      col1: "2",
      col2: "B.b",
      col3: "js",
      col4: "lp",
      col5: "new",
      col6: "ja",
    },
    {
      id: 2,
      col1: "2",
      col2: "B.b",
      col3: "js",
      col4: "lp",
      col5: "new",
      col6: "ja",
    },
    {
      id: 2,
      col1: "2",
      col2: "B.b",
      col3: "js",
      col4: "lp",
      col5: "new",
      col6: "ja",
    },
    {
      id: 2,
      col1: "2",
      col2: "B.b",
      col3: "js",
      col4: "lp",
      col5: "new",
      col6: "ja",
    },
    {
      id: 2,
      col1: "2",
      col2: "B.b",
      col3: "js",
      col4: "lp",
      col5: "new",
      col6: "ja",
    },
    {
      id: 2,
      col1: "2",
      col2: "B.b",
      col3: "js",
      col4: "lp",
      col5: "new",
      col6: "ja",
    },
    {
      id: 2,
      col1: "2",
      col2: "B.b",
      col3: "js",
      col4: "lp",
      col5: "new",
      col6: "ja",
    },
    {
      id: 2,
      col1: "2",
      col2: "B.b",
      col3: "js",
      col4: "lp",
      col5: "new",
      col6: "ja",
    },
    {
      id: 2,
      col1: "2",
      col2: "B.b",
      col3: "js",
      col4: "lp",
      col5: "new",
      col6: "ja",
    },
    {
      id: 2,
      col1: "2",
      col2: "B.b",
      col3: "js",
      col4: "lp",
      col5: "new",
      col6: "ja",
    },
    {
      id: 2,
      col1: "2",
      col2: "B.b",
      col3: "js",
      col4: "lp",
      col5: "new",
      col6: "ja",
    },
    {
      id: 2,
      col1: "2",
      col2: "B.b",
      col3: "js",
      col4: "lp",
      col5: "new",
      col6: "ja",
    },
  ];

  const columns = [
    { field: "col1", headerName: "Site Number", editable: true, width: 150 },

    { field: "col2", headerName: "Source", editable: true, width: 150 },

    {
      field: "col3",
      headerName: "Investigator Name",
      editable: true,
      width: 150,
    },

    { field: "col4", headerName: "Hospital Name", editable: true, width: 150 },

    { field: "col5", headerName: "Address", editable: true, width: 150 },

    { field: "col6", headerName: "Date Referred", editable: true, width: 150 },

    { field: "col7", headerName: "Site Status", editable: true, width: 150 },

    {
      field: "col8",
      headerName: "Followup-If Required",
      editable: true,
      width: 150,
    },

    { field: "col9", headerName: "Comments", editable: true, width: 150 },

    { field: "col10", headerName: "FQ Sent", editable: true, width: 150 },

    { field: "col11", headerName: "FQ Received", editable: true, width: 150 },

    {
      field: "col12",
      headerName: "Followup-If Required",
      editable: true,
      width: 150,
    },

    { field: "col13", headerName: "Comment", editable: true, width: 150 },

    { field: "col14", headerName: "SQV Planned", editable: true, width: 150 },

    { field: "col15", headerName: "SQV Actual", editable: true, width: 150 },

    { field: "col16", headerName: "Site Selected", editable: true, width: 150 },

    {
      field: "col17",
      headerName: "Startup Package Sent",
      editable: true,
      width: 150,
    },

    { field: "col18", headerName: "CTA Sent", editable: true, width: 150 },

    {
      field: "col19",
      headerName: "CTA Budget Finalized",
      editable: true,
      width: 150,
    },

    { field: "col19", headerName: "CTA Status", editable: true, width: 150 },

    { field: "col20", headerName: "CTA Finalized", editable: true, width: 150 },

    {
      field: "col21",
      headerName: "eTMF Agreement",
      editable: true,
      width: 150,
    },

    {
      field: "col22",
      headerName: "IRB Submission",
      editable: true,
      width: 150,
    },

    { field: "col23", headerName: "IRB Approval", editable: true, width: 150 },

    { field: "col24", headerName: "Binders Sent", editable: true, width: 150 },

    {
      field: "col25",
      headerName: "Training Veeva",
      editable: true,
      width: 150,
    },

    {
      field: "col26",
      headerName: "Special Training",
      editable: true,
      width: 150,
    },

    { field: "col27", headerName: "SIV Planned", editable: true, width: 150 },

    { field: "col28", headerName: "SIV Actual", editable: true, width: 150 },

    {
      field: "col29",
      headerName: "Site Activated",
      editable: true,
      width: 150,
    },

    { field: "col30", headerName: "FPFV", editable: true, width: 150 },
  ];
  return (
    <div
      className="container grid__points"
      style={{ height: 350, width: "90%" }}
    >
      <SectionHead icon={<FaHands />} title="StartUp" />

      <DataGrid
        rows={rows}
        columns={columns}
        slots={{ toolbar: GridToolbar, loadingOverlay: LinearProgress }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default StartUp;
