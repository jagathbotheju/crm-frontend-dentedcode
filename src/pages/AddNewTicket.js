import {
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  Box,
  Button,
} from "@mui/material";
import React from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useState } from "react";
import { useForm } from "react-hook-form";

const AddNewTicket = () => {
  const [dateValue, setDateValue] = useState(new Date());
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (formData) => {
    const newTicketData = {
      ...formData,
      issueData: dateValue.toISOString(),
    };
    console.log(newTicketData);
    //dispatch(loginLocal(formData));
  };

  return (
    <>
      <Container>
        <Stack
          mx="auto"
          mt={{ xs: 0, sm: 5 }}
          width={{ xs: "100%", sm: "80%" }}
        >
          <Grid rowSpacing={{ xs: 1, sm: 2 }} columnSpacing={2} container>
            {/* title */}
            <Grid item xs={3} display={{ xs: "none", sm: "flex" }}></Grid>
            <Grid item container xs={12} sm={8}>
              <Typography
                fontWeight="bold"
                textAlign="center"
                my={3}
                variant="h5"
              >
                Add New Ticket
              </Typography>
            </Grid>

            {/* subject */}
            <Grid
              item
              container
              xs={3}
              justifyContent="flex-end"
              alignItems="center"
              display={{ xs: "block", sm: "flex" }}
            >
              <Typography>Subject</Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                required
                size="small"
                fullWidth
                error={errors.subject ? true : false}
                helperText={errors.subject?.message}
                {...register("subject", {
                  required: "Subject is required",
                })}
              />
            </Grid>

            {/* issue date */}
            <Grid
              item
              container
              xs={12}
              sm={3}
              justifyContent="flex-end"
              alignItems="center"
              display={{ xs: "block", sm: "flex" }}
            >
              <Typography>Issue Date</Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <Box display={{ xs: "none", sm: "flex" }}>
                  <DesktopDatePicker
                    inputFormat="MM/DD/yyyy"
                    value={dateValue}
                    onChange={(newDateValue) => setDateValue(newDateValue)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Box>

                <Box display={{ xs: "flex", sm: "none" }}>
                  <MobileDatePicker
                    disablePast
                    inputFormat="MM/DD/yyyy"
                    value={dateValue}
                    onChange={(newDateValue) => setDateValue(newDateValue)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Box>
              </LocalizationProvider>
            </Grid>

            {/* details */}
            <Grid
              item
              container
              xs={12}
              sm={3}
              justifyContent="flex-end"
              alignItems="flex-start"
              display={{ xs: "block", sm: "flex" }}
            >
              <Typography>Detals</Typography>
            </Grid>
            <Grid item container xs={12} sm={8}>
              <TextField
                multiline
                minRows={7}
                size="small"
                fullWidth
                error={errors.details ? true : false}
                helperText={errors.details?.message}
                {...register("details", {
                  required: "Details required",
                })}
              />
            </Grid>

            {/* submit button */}
            <Grid
              item
              xs={12}
              sm={3}
              display={{ xs: "none", sm: "flex" }}
            ></Grid>
            <Grid item my={3} container xs={12} sm={8}>
              <Button
                variant="contained"
                onClick={handleSubmit(onSubmit)}
                disabled={!isValid}
              >
                Add New Ticket
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </>
  );
};

export default AddNewTicket;
