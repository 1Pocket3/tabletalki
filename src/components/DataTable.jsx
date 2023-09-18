import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const classes = {
  grey: "grey",
  red: "#e84b14",
  verticalAlign: "top",
  black: "black"
};

const DataTable = ({ columns, data }) => {
  return (
    <TableContainer component={Paper}>
      <Table >
        <TableHead>
          {columns.map((column) => {
            return (
              <TableCell>
                <TableRow><b>{column.Header}</b></TableRow>
              </TableCell>
            )
          })}
        </TableHead>
        <TableBody>
          {data.map((row) => {
            let formatedPrice = row.price.toFixed(2);
            return (
              <TableRow key={row.id}>
                <TableCell style={{ textAlign: "left" }}>
                  <b style={{ marginBottom: "5px", fontWeight: 'bold' }}>
                    {row.event}<br />
                  </b>
                  <div style={{ color: classes.grey, fontWeight: "bold", fontSize: "11px" }}>
                    {row.date}<br />
                  </div>
                  <b >
                    ${formatedPrice}
                  </b>
                </TableCell>
                <TableCell style={{ verticalAlign: classes.verticalAlign }}>
                  <div>
                    <b>
                      {row.advocate.email}<br />
                    </b>
                    <div style={{ marginTop: "3px", color: classes.black, fontWeight: "normal", fontSize: "11px" }}>
                      {row.advocate.stringAdvocate}<br />
                    </div>
                  </div>
                </TableCell>
                <TableCell style={{ verticalAlign: classes.verticalAlign }}>
                  <b>
                    {row.friends.email}<br />
                  </b>
                  <div style={{ color: classes.black, fontWeight: "normal", fontSize: "11px" }}>
                    {row.friends.stringFriend}<br />
                  </div>
                </TableCell>
                <TableCell style={{ verticalAlign: classes.verticalAlign }}>
                  <div style={{ color: classes.black, fontWeight: "bold" }}>
                    {row.refStatus.status}<br />
                  </div>
                  {row.refStatus.action === "Marked as fraud" ?
                    <div style={{ color: classes.red }}>
                      <b style={{ fontWeight: "bold", fontSize: "11px" }}>
                        {row.refStatus.action}
                      </b>
                    </div>
                    :
                    <div style={{ color: classes.grey, fontWeight: "bold", fontSize: "11px" }}>
                      <div style={{ marginTop: "3px" }}>
                        {row.refStatus.action}
                      </div>
                    </div>
                  }
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
