import { Box, Typography } from "@mui/material";

//Components
import ListInfo from "./Description/ListInfo";

//Data
import singleData from "Data/Product/product.data";

//Styles
import styles from "Styles/Product/Description.styles";

const Description = () => {
    return (
        <Box>
            <Box>
                <Typography variant="body1" component="p" sx={styles.ParagraphText}>
                    {singleData.details}
                </Typography>
                <ListInfo />
            </Box>
            <Box>
                <Typography variant="h5" component="h5" sx={styles.TittleText}>
                    Packaging & Delivery
                </Typography>
                <Typography variant="body1" component="p" sx={styles.ParagraphText}>
                    {singleData.packaginAndDelivery}
                </Typography>
            </Box>
            <Box>
                <Typography variant="h5" component="h5" sx={styles.TittleText}>
                    Suggested Use
                </Typography>
                <Typography variant="body1" component="p" sx={styles.ParagraphText}>
                    {singleData.suggestedUse}
                </Typography>
            </Box>
            <Box>
                <Typography variant="h5" component="h5" sx={styles.TittleText}>
                    Other Information
                </Typography>
                <Typography variant="body1" component="p" sx={styles.ParagraphText}>
                    {singleData.otherInformation}
                </Typography>
            </Box>
            <Box>
                <Typography variant="h5" component="h5" sx={styles.TittleText}>
                    Warnings
                </Typography>
                <Typography variant="body1" component="p" sx={styles.ParagraphText}>
                    {singleData.warnings}
                </Typography>
            </Box>
        </Box>
    );
};
export default Description;