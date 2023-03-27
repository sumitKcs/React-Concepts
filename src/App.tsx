import "./index.css";
import Accordian from "./Accordian";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SetStateTest from "./SetStateTest";
import AccordianSection from "./AccordianSection";
import Example from "./Example";
import RenderApp from "./RenderApp";
import ReactPhases from "./ReactPhases";
import AsynchronousState from "./AsynchronousState";
import SynchronousState from "./SynchronousState";
import ReactMemo from "./ReactMemo";
import Render from "./Render";
import RenderAppTwo from "./RenderAppTwo";
import RenderAppThree from "./RenderAppThree";
import RenderAppFour from "./RenderAppFour";
import RenderAppFive from "./RenderAppFive";
import ReactMemoReference from "./ReactMemoReference";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SetStateTest />,
    },
    {
      path: "/acc",
      element: <Accordian />,
    },
    {
      path: "/acc-sec",
      element: <AccordianSection />,
    },
    {
      path: "/example",
      element: <Example />,
    },
    {
      path: "/render",
      element: <Render />,
      children: [
        {
          path: "1",
          element: <RenderApp />,
        },
        {
          path: "2",
          element: <RenderAppTwo />,
        },
        {
          path: "3",
          element: <RenderAppThree />,
        },
        {
          path: "4",
          element: <RenderAppFour />,
        },
        {
          path: "5",
          element: <RenderAppFive />,
        },
      ],
    },
    {
      path: "/phase",
      element: <ReactPhases />,
    },
    {
      path: "/async-state",
      element: <AsynchronousState />,
    },
    {
      path: "/sync-state",
      element: <SynchronousState />,
    },
    {
      path: "/memo",
      element: <ReactMemo />,
    },
    {
      path: "/memo-ref",
      element: <ReactMemoReference />,
    },
  ]);

  return (
    <div className="w-screen h-auto  bg-[#353839]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
