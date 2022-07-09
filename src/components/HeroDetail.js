import React from "react";
import { ArrowLeft } from "react-bootstrap-icons";
import BarPesanan from "./BarPesanan";

function HeroDetail() {
  return (
    <div className="Hero">
      <div class="main" style={{ background: "#f1f3ff", height: "200px" }}>
        <div class=" align-items-center ">
          <div style={{ marginLeft: "160px", marginTop: "20px" }}>
            <div class=" d-flex align-items-center">
              <p style={{ fontWeight: "bold" }}>
                <ArrowLeft size={20} /> Pembayaran
              </p>

              <div class=" d-flex" style={{ marginLeft: "40rem" }}>
                <p class="border-dark" style={{ borderRadius: "50%" }}>
                  1
                </p>
                <p class="mx-2 ">Pilih Metode</p>
                <p>2 </p>
                <p class="mx-2">Bayar</p>
                <p>3 </p>
                <p class="mx-2">Tiket</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BarPesanan />
    </div>
  );
}

export default HeroDetail;
