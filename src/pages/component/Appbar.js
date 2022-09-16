import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Checkbox from "@mui/material/Checkbox";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Tooltip from "@mui/material/Tooltip";

import Link from "@mui/material/Link";

export default function ButtonAppBar({ Check, change }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        <Tooltip title="Theme" placement="top-start">
          <Checkbox
            Checked={Check}
            onChange={change}
            checkedIcon={<WbSunnyIcon fontSize="large" color="error" />}
            icon={<DarkModeOutlinedIcon fontSize="large" />}
          />
        </Tooltip>
      </Toolbar>
    </Box>
  );
}
