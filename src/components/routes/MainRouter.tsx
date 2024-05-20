import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import { DYNAMIC_PAGINATION_ROUTE, PDF_GENERATOR_ROUTE } from "./configs";
import PdfGeneratorPage from "../pages/PdfGeneratorPage/PdfGeneratorPage";
import DynamicPaginationPage from "../pages/DynamicPaginationPage/DynamicPaginationPage";

const MainRouter = () => {
  const basedPaths: RouteObject[] = [
    { path: PDF_GENERATOR_ROUTE, element: <PdfGeneratorPage /> },
    { path: DYNAMIC_PAGINATION_ROUTE, element: <DynamicPaginationPage /> },
    { path: "*", element: <Navigate to={"/"} replace /> },
  ];

  return useRoutes(basedPaths);
};

export default MainRouter;
