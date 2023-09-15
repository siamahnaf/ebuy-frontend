import { Box, Stack, Grid, Typography, Rating, SvgIcon, ButtonBase } from "@mui/material";

//All Icons
import { MapIcon, ProfileDoubleIcon, ShareIcon } from "Utilis/Icons";
import StarIcon from '@mui/icons-material/Star';

//Data
import VendorData from "Data/Vendor/Vendor.data";

//Styles
import styles from "Styles/Product/Vendor.styles";

const Vendor = () => {
    return (
        <Box>
            <Grid container spacing={2} sx={{ alignItems: "center" }}>
                <Grid item {...{ xxxl: 0.8, xxl: 1, lg: 1.2, md: 2, lsm: 3, sm: 3.5, xxs: 12 }}>
                    <Box component="img" width="100%" src={VendorData.image} alt="image" />
                </Grid>
                <Grid item {...{ xxxl: 11.2, xxl: 11, lg: 10.8, md: 10, lsm: 9, sm: 8.5, xxs: 12 }}>
                    <Typography variant="h6" component="h6" sx={styles.Name}>
                        {VendorData.name}
                    </Typography>
                    <Stack direction="row">
                        <Rating
                            name="half-rating-read"
                            defaultValue={5}
                            precision={4}
                            readOnly
                            emptyIcon={<StarIcon fontSize="inherit" />}
                            sx={styles.Star}
                        />
                        <Box sx={styles.Reviews}>
                            (22 reviews)
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mt: "2px" }}>
                <Grid item {...{ lg: 2, md: 3, smd: 4, xxs: 6 }}>
                    <ButtonBase sx={styles.Button}>
                        Follow
                    </ButtonBase>
                </Grid>
                <Grid item {...{ lg: 2, md: 3, smd: 4, xxs: 6 }}>
                    <ButtonBase sx={styles.Button}>
                        Share
                        <SvgIcon viewBox="0 0 23 22">
                            {ShareIcon}
                        </SvgIcon>
                    </ButtonBase>
                </Grid>
            </Grid>
            <Box sx={{ my: "2em" }}>
                <Stack direction="row" sx={styles.SellerContactInfo}>
                    <SvgIcon viewBox="0 0 17 23">
                        {MapIcon}
                    </SvgIcon>
                    <Typography variant="body1" component="p">
                        {VendorData.address}
                    </Typography>
                </Stack>
                <Stack direction="row" sx={styles.SellerContactInfo}>
                    <SvgIcon viewBox="0 0 20 24">
                        {ProfileDoubleIcon}
                    </SvgIcon>
                    <Typography variant="body1" component="p">
                        {VendorData.cell}
                    </Typography>
                </Stack>
            </Box>
            <Stack direction="row" sx={{ flexWrap: { sm: "unset", xxs: "wrap" } }}>
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
            <Typography variant="body1" component="p" sx={styles.Details}>
                {VendorData.details}
            </Typography>
        </Box >
    );
};
export default Vendor;