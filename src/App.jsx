import React from "react";
import "./App.css";
import { Auth } from "./components/auth";
import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DashboardPage from './components/DashboardPage';
import Page1 from './components/alternate/page1';
import Page2 from './components/alternate/page2';
import Sidebar1 from './components/alternate/sidebar1';
import Sidebar2 from './components/alternate/sidebar2';
import Sidebar3 from './components/alternate/sidebar3';
import Sidebar4 from './components/alternate/sidebar4';
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
    {
      path: "/sidebar1",
      element: <Sidebar1 />,
    },
    {
      path: "/sidebar2",
      element: <Sidebar2 />,
    },
    {
      path: "/sidebar3",
      element: <Sidebar3 />,
    },
    {
      path: "/sidebar4",
      element: <Sidebar4 />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
    );

  }

 export default App;
  
    