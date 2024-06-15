import { styled, Box, Typography } from "@mui/material";
export const Wrapper = styled(Box)(() => ({
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
}));

export const MiniWrapper = styled(Box)(() => ({
  height: "100vh",
  width: "80%",
}));

export const ProductsWrapper = styled(Box)(() => ({
  height: "50%",
  width: "65%",
  display: "flex",
  marginTop: "10px",
  flexDirection: "column",
  gap: "10px",
}));
export const FirstProductBox = styled(Box)(() => ({
  height: "40%",
  width: "100%",
  //   border: "1px solid ",
}));
export const CheckOutWrapper = styled(Box)(() => ({
  height: "75%",
  width: "33%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
}));
export const CheckOutBtn = styled(Box)(() => ({
  height: "40px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "700",
  backgroundColor: "#ffc400",
  color: "black",
}));
export const SubmitBtn = styled(Box)(() => ({
  height: "40px",
  width: "40%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "600",
  backgroundColor: "black",
  color: "white",
  borderRadius: "5px",
}));
export const DiscountText = styled(Typography)(() => ({
  color: "red",
}));

export const ShippingText = styled(Typography)(() => ({
  color: "green",
}));
