import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typewriter from "typewriter-effect";
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import WorkIcon from '@mui/icons-material/Work';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Tooltip from '@mui/material/Tooltip';
import Link from '@mui/material/Link';
export default function Hero() {

     const Item = styled(Box)(({ theme }) => ({
          // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',

          display: 'flex',
          flexDirection: "column",
          justifyContent: "center",
          alignItems: 'center',

          color: theme.palette.text.secondary,
     }));

     return (


          <>


               <Box sx={{ flexGrow: 1 }}>
                    <Container>
                         <Grid container spacing={0}>
                              <Grid item xs={12} md={7}>
                                   <Item>
                                        <Box sx={{
                                             display: 'flex',
                                             flexDirection: "column",
                                             justifyContent: "sapace-between",
                                             alignItems: "center",

                                             ".Typewriter": {
                                                  fontWeight: 800,
                                                  fontSize: "40px",
                                                  textAlign: "center",
                                                  fontFamily: 'Courier Prime',
                                                  // backgroundImage: "linear-gradient(rgb(0, 255, 164),rgb(166, 104, 255))",
                                             }
                                        }} >
                                             <Typography variant='h2' sx={{ fontFamily: 'Courier Prime', }} color="primary" fontWeight={600} fontSize="60px" >Hi, I'm </Typography>
                                             <Typewriter options={{ strings: ["ASIM SHAHZAD", "REACT DEVELOPER"], autoStart: true, loop: true, }} />
                                        </Box>
                                        <Box>
                                             <Link href="#" color='primary' variant='h6' sx={{ display: 'flex', alignItems: "center", marginTop: 5, fontFamily: 'Courier Prime', }} >{<PublicRoundedIcon fontSize="large" color='secondary' sx={{ marginRight: "20px", }} />}  based in the PAKISTAN</Link>
                                             <Link href="https://www.techgater.com/team/" color='primary' variant='h6' sx={{ display: 'flex', alignItems: "center", marginTop: 5, fontFamily: 'Courier Prime', a: { cursor: 'pointer' } }} >{<WorkIcon fontSize="large" color='secondary' sx={{ marginRight: "20px" }} />}  REACT Developer at  TECHGATER</Link>
                                             <Link href="www.gmail.com" color='primary' variant='h6' sx={{ display: 'flex', alignItems: "center", marginTop: 5, fontFamily: 'Courier Prime', }} >{<EmailOutlinedIcon fontSize="large" color='secondary' sx={{ marginRight: "20px" }} />}  asimshahzad6763132@gmail.com</Link>
                                        </Box>
                                        <Box sx={{ marginTop: '30px' }}>
                                             <Stack direction="row" spacing={4}>
                                                  <Tooltip title="https://www.facebook.com/nawab.loog.1865" placement="bottom">
                                                       <IconButton aria-label="delete" color="info">
                                                            <FacebookOutlinedIcon fontSize="large" />
                                                       </IconButton>
                                                  </Tooltip>
                                                  <Tooltip title="https://www.linkedin.com/in/asim-shahzad-32567a232/" placement="bottom">
                                                       <IconButton aria-label="delete" color="info">
                                                            <LinkedInIcon fontSize="large" />
                                                       </IconButton>
                                                  </Tooltip>
                                                  <Tooltip title="https://github.com/asim7886" placement="bottom">
                                                       <IconButton color='secondary'>
                                                            <GitHubIcon fontSize="large" />
                                                       </IconButton>
                                                  </Tooltip>
                                                  <Tooltip title="https://www.instagram.com/nawab.loog.1865/" placement="bottom">
                                                       <IconButton color="warning" aria-label="add to shopping cart">
                                                            <InstagramIcon fontSize="large" />
                                                       </IconButton>
                                                  </Tooltip>
                                             </Stack>
                                        </Box>
                                   </Item>
                              </Grid>
                              <Grid item xs={12} md={5}>
                                   <Item>
                                        <Box sx={{
                                             img: {
                                                  background: "linear-gradient(rgb(0, 255, 164),rgb(166, 104, 255))",
                                                  borderRadius: "50%",
                                             }
                                        }}>
                                             <img src='./img/asim-removebg-preview.png' />
                                        </Box>

                                   </Item>
                              </Grid>
                         </Grid>
                    </Container>
               </Box>


          </>
     )
}
