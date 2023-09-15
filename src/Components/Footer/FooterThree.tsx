import { Box, Stack, List, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

//All Icons
import { Facebook, Twitter, YouTube, Instagram } from "@mui/icons-material";

//Google play and apple id image
import GooglePlayImage from "Assets/footer/Google-play.png";
import AppleIdImage from "Assets/footer/AppleId.png";

//Styles
import styles from "Styles/Footer/FooterThree.styles";

//Social Data
const Social = [
    { icon: <Facebook />, url: "/" },
    { icon: <Twitter />, url: "/" },
    { icon: <YouTube />, url: "/" },
    { icon: <Instagram />, url: "/" }
]

const FooterThree = () => {
    return (
        <Box>
            <Typography variant="h5" component="h5" sx={styles.FooterTitle}>
                Exprience eby app on mobile
            </Typography>
            <Stack direction="row" spacing={2} sx={styles.AppsLink}>
                <Box>
                    <Link href="/">
                        <a>
                            <Image src={GooglePlayImage} width={236} height={72} alt="Google Play" />
                        </a>
                    </Link>
                </Box>
                <Box>
                    <Link href="/">
                        <a>
                            <Image src={AppleIdImage} width={210} height={72} alt="Apple Id" />
                        </a>
                    </Link>
                </Box>
            </Stack>
            <Typography variant="h5" component="h5" sx={styles.FooterTitle}>
                Keep in Touch
            </Typography>
            <List component={Stack} direction="row" dense disablePadding sx={styles.List}>
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
        </Box>
    );
};
export default FooterThree;