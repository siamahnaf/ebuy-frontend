import { Box } from "@mui/material";

//Section Header
import SectionHeader from "Utilis/SectionHeader";

//Products Ccomponents
import Products from "Components/Common/Products";

//Data
import ProductsData from "Data/Home/Products.data";

const FeaturesProduct = () => {
    return (
        <Box>
            <SectionHeader
                title="Featured"
                abbreviation="Products"
                description="Amazing products added recently in our catalog"
            />
            <Products Data={ProductsData} />
        </Box>
    );
};
export default FeaturesProduct;