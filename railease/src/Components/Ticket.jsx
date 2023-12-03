import { useNavigate } from "react-router-dom";
import { NavbarDefault } from "./Navbar";
import axios from "axios";
const Ticket = () => {
  // const dataObject = {
  //   name: "Abhiram",
  //   email: "johndoe@example.com",
  // };
  //d-flex flex-wrap align-items-center justify-content-between border border-bottom p-2
  //const qrData = JSON.stringify(dataObject);
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      let token;
      let url = "http://localhost:5000/api/train/passenger";
      let headers = {
        "Content-Type": "application/json",
        "auth-token": token,
      };
      let body = {
        data: ["A", "B", "C"],
      };
      let res = await axios.post(url, body, {
        headers: headers,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };

  return (
    <div>
      <NavbarDefault />
      <button onClick={handleClick} className="bg-blue-500 p-2">
        Available
      </button>
    </div>
  );
};

export default Ticket;
