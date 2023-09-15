import { Box, Typography, Stack } from "@mui/material";

//Originals and Warrenty Images
import Originals from "Assets/footer/Originals.png";
import Warrenty from "Assets/footer/Warrenty.png";

//Styles
import styles from "Styles/Footer/FooterFour.styles";

const FooterFour = () => {
    return (
        <Box sx={{ mt: "10px" }}>
            <Stack direction="row" spacing={2} sx={styles.FlexContainer}>
                <Box sx={styles.IconImages}>
                    <Box component="img" src={Originals} width="100%" alt="Originals" />
                </Box>
                <Box>
                    <Typography variant="body1" component="p" sx={styles.Text}>
                        <Typography variant="body1" component="span" sx={styles.TextBold}>
                            100% Original
                        </Typography> guarantee for all products at ebuy.com
                    </Typography>
                </Box>
            </Stack>
            <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <Box sx={styles.IconImages}>
                    <Box component="img" src={Warrenty} width="85%" alt="Warrenty" />
                </Box>
                <Box>
                    <Typography variant="body1" component="p" sx={styles.Text}>
                        <Typography variant="body1" component="span" sx={styles.TextBold}>
                            Return within 30 days
                        </Typography> of receiving your order
                    </Typography>
                </Box>
            </Stack>
        </Box>
    );
};
export default FooterFour;