import { Box, Typography } from "@mui/material";

//Data
import NotificationData from "Data/Profile/Notification.data";

//Styles
import styles from "Styles/Profile/Notification.styles";

const Notification = () => {
    return (
        <Box>
            <Box sx={styles.TabTitle}>
                <Typography variant="h6" component="h6">
                    Notification
                </Typography>
            </Box>
            <Box>
                <Typography variant="h6" component="h6" sx={styles.NotificationTitle}>
                    New
                </Typography>
                {NotificationData &&
                    NotificationData.map((notification, i) => {
                        if (i === 1) return <Typography variant="h6" component="h6" sx={styles.NotificationTitle}>
                            Earlier
                        </Typography>
                        return (
                            <Box key={i} sx={styles.Card}>
                                <Typography variant="body1" component="p" sx={styles.NotificationTime}>
                                    {notification.time}
                                </Typography>
                                <Typography variant="body1" component="p" sx={styles.Message}>
                                    {notification.message}
                                </Typography>
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    );
};
export default Notification;