import { Button, Typography, Box, Divider } from "@mui/material";
import {
  CheckOutWrapper,
  CheckOutBtn,
  SubmitBtn,
  DiscountText,
  ShippingText,
} from "./CartStyled";
const CheckOut = ({ productData, setProductData }) => {
  const onAddingTotal = () => {
    const arr = [];
    let total = 0;
    productData.map((products) => {
      const a = Number(products.price) * products.quantity;
      arr.push(a);
    });
    console.log(arr, "ARR");
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i], "I");
      total += arr[i];
    }
    return total;
  };

  return (
    <>
      <CheckOutWrapper>
        <Typography variant="subtitle2">Enter Promo Code</Typography>
        <Box display={"flex"} justifyContent={"space-between"}>
          <input type="text" name="" id="" placeholder="Promo Code" />
          <SubmitBtn>Submit</SubmitBtn>
        </Box>
        <Typography variant="subtitle2">
          <span style={{ color: "#ffcf33" }}>Sign in</span> to your account to
          see available Rewards
        </Typography>
        <Typography variant="h6">Promotions</Typography>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant="subtitle1">
            Free Shipping on Orders $39+
          </Typography>
          <ShippingText variant="subtitle1">-$18.97</ShippingText>
        </Box>

        <Divider></Divider>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant="subtitle1">Subtotal</Typography>
          <Typography variant="subtitle1">${onAddingTotal()}</Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant="subtitle1">Shipping Cost</Typography>
          <Typography variant="subtitle1">$18.97</Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <DiscountText variant="subtitle1">Shipping Discount</DiscountText>
          <DiscountText variant="subtitle1">- $18.97</DiscountText>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant="subtitle1">Estimated Sales Tax</Typography>
          <Typography variant="subtitle1">TBD</Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant="subtitle1">Estimated Total</Typography>
          <Typography variant="subtitle1">${onAddingTotal()}</Typography>
        </Box>
        <CheckOutBtn> CHECKOUT</CheckOutBtn>
      </CheckOutWrapper>
    </>
  );
};
export default CheckOut;
