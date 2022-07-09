import Car from "../images/img_car.png";
import { Box, Grid, Typography } from "@mui/material";

const Hero = () => {
  return (
    <>
      <Grid container maxWidth="lg" mx="auto" px={6}>
        <Grid item xs={12} md={6} py={{ md: 12 }}>
          <Typography variant="titleHero" as="h1" mb={2}>
            Sewa & Rental Mobil Terbaik di kawasan Jakarta
          </Typography>
          <Typography variant="body" fontWeight={300} paragraph maxWidth="90%">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas 
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
          </Typography>
        </Grid>
      </Grid>
      <Box maxWidth={{ md: "45%" }} position={{ md: "absolute" }} right={0} bottom={0}>
        <img src={Car} alt="car" style={{ width: "100%" }} />
      </Box>
    </>
  );
};

export default Hero;
