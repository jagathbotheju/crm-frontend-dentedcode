import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useParams } from "react-router-dom";
import tickets from "../data/tickets";
import { v4 as uuid } from "uuid";

const TicketDetails = () => {
  const { id } = useParams();
  const ticket = tickets.find((ticket) => ticket.id.toString() === id);

  return (
    <>
      <Container maxWidth="lg">
        <Stack mt={5} justifyContent="center">
          <Grid container rowSpacing={2} columnSpacing={4} maxWidth="50%">
            {/* title */}
            <Grid item container xs={12}>
              <Typography fontWeight="bold" variant="h5">
                Ticket Details
              </Typography>
            </Grid>

            {/* subject label */}
            <Grid item xs={2}>
              <Typography fontWeight="bold">Subject</Typography>
            </Grid>
            {/* subject */}
            <Grid item xs={10}>
              <Typography>{ticket.subject}</Typography>
            </Grid>

            {/* date label */}
            <Grid item xs={2}>
              <Typography fontWeight="bold">Date</Typography>
            </Grid>
            {/* subject */}
            <Grid item xs={10}>
              <Typography>{ticket.date}</Typography>
            </Grid>

            {/* status label */}
            <Grid item xs={2}>
              <Typography fontWeight="bold">Status</Typography>
            </Grid>
            {/* status */}
            <Grid item xs={10}>
              <Typography>{ticket.status}</Typography>
            </Grid>
          </Grid>

          {/* progress history */}
          <Stack my={3}>
            <Typography fontWeight="bold" variant="h5" my={1}>
              Progress History
            </Typography>
            <Grid container>
              <Grid item container>
                {ticket.history.map((item) => (
                  <Grid
                    item
                    container
                    key={uuid()}
                    m={1}
                    justifyContent={
                      item.messageBy === "client" ? "flex-start" : "flex-end"
                    }
                  >
                    <Stack
                      flexDirection={
                        item.messageBy === "client" ? "row" : "row-reverse"
                      }
                      gap={5}
                      sx={{
                        border: 1,
                        borderRadius: 2,
                        width: "100%",
                        p: 2,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography fontWeight="bold" color="grey.600">
                          {item.messageBy}
                        </Typography>
                        <Typography fontWeight="bold" color="grey.600">
                          {item.date}
                        </Typography>
                      </Box>

                      <Typography fontWeight="bold" color="grey.600">
                        {item.message}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Stack>

          {/* user message */}
          <Stack gap={2} my={3}>
            <Typography fontWeight="bold" variant="h5">
              User Message
            </Typography>
            <TextField multiline minRows={5} />
            <Box>
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default TicketDetails;
