import { useState } from "react";
import { Box, Typography, Grid, ButtonBase, SvgIcon } from "@mui/material";

//All icons
import { DeleteIcon } from "Utilis/Icons";

//CartData
import CartData from "Data/Cart/Cart.data";

//Styles
import styles from "Styles/Profile/Order&Wishlist.styles";

const Order = () => {
    const [orderDetails, setOrderDetails] = useState<number | null>(null);
    return (
        <Box>
            <Box sx={styles.TabTitle}>
                <Typography variant="h6" component="h6">
                    All Orders
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
                            <Grid container spacing={3} sx={{ alignItems: "center" }}>
                                <Grid item {...{ xxxl: 0.5, xxl: 0.6, smd: 0.8, lsm: 1, sm: 12, xxs: 12 }}>
                                    <ButtonBase sx={styles.RemoveItem}>
                                        <SvgIcon viewBox="0 0 24 24">
                                            {DeleteIcon}
                                        </SvgIcon>
                                    </ButtonBase>
                                </Grid>
                                <Grid item {...{ xxxl: 11.5, xxl: 11.4, smd: 11.2, lsm: 11, sm: 12, xxs: 12 }} onClick={() => setOrderDetails(orderDetails === i ? null : i)}>
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
                                                <Box>
                                                    <Typography variant="body1" component="span">
                                                        Size: M
                                                    </Typography>
                                                    <Typography variant="body1" component="span">
                                                        Qty: 2
                                                    </Typography>
                                                    <Typography variant="h5" component="span">
                                                        $90
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item {...{ smd: 2.5, lsm: 2, sm: 4, xxs: 12 }}>
                                            <Typography variant="body1" component="p" sx={styles.StatusAndDateText}>
                                                Status
                                            </Typography>
                                            <Typography variant="body1" component="h6" sx={styles.StatusInfo}>
                                                Processing
                                            </Typography>
                                        </Grid>
                                        <Grid item {...{ smd: 2.5, lsm: 2 }} sx={{ display: { smd: "block", xxs: "none" } }}>
                                            <Typography variant="body1" component="p" sx={styles.StatusAndDateText}>
                                                Date
                                            </Typography>
                                            <Typography variant="body1" component="h6" sx={styles.DateInfo}>
                                                25 June 2022
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {orderDetails === i &&
                                <Grid container spacing={2} sx={styles.MoreInfoContainer}>
                                    <Grid item {...{ msm: 9.8, xxs: 12 }}>
                                        <Box sx={styles.MoreInfo}>
                                            <Typography variant="h6" component="h6">
                                                Package Processing Started
                                            </Typography>
                                            <Typography variant="body1" component="p">
                                                Your Package is ready to be prepated by the seller
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item {...{ msm: 2.2, xxs: 12 }}>
                                        <Box sx={styles.MoreDateInfo}>
                                            <Typography variant="body1" component="p">
                                                Date
                                            </Typography>
                                            <Typography variant="body1" component="h6">
                                                25 June 2022
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid></Grid>
                                </Grid>
                            }
                        </Box>
                    ))
                }
                <Grid container spacing={2} sx={styles.BottomTotal}>
                    <Grid item {...{ xxs: 3 }} sx={{ px: "0px !important" }}>
                        <Box sx={styles.TotalText}>
                            <Typography variant="h6" component="h6" >
                                Total
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item {...{ xxs: 6 }} sx={{ px: "0px !important" }}>
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
        </Box >
    );
};
export default Order;