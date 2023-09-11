import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { LinearProgress } from "@mui/material";
import SectionHead from "../../components/SectionHead";
import { FaHands } from "react-icons/fa";

const DOA = () => {
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
    { field: "col1", headerName: "Name", editable: true, width: 150 },

    { field: "col2", headerName: "Designation", editable: true, width: 150 },

    { field: "col3", headerName: "Start/Stop", editable: true, width: 150 },

    { field: "col4", headerName: "CV", editable: true, width: 150 },

    {
      field: "col5",
      headerName: "GCP Certificates",
      editable: true,
      width: 150,
    },

    {
      field: "col6",
      headerName: "Medical License",
      editable: true,
      width: 150,
    },

    {
      field: "col7",
      headerName: "Financial Disclosure Form",
      editable: true,
      width: 150,
    },

    { field: "col8", headerName: "Trainings Cert", editable: true, width: 150 },
  ];
  return (
    <div
      className="container grid__points"
      style={{ height: 350, width: "90%" }}
    >
      <SectionHead icon={<FaHands />} title="DOA" />

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

export default DOA;
