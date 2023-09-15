import { Box, List, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

//Data
import FooterTwoData from "Data/Footer/FooterTwo.data";

//Styles
import styles from "Styles/Footer/FooterOne&Two.styles";

const FooterTwo = () => {
    return (
        <Box>
            <Typography variant="h5" component="h5" sx={styles.FooterTitle}>
                Useful Links
            </Typography>
            <List dense disablePadding>
                {FooterTwoData &&
                    FooterTwoData.map((item, i) => (
                        <ListItem key={i} dense disableGutters disablePadding sx={styles.ListItem}>
                            <Link href={item.url}>
                                <A sx={styles.Link}>{item.name}</A>
                            </Link>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    );
};
export default FooterTwo;

//Custom Component
const A = styled("a")``;