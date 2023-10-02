import { NavbarDefault } from "./Navbar";

const Ticket = () => {
  // const dataObject = {
  //   name: "Abhiram",
  //   email: "johndoe@example.com",
  // };
  //d-flex flex-wrap align-items-center justify-content-between border border-bottom p-2
  //const qrData = JSON.stringify(dataObject);

  return (
    <div>
      <NavbarDefault />
      <button className="bg-blue-500 p-2">
        Available
      </button>
    </div>
  );
};

export default Ticket;
