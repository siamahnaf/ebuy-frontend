import { Box, Stack, Typography, Grid, Rating } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

//All Icons
import StarIcon from '@mui/icons-material/Star';

//Import Types
import { Products } from "Typings/Products.types";

//Styles
import styles from "Styles/Home/SingleTop.styles";

//Types
interface Props {
    title: string;
    products: Products[]
}

const SingleTop = ({ title, products }: Props) => {
    return (
        <Box>
            <Box>
                <Typography variant="h6" component="h6" sx={styles.Title}>
                    {title}
                </Typography>
            </Box>
            <Box>
                {products &&
                    products.slice(0, 3).map((product, i) => (
                        <Link href="/products/id" key={i}>
                            <A sx={styles.Link}>
                                <Grid container spacing={2} sx={{ alignItems: "center" }}>
                                    <Grid item {...{ xxxl: 3, xxl: 3.5, lg: 4.5, md: 3, smd: 3.5, lsm: 4.5, msm: 3, sm: 3, xs: 3.5, xxs: 4 }}>
                                        <Box sx={styles.Images} component="img" src={product.image[0].url} alt="Product" />
                                    </Grid>
                                    <Grid item {...{ xxxl: 9, xxl: 8.5, lg: 7.5, md: 9, smd: 8.5, lsm: 7.5, msm: 9, sm: 9, xs: 8.5, xxs: 8 }}>
                                        <Typography variant="h6" component="h6" sx={styles.ProductTitle}>
                                            {product.name}
                                        </Typography>
                                        <Stack direction="row" sx={{ mb: "5px" }}>
                                            <Box>
                                                <Rating
                                                    name="half-rating-read"
                                                    defaultValue={5}
                                                    precision={4}
                                                    readOnly
                                                    emptyIcon={<StarIcon fontSize="inherit" />}
                                                    sx={styles.Star}
                                                />
                                            </Box>
                                            <Box sx={styles.RatingPoint}>
                                                ({parseFloat(product.ratting).toFixed(1)})
                                            </Box>
                                        </Stack>
                                        <Stack direction="row">
                                            <Box sx={{ mr: "12px" }}>
                                                <Typography variant="h6" component="h6" sx={{ fontSize: "15px" }}>
                                                    ${product.price}
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="h6" component="h6" sx={styles.OriginalPrice}>
                                                    ${product.originalPrice}
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </A>
                        </Link>
                    ))
                }
            </Box>
        </Box>
    );
};
export default SingleTop;

//Custom Component
const A = styled("a")``;