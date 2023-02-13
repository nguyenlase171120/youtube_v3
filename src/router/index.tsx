import { ComponentType, lazy, Suspense } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Loading from "../components/Loading";
import { Grid } from "@mui/material";
import { Navbar, Sidebar } from "../components";
import videoApi from "../api/videoApi";
import Protect from "../components/Protect";

const AuthLayout = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid
        container
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Grid item xs={1.5} height="100%">
          <Sidebar />
        </Grid>

        <Grid item xs={10.5}>
          <Outlet />
        </Grid>
      </Grid>
    </Grid>
  );
};

const Loadable = (Component: ComponentType) => (props: any) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};

const HomePage = Loadable(lazy(() => import("../components/Feed")));
const NotFoundPage = Loadable(lazy(() => import("../components/NotFound")));

export default createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/:type",
        element: <HomePage />,
        loader: async ({ params }) => {
          const res = await videoApi.searchVideo({
            q: params.type as string,
          });
          return res.data;
        },
      },
    ],
  },
]);
