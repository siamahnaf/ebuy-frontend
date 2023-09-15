import { useState, SyntheticEvent } from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from "@mui/lab";

//Components
import Description from "./ProductDetails/Description";
import AdditionalInfo from "./ProductDetails/AdditionalInfo";
import Vendor from "./ProductDetails/Vendor";
import Reviews from "./ProductDetails/Reviews";

//Styles
import styles from "Styles/Product/ProductDetails.styles";

const ProductDetails = () => {
    const [value, setValue] = useState<string>('1');
    const handleChange = (event: SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <Box sx={styles.DetailContainer}>
            <TabContext value={value}>
                <Box>
                    <TabList
                        onChange={handleChange}
                        variant="scrollable"
                        aria-label="lab API tabs example"
                        TabIndicatorProps={{
                            style: {
                                display: "none",
                            }
                        }}
                        sx={{
                            "& .MuiTabScrollButton-root": {
                                "&.Mui-disabled": {
                                    opacity: 0.5,
                                    pointerEvents: "none"
                                }
                            }
                        }}
                    >
                        <Tab label="Description" value="1" sx={styles.TabButton} />
                        <Tab label="Additional Info" value="2" sx={styles.TabButton} />
                        <Tab label="Vendor" value="3" sx={styles.TabButton} />
                        <Tab label={`Reviews(3)`} value="4" sx={styles.TabButton} />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <Description />
                </TabPanel>
                <TabPanel value="2">
                    <AdditionalInfo />
                </TabPanel>
                <TabPanel value="3">
                    <Vendor />
                </TabPanel>
                <TabPanel value="4">
                    <Reviews />
                </TabPanel>
            </TabContext >
        </Box >
    );
};
export default ProductDetails;