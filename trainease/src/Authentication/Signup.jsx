import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Card className="w-fit p-5 my-10" color="transparent" shadow>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input color="blue" size="lg" label="UserID" />
            <Input color="blue" size="lg" label="Name" />
            <Input color="blue" size="lg" label="Email" />
            <Input type="date" color="blue" size="lg" label="DOB" />
            <Input color="blue" type="password" size="lg" label="Password" />
          </div>
          <Checkbox color="blue"
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button color="blue" className="mt-6" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/login" className="font-bold text-blue-500">
              Login
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
