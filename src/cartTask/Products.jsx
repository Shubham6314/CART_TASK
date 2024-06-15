import { ProductsWrapper, FirstProductBox } from "./CartStyled";
import CustomCardComp from "./CustomCardComp";
const Products = ({ productData, setProductData }) => {
  return (
    <>
      <ProductsWrapper>
        {productData.map((product) => (
          <CustomCardComp
            product={product}
            setProductData={setProductData}
            productData={productData}
          />
        ))}
      </ProductsWrapper>
    </>
  );
};
export default Products;
