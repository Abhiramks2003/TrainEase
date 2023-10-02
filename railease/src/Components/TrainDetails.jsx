import "../App.css";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { MdTrain } from "react-icons/md";

const TrainDetails = () => {
  return (
    <div className="flex flex-col items-center">
      <Typography variant="h2" color="blue-gray">
        Trains
      </Typography>
      <Card className="mt-3 w-full">
        <CardHeader className="w-full p-2 -ml-0 mt-2">
          <div className="flex gap-4">
            <Typography variant="h4">16349</Typography>
            <Typography variant="h4" color="blue">
              RAJYA RANI EXP
            </Typography>
          </div>
          <div className="flex justify-around items-center">
            <div className="flex gap-2 text-black">
              <Typography variant="h5">20:50</Typography>
              <Typography variant="h5">KCVL</Typography>
            </div>
            <div className="flex flex-col items-center mb-2">
              <MdTrain size={25} className=" text-blue-500" />
              <Typography variant="h6">07h 33m</Typography>
            </div>
            <div className="flex gap-2 text-black">
              <Typography variant="h5">04:23</Typography>
              <Typography variant="h5">AAM</Typography>
            </div>
          </div>
        </CardHeader>
        <CardBody className="flex gap-4 overflow-x-scroll flex-nowrap w-full class-div">
          <Button type="button" data-te-ripple-init className="text-black flex flex-col justify-center items-center bg-orange-100 border-orange-600 border-2 rounded-md">
            <Typography>SL &nbsp; &#8377;225</Typography>
            <Typography className="text-orange-800">WL10</Typography>
          </Button>
          <Button className="text-black flex flex-col justify-center items-center bg-green-100 border-green-300 border-2 rounded-md">
            <Typography>3A &nbsp; &#8377;620</Typography>
            <Typography className="text-green-600">AVL 0224</Typography>
          </Button>
          <Button className="text-black flex flex-col justify-center items-center bg-green-100 border-green-300 border-2 rounded-md">
            <Typography>2A &nbsp; &#8377;865</Typography>
            <Typography className="text-green-600">AVL 0224</Typography>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default TrainDetails;
