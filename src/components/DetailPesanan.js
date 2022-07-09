import React, { useState, useEffect } from "react";
//import { PeopleOutline, SettingsOutlined, CalendarTodayOutlined } from "@material-ui/icons";
import { makeStyles, Button, CardActionArea, Card, CardContent, Typography } from "@material-ui/core";
import axios from "axios";
import { useParams } from "react-router";
import HeroDetail from "./HeroDetail";

const useStyles = makeStyles((theme) => ({
  detailCard: {
    background: "white",
    padding: "100px 0",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
}));

export default function DetailPesanan() {
  const { carId } = useParams();

  const [item, setItem] = useState();

  const getCarData = async () => {
    const res = await axios.get(`https://rent-cars-api.herokuapp.com/customer/car/${carId}`);

    setItem(res.data);
  };

  useEffect(() => {
    getCarData();
  }, [item]);

  const classes = useStyles();
  return (
    <div>
      <HeroDetail />

      <div className={classes.detailCard}>
        <div style={{ width: "80%", display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: "20px" }}>
          <Card item={true} style={{ width: "54%", marginBottom: "10px" }}>
            <CardActionArea>
              <CardContent>
                <Typography variant="p" component="div" style={{ fontWeight: "bold", paddingBottom: "8px" }}>
                  Pilih Bank Transfer
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ paddingBottom: "8px" }}>
                  Kamu bisa membayar dengan transfer melalui ATM, internet Banking, atau Mobile Banking
                </Typography>
                {/* pilihan bank */}
                <Typography style={{ display: "flex" }}>
                  <Button variant="outlined" style={{ fontSize: "12px", marginBottom: "8px"}}>
                    BCA
                  </Button>
                  <Typography style={{ marginLeft: "20px", marginTop: "8px", fontSize: "12px" }}>BCA Transfer</Typography>
                </Typography>
                <Typography style={{ display: "flex" }}>
                  <Button variant="outlined" style={{ fontSize: "12px", marginBottom: "8px"}}>
                    BNI
                  </Button>
                  <Typography style={{ marginLeft: "20px", marginTop: "8px", fontSize: "12px" }}>BNI Transfer</Typography>
                </Typography>
                <Typography style={{ display: "flex" }}>
                  <Button variant="outlined" style={{ fontSize: "12px" }}>
                    Mandiri
                  </Button>
                  <Typography style={{ marginLeft: "20px", marginTop: "8px", fontSize: "12px" }}>Mandiri Transfer</Typography>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  );
}
