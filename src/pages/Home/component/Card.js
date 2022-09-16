import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export default function RecipeReviewCard(props) {
  return (
    <Card
      sx={{
        maxWidth: 250,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        // background: "#9b9e99",
        paddingTop: "20px",
        borderRadius: "15px",
        marginTop: "20px",
      }}
    >
      <img src="./img/branding.svg" />
      <CardMedia width="100px" height="100px" image="" />

      <CardContent>
        <Typography variant="h3"> {props.title}</Typography>

        <Typography variant="subtitle1" fontWeight={600}>
          Building functional Web App with ReactJS, VueJS, MaterialUI & Vuetify
        </Typography>
      </CardContent>

      <CardActions>
        <Button sx={{ fontWeight: "900" }} size="large" color="info">
          Learn More{" "}
        </Button>
      </CardActions>
    </Card>
  );
}
