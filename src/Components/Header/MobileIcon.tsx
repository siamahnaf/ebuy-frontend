import { useState } from "react";
import { Box, List, ListItem, Stack, ButtonBase, SvgIcon, Typography } from "@mui/material";
import { useRouter } from "next/router";

//All Icons
import { SearchIcon, ProfileIcon, LoveIcon, BagIcon, HomeIconMobile } from "Utilis/Icons";

//Components
import User from "./Icons/User";
import MobileSearch from "./Icons/MobileSearch";

//Styles
import styles from "Styles/Header/Icons.styles";

const MobileIcon = () => {
    const [user, setUser] = useState<boolean>(false);
    const [search, setSearch] = useState<boolean>(false);
    const router = useRouter();
    const userHandlerOpen = () => {
        setUser(true)
        const header: HTMLElement | null = document.querySelector('header')!;
        let scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        header.style.paddingRight = `${scrollBarWidth}px`;
    }
    const userHanlderClose = () => {
        setUser(false)
    }
    const searchHanlderOpen = () => {
        setSearch(true)
        const header: HTMLElement | null = document.querySelector('header')!;
        const body: HTMLElement | null = document.querySelector('body')!;
        let scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        header.style.paddingRight = `${scrollBarWidth}px`;
        body.style.overflow = "hidden";
        body.style.paddingRight = `${scrollBarWidth}px`;
    }
    const searchHanlderClose = () => {
        setSearch(false)
        const header: HTMLElement | null = document.querySelector('header')!;
        const body: HTMLElement | null = document.querySelector('body')!;
        let scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        header.style.paddingRight = "0px";
        body.style.overflow = "unset";
        body.style.paddingRight = "0px";
    }
    return (
        <Box component="nav" sx={styles.Container}>
            <List dense disablePadding component={Stack} direction="row" sx={styles.List}>
                <ListItem dense disableGutters disablePadding>
                    <ButtonBase onClick={searchHanlderOpen}>
                        <SvgIcon viewBox="0 0 21 24">
                            {SearchIcon}
                        </SvgIcon>
                    </ButtonBase>
                </ListItem>
                <ListItem dense disableGutters disablePadding>
                    <ButtonBase onClick={() => router.push("/cart/index")}>
                        <Box sx={{ position: "relative" }}>
                            <SvgIcon viewBox="0 0 16 23">
                                {BagIcon}
                            </SvgIcon>
                            <Typography variant="body1" component="div" sx={styles.BagItemCount}>
                                5
                            </Typography>
                        </Box>
                    </ButtonBase>
                </ListItem>
                <ListItem dense disableGutters disablePadding sx={{ display: { md: "none", xxs: "block" } }}>
                    <ButtonBase onClick={() => router.push("/")}>
                        <SvgIcon viewBox="0 0 24 24">
                            {HomeIconMobile}
                        </SvgIcon>
                    </ButtonBase>
                </ListItem>
                <ListItem dense disableGutters disablePadding>
                    <ButtonBase onClick={() => router.push("/user/profile/id")}>
                        <SvgIcon >
                            {LoveIcon}
                        </SvgIcon>
                    </ButtonBase>
                </ListItem>
                <ListItem dense disableGutters disablePadding>
                    <ButtonBase onClick={userHandlerOpen}>
                        <SvgIcon viewBox="0 0 16 24">
                            {ProfileIcon}
                        </SvgIcon>
                    </ButtonBase>
                </ListItem>
            </List>
            <User
                handleClose={userHanlderClose}
                open={user}
            />
            <MobileSearch
                handleClose={searchHanlderClose}
                open={search}
            />
        </Box>
    );
};

export default MobileIcon;