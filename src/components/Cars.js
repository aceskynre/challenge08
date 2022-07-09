import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setButton } from "../redux/itemActions";
import { PeopleOutline, SettingsOutlined, CalendarTodayOutlined } from "@material-ui/icons";
import { Box, Button, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";

const Cars = ({ item }) => {
  const btn = useSelector((state) => state.buttonText.buttonText);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setButton("Pilih Mobil"));
  });

  return (
    <div className="Card" boxShadow={4} style={{ display: "flex", paddingTop: "100px", marginRight: "35px" }}>
      <Box p={3} mx={3} borderRadius={1} boxShadow="0px 0px 4px rgba(0, 0, 0, 0.15)" style={{ width: "330px" }}>
        <CardActionArea boxShadow={4} style={{ boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)" }}>
          <CardMedia component="img" image={item.image} alt={item.name} style={{ padding: "10px", borderColor: "black", maxHeight: "200px" }} />
          <CardContent>
            <Typography variant="p" component="div" style={{ paddingBottom: "8px" }}>
              {item.name} / {item.category}
            </Typography>
            <Typography variant="p" component="div" style={{ fontWeight: "bold", paddingBottom: "8px" }}>
              Rp. {item.price.toLocaleString("id-ID")} / hari
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ paddingBottom: "8px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ display: "flex", alignItems: "center" }}>
              <PeopleOutline /> &nbsp;&nbsp;{item.passangers} 4 orang
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ display: "flex", alignItems: "center" }}>
              <SettingsOutlined /> &nbsp;&nbsp;{item.fuel}
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ display: "flex", alignItems: "center" }}>
              <CalendarTodayOutlined /> &nbsp; {item.time}
            </Typography>
            <Button href={`/car/${item.id}`} variant="contained" fullWidth style={{ background: "#5cb85f", color: "white", marginTop: "8px" }}>
              <Typography as="p" my={1} variant="bodyBold" textTransform="Capitalize">
                {/* Pilih Mobil */}
                {btn}
              </Typography>
            </Button>
          </CardContent>
        </CardActionArea>
      </Box>
    </div>
  );
};

export default Cars;
