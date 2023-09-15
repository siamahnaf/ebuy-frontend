import { Box, Grid, Stack, Typography, Rating, ButtonBase, SvgIcon } from "@mui/material";
import Link from "next/link";
import StarIcon from '@mui/icons-material/Star';

//All icons
import { LongArrowRightIcon } from "Utilis/Icons";

//Data
import VendorsData from "Data/Vendor/Vendors.data";

//Styles
import styles from "Styles/Vendor/Vendors.styles";

const Vendors = () => {
    return (
        <Box>
            <Grid container spacing={2}>
                {VendorsData &&
                    VendorsData.map((vendor, i) => (
                        <Grid item {...{ md: 4, msm: 6, xxs: 12 }} key={i}>
                            <Box sx={styles.CardContainer}>
                                <Grid container spacing={2} key={i} sx={{ alignItems: "center", mb: "10px" }}>
                                    <Grid item {...{ xxxl: 2, xxl: 2.5, xl: 3, md: 3.5, msm: 4, sm: 3, xs: 3.5, xxs: 4 }}>
                                        <Box component="img" width="100%" src={vendor.image} alt={vendor.name} />
                                    </Grid>
                                    <Grid item {...{ xxxl: 10, xxl: 9.5, xl: 9, md: 8.5, msm: 8, sm: 9, xs: 8.5, xxs: 8 }}>
                                        <Box>
                                            <Typography variant="h5" component="h5" sx={styles.Title}>
                                                {vendor.name}
                                            </Typography>
                                            <Stack direction="row">
                                                <Rating
                                                    name="read-only"
                                                    value={vendor.rating}
                                                    precision={0.1}
                                                    readOnly
                                                    emptyIcon={<StarIcon fontSize="inherit" />}
                                                    sx={styles.Star}
                                                />
                                                <Box sx={styles.Points}>
                                                    ({vendor.rating})
                                                </Box>
                                            </Stack>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item {...{ xxs: 6 }}>
                                        <ButtonBase sx={styles.FollowButton}>
                                            Follow
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item {...{ xxs: 6 }}>
                                        <ButtonBase sx={styles.ViewButton}>
                                            <Link href={`/vendors/products/${i}`}>
                                                <a>
                                                    View
                                                    <SvgIcon viewBox="0 0 24 11">
                                                        {LongArrowRightIcon}
                                                    </SvgIcon>
                                                </a>
                                            </Link>
                                        </ButtonBase>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid >
                    ))
                }
            </Grid >
            <Box sx={styles.LoadMore}>
                <ButtonBase>
                    Load More
                </ButtonBase>
            </Box>
        </Box >
    );
};

export default Vendors;