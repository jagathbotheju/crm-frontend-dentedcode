import {
  Box,
  Container,
  Stack,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  TableContainer,
  Paper,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  useTheme,
  TablePagination,
} from "@mui/material";
import React, { useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import tickets from "../data/tickets";

const Dashboard = () => {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Stack mt={5} gap={3}>
          <Box
            p={2}
            display={{ xs: "block", sm: "flex" }}
            justifyContent="space-between"
            alignItems="center"
            bgcolor="grey.200"
          >
            <Typography>Recently Added Tickets</Typography>
            <Box
              display={{ xs: "block", sm: "flex" }}
              gap={3}
              alignItems="center"
            >
              <Box display="flex" gap={5}>
                <Typography>Total 500</Typography>
                <Typography>Pending 500</Typography>
              </Box>

              {/* search */}
              <TextField
                id="input-with-icon-textfield"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaSearch />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />

              {/* add new ticket */}
              <IconButton disableRipple>
                <FaPlus />
              </IconButton>
            </Box>
          </Box>

          {/* table */}
          {tickets.length ? (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: "50%" }} aria-label="tickets table">
                <TableHead>
                  <TableRow
                    sx={{
                      "& .MuiTableCell-root": {
                        fontWeight: "bold",
                      },
                    }}
                  >
                    <TableCell>#</TableCell>
                    <TableCell>Subject</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell sx={{ maxWidth: 50 }}>Opened Date</TableCell>
                  </TableRow>
                </TableHead>

                {/* table body */}
                <TableBody>
                  {tickets
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((ticket) => (
                      <TableRow
                        hover
                        key={ticket.id}
                        // sx={{
                        //   "&:nth-of-type(odd)": {
                        //     backgroundColor: theme.palette.action.hover,
                        //   },
                        // }}
                      >
                        <TableCell>{ticket.id}</TableCell>
                        <TableCell>{ticket.subject}</TableCell>
                        <TableCell>{ticket.status}</TableCell>
                        <TableCell>{ticket.date}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={tickets.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableContainer>
          ) : (
            <Typography>No Tickets Available</Typography>
          )}
        </Stack>
      </Container>
    </>
  );
};

export default Dashboard;
