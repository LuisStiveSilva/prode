import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export default function GroupTable({ members, title }) {
  return (
    <TableContainer component={Paper} >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {title}
              </Typography>
            </TableCell>
            <TableCell align="center">PJ</TableCell>
            <TableCell align="center">PG</TableCell>
            <TableCell align="center">PE</TableCell>
            <TableCell align="center">PP</TableCell>
            <TableCell align="center">GF</TableCell>
            <TableCell align="center">GC</TableCell>
            <TableCell align="center">+/-</TableCell>
            <TableCell align="center">PTS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {members.map((member, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell sx={{ display: "flex", alignItems:"center" }}>
                <img
                  src={member.flag}
                  alt={member.name}
                  style={{
                    height: "auto",
                    width: "35px",
                    border: "1px solid #ddd",
                  }}
                />
                <span style={{ paddingLeft: "10px" }}>{member.name}</span>
              </TableCell>
              <TableCell align="center">{member.pj}</TableCell>
              <TableCell align="center">{member.pg}</TableCell>
              <TableCell align="center">{member.pe}</TableCell>
              <TableCell align="center">{member.pp}</TableCell>
              <TableCell align="center">{member.gf}</TableCell>
              <TableCell align="center">{member.gc}</TableCell>
              <TableCell align="center">{member.dif}</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                {member.pts}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
