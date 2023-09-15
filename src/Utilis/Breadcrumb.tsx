import { Container, Breadcrumbs, SvgIcon, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

//All Icons
import { ArrowRightIcon, HomeIcon } from "Utilis/Icons";

//Styles
import styles from "Styles/Utilis/Breadcrumb.styles";

//Types
interface Props {
    category?: string;
    subCategory?: string;
    title?: string;
    shop?: string;
}

const Breadcrumb = ({ category, subCategory, title, shop }: Props) => {
    return (
        <Container maxWidth="xxxl" disableGutters sx={styles.Container}>
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
                {shop &&
                    <Link
                        href="/shop"
                    >
                        <A sx={styles.Link}>
                            <Typography variant="body1" component="p">
                                Shop
                            </Typography>
                        </A>
                    </Link>
                }
                {category &&
                    <Link
                        href="/"
                    >
                        <A sx={styles.Link}>
                            <Typography variant="body1" component="p">
                                {category}
                            </Typography>
                        </A>
                    </Link>
                }
                {subCategory &&
                    <Link
                        href="/"
                    >
                        <A sx={styles.Link}>
                            <Typography variant="body1" component="p">
                                {subCategory}
                            </Typography>
                        </A>
                    </Link>
                }
                <Typography variant="body1" component="p" sx={styles.Typography}>
                    {title}
                </Typography>
            </Breadcrumbs>
        </Container >
    );
};
export default Breadcrumb;

//Custom Component
const A = styled("a")``;