import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { Presen } from "./page/Preson/Presen";
import { Home } from "./page/Home/Home";
import { Teacher } from "./page/Teacher/Teacher";
import './app.css'


const Layout = () => {
  return (
    <div className="app ">
      <Outlet />
      
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Presen/> ,
      },
      {
        path: "/home",
        element: <Home/>,
      },
      {
        path: "/teacher/id",
        element: <Teacher/>,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
