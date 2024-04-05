import React from "react";
import "./App.css";
import { Auth } from "./components/auth";
import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DashboardPage from './components/DashboardPage';
import Page1 from './components/page1';
import Page2 from './components/page2';
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
    {
      path: "/page1",
      element: <Page1 />,
    },
     {
      path: "/page2",
      element: <Page2 />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
    );

  }

 export default App;
  
    