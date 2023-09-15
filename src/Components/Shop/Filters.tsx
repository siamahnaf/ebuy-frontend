import { useState } from "react";
import { Box, Typography, Stack, SvgIcon, ButtonBase, ClickAwayListener } from "@mui/material";

//All icons
import { FilterIcon, toggleIcon } from "Utilis/Icons";

//Components
import FilterWidget from "./Filters/FilterWidget";
import BestSeller from "./Filters/BestSeller";

//Styles
import styles from "Styles/Shop/Filters.styles";

const Filters = () => {
    const [filter, setFilter] = useState(false);
    const [seller, setSeller] = useState(false);
    return (
        <Box>
            <Stack direction="row" sx={styles.ItemsNumber}>
                <Typography variant="body1" component="h6">
                    Clothing & Apparels
                </Typography>
                <Typography variant="body1" component="p">
                    - 704386 items
                </Typography>
            </Stack>
            <Stack sx={{ my: "1.5em" }} direction="row" spacing={0} alignItems="center">
                <Box sx={styles.FilterContainer}>
                    <ClickAwayListener onClickAway={() => setFilter(false)}>
                        <Box>
                            <ButtonBase onClick={() => setFilter(!filter)} sx={styles.Buttons}>
                                <SvgIcon viewBox="0 0 24 24">
                                    {FilterIcon}
                                </SvgIcon>
                                Filters
                            </ButtonBase>
                            {filter &&
                                <Box sx={styles.FilterWidget}>
                                    <FilterWidget setFilter={setFilter} />
                                </Box>
                            }
                        </Box>
                    </ClickAwayListener>
                </Box>
                <Box sx={styles.SellerContainer}>
                    <ClickAwayListener onClickAway={() => setSeller(false)}>
                        <Box>
                            <ButtonBase onClick={() => setSeller(!seller)} sx={styles.Buttons}>
                                <SvgIcon viewBox="0 0 24 21">
                                    {toggleIcon}
                                </SvgIcon>
                                BestSellers
                            </ButtonBase>
                            {seller &&
                                <Box sx={styles.SellerWidget}>
                                    <BestSeller />
                                </Box>
                            }
                        </Box>
                    </ClickAwayListener>
                </Box>
            </Stack>
        </Box>
    );
};
export default Filters;