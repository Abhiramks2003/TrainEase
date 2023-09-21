import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex justify-center my-10">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input color="blue" label="Email" size="lg" />
          <Input color="blue" label="Password" size="lg" />
          <div className="-ml-2.5">
            <Checkbox color="blue" label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button color="blue" variant="gradient" fullWidth>
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Link to="/signup" className="text-blue-500 font-bold">Signup</Link>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}