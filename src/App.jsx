import React from "react";
import "./App.css";
import { Auth } from "./components/auth";
import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DashboardPage from './components/DashboardPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Auth />,
    },
    {
      path: "/DashboardPage",
      element: <DashboardPage />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
    );
  }

 export default App;
  
    