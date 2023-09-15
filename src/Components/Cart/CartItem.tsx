import { Box, Stack, Typography, ButtonBase, SvgIcon } from "@mui/material";

//All icon
import { DeleteIcon } from "Utilis/Icons";

//Components
import DataTable from "../Common/DataTable";

//Styles
import styles from "Styles/Cart/CartItem.styles";

const CartItem = () => {
    return (
        <Box>
            <Stack direction="row" sx={{ mb: "2em", alignItems: "end" }}>
                <Box sx={styles.CartHeader}>
                    <Typography variant="h4" component="h4">
                        Your cart
                    </Typography>
                    <Typography variant="body1" component="p">
                        There are {" "}
                        <Typography variant="body1" component="span">
                            {3}
                        </Typography>
                        {" "}products in your cart
                    </Typography>
                </Box>
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
export default CartItem;