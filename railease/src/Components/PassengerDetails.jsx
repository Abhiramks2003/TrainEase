import React from "react";
import { Card, CardBody, Typography, Input } from "@material-tailwind/react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { NavbarDefault } from "./Navbar";
import { FaTrainSubway } from "react-icons/fa6";
import "../assets/passengerdetails.css";

const PassengerDetails = ({
  trainNo = 12076,
  trainName = "Janshadabhdi",
  deptTime = "12:00",
  fromStation = "TVC",
  destStation = "TIR",
  arrivalTime = "12:00",
  clas = "Second Seating (2S) | General",
}) => {
  const countries = [
    "India",
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "Brazil",
    "South Africa",
    "China",
    "Russia",
    "Mexico",
    "Italy",
    "Spain",
  ];
  return (
    <div className="bg-blue-gray-50 h-screen">
      <NavbarDefault />
      <div className="flex justify-center my-3  w-full items-center">
        <Card className="w-4/5 px-4 py-2">
          <div className="heading text-lg my-1 text-gray-500">
            {trainNo}{" "}
            <span className="text-blue-500 font-semibold"> {trainName}</span>
          </div>
          <div className="flex justify-between px-5 flex-row">
            <div>
              {deptTime} {"   "}
              {fromStation} {"  "}
            </div>
            <FaTrainSubway className="text-blue-500" />
            <div>
              {arrivalTime} {"   "}
              {destStation} {"  "}
            </div>
          </div>
          <div className="flex text-md justify-center self-center px-2 py-1 text-black font-bold bg-gray-300 rounded-sm w-fit">
            {clas}
          </div>
          <Typography variant="h5" className="my-2" color="black">
            Passenger Details
          </Typography>
          <form className="form flex flex-wrap gap-2 justify-between">
            <input
              placeholder="Name"
              type="text"
              name="text"
              className="input "
            />
            <input
              placeholder="Age"
              type="number"
              name="text"
              className="input "
              style={{ width: 100 }}
            />
            <div class="gender-option">
              <select
                id="gender"
                style={{ width: 150 }}
                className="gender-dropdown"
              >
                <option value="" disabled selected>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="gender-option">
              <select
                class="gender-dropdown"
                name="country"
                color="blue"
                label="Country"
              >
                {countries.map((country) => (
                  <option value={country}>{country}</option>
                ))}
              </select>
            </div>
            <div className="gender-option">
              <select color="blue" label="Preferences" class="gender-dropdown">
                <option>No preference</option>
                <option>Lower</option>
                <option>Upper</option>
                <option>Middle</option>
                <option>Side lower</option>
                <option>Side Upper</option>
              </select>
            </div>
            <div className="contact flex flex-col w-full gap-2">
              <Typography variant="h5" color="black">
                Contact Details
              </Typography>
              <div className="flex my-4 flex-row justify-between">
                <div className="flex gap-1">
                  <select
                    id="countryCode"
                    name="countryCode"
                    class="input only:placeholder:country-code-select"
                    style={{ width: 125 }}
                  >
                    <option value="+1">(+1)United States </option>
                    <option value="+44">(+44)United Kingdom </option>
                    <option value="+91" selected>
                      (+91)India
                    </option>
                    <option value="+33">(+33)France </option>
                    <option value="+81">(+81)Japan </option>
                  </select>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="input"
                    placeholder="Enter your phone number"
                    required
                  ></input>
                </div>

                <button class="submit-button">Submit</button>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default PassengerDetails;
