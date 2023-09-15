import { Box, Stack, ButtonBase, Grid, SvgIcon, Typography, NativeSelect, InputBase } from "@mui/material";
import Link from "next/link";

//All Icon
import { LongArrowLeftIcon, RefreshIcon, TagIcon } from "Utilis/Icons";

//Styles
import styles from "Styles/Cart/CartCuppon.styles";

const CartCuppon = () => {
    return (
        <Box sx={{ mt: "2em" }}>
            <Stack direction="row" sx={{ alignItems: "center", mb: 4 }}>
                <Box>
                    <ButtonBase sx={styles.Buttons}>
                        <Link href="/">
                            <a>
                                <SvgIcon viewBox="0 0 24 11">
                                    {LongArrowLeftIcon}
                                </SvgIcon>
                                Continue Shopping
                            </a>
                        </Link>
                    </ButtonBase>
                </Box>
                <Box sx={styles.UpdateCartButton}>
                    <ButtonBase sx={styles.Buttons}>
                        <Link href="/">
                            <a>
                                <SvgIcon viewBox="0 0 24 25">
                                    {RefreshIcon}
                                </SvgIcon>
                                Update Cart
                            </a>
                        </Link>
                    </ButtonBase>
                </Box>
            </Stack>
            <Stack direction="row" sx={{ flexWrap: { lg: "unset", xxs: "wrap" } }}>
                <Box sx={styles.CupponContainer}>
                    <Typography variant="h6" component="h6" sx={styles.CalculateTextBold}>
                        Calculate Shipping
                    </Typography>
                    <Typography variant="body1" component="p" sx={styles.CalculateTextPlain}>
                        Flat Rate: {" "}
                        <Typography variant="body1" component="span">
                            5%
                        </Typography>
                    </Typography>
                    <Grid container spacing={2} sx={{ mt: 1 }}>
                        <Grid item {...{ xxs: 12 }}>
                            <NativeSelect sx={styles.Select}>
                                <option value="1">United Kingdom</option>
                                <option value="2">Twenty</option>
                                <option value="3">Thirty</option>
                                <option value="4">Fifty</option>
                            </NativeSelect>
                        </Grid>
                        <Grid item {...{ xxs: 6 }}>
                            <Box>
                                <InputBase
                                    placeholder="State / Country"
                                    sx={styles.InputBase}
                                    fullWidth
                                />
                            </Box>
                        </Grid>
                        <Grid item {...{ xxs: 6 }}>
                            <Box>
                                <InputBase
                                    placeholder="PostCode / Zip"
                                    sx={styles.InputBase}
                                    fullWidth
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ mt: "2em", flexBasis: { lg: "unset", xxs: "100%" } }}>
                    <Typography variant="h6" component="h6" sx={styles.CalculateTextBold}>
                        Apply Cuppon
                    </Typography>
                    <Typography variant="body1" component="p" sx={styles.CalculateTextPlain}>
                        Using a Promo Code?
                    </Typography>
                    <Stack direction="row">
                        <Box sx={{ flex: 1 }}>
                            <InputBase
                                placeholder="Enter Your Cuppon"
                                sx={styles.InputBase}
                                fullWidth
                            />
                        </Box>
                        <Box sx={{ ml: "10px" }}>
                            <ButtonBase sx={styles.Buttons}>
                                <Link href="/">
                                    <a>
                                        <SvgIcon viewBox="0 0 24 24">
                                            {TagIcon}
                                        </SvgIcon>
                                        Apply
                                    </a>
                                </Link>
                            </ButtonBase>
                        </Box>
                    </Stack>
                </Box>
            </Stack >
        </Box >
    );
};
export default CartCuppon;