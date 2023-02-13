import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Triangle } from "react-loader-spinner";

const WrapperLoading = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "10px",
});

const Loading = () => {
  return (
    <WrapperLoading>
      <Triangle
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        visible={true}
      />
      <Typography variant="body1" color="#20262E">
        Loading...
      </Typography>
    </WrapperLoading>
  );
};

export default Loading;
