import { Container, Box } from "@mui/material";

//Layout
import Layout from "Layout";

//Breadcrumb
import Breadcrumb from "Utilis/Breadcrumb";

//Components
import ProductInfo from "Components/Product/ProductInfo";
import ProductDetails from "Components/Product/ProductDetails";
import RelatedProducts from "Components/Product/RelatedProducts";

//Subscribe and Clip
import Subscribe from "Components/Common/Subscribe";
import Clip from "Components/Common/Clip";

//Data
import singleData from "Data/Product/product.data";

const SingleProduct = () => {
    return (
        <Layout title="Products - Best fashion marketplace" active="product">
            <Box sx={{ mt: { xxxl: "110px", xxl: "100px", xl: "90px", smd: "80px", xxs: "70px" } }}>
                <Breadcrumb
                    category={singleData.category.name}
                    subCategory={singleData.category.subCategory.name}
                    title={singleData.name}
                />
                <Container maxWidth="xxxl" disableGutters>
                    <ProductInfo />
                    <ProductDetails />
                    <RelatedProducts />
                    <Subscribe />
                    <Clip />
                </Container>
            </Box>
        </Layout>
    );
};
export default SingleProduct;