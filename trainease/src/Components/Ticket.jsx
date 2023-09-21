import QRCode from "qrcode.react";

import axios from "axios";
import { NavbarDefault } from "./Navbar";

const Ticket = () => {
  const dataObject = {
    name: "Abhiram",
    email: "johndoe@example.com",
  };
  //d-flex flex-wrap align-items-center justify-content-between border border-bottom p-2
  const qrData = JSON.stringify(dataObject);

  const getAllTrains = async () => {
    const res = await axios.get("http://127.0.0.1:5000/api/train_data");
    console.log(res.data);
  };

  return (
    <div>
      <NavbarDefault />
    </div>
  );
};

export default Ticket;
