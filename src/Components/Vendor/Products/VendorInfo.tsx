import { Box, Grid, Typography, Stack, Rating, ButtonBase, SvgIcon } from "@mui/material";

//All icons
import StarIcon from '@mui/icons-material/Star';
import { MapIcon, ProfileDoubleIcon, ShareIcon } from "Utilis/Icons";

//Data
import VendorData from "Data/Vendor/Vendor.data";

//Cover Image
import CoverImage from "Assets/vendor/cover.png";

//Styles
import styles from "Styles/Vendor/VendorInfo.styles"

const VendorInfo = () => {
    return (
        <Box>
            <Box component="img" src={CoverImage} alt="cover" sx={styles.Image} />
            <Box sx={styles.Container}>
                <Grid container spacing={3}>
                    <Grid item {...{ md: 4.5, msm: 12 }}>
                        <Grid container spacing={2} sx={{ alignItems: "center", mb: "20px" }}>
                            <Grid item {...{ xxxl: 2, xxl: 2.5, md: 3, smd: 2, lsm: 2.5, msm: 3, sm: 4, xs: 4.5, xxs: 5 }}>
                                <Box component="img" width="100%" src={VendorData.image} alt="Vendor" />
                            </Grid>
                            <Grid item {...{ xxxl: 10, xxl: 9.5, md: 9, smd: 10, lsm: 9.5, msm: 9, sm: 8, xs: 7.5, xxs: 7 }}>
                                <Box>
                                    <Typography variant="h5" component="h5" sx={styles.Title}>
                                        {VendorData.name}
                                    </Typography>
                                    <Stack direction="row">
                                        <Rating
                                            name="read-only"
                                            value={4}
                                            precision={0.1}
                                            readOnly
                                            emptyIcon={<StarIcon fontSize="inherit" />}
                                            sx={styles.Star}
                                        />
                                        <Box sx={styles.Points}>
                                            ({VendorData.ratting})
                                        </Box>
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item {...{ md: 6, msm: 4, xxs: 6 }}>
                                <ButtonBase sx={styles.Button}>
                                    Follow
                                </ButtonBase>
                            </Grid>
                            <Grid item {...{ md: 6, msm: 4, xxs: 6 }}>
                                <ButtonBase sx={styles.Button}>
                                    Share
                                    <SvgIcon viewBox="0 0 23 22">
                                        {ShareIcon}
                                    </SvgIcon>
                                </ButtonBase>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item {...{ md: 1.5, msm: 0 }} />
                    <Grid item {...{ md: 6, msm: 12 }}>
                        <Stack direction="row" sx={styles.SellerContactInfo}>
                            <SvgIcon viewBox="0 0 17 23">
                                {MapIcon}
                            </SvgIcon>
                            <Typography variant="body1" component="p">
                                Address: {VendorData.address}
                            </Typography>
                        </Stack>
                        <Stack direction="row" sx={styles.SellerContactInfo}>
                            <SvgIcon viewBox="0 0 20 24">
                                {ProfileDoubleIcon}
                            </SvgIcon>
                            <Typography variant="body1" component="p">
                                Contact seller: {VendorData.cell}
                            </Typography>
                        </Stack>
                        <Stack direction="row" sx={{ mt: "20px", flexWrap: { xs: "unset", xxs: "wrap" } }}>
                            <Box sx={styles.SuccessBox}>
                                <Typography variant="body1" component="p">
                                    Rating
                                </Typography>
                                <Typography variant="h3" component="h3">
                                    92%
                                </Typography>
                            </Box>
                            <Box sx={styles.SuccessBox}>
                                <Typography variant="body1" component="p">
                                    Ship on time
                                </Typography>
                                <Typography variant="h3" component="h3">
                                    100%
                                </Typography>
                            </Box>
                            <Box sx={styles.SuccessBox}>
                                <Typography variant="body1" component="p">
                                    Chat response
                                </Typography>
                                <Typography variant="h3" component="h3">
                                    89%
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
export default VendorInfo;