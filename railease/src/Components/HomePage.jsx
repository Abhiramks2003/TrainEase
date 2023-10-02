import { useState, useEffect, useId } from "react";
import axios from "axios";
import { NavbarDefault } from "./Navbar";
import "../App.css";
import TrainDetails from "./TrainDetails";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import { BiTransferAlt } from "react-icons/bi";

const HomePage = () => {
  const pnr = useId();
  const curr = new Date();
  const currentDate = curr.toISOString().split("T")[0];
  const maxDate = new Date();
  maxDate.setMonth(curr.getMonth() + 4);
  const maxDateFormatted = maxDate.toISOString().split("T")[0];

  const [searchDetails, setSearchDetails] = useState({
    from: "",
    to: "",
    date: null,
  });

  const swapFromAndTo = () => {
    setSearchDetails({
      ...searchDetails,
      from: searchDetails.to,
      to: searchDetails.from,
    });
  };

  const getAllTrains = async () => {
    const res = await axios.get("http://localhost:5000/api/train/available");
    console.log(res.data);
  };

  return (
    <div>
      <NavbarDefault />
      <div className="flex justify-center my-5">
        <Card className=" w-fit">
          <CardBody className="w-full p-4">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Search Trains
            </Typography>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(searchDetails);
                getAllTrains();
                console.log(pnr);
              }}
            >
              <div className="flex flex-wrap sm:flex-nowrap gap-4 my-4 w-fit items-center">
                <Input
                  color="blue"
                  label="From"
                  required
                  value={searchDetails.from}
                  onChange={(e) =>
                    setSearchDetails({
                      ...searchDetails,
                      from: e.target.value.toUpperCase(),
                    })
                  }
                />
                <BiTransferAlt
                  type="button"
                  size={80}
                  onClick={swapFromAndTo}
                  className="border-2 cursor-pointer rounded-full text-blue-500 border-blue-500 h-full p-1 "
                />
                <Input
                  color="blue"
                  label="To"
                  required
                  value={searchDetails.to}
                  onChange={(e) =>
                    setSearchDetails({
                      ...searchDetails,
                      to: e.target.value.toUpperCase(),
                    })
                  }
                />
                <Input
                  type="date"
                  color="blue"
                  label="Date"
                  required
                  min={currentDate}
                  max={maxDateFormatted}
                  value={searchDetails.date}
                  onChange={(e) =>
                    setSearchDetails({ ...searchDetails, date: e.target.value })
                  }
                />
              </div>
              <Button type="submit" color="blue">
                Search
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
      <div></div>
      <TrainDetails />
    </div>
  );
};

export default HomePage;
