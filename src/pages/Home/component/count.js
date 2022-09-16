import React, { useState } from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import HorizontalRuleSharpIcon from "@mui/icons-material/HorizontalRuleSharp";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import { Typography } from "@mui/material";
function Example({ getvalue }) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(4);
  React.useEffect(() => {
    getvalue(count);
  }, [count]);

  return (
    <ButtonGroup
      sx={{ margin: "10px", display: "flex", justifyContent: "center" }}
    >
      <IconButton
        sx={{ margin: "10px" }}
        onClick={() => setCount(count + 1)}
        disabled={count === 4}
      >
        <AddSharpIcon />
      </IconButton>
      <Typography variant="h4" sx={{ margin: "10px" }}>
        {" "}
        {count}{" "}
      </Typography>
      <IconButton
        sx={{ margin: "10px" }}
        onClick={() => setCount(count - 1)}
        disabled={count === 0}
      >
        <HorizontalRuleSharpIcon />
      </IconButton>
      {/* <Button
        color="secondary"
        variant="text"
        sx={{ margin: "10px" }}
        onClick={() => setCount(0)}
        disabled={count === 0}
      >
        reset
      </Button> */}
    </ButtonGroup>
  );
}
export default Example;
