import { Box, Grid } from "@mui/material";
import Link from "next/link";

//Seaction Header
import SectionHeader from "Utilis/SectionHeader";

//Images
import Collcetion1 from "Assets/collection/collection1.png";
import Collcetion2 from "Assets/collection/collection2.png";
import Collcetion3 from "Assets/collection/collection3.png";
import Collcetion4 from "Assets/collection/collection4.png";
import Collcetion5 from "Assets/collection/collection5.png";

//Styles
import styles from "Styles/Home/Collection.styles";

const Collections = () => {
    return (
        <Box>
            <SectionHeader
                title="Winter"
                abbreviation="Collection"
                description="Amazing products added recently in our catalog"
            />
            <Box>
                <Grid container spacing={1}>
                    <Grid item {...{ sm: 6, xxs: 12 }}>
                        <Link href="/">
                            <a>
                                <Box sx={styles.Container}>
                                    <Box sx={styles.Images}>
                                        <Box component="img" src={Collcetion1} alt="image" />
                                    </Box>
                                </Box>
                            </a>
                        </Link>
                    </Grid>
                    <Grid item {...{ sm: 6, xxs: 12 }}>
                        <Grid container spacing={1} sx={{ mb: 1 }}>
                            <Grid item {...{ xxs: 6 }}>
                                <Link href="/">
                                    <a>
                                        <Box sx={styles.Container}>
                                            <Box sx={styles.Images}>
                                                <Box component="img" src={Collcetion2} alt="image" />
                                            </Box>
                                        </Box>
                                    </a>
                                </Link>
                            </Grid>
                            <Grid item {...{ xxs: 6 }}>
                                <Link href="/">
                                    <a>
                                        <Box sx={styles.Container}>
                                            <Box sx={styles.Images}>
                                                <Box component="img" src={Collcetion4} alt="image" />
                                            </Box>
                                        </Box>
                                    </a>
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item {...{ xxs: 6 }}>
                                <Link href="/">
                                    <a>
                                        <Box sx={styles.Container}>
                                            <Box sx={styles.Images}>
                                                <Box component="img" src={Collcetion3} alt="image" />
                                            </Box>
                                        </Box>
                                    </a>
                                </Link>
                            </Grid>
                            <Grid item {...{ xxs: 6 }}>
                                <Link href="/">
                                    <a>
                                        <Box sx={styles.Container}>
                                            <Box sx={styles.Images}>
                                                <Box component="img" src={Collcetion5} alt="image" />
                                            </Box>
                                        </Box>
                                    </a>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box >
    );
};
export default Collections;