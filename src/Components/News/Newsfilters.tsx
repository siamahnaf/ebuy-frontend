import { Box, Stack, Typography, NativeSelect } from "@mui/material";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

//Styles
import styles from "Styles/News/Filter.styles";

const Newsfilter = () => {
    return (
        <Box>
            <Stack direction="row" sx={styles.FilterContainer}>
                <Box sx={styles.FashionTextContainer}>
                    <Typography variant="body1" component="p" sx={styles.NewsInfoText}>
                        <StarOutlinedIcon /> Fashions Article
                    </Typography>
                </Box>
                <Stack direction="row" sx={{ flex: 1, justifyContent: "right" }}>
                    <Stack direction="row" sx={{ alignItems: "center" }}>
                        <Typography variant="body1" component="p" sx={styles.SelectText}>
                            Show:{" "}
                        </Typography>
                        <Box>
                            <NativeSelect
                                defaultValue={10}
                                sx={styles.Select}
                            >
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                                <option value={30}>30</option>
                            </NativeSelect>
                        </Box>
                    </Stack>
                    <Stack direction="row" sx={{ alignItems: "center" }}>
                        <Typography variant="body1" component="p" sx={styles.SelectText}>
                            Sort by:{" "}
                        </Typography>
                        <Box>
                            <NativeSelect
                                defaultValue="ascending"
                                sx={styles.Select}
                            >
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>
                                <option value="popular">Popular</option>
                                <option value="rattinghigh">Ratting High</option>
                                <option value="rattinglow">Ratting Low</option>
                            </NativeSelect>
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
};
export default Newsfilter;