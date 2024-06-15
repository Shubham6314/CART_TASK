import { Typography, Box, Divider } from "@mui/material";
const NavBar = () => {
  return (
    <>
      <Typography variant="h5">Your Cart</Typography>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography variant="h6">Continue Shopping</Typography>
        <Typography variant="subtitle1">Items</Typography>
        <Typography variant="subtitle1">
          Need Help? Call(800)946-3482
        </Typography>
      </Box>
      <Divider></Divider>
    </>
  );
};
export default NavBar;
