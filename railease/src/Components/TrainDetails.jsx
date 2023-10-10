import "../App.css";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { MdTrain } from "react-icons/md";

const TrainDetails = (props) => {
  const { train } = props;
  const { classes } = train;
  return (
    <div className="flex flex-col items-center">
      <Card className="mt-3 w-full">
        <div className="w-full p-2 -ml-0 mt-2">
          <div className="flex gap-4">
            <Typography variant="h4">{train.trainno}</Typography>
            <Typography variant="h4" color="blue">
              {train.tname}
            </Typography>
          </div>
          <div className="flex justify-around items-center">
            <div className="flex gap-2 text-black">
              <Typography variant="h5">{train.frtime.slice(0, 5)}</Typography>
              <Typography variant="h5">{train.frcode}</Typography>
            </div>
            <div className="flex flex-col items-center mb-2">
              <MdTrain size={25} className=" text-blue-500" />
              <Typography variant="h6">07h 33m</Typography>
            </div>
            <div className="flex gap-2 text-black">
              <Typography variant="h5">{train.totime.slice(0, 5)}</Typography>
              <Typography variant="h5">{train.tocode}</Typography>
            </div>
          </div>
        </div>
        <CardBody className="flex gap-4 overflow-x-scroll flex-nowrap w-full class-div">
          {classes.map((item, index) => (<Button key={index} type="button" data-te-ripple-init className={`text-black flex flex-col justify-center items-center ${item.vacancy === 0 ? "bg-orange-100 border-orange-600" : "bg-green-100 border-green-600"} border-2 rounded-md`}>
            <Typography>{item.cls} &nbsp; &#8377;{item.rate}</Typography>
            <Typography className={item.vacancy === 0 ? 'text-orange-700' : "text-green-700"}>AVAILABLE 0{item.vacancy}</Typography>
          </Button>))}
        </CardBody>
      </Card>
    </div>
  );
};

export default TrainDetails;
