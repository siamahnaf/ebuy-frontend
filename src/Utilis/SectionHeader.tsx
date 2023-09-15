import { Box, Stack, Typography } from "@mui/material";

//Styles
import styles from "Styles/Utilis/SectionHeader.styles";

//Types
interface Props {
    title: string;
    abbreviation?: string;
    description?: string;
}

const SectionHeader = ({ title, abbreviation, description }: Props) => {
    return (
        <Stack direction="row" sx={styles.Container}>
            <Box>
                <Typography variant="h5" component="h5" sx={styles.Title}>
                    {title}
                    <Typography variant="h5" component="span">
                        {abbreviation}
                    </Typography>
                </Typography>
                <Typography variant="body1" component="p" sx={styles.Description}>
                    {description}
                </Typography>
            </Box>
        </Stack>
    );
};
export default SectionHeader;