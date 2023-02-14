import { ComponentType, lazy, Suspense } from "react";
import { Outlet, createBrowserRouter, Navigate } from "react-router-dom";
import Loading from "../components/Loading";
import { Grid } from "@mui/material";
import { Navbar, Sidebar } from "../components";
import videoApi from "../api/videoApi";

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
const ChannelDetailPage = Loadable(
  lazy(() => import("../components/ChannelDetail"))
);
const VideoDetailPage = Loadable(
  lazy(() => import("../components/VideoDetail"))
);
const SearchFeedPage = Loadable(lazy(() => import("../components/SearchFeed")));

export default createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/New" />,
      },
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
      {
        path: "/channel/:channelId",
        element: <ChannelDetailPage />,
        loader: async ({ params }) => {
          const res = await videoApi.getChannelDetail({
            id: params.channelId as string,
          });
          const channelVideo = await videoApi.searchVideo({
            channelId: params.channelId,
          });

          return { channelInfor: res.data, channelVideo: channelVideo.data };
        },
      },
      {
        path: "/video/:videoId",
        element: <VideoDetailPage />,
        loader: async ({ params }) => {
          const res = await videoApi.getVideoDetail({
            id: params.videoId as string,
          });

          const playlist = await videoApi.searchVideo({ q: "New" });

          return { searchList: res.data, playlist: playlist.data };
        },
      },
      {
        path: "/search/:key",
        element: <SearchFeedPage />,
        loader: async ({ params }) => {
          const res = await videoApi.searchVideo({
            q: params.key as string,
          });

          return res.data;
        },
      },
    ],
  },
]);
