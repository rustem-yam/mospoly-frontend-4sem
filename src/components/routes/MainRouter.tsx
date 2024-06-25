import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import { DYNAMIC_PAGINATION_ROUTE, PDF_GENERATOR_ROUTE, WEATHER_ROUTE } from "./configs";
import PdfGeneratorPage from "../pages/PdfGeneratorPage/PdfGeneratorPage";
import DynamicPaginationPage from "../pages/DynamicPaginationPage/DynamicPaginationPage";
import WeatherPage from "../pages/WeatherPage/WeatherPage";

const MainRouter = () => {
  const basedPaths: RouteObject[] = [
    { path: PDF_GENERATOR_ROUTE, element: <PdfGeneratorPage /> },
    { path: DYNAMIC_PAGINATION_ROUTE, element: <DynamicPaginationPage /> },
    { path: WEATHER_ROUTE, element: <WeatherPage /> },
    { path: "*", element: <Navigate to={"/mospoly-frontend-sem4"} replace /> },
  ];

  return useRoutes(basedPaths);
};

export default MainRouter;
