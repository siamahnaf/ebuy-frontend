import { Box, Avatar, Typography, Grid } from "@mui/material";

//data
import ProfileData from "Data/Profile/Profile.data";

//Styles
import styles from "Styles/Profile/ProfileDetails.styles";

const ProfileDetails = () => {
    return (
        <div>
            <Avatar
                alt="Profile"
                src={ProfileData.avatar}
                sx={{
                    width: "100px",
                    height: "100px"
                }}
            />
            <Typography variant="h6" component="h6" sx={styles.UserName}>
                {ProfileData.name}
            </Typography>
            <Grid container spacing={2}>
                <Grid item {...{ msm: 6, xxs: 12 }}>
                    <Box sx={styles.SingleProfileInfo}>
                        <Typography variant="body1" component="p">
                            Email
                        </Typography>
                        <Typography variant="h6" component="h6">
                            {ProfileData.email}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item {...{ msm: 6, xxs: 12 }}>
                    <Box sx={styles.SingleProfileInfo}>
                        <Typography variant="body1" component="p">
                            Number
                        </Typography>
                        <Typography variant="h6" component="h6">
                            {ProfileData.number}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item {...{ msm: 6, xxs: 12 }}>
                    <Box sx={styles.SingleProfileInfo}>
                        <Typography variant="body1" component="p">
                            Birthday
                        </Typography>
                        <Typography variant="h6" component="h6">
                            {ProfileData.dob}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item {...{ msm: 6, xxs: 12 }}>
                    <Box sx={styles.SingleProfileInfo}>
                        <Typography variant="body1" component="p">
                            Gender
                        </Typography>
                        <Typography variant="h6" component="h6">
                            {ProfileData.gender}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={styles.SingleProfileInfo}>
                <Typography variant="body1" component="p">
                    Address
                </Typography>
                <Typography variant="h6" component="h6">
                    {ProfileData.address}
                </Typography>
            </Box>
        </div>
    );
};

export default ProfileDetails;