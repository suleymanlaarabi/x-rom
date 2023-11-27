import { createBrowserRouter } from "react-router-dom";
import Root from "../components/views/Root";
import Home from "../components/views/Home/Home";
import Rom from "../components/views/Rom/Rom";
import Emulator from "../components/views/Emulator/Emulator";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "emulator/:name",
        element: <Emulator />,
      },
      {
        path: "rom/:name",
        element: <Rom />,
      },
    ],
  },
]);
