import { SyntheticEvent, useState } from 'react';
import { Box, Grid, Tab, ButtonBase, Typography, useMediaQuery } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

//All icons
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

//Components
import Profile from "./ProfileInfo/Profile";
import Order from "./ProfileInfo/Order";
import Wishlist from "./ProfileInfo/Wishlist";
import Reviews from "./ProfileInfo/Review";
import ReturnOrder from "./ProfileInfo/ReturnOrder";
import Notification from "./ProfileInfo/Notification";

//Styles
import styles from "Styles/Profile/ProfileInfo.styles";

const ProfileInfo = () => {
    const [value, setValue] = useState<string>('1');
    const TabLabel = ["My Profile", "My Order", "My Wishlist", "My Reviews", "Return Order", "Notification"];
    const viewPort = useMediaQuery('(min-width:992px)');
    const handleChange = (event: SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <Box>
            <TabContext value={value}>
                <Grid container spacing={2}>
                    <Grid item {...{ xxxl: 2.2, xxl: 2.6, xl: 2.7, md: 3, xxs: 12 }} sx={styles.Sticky}>
                        <Box>
                            <Typography variant="h2" component="h2" sx={styles.PageTitlte}>
                                Profile
                            </Typography>
                            <TabList
                                onChange={handleChange}
                                orientation={viewPort ? "vertical" : "horizontal"}
                                variant="scrollable"
                                scrollButtons={viewPort ? false : true}
                                TabIndicatorProps={{
                                    style: {
                                        display: "none",
                                    }
                                }}
                                sx={{
                                    "& .MuiTabScrollButton-root": {
                                        "&.Mui-disabled": {
                                            opacity: 0.5,
                                            pointerEvents: "none"
                                        }
                                    }
                                }}
                            >
                                {TabLabel &&
                                    TabLabel.map((label, i) => (
                                        <Tab
                                            key={i}
                                            label={label}
                                            icon={<ArrowRightIcon />}
                                            value={(i + 1).toString()}
                                            iconPosition="end"
                                            sx={styles.TabButton}
                                        />
                                    ))

                                }
                            </TabList>
                            <ButtonBase sx={styles.LogoutButton}>
                                <Typography variant="h6" component="h6">
                                    Logout
                                </Typography>
                            </ButtonBase>
                        </Box>
                    </Grid>
                    <Grid item {...{ xxxl: 9.8, xxl: 9.4, xl: 9.3, md: 9, xxs: 12 }}>
                        <Box>
                            <TabPanel value="1"><Profile /></TabPanel>
                            <TabPanel value="2"><Order /></TabPanel>
                            <TabPanel value="3"><Wishlist /></TabPanel>
                            <TabPanel value="4"><Reviews /></TabPanel>
                            <TabPanel value="5"><ReturnOrder /></TabPanel>
                            <TabPanel value="6"><Notification /></TabPanel>
                        </Box>
                    </Grid>
                </Grid>
            </TabContext>
        </Box>
    );
};
export default ProfileInfo;