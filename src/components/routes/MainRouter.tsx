import { Navigate, RouteObject, useRoutes } from "react-router-dom";

const MainRouter = () => {
  const basedPaths: RouteObject[] = [
    { path: "*", element: <Navigate to={"/"} replace /> },
  ];

  return useRoutes(basedPaths);
};

export default MainRouter;
