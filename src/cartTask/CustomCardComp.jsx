import { Box, Paper, Typography } from "@mui/material";
import { FirstProductBox } from "./CartStyled";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const CustomCardComp = ({ product, productData, setProductData }) => {
  const onHandleChange = (e, id) => {
    if (e.target.value <= 0) {
      return onHandleRemove(id);
    }
    const productsData = productData.map((products) => {
      if (products.id === product.id) {
        return { ...products, quantity: e.target.value };
      } else {
        return products;
      }
    });
    setProductData(productsData);
  };
  const onHandleRemove = (id) => {
    const removeItem = productData.filter((x) => x.id !== id);
    setProductData(removeItem);
  };

  return (
    <Paper>
      <FirstProductBox>
        <Typography variant="subtitle1">{product.name}</Typography>
        <Box display={"flex"} justifyContent={"space-around"}>
          <Box
            component={"img"}
            height={"70px"}
            width={"70px"}
            src={product.image}
          />
          <Box>
            <Typography>SKU:{product.sku}</Typography>
            <Typography>{product.stock}</Typography>
          </Box>
          <Box>
            <Typography>{product.each}</Typography>
            <Typography>${product.price}</Typography>
          </Box>
          <Box>
            <Typography>Quantity</Typography>
            <input
              type="number"
              value={product.quantity}
              onChange={(e) => onHandleChange(e, product.id)}
            />
          </Box>
          <Box>
            <Typography>Total</Typography>
            <Typography>${Number(product.price) * product.quantity}</Typography>
          </Box>
          <Box>
            <CloseIcon onClick={() => onHandleRemove(product.id)} />
          </Box>
        </Box>
      </FirstProductBox>
    </Paper>
  );
};
export default CustomCardComp;
