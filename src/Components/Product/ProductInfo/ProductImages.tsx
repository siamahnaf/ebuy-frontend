import { Grid } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

//Components
import ImageCarousel from "./ProductImages/ImageCarousel";
import ImageMagnify from "./ProductImages/ImageMagnify";

//Data
import singleData from "Data/Product/product.data";

//Types
interface Props {
    setCurrentImage: Dispatch<SetStateAction<number>>;
    currentImage: number;
}

const ProductImages = ({ setCurrentImage, currentImage }: Props) => {
    return (
        <Grid container spacing={5}>
            <Grid item  {...{ sm: 3, xxs: 12 }}>
                <ImageCarousel
                    images={singleData.images}
                    setCurrentImage={setCurrentImage}
                />
            </Grid>
            <Grid item {...{ sm: 9, xxs: 12 }}>
                <ImageMagnify
                    images={singleData.images}
                    currentImage={currentImage}
                />
            </Grid>
        </Grid>
    );
};
export default ProductImages;