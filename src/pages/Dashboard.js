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
  TablePagination,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import tickets from "../data/tickets";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTickets, setFilteredTickets] = useState(tickets);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    if (searchTerm) {
      const result = tickets.filter((ticket) =>
        ticket.subject.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTickets(result);
    } else {
      setFilteredTickets(tickets);
    }
  }, [searchTerm]);

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
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaSearch />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      {searchTerm && (
                        <IconButton onClick={() => setSearchTerm("")}>
                          <AiOutlineClose size="1.2rem" />
                        </IconButton>
                      )}
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />

              {/* add new ticket */}
              <Tooltip title="Add New Ticket">
                <IconButton
                  disableRipple
                  onClick={() => navigate("/new-ticket")}
                >
                  <FaPlus />
                </IconButton>
              </Tooltip>
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
                  {filteredTickets
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
