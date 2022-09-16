import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="body1">
        template created with ♥ by ASIM SHAHZAD
      </Typography>
      <Typography variant="body1">© 2022</Typography>
    </Box>
  );
}
