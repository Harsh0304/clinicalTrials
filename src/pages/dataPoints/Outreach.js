import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { LinearProgress } from "@mui/material";
import SectionHead from "../../components/SectionHead";
import { FaHands } from "react-icons/fa";

const Outreach = () => {
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
    { field: "col1", headerName: "S.No", editable: true, width: 150 },
    { field: "col2", headerName: "Hospital Name", editable: true, width: 150 },
    {
      field: "col3",
      headerName: "Investigator Name",
      editable: true,
      width: 150,
    },
    { field: "col4", headerName: "Address", editable: true, width: 150 },
    {
      field: "col5",
      headerName: "Therapeutic area",
      editable: true,
      width: 150,
    },
    {
      field: "col6",
      headerName: "Useful for Device",
      editable: true,
      width: 150,
    },
    {
      field: `col7`,
      headerName: `Participated in Integra Study`,
      editable: true,
      width: 150,
    },

    { field: "col8", headerName: "Study Name", editable: true, width: 150 },

    {
      field: "col9",
      headerName: "tartup Timeline Selection-Activation Activation to FPFV",
      editable: true,
      width: 150,
    },

    {
      field: "col10",
      headerName: "Comments From Startup If Applicable",
      editable: true,
      width: 150,
    },

    { field: "col11", headerName: "CTA Comments", editable: true, width: 150 },

    {
      field: "col12",
      headerName: "Target/Total Parents",
      editable: true,
      width: 150,
    },

    {
      field: "col13",
      headerName: "Patients wise break if Applicable",
      editable: true,
      width: 150,
    },

    {
      field: "col14",
      headerName: "Site Performance Queries",
      editable: true,
      width: 150,
    },

    {
      field: "col15",
      headerName: "Site Performance Monitoring Issues",
      editable: true,
      width: 150,
    },

    {
      field: "col16",
      headerName: "Site Performance PD",
      editable: true,
      width: 150,
    },

    {
      field: "col17",
      headerName: "Site Performance Safety",
      editable: true,
      width: 150,
    },

    {
      field: "col18",
      headerName: "Site Performance Overall",
      editable: true,
      width: 150,
    },

    {
      field: "col19",
      headerName: "Finance Payable Frequency",
      editable: true,
      width: 150,
    },

    {
      field: "col20",
      headerName: "Finance Agreed Price",
      editable: true,
      width: 150,
    },

    {
      field: "col21",
      headerName: "Finance Involve Time",
      editable: true,
      width: 150,
    },
  ];
  return (
    <div
      className="container grid__points"
      style={{ height: 350, width: "90%" }}
    >
      <SectionHead icon={<FaHands />} title="Outreach" />
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
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default Outreach;
