import { useState, SyntheticEvent, Dispatch, SetStateAction } from "react"
import { Box, Grid, Tab, ButtonBase, Typography, SvgIcon } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

//All icons
import { CloseIcon } from "Utilis/Icons";

//Compoents
import Categories from './FilterWidget/Categories';
import Brand from './FilterWidget/Brand';
import Price from './FilterWidget/Price';
import Color from './FilterWidget/Color';
import Discount from './FilterWidget/Discount';

//Data
const TabLabel = ["Categories", "Brand", "Price", "Color", "Discounted Range"];

//Styles
import styles from "Styles/Shop/FilterWidget.styles";

//Types
interface Props {
    setFilter: Dispatch<SetStateAction<boolean>>;
}

const FilterWidget = ({ setFilter }: Props) => {
    const [value, setValue] = useState<string>('1');
    const handleChange = (event: SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <TabContext value={value}>
            <Grid container spacing={2}>
                <Grid item {...{ smd: 2.2, sm: 3, xs: 4, xxs: 4.5 }}>
                    <Box>
                        <Typography variant="h5" component="h5" sx={styles.Title}>
                            Filters
                        </Typography>
                        <TabList
                            onChange={handleChange}
                            orientation="vertical"
                            aria-label="lab API tabs example"
                            TabIndicatorProps={{
                                style: {
                                    display: "none",
                                }
                            }}
                        >
                            {TabLabel &&
                                TabLabel.map((label, i) => (
                                    <Tab
                                        key={i}
                                        label={label}
                                        value={(i + 1).toString()}
                                        sx={styles.TabButton}
                                    />
                                ))
                            }
                        </TabList>
                    </Box>
                </Grid>
                <Grid item {...{ smd: 9.8, sm: 9, xs: 8, xxs: 7.5 }}>
                    <ButtonBase sx={styles.CloseButton} onClick={() => setFilter(false)}>
                        <SvgIcon>
                            {CloseIcon}
                        </SvgIcon>
                    </ButtonBase>
                    <Box sx={styles.WidgetPanel}>
                        <TabPanel value="1"><Categories /></TabPanel>
                        <TabPanel value="2"><Brand /></TabPanel>
                        <TabPanel value="3"><Price /></TabPanel>
                        <TabPanel value="4"><Color /></TabPanel>
                        <TabPanel value="5"><Discount /></TabPanel>
                    </Box>
                </Grid>
            </Grid>
        </TabContext >
    );
};
export default FilterWidget;