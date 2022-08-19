import { Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Stack py={5} display={{ xs: "none", sm: "block" }}>
        <Typography textAlign="center">
          &copy; CRM All Rights Reserved -2022
        </Typography>
      </Stack>
    </>
  );
};

export default Footer;
