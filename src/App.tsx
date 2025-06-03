import "./App.css";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { directory } from "./mockData/directory";
import ComputerIcon from "@mui/icons-material/Computer";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function App() {
  const [search, setSearch] = useState("");

  const filteredRows = directory.filter(
    (row) =>
      row.name.toLowerCase().includes(search.toLowerCase()) ||
      row.number.toLowerCase().includes(search.toLowerCase()) ||
      row.service?.toLowerCase().includes(search.toLowerCase())
  );

  const getIcon = (socialName: string) => {
    if (socialName) {
      if (socialName === "instagram") return <InstagramIcon />;
      if (socialName === "facebook") return <FacebookIcon />;
      if (socialName === "website") return <ComputerIcon />;
    }
  };

  const headers = ["Name", "Phone number", "Service", "Social media"];

  return (
    <>
      <Typography variant="h2" sx={{ mb: 4 }}>
        Milton Latinas directory
      </Typography>
      <Paper sx={{ padding: 2 }}>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(e) => setSearch(e.target.value)}
        />

        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableCell sx={{ background: "#dcdcdc !important" }}>
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((row) => (
                <TableRow key={row.number}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.number}</TableCell>
                  <TableCell>{row.service}</TableCell>
                  {!row?.social && <TableCell>---</TableCell>}
                  {row?.social &&
                    Object.keys(row.social).map((value) => (
                      <TableCell>
                        <Box>{getIcon(value)}</Box>
                        <Box>{row?.social?.[value]}</Box>
                      </TableCell>
                    ))}
                </TableRow>
              ))}
              {filteredRows.length === 0 && (
                <TableRow>
                  <TableCell colSpan={2}>No results found</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}

export default App;
