import { Box, List, ListItem, Stack, ButtonBase } from "@mui/material";
import Link from "next/link";

//Data
import Navs from "Data/Header/Nav.data";

//Styles
import styles from "Styles/Header/Nav.styles";

//Types
interface Props {
    active?: string;
}

const Navigation = ({ active }: Props) => {
    return (
        <Box component="nav" sx={styles.Container}>
            <List dense disablePadding component={Stack} direction="row" sx={styles.List}>
                {Navs.length > 0 &&
                    Navs.map((nav, i) => (
                        <ListItem key={i} dense disableGutters disablePadding>
                            <ButtonBase>
                                <Link href={nav.url}>
                                    <a className={active === nav.id ? "active" : ""}>
                                        {nav.name}
                                    </a>
                                </Link>
                            </ButtonBase>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    );
};
export default Navigation;