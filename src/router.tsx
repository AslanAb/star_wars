import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import { GeneralPage, ErrorPage, PeoplePage, PlanetsPage, StarshipsPage, PersonPage, PlanetPage, StarshipPage, MainPage } from "./routes/index";
const router = createBrowserRouter([
  {
    path: "/",
    element: <GeneralPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path: "/planets",
        element: <PlanetsPage />
      },
      {
        path: "/starships",
        element: <StarshipsPage />
      },
      {
        path: "/people/:personId",
        element: <PersonPage />
      },
      {
        path: "/planets/:planetId",
        element: <PlanetPage />
      },
      {
        path: "/starships/:starshipId",
        element: <StarshipPage />
      },
      {
        path: "/people",
        element: <PeoplePage />
      },
    ]
  }
]);
export default router;
