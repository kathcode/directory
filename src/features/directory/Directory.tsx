import {
  Box,
  Button,
  Link,
  Modal,
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
import { directory } from "../../mockData/directory";
import ComputerIcon from "@mui/icons-material/Computer";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Directory = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const getSocialLink = (
    socialType: string,
    socialLink: string | undefined
  ) => {
    if (!socialLink) return;
    if (socialType === "instagram")
      return `https://instagram.com/${socialLink}`;
    if (socialType === "website") return `${socialLink}`;

    return "";
  };

  const closeIcon = {
    ...(search
      ? {
          slotProps: {
            input: {
              endAdornment: <CloseIcon />,
              onClick: () => setSearch(""),
            },
          },
        }
      : {}),
  };

  const headers = ["Name", "Phone number", "Service", "Social media"];

  return (
    <>
      <Paper sx={{ padding: { xs: 2, md: 4 }, m: { xs: 2, md: 4 } }}>
        <Button variant="outlined" onClick={handleOpen}>
          Add new contact
        </Button>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          value={search}
          margin="normal"
          onChange={(e) => setSearch(e.target.value)}
          {...closeIcon}
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
                        {getIcon(value)}
                        <Link
                          href={getSocialLink(value, row?.social?.[value])}
                          target="_blank"
                        >
                          <Box>@{row?.social?.[value]}</Box>
                        </Link>
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            To add a new contact please send a WhatsApp message to the number{" "}
            <strong>+1 647 782 97 82</strong> with the following information:
          </Typography>
          <ul>
            <li>Name</li>
            <li>Phone number</li>
            <li>Kind of service</li>
            <li>Social media</li>
          </ul>
          <Button sx={{ mt: 4 }} variant="contained" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
};
