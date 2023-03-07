// import {BrowserRouter, Routes, Route} from "react-router-dom"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css';
import Home from "./Pages/Home.jsx"
import Registration from "./Pages/Registration.jsx"
import Agenda from "./Pages/Agenda"
import Call from "./Pages/Call"
import Contact from "./Pages/Contact"
import Speakers from  "./Pages/Speakers"
import Travel from "./Pages/Travel"
import Formater from "./components/Formater";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Formater />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/reg",
        element: <Registration />
      },
      {
        path: "/Agenda",
        element: <Agenda />
      },
      {
        path: "/Call",
        element: <Call />
      },
      {
        path: "/Contact",
        element: <Contact />
      },
      {
        path: "/Speakers",
        element: <Speakers />
      },
      {
        path: "/Travel",
        element: <Travel />
      }
    ]
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
