import React, { useState } from "react";
import Count from "./count.js";
import { styled } from "@mui/material/styles";
import Card from "./Card.js";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const data = [
  {
    id: 1,
    title: "card 1",
  },
  {
    id: 2,
    title: "card 2",
  },
  {
    id: 3,
    title: "card 3",
  },
  {
    id: 4,
    title: "card 4",
  },
];

export default function Home(props) {
  const [value, setvalue] = useState(4);
  console.log(value);
  return (
    <>
      <Grid container Spacing={6}>
        {data.slice(0, value).map((v) => (
          <Grid item xs={12} md={3}>
            <Item>
              {" "}
              <Card key={v.id} title={v.title} />
            </Item>
          </Grid>
        ))}
      </Grid>

      {/* <Count
        getvalue={(v) => {
          setvalue(v);
        }}
      /> */}
    </>
  );
}
