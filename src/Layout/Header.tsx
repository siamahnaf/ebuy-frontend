import { useEffect, useState } from "react";
import { Box, Container, Grid } from "@mui/material";

//Components
import Logo from "Components/Header/Logo";
import Nav from "Components/Header/Nav";
import Icons from "Components/Header/Icons";
//Mobile Components
import MobileNav from "Components/Header/MobileNav";
import MobileIcon from "Components/Header/MobileIcon";

//Styles
import styles from "Styles/Header/Header.styles";

//Types
interface Props {
    active?: string;
}

const Header = ({ active }: Props) => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 1);
        });
    }, []);
    return (
        <Box
            className={scroll ? "sticky" : ""}
            sx={styles.Header}
            component="header"
        >
            <Container maxWidth="xxxl" disableGutters>
                <Grid container spacing={2} sx={{ alignItems: "center" }}>
                    <Grid item  {...{ md: 2, xxs: 6 }}>
                        <Logo />
                    </Grid>
                    <Grid item {...{ md: 8, xxs: 6 }}>
                        <Nav active={active} />
                        <MobileNav />
                    </Grid>
                    <Grid item {...{ md: 2, xxs: 12 }} sx={{ display: { md: "block", xxs: "none" } }}>
                        <Icons />
                    </Grid>
                </Grid>
                <Box sx={{ display: { md: "none", xxs: "block" } }}>
                    <MobileIcon />
                </Box>
            </Container>
        </Box >
    );
};
export default Header;