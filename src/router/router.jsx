import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Kitchen from "../pages/Kitchen";
import History from "../pages/History";
import Traditions from "../pages/Traditions";
import Holidays from "../pages/Holidays";
import About from "../pages/About.jsx";
import Language from "../pages/Language.jsx";
import Modern from "../pages/Modern.jsx";

function StubPage({ title }) {
  return <div style={{ padding: "40px", fontSize: "32px" }}>{title}</div>;
}

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/history", element: <History /> },
  { path: "/language", element: <Language /> },
  { path: "/modern", element: <Modern /> },
  { path: "/holidays", element: <Holidays /> },
  { path: "/traditions", element: <Traditions /> },
  { path: "/kitchen", element: <Kitchen /> },
  { path: "/about", element: <About /> },
]);