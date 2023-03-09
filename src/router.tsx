import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import { GeneralPage, ErrorPage, PeoplePage, PlanetsPage, StarshipsPage, PersonPage, PlanetPage, StarshipPage } from "./routes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <GeneralPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <PeoplePage />
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
    ]
  }
]);
export default router;
