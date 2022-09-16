import { Box, Typography, Stack } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import CameraOutdoorOutlinedIcon from "@mui/icons-material/CameraOutdoorOutlined";
import OutdoorGrillOutlinedIcon from "@mui/icons-material/OutdoorGrillOutlined";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import { styled } from "@mui/material/styles";
const Item = styled(Box)(({ theme }) => ({}));

export default function About() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <Typography
          variant="h4"
          color="primary"
          sx={{
            marginTop: "30px",
            marginBottom: "30px",
            fontFamily: "Courier Prime",
          }}
        >
          ABOUT ME
        </Typography>
        <Box
          sx={{
            padding: "0.5rem",
            borderRadius: " 0.5rem 0.5rem 0px 0px",
            fontSize: "1rem",
            backgroundColor: " rgb(140, 140, 140)",
            minWidth: "900px",
          }}
        >
          <CircleRoundedIcon color="error" />
          <CircleRoundedIcon color="warning" />
          <CircleRoundedIcon color="success" />
        </Box>
        <Box
          sx={{
            borderRadius: "0px 0px 0.5rem 0.5rem",
            fontSize: "1.5rem",
            backgroundColor: "rgb(39, 36, 47)",
            padding: "2rem 1px",
            minWidth: "900",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              sx={{ color: "rgb(0, 255, 164)", fontFamily: "Courier Prime" }}
            >
              ASIM Shahzad $
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Courier Prime",
                marginLeft: "10px",
              }}
            >
              cat aboutasim
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "start" }}>
            <Typography
              variant="h6"
              sx={{ color: "rgb(0, 255, 164)", fontFamily: "Courier Prime" }}
            >
              aboutjohn (main) $
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Courier Prime",
                marginLeft: "10px",
                width: "656px",
              }}
            >
              Hello! I'm Asim. I'm a React developer at Teachgater. I studied
              Degree College Phularwan, I enjoy long walks on the beach, and I
              believe artificial intelligence will inevitably rule us all one
              day. You should hire me!
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* ======================================================== */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <Box
          sx={{
            padding: "0.5rem",
            borderRadius: " 0.5rem 0.5rem 0px 0px",
            fontSize: "1rem",
            backgroundColor: " rgb(140, 140, 140)",
            minWidth: "900px",
          }}
        >
          <CircleRoundedIcon color="error" />
          <CircleRoundedIcon color="warning" />
          <CircleRoundedIcon color="success" />
        </Box>
        <Box
          sx={{
            borderRadius: "0px 0px 0.5rem 0.5rem",
            fontSize: "1.5rem",
            backgroundColor: "rgb(39, 36, 47)",
            padding: "2rem 43px",
            minWidth: "900px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              sx={{ color: "rgb(0, 255, 164)", fontFamily: "Courier Prime" }}
            >
              ASIM Shahzad $
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Courier Prime",
                marginLeft: "10px",
              }}
            >
              cd skills/tools
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              sx={{ color: "rgb(0, 255, 164)", fontFamily: "Courier Prime" }}
            >
              skills/tools (main) $
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Courier Prime",
                marginLeft: "10px",
              }}
            >
              ls
            </Typography>
          </Box>
          <Typography
            variant="h6"
            sx={{
              color: "rgb(0, 255, 164)",
              fontFamily: "Courier Prime",
              marginTop: "20px",
            }}
          >
            Proficient With
          </Typography>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Item>
                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily: "Courier Prime",
                    marginLeft: "10px",
                  }}
                >
                  javascript
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily: "Courier Prime",
                    marginLeft: "10px",
                  }}
                >
                  bootstrap
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily: "Courier Prime",
                    marginLeft: "10px",
                  }}
                >
                  react
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily: "Courier Prime",
                    marginLeft: "10px",
                  }}
                >
                  html5
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily: "Courier Prime",
                    marginLeft: "10px",
                  }}
                >
                  css3
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily: "Courier Prime",
                    marginLeft: "10px",
                  }}
                >
                  figma
                </Typography>
              </Item>
            </Grid>
          </Grid>
          <Typography
            variant="h6"
            sx={{
              color: "rgb(0, 255, 164)",
              fontFamily: "Courier Prime",
              marginTop: "20px",
            }}
          >
            Exposed To
          </Typography>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Item>
                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily: "Courier Prime",
                    marginLeft: "10px",
                  }}
                >
                  nodejs
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily: "Courier Prime",
                    marginLeft: "10px",
                  }}
                >
                  adobe illustrator
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* ======================================================== */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <Box
          sx={{
            padding: "0.5rem",
            borderRadius: " 0.5rem 0.5rem 0px 0px",
            fontSize: "1rem",
            backgroundColor: " rgb(140, 140, 140)",
            minWidth: "900px",
          }}
        >
          <CircleRoundedIcon color="error" />
          <CircleRoundedIcon color="warning" />
          <CircleRoundedIcon color="success" />
        </Box>
        <Box
          sx={{
            borderRadius: "0px 0px 0.5rem 0.5rem",
            fontSize: "1.5rem",
            backgroundColor: "rgb(39, 36, 47)",
            padding: "2rem 43px",
            minWidth: "900px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              sx={{ color: "rgb(0, 255, 164)", fontFamily: "Courier Prime" }}
            >
              ASIM Shahzad $
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Courier Prime",
                marginLeft: "10px",
              }}
            >
              cd hobbies/interests
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              sx={{ color: "rgb(0, 255, 164)", fontFamily: "Courier Prime" }}
            >
              hobbies/interests (main) $
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Courier Prime",
                marginLeft: "10px",
              }}
            >
              ls
            </Typography>
          </Box>

          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} md={12}>
              <Item>
                <Typography
                  sx={{
                    display: "flex",
                    color: "#fff",
                    fontFamily: "Courier Prime",
                    marginLeft: "10px",
                  }}
                >
                  {
                    <AutoStoriesIcon
                      fontSize="medium"
                      sx={{ marginRight: "10px" }}
                    />
                  }
                  reading
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={12}>
              <Item>
                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily: "Courier Prime",
                    marginLeft: "10px",
                  }}
                >
                  {
                    <TheaterComedyIcon
                      fontSize="medium"
                      sx={{ marginRight: "10px" }}
                    />
                  }
                  theater
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={12}>
              <Item>
                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily: "Courier Prime",
                    marginLeft: "10px",
                  }}
                >
                  {
                    <CameraOutdoorOutlinedIcon
                      fontSize="medium"
                      sx={{ marginRight: "10px" }}
                    />
                  }
                  movies
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={12}>
              <Item>
                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily: "Courier Prime",
                    marginLeft: "10px",
                  }}
                >
                  {
                    <OutdoorGrillOutlinedIcon
                      fontSize="medium"
                      sx={{ marginRight: "10px" }}
                    />
                  }
                  cooking
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
