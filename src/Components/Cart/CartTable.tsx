import { Box, List, ListItem, ButtonBase, SvgIcon, Typography } from "@mui/material";
import Link from "next/link";

//All icons
import { CheckoutIcon } from "Utilis/Icons";

//Styles
import styles from "Styles/Cart/CartTable.styles";

const CartTable = () => {
    return (
        <Box sx={styles.TableContainer}>
            <List dense disablePadding sx={styles.List}>
                <ListItem {...{ direction: "row" }} dense disablePadding disableGutters>
                    <Typography variant="body1" component="h6">
                        Subtotal
                    </Typography>
                    <Typography variant="body1" component="p">
                        $450
                    </Typography>
                </ListItem>
                <ListItem {...{ direction: "row" }} dense disablePadding disableGutters>
                    <Typography variant="body1" component="h6">
                        Shipping
                    </Typography>
                    <Typography variant="body1" component="p">
                        $50
                    </Typography>
                </ListItem>
                <ListItem {...{ direction: "row" }} dense disablePadding disableGutters>
                    <Typography variant="body1" component="h6">
                        Estimate for
                    </Typography>
                    <Typography variant="body1" component="p">
                        United Kingdom
                    </Typography>
                </ListItem>
                <ListItem {...{ direction: "row" }} dense disablePadding disableGutters>
                    <Typography variant="body1" component="h6">
                        Total
                    </Typography>
                    <Typography variant="body1" component="p">
                        $500
                    </Typography>
                </ListItem>
            </List >
            <ButtonBase sx={styles.ProceedButton}>
                <Link href="/shipping/index">
                    <a>
                        Proceed to Checkout
                        <SvgIcon viewBox="0 0 24 24">
                            {CheckoutIcon}
                        </SvgIcon>
                    </a>
                </Link>
            </ButtonBase>
        </Box >
    );
};
export default CartTable;