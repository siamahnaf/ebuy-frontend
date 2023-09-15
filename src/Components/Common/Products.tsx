import { Box, Grid, Stack, Typography, ButtonBase, SvgIcon, Rating } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

//All Icons
import StarIcon from '@mui/icons-material/Star';
import { CartIcon, LoevSolidIcon } from "Utilis/Icons";

//Styles
import styles from "Styles/Common/Products.styles";

//Type Import 
import { Products } from "Typings/Products.types";

//Types
interface Props {
    Data: Products[]
}

const ProductsCom = ({ Data }: Props) => {
    return (
        <Box>
            <Grid container spacing={{ smd: 4, lsm: 2, sm: 3, xxs: 2 }}>
                {Data &&
                    Data.map((product, i) => (
                        <Grid item {...{ xxxl: 2, lg: 2.4, md: 3, lsm: 4, sm: 6, xxs: 6 }} key={i}>
                            <Link href="/products/id">
                                <A sx={styles.Link}>
                                    <Box
                                        component="img"
                                        src={product.image[0].url}
                                        alt="Product"
                                        sx={styles.Images}
                                    />
                                    <Box sx={styles.Content}>
                                        <Typography variant="h5" component="h5" sx={styles.Titlte}>
                                            {product.name}
                                        </Typography>
                                        <Typography variant="body1" component="p" sx={styles.Description}>
                                            {product.description}
                                        </Typography>
                                        <Stack direction="row" sx={{ alignItems: "center" }}>
                                            <Box>
                                                <Rating
                                                    name="half-rating-read"
                                                    defaultValue={5}
                                                    precision={4}
                                                    readOnly
                                                    sx={styles.Star}
                                                    emptyIcon={<StarIcon fontSize="inherit" />}
                                                />
                                            </Box>
                                            <Box sx={styles.Buttons}>
                                                <ButtonBase>
                                                    <SvgIcon viewBox="0 0 22 23">
                                                        {CartIcon}
                                                    </SvgIcon>
                                                </ButtonBase>
                                                <ButtonBase>
                                                    <SvgIcon viewBox="0 0 27 24">
                                                        {LoevSolidIcon}
                                                    </SvgIcon>
                                                </ButtonBase>
                                            </Box>
                                        </Stack>
                                    </Box>
                                    <Box sx={styles.PriceBox}>
                                        <Typography variant="h6" component="h6">
                                            ${product.price}
                                        </Typography>
                                    </Box>
                                </A>
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};
export default ProductsCom;

//Custom Component
const A = styled("a")``;