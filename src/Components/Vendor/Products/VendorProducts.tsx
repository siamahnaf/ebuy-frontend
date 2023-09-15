import { Box, ButtonBase } from "@mui/material";

//Products
import Products from "Components/Common/Products";

//Styles
import styles from "Styles/Vendor/Vendors.styles";

//Data
import ProductsData from "Data/Shop/Products.data";

const VendorProducts = () => {
    return (
        <Box>
            <Products Data={ProductsData} />
            <Box sx={styles.LoadMore}>
                <ButtonBase>
                    Load More
                </ButtonBase>
            </Box>
        </Box>
    );
};
export default VendorProducts;