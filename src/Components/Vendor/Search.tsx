import { useState } from "react";
import { Box, Stack, Typography, InputBase, InputAdornment, SvgIcon, NativeSelect } from "@mui/material";

//All icons
import { SearchIcon } from "Utilis/Icons";

//Styles
import styles from "Styles/Vendor/Search.styles";

const Search = () => {
    const [input, setInput] = useState("");
    return (
        <Box>
            <Box sx={styles.VendorList}>
                <Typography variant="h4" component="h4">
                    Vendor List
                </Typography>
                <InputBase
                    placeholder="Search for vendor"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    endAdornment={(
                        <InputAdornment position="end">
                            <SvgIcon viewBox="0 0 21 24" sx={{ fontSize: "18px" }}>
                                {SearchIcon}
                            </SvgIcon>
                        </InputAdornment>
                    )}
                    sx={styles.SearchBar}
                />
            </Box>
            <Stack direction="row" sx={styles.Content} alignItems="center">
                <Box sx={styles.VendorInfoText}>
                    <Typography variant="body1" component="p">
                        We have{" "}
                        <Typography variant="body1" component="span">
                            780
                        </Typography>
                        {" "}vendors now
                    </Typography>
                </Box>
                <Stack direction="row" sx={styles.SelectContainer}>
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
export default Search;