import { Box, Grid, Typography, ButtonBase, SvgIcon } from "@mui/material";

//All icons
import { DeleteIcon, CartIcon } from "Utilis/Icons";

//CartData
import CartData from "Data/Cart/Cart.data";

//Styles
import styles from "Styles/Profile/Order&Wishlist.styles";

const Wishlist = () => {
    return (
        <Box>
            <Box sx={styles.TabTitle}>
                <Typography variant="h6" component="h6">
                    Wishlist
                </Typography>
                <Box sx={styles.ButtonContainer}>
                    <ButtonBase sx={styles.Button}>
                        <SvgIcon viewBox="0 0 24 24">
                            {DeleteIcon}
                        </SvgIcon>
                        Clear Order
                    </ButtonBase>
                </Box>
            </Box>
            <Box>
                {CartData &&
                    CartData.map((item, i) => (
                        <Box key={i} sx={styles.CardContainer}>
                            <Grid container spacing={{ xxl: 3, msm: 2, xxs: 4 }} sx={{ alignItems: "center" }}>
                                <Grid item {...{ xxxl: 0.5, xxl: 0.6, smd: 0.8, lsm: 1, sm: 12, xxs: 12 }}>
                                    <ButtonBase sx={styles.RemoveItem}>
                                        <SvgIcon viewBox="0 0 24 24">
                                            {DeleteIcon}
                                        </SvgIcon>
                                    </ButtonBase>
                                </Grid>
                                <Grid item {...{ xxxl: 11.5, xxl: 11.4, smd: 11.2, lsm: 11, sm: 12, xxs: 12 }}>
                                    <Grid container spacing={3} sx={styles.Content}>
                                        <Grid item {...{ xxxl: 1.2, xxl: 1.2, lg: 1.5, md: 2, smd: 2.5, lsm: 3, sm: 12, xxs: 12 }}>
                                            <Box component="img" src={item.product.images[0].url} alt="Product Image" sx={styles.Images} />
                                        </Grid>
                                        <Grid item {...{ xxxl: 5.8, xxl: 5.8, lg: 5.5, md: 5, smd: 4.5, lsm: 7, sm: 8, xxs: 12 }}>
                                            <Box sx={styles.ProductInfo}>
                                                <Typography variant="h6" component="h6">
                                                    {item.product.name}
                                                </Typography>
                                                <Typography variant="body2" component="p">
                                                    By: The Cotton House
                                                </Typography>
                                                <Typography variant="h6" component="h6">
                                                    $90
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item {...{ smd: 2.5, lsm: 2, sm: 4, xxs: 12 }}>
                                            <Typography variant="body1" component="p" sx={styles.StatusAndDateText}>
                                                Stock Status
                                            </Typography>
                                            <Typography variant="body1" component="h6" sx={styles.StatusInfo}>
                                                InStock
                                            </Typography>
                                        </Grid>
                                        <Grid item {...{ smd: 2.5, lsm: 2 }} sx={{ display: { smd: "block", xxs: "none" } }}>
                                            <ButtonBase sx={styles.AddToCartButton}>
                                                <SvgIcon viewBox="0 0 22 23">
                                                    {CartIcon}
                                                </SvgIcon>
                                                Add to cart
                                            </ButtonBase>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    ))
                }
                <Grid container spacing={2} sx={styles.BottomTotal}>
                    <Grid item {...{ xxs: 3 }} sx={{ px: "0px !important" }}>
                        <Box sx={styles.TotalText}>
                            <Typography variant="h6" component="h6">
                                Total
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item {...{ xxs: 6 }} sx={{ px: "0px !important" }} >
                        <Typography variant="body1" component="p" sx={styles.TotalDescription}>
                            Paid using credit card ending......
                        </Typography>
                    </Grid>
                    <Grid item {...{ xxs: 3 }} sx={{ px: "0px !important" }}>
                        <Box sx={styles.TotalPrice}>
                            <Typography variant="h6" component="h6">
                                $90
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
export default Wishlist;