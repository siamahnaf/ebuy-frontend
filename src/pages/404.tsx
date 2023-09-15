import { Box, Typography, ButtonBase } from "@mui/material";
import Link from "next/link";

//Image
import Image from "Assets/404.png";

//Styles
import styles from "Styles/404/Error.styles";

const Error = () => {
    return (
        <Box sx={styles.Container}>
            <Box sx={styles.Wrapper}>
                <Box sx={styles.Content}>
                    <Box sx={styles.Image} component="img" src={Image} alt="404" />
                    <Typography variant="h6" component="h6" sx={styles.Title}>
                        Page Not Found
                    </Typography>
                    <Typography variant="body1" component="p" sx={styles.Description}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
                    </Typography>
                    <ButtonBase sx={styles.Button}>
                        <Link href="/">
                            <a>Go Home</a>
                        </Link>
                    </ButtonBase>
                </Box>
            </Box>
        </Box>
    );
};
export default Error;