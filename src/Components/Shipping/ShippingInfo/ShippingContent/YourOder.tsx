import { Box, Stack, Typography, ButtonBase, SvgIcon } from "@mui/material";

//All icons
import { DeleteIcon } from "Utilis/Icons";

//DataTable
import DataTable from "Components/Common/DataTable";

//Styles
import styles from "Styles/Shipping/YourOrder.styles";

const YourOder = () => {
    return (
        <Box>
            <Stack sx={{ mb: "10px" }}>
                <Typography variant="h6" component="h6" sx={styles.Title}>
                    Your Order
                </Typography>
                <Box sx={styles.ButtonContainer}>
                    <ButtonBase sx={styles.Button}>
                        <SvgIcon viewBox="0 0 24 24">
                            {DeleteIcon}
                        </SvgIcon>
                        Clear Cart
                    </ButtonBase>
                </Box>
            </Stack>
            <DataTable />
        </Box>
    );
};
export default YourOder;