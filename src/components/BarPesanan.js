import React from "react";
import { Box, Grid, InputLabel } from "@material-ui/core";

export default function BarPesanan() {
  return (
    <div className="Search" boxShadow={4} style={{ display: "flex", position: "relative", justifyContent: "center", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)" }}>
      <Box
        boxShadow={4}
        sx={{ flexGrow: 1 }}
        style={{ position: "absolute", top: "-56px", background: "white", width: "80%", display: "", padding: "10px", margin: "auto", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)", borderRadius: "4px" }}
      >
        <Grid item xs style={{ marginLeft: "10px", marginTop: "10px", display: "flex", fontWeight: "bold" }}>
          Detail Pesananmu
        </Grid>
        <Grid item xs style={{ display: "flex" }}>
          <Grid item xs style={{ margin: "10px" }}>
            <InputLabel style={{ marginBottom: "10px", fontSize: "small", color: "black" }}>Tipe Driver</InputLabel>
            <InputLabel style={{ justifyContent: "flex-start", marginBottom: "10px", fontSize: "small" }}>Dengan Dopir</InputLabel>
          </Grid>
          <Grid item xs style={{ margin: "10px" }}>
            <InputLabel style={{ marginBottom: "10px", fontSize: "small", color: "black" }}>Tanggal</InputLabel>
            <InputLabel style={{ justifyContent: "flex-start", marginBottom: "10px", fontSize: "small" }}>27 Maret 2022</InputLabel>
          </Grid>
          <Grid item xs style={{ margin: "10px" }}>
            <InputLabel style={{ marginBottom: "10px", fontSize: "small", color: "black" }}>Waktu Jemput/Antar</InputLabel>
            <InputLabel style={{ justifyContent: "flex-start", marginBottom: "10px", fontSize: "small" }}>10.00 WIB</InputLabel>
          </Grid>
          <Grid item xs style={{ margin: "10px" }}>
            <InputLabel style={{ marginBottom: "10px", fontSize: "small", color: "black" }}>Jumlah Penumpang (opsional)</InputLabel>
            <InputLabel style={{ justifyContent: "flex-start", marginBottom: "10px", fontSize: "small" }}>-</InputLabel>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
