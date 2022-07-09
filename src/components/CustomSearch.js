import * as React from "react";
import { useContext, useState, useEffect } from "react";
import Cars from "./Cars";
import Card from "./Card";
import axios from "axios";
import { Box, Grid, Paper, styled, TextField, FormControl, InputLabel, NativeSelect, Button } from "@material-ui/core";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  background: "none",
}));

export default function FilterCard() {
  // const {query} = useContext(CarContext)

  const [userData, setUserData] = React.useState([]);
  const [category, setCategory] = React.useState("");

  React.useEffect(() => {
    async function getData() {
      const request = await axios.get(`https://rent-cars-api.herokuapp.com/customer/car/`);
      const response = await request;
      setUserData(response.data);
    }
    getData();
  }, []);

  const handleSearch = () => {
    const newData = userData.filter((x) => x.category.toLowerCase() == category);
    setUserData(newData);
  };

  return (
    <div classcategory="FilterCard" style={{ background: "white", position: "relative", display: "flex", justifyContent: "center" }}>
      <Box
        container
        boxShadow={4}
        borderRadius={8}
        sx={{ flexGrow: 1 }}
        style={{ borderRadius: "8px", boxShadow: "0px 2px 10px -1px #444444", position: "absolute", top: "-56px", background: "white", width: "80%", zIndex: 1000, display: "flex", alignItems: "center", padding: "24px" }}
      >
        <Grid elevation={0} container spacing={1}>
          <Grid pt={4} elevation={0} item xs>
            <Item elevation={0}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Tipe Driver
                  </InputLabel>

                  <NativeSelect
                    defaultValue={30}
                    inputProps={{
                      category: "age",
                      id: "uncontrolled-native",
                    }}
                    // onChange={(e) => setQuery(e.target.value.toLowerCase())}
                    onChange={(e) => setCategory(e.target.value.toLowerCase())}
                  >
                    <option>-select-</option>
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                    <option value="large">large</option>
                  </NativeSelect>
                </FormControl>
              </Box>
            </Item>
          </Grid>
          <Grid item xs>
            <Item elevation={0}>
              <TextField
                fullWidth
                id="date"
                label="Tanggal"
                type="date"
                defaultValue={new Date()}
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Item>
          </Grid>
          <Grid item xs>
            <Item elevation={0}>
              <TextField
                fullWidth
                id="time"
                label="Waktu Jemput/Ambil"
                type="time"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                sx={{ width: 220 }}
              />
            </Item>
          </Grid>
          <Grid item xs>
            <Item elevation={0}>
              <TextField
                fullWidth
                id="outlined-number"
                defaultValue="0"
                label="Jumlah Penumpang (optional)"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Item>
          </Grid>
          <Grid item>
            <Item elevation={0}>
              <Button variant="contained" style={{ background: "#5CB85F" }} onClick={() => handleSearch()}>
                Cari Mobil
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
      {/* {
            <Card userData = {userData}/>
        } */}
    </div>
  );
}
