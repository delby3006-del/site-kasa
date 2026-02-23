import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import Home from "./pages/Page_accueil.jsx";
import About from "./pages/Page_a_propos.jsx";
import Housing from "./pages/Page_logement";
import NotFound from "./pages/Page_non_trouvee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "logement/:id",
        element: <Housing />,
      },
    ],
  },
]);

export default router;
