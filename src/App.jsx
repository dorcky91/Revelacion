import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from "./pages/Inicio.jsx";
import Reveal from "./pages/Reveal.jsx";
import Error from "./pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/", // Ruta raíz
    element: <Inicio />, // Componente que se renderiza
  },
  {
    path: "/reveal", // Ruta /reveal
    element: <Reveal />, // Componente Reveal
  },
  {
    path: "*", // Ruta comodín para manejar errores
    element: <Error />, // Componente para mostrar en caso de error
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
