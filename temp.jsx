import { Card, Typography } from "@material-tailwind/react";
import { FaTrainSubway } from "react-icons/fa6";
import { useRef } from "react";
import { NavbarDefault } from "./Navbar";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { FaPrint } from "react-icons/fa6";

const Ticket = ({
  trainName = "JanShaatabdi Express",
  trainNo = "12076",
  pnrNo = "4567891234",
  deptTime = "12:00",
  arrivalTime = "13:00",
  bkngSts = { status: "CNF", coach: "D2", bearth: "LB", seat: "12" },
  cntSts = { status: "CNF", coach: "D2", bearth: "LB", seat: "12" },
  passName = "Abhiram",
  passAge = "21",
  passGen = "Male",
  noAdults = "1",
  noChild = "0",
  clas = "Second Sitting (2S)",
  type = "Tatkal",
  fromStation = "Trivandrum Central (TVC)",
  toStation = "Kollam Junction (QLN)",
}) => {
  // const dataObject = {
  //   name: "Abhiram",
  //   email: "johndoe@example.com",
  // };
  //d-flex flex-wrap align-items-center justify-content-between border border-bottom p-2
  //const qrData = JSON.stringify(dataObject);

  const divtoCap = useRef(null);
  const takeScreenShot = () => {
    html2canvas(divtoCap.current).then((canvas) => {
      canvas.toBlob((blob) => {
        saveAs(blob, "ticket.png");
      });
    });
  };

  return (
    <div className="bg-blue-gray-200 min-h-screen">
      <NavbarDefault />
      <div className="flex justify-center items-center h-100 py-3 w-screen px-4">
        <Card ref={divtoCap} className=" w-5/6  bg-gray-50  px-6 py-4">
          <div className="flex ">
            <div className="flex font-semibold">
              {trainName.toUpperCase()} ({trainNo})
            </div>
            <div className="flex ml-auto text-orange-600 font-semibold">
              {`PNR: ${pnrNo}`}
              <FaPrint className="self-center mx-2" onClick={takeScreenShot} />
            </div>
          </div>
          <div className="flex gap-2 font-semibold justify-start">
            {trainNo} {"  "}
            <span className="text-blue-500">{trainName}</span>
          </div>
          <div className="flex justify-between px-5 font-semibold text-sm flex-row">
            <div>
              {deptTime} {"   "}
              {fromStation} {"  "}
            </div>
            <FaTrainSubway className="text-blue-500" />
            <div>
              {arrivalTime} {"   "}
              {toStation} {"  "}
            </div>
          </div>
          <div className="flex text-md justify-center self-center px-2 py-1 text-black font-bold bg-gray-200 rounded-sm w-fit">
            {clas} | {type}
          </div>
          <div className="flex justify-between ">
            <div className="flex bg-green-100 text-green-500 w-fit px-1 py-1">
              STATUS :{" "}
              <span className="text-green-700 font-bold">
                {bkngSts.status === "CNF" ? `BOOKED` : `NOT CONFIRMED`}
              </span>
            </div>
            <div className="flex bg-gray-200 p-1 px-1 font-semibold rounded-sm">
              Boarding Station :{fromStation}
            </div>
          </div>
          <div className="flex justify-center rounded-sm bg-gray-200 w-fit self-center p-1">
            {noAdults} Adult | {noChild} Child |{"  "}
            {clas} {"  "}| {type}
          </div>
          <hr className="mt-3 text-gray-600" />
          <div className="flex flex-col">
            <Typography variant="h6" className="my-2" color="gray">
              Passenger Infromation
            </Typography>
            <div className="flex gap-2">
              <div className="font-semibold mx-3 text-gray-500">1</div>
              <div className="flex flex-col w-full">
                <div className="flex font-semibold gap-40 mb-3">
                  <div className="flex">
                    {passName} {"  "}
                  </div>
                  <div className="text-gray-500">
                    {passAge}
                    {" | "}
                    {passGen}
                  </div>
                </div>
                {/* table */}
                <div className="flex gap-3 w-full">
                  <div className="flex-1">Booking Status</div>
                  <div className="flex-1">Coach</div>
                  <div className="flex-1">Berth/WL No</div>
                  <div className="flex-1">Berth Type</div>
                  <div className="flex-1">Current Status</div>
                </div>
                <div className="flex gap-3 w-full font-semibold">
                  <div className="flex-1">{`${bkngSts.status}/${bkngSts.coach}/${bkngSts.seat}/${bkngSts.bearth}`}</div>
                  <div className="flex-1">{bkngSts.coach}</div>
                  <div className="flex-1">{bkngSts.seat}</div>
                  <div className="flex-1">{bkngSts.bearth}</div>
                  <div className="flex-1 text-green-500">{`${cntSts.status}/${cntSts.coach}/${cntSts.seat}/${cntSts.bearth}`}</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Ticket;
