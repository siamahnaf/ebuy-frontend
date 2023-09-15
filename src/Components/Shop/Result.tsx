import { Box, ButtonBase } from "@mui/material";

//Products
import Products from "Components/Common/Products";

//Styles
import styles from "Styles/Shop/Result.styles";

//Data
import ProductsData from "Data/Shop/Products.data";

const Result = () => {
    return (
        <Box>
            <Products Data={ProductsData} />
            <Box sx={styles.Buttons}>
                <ButtonBase>
                    Load More
                </ButtonBase>
            </Box>
        </Box>
    );
};
export default Result;