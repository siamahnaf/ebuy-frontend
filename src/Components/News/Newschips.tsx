import { Box, Stack, Typography, Breadcrumbs, SvgIcon } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

//All icons
import { ArrowRightIcon, HomeIcon } from "Utilis/Icons";

//Styles
import styles from "Styles/Shop/FilterChip.styles";

const Newschip = () => {
    return (
        <Stack direction="row" sx={styles.Container}>
            <Box>
                <Typography variant="h5" component="h5" sx={styles.CategoryName}>
                    News & Blog
                </Typography>
                <Breadcrumbs
                    aria-label="breadcrumb"
                    separator={<SvgIcon sx={styles.Separator}>{ArrowRightIcon}</SvgIcon>}
                >
                    <Link href="/">
                        <A sx={styles.HomeIcon}>
                            <SvgIcon viewBox="0 0 23 23">{HomeIcon}</SvgIcon>
                            <Typography variant="body1" component="span">
                                Home
                            </Typography>
                        </A>
                    </Link>
                    <Typography variant="body1" component="p" sx={styles.Typography}>
                        News & Blog
                    </Typography>
                </Breadcrumbs>
            </Box>
        </Stack>
    );
};
export default Newschip;

const A = styled("a")``;