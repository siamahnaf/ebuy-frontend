import { Box, Grid } from "@mui/material";
import { useState } from "react";

//Components tree
import ProductImages from "./ProductInfo/ProductImages";
import ProductContents from "./ProductInfo/ProductContents";

const ProductInfo = () => {
    const [currentImage, setCurrentImage] = useState(0);
    return (
        <Box sx={{ px: 3 }}>
            <Grid container spacing={5} sx={{ alignItems: "center" }}>
                <Grid item  {...{ xxxl: 3.3, xxl: 4.2, xl: 5.2, lg: 6, md: 6.5, xxs: 12 }}>
                    <ProductImages
                        setCurrentImage={setCurrentImage}
                        currentImage={currentImage}
                    />
                </Grid>
                <Grid item {...{ xxxl: 8.7, xxl: 7.8, xl: 6.8, lg: 6, md: 5.5, xxs: 12 }}>
                    <ProductContents
                        setCurrentImage={setCurrentImage}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};
export default ProductInfo;