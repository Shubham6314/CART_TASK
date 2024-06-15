import "./App.css";
import NavBar from "./cartTask/Navbar";
import Products from "./cartTask/Products";
import CheckOut from "./cartTask/CheckOut";
import { Box } from "@mui/material";
import { Wrapper, MiniWrapper, ProductsWrapper } from "./cartTask/CartStyled";
import { useState } from "react";
import { PRODUCTS_DETAILS } from "./cartTask/Constant";

function App() {
  const [productData, setProductData] = useState(PRODUCTS_DETAILS);
  return (
    <>
      <Wrapper>
        <MiniWrapper>
          <NavBar />
          <Box
            display={"flex"}
            height={"90%"}
            width={"100%"}
            justifyContent={"space-between"}
          >
            <Products
              productData={productData}
              setProductData={setProductData}
            />
            <CheckOut
              productData={productData}
              setProductData={setProductData}
            />
          </Box>
        </MiniWrapper>
      </Wrapper>
    </>
  );
}

export default App;
