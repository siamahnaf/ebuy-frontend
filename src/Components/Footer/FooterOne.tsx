import { Box, List, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

//Data
import FooterOneData from "Data/Footer/FooterOne.data";

//Styles
import styles from "Styles/Footer/FooterOne&Two.styles";

const FooterOne = () => {
    return (
        <Box>
            <Typography variant="h5" component="h5" sx={styles.FooterTitle}>
                Online Shooping
            </Typography>
            <List dense disablePadding>
                {FooterOneData &&
                    FooterOneData.map((item, i) => (
                        <ListItem key={i} dense disableGutters disablePadding sx={styles.ListItem}>
                            <Link href={item.url}>
                                <A sx={styles.Link}>{item.name}</A>
                            </Link>
                        </ListItem>
                    ))
                }
            </List>
        </Box >
    );
};
export default FooterOne;


//Custom Component
const A = styled("a")``;