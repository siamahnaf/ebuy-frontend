import { useState } from "react";
import { Box, ButtonBase, SvgIcon, Drawer, Stack, List, ListItem } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

//All icons
import { CloseIcon } from "Utilis/Icons";
import { Facebook, Twitter, YouTube, Instagram } from "@mui/icons-material";

//Logo
import Logo from "Assets/Logo.png";

//Data
import Navs from "Data/Header/Nav.data";

//Social Data
const Social = [
    { icon: <Facebook />, url: "/" },
    { icon: <Twitter />, url: "/" },
    { icon: <YouTube />, url: "/" },
    { icon: <Instagram />, url: "/" }
]

//Styles
import styles from "Styles/Header/MobileNav.styles";

const MobileNav = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <Box sx={styles.Container}>
            <Box>
                <ButtonBase onClick={() => setOpen(true)}>
                    <SvgIcon viewBox="0 0 24 24">
                        <rect y="11" width="24" height="2" rx="0.3" fill="#222529" />
                        <rect x="10" y="4" width="14" height="2" rx="0.3" fill="#222529" />
                        <rect x="5" y="18" width="19" height="2" rx="0.3" fill="#222529" />
                    </SvgIcon>
                </ButtonBase>
            </Box>
            <Drawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
                ModalProps={{
                    disableScrollLock: true
                }}
                sx={styles.Drawer}
            >
                <Box sx={styles.Header}>
                    <Link href="/">
                        <a>
                            <Image src={Logo} width={100} height={37.5471} alt="Logo" />
                        </a>
                    </Link>
                    <ButtonBase onClick={() => setOpen(false)} sx={styles.CloseIcon}>
                        <SvgIcon viewBox="0 0 24 24">
                            {CloseIcon}
                        </SvgIcon>
                    </ButtonBase>
                </Box>
                <List dense disablePadding sx={styles.NavList}>
                    {Navs.length > 0 &&
                        Navs.map((nav, i) => (
                            <ListItem key={i} dense disableGutters disablePadding>
                                <ButtonBase>
                                    <Link href={nav.url}>
                                        <a>
                                            {nav.name}
                                        </a>
                                    </Link>
                                </ButtonBase>
                            </ListItem>
                        ))
                    }
                </List>
                <List component={Stack} direction="row" dense disablePadding sx={styles.SocialList}>
                    {Social &&
                        Social.map((social, i) => (
                            <ListItem dense disableGutters disablePadding key={i}>
                                <Link href={social.url}>
                                    <a>
                                        {social.icon}
                                    </a>
                                </Link>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>
    );
};
export default MobileNav;