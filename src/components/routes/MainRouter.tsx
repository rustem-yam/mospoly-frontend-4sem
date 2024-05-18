import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import { PDF_GENERATOR_ROUTE } from "./configs";
import PdfGeneratorPage from "../pages/PdfGeneratorPage/PdfGeneratorPage";

const MainRouter = () => {
  const basedPaths: RouteObject[] = [
    { path: PDF_GENERATOR_ROUTE, element: <PdfGeneratorPage /> },
    { path: "*", element: <Navigate to={"/"} replace /> },
  ];

  return useRoutes(basedPaths);
};

export default MainRouter;
