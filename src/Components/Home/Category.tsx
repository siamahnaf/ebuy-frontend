import { Box, Grid } from "@mui/material";
import { styled, SxProps } from "@mui/material/styles";
import Link from "next/link"

//Section Header
import SectionHeader from "Utilis/SectionHeader";

//Images
import Category1 from "Assets/category/category1.png";
import Category2 from "Assets/category/category2.png";
import Category3 from "Assets/category/category3.png";
import Category4 from "Assets/category/category4.png";
import Category5 from "Assets/category/category5.png";

//Styles
import styles from "Styles/Home/Category.styles";

const Category = () => {
    return (
        <Box>
            <SectionHeader
                title="Categories"
                description="Find product in easy way"
            />
            <Box sx={{ mb: 1 }}>
                <Grid container spacing={1}>
                    <Grid item {...{ sm: 6.5, xxs: 12 }}>
                        <Link href="/ebuy">
                            <A sx={styles.ImageContainer as SxProps}>
                                <Box sx={styles.Images} component="img" src={Category1} alt="Category" />
                            </A>
                        </Link>
                    </Grid>
                    <Grid item {...{ sm: 2.75, xxs: 6 }}>
                        <Link href="/">
                            <A sx={styles.ImageContainer as SxProps}>
                                <Box sx={styles.Images} component="img" src={Category2} alt="Category" />
                            </A>
                        </Link>
                    </Grid>
                    <Grid item {...{ sm: 2.75, xxs: 6 }}>
                        <Link href="/">
                            <A sx={styles.ImageContainer as SxProps}>
                                <Box sx={styles.Images} component="img" src={Category3} alt="Category" />
                            </A>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container spacing={1}>
                    <Grid item {...{ sm: 5.4, xxs: 12 }}>
                        <Link href="/">
                            <A sx={styles.ImageContainer as SxProps}>
                                <Box sx={styles.Images} component="img" src={Category4} alt="Category" />
                            </A>
                        </Link>
                    </Grid>
                    <Grid item {...{ sm: 6.6, xxs: 12 }}>
                        <Link href="/">
                            <A sx={styles.ImageContainer as SxProps}>
                                <Box sx={styles.Images} component="img" src={Category5} alt="Category" />
                            </A>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
export default Category;

//Custom Component
const A = styled("a")``;