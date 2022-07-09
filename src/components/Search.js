import React from "react";
import axios from "axios";
//import Card from "./Card";
import { Box, Grid, Select, TextField, FormControl, InputLabel, Button } from "@material-ui/core";

export default function Search() {
  const [userData, setUserData] = React.useState([]);
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    async function getData() {
      const request = await axios.get(`https://rent-cars-api.herokuapp.com/customer/car/`);
      const response = await request;
      setUserData(response.data);
    }
    getData();
  }, []);

  const handleSearch = () => {
    const newData = userData.filter((x) => x.name.toLowerCase() === name);
    setUserData(newData);
  };

  return (
    <>
      <div className="Search" boxShadow={4} style={{ display: "flex", position: "relative", justifyContent: "center", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)" }}>
        <Box
          container
          boxShadow={4}
          borderRadius={8}
          sx={{ flexGrow: 1 }}
          style={{ borderRadius: "8px", boxShadow: "0px 2px 10px -1px #444444", position: "absolute", top: "-56px", background: "white", width: "80%", zIndex: 1000, display: "flex", alignItems: "center", padding: "24px" }}
        >
          {/* search */}

          <Grid elevation={0} container spacing={1}>
            <Grid item>
              <InputLabel style={{ justifyContent: "flex-start", marginBottom: "10px", fontSize: "small" }}>Jenis Mobil</InputLabel>
              <FormControl size="small" margin="dense" variant="outlined" style={{ borderRadius: 4, width: "200px", borderColor: "#5cb85f" }}>
                <Select
                  defaultValue={30}
                  variant="outlined"
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                  onChange={(e) => setName(e.target.value.toLowerCase())}
                >
                  <option value="APV">APV</option>
                  <option value="Xenia">Xenia</option>
                  <option value="Avanza">Avanza</option>
                  <option value="Ferrari">Ferrari</option>
                  <option value="BMW X1">BMW X1</option>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs>
              <InputLabel style={{ justifyContent: "flex-start", marginBottom: "10px", fontSize: "small" }}>Tanggal</InputLabel>
              <TextField
                fullWidth
                size="small"
                margin="dense"
                color="success"
                variant="outlined"
                id="date"
                type="date"
                defaultValue={new Date()}
                sx={{ width: 200 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

            <Grid item xs>
              <InputLabel style={{ justifyContent: "flex-start", marginBottom: "10px", fontSize: "small" }}>Waktu Jemput/ Ambil</InputLabel>
              <TextField
                fullWidth
                size="small"
                margin="dense"
                variant="outlined"
                id="time"
                type="time"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300,
                }}
                sx={{ width: 220 }}
              />
            </Grid>

            <Grid item xs>
              <InputLabel style={{ justifyContent: "flex-start", marginBottom: "10px", fontSize: "small" }}>Jumlah Penumpang (Optional)</InputLabel>
              <TextField
                fullWidth
                size="small"
                margin="dense"
                variant="outlined"
                id="outlined-number"
                defaultValue="0"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{ input: { color: "yellow" }, label: { color: "blue" } }}
              />
            </Grid>

            <Grid>
              <Button href={`/car`} variant="contained" onClick={() => handleSearch()} style={{ background: "#5cb85f", justifyContent: "center", marginTop: "36px", marginRight: "5px", color: "white" }}>
                Cari Mobil
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
      {/* {<Card userData={userData} />} */}
    </>
  );
}
