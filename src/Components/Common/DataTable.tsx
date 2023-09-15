import { Box, Stack, SvgIcon, Typography, ButtonBase, InputBase, Rating } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MaterialTable from "@material-table/core";

//All icons
import { DeleteIcon, ArrowUp, ArrowDown } from "Utilis/Icons";
import { Star } from '@mui/icons-material';

//Data
import cartData from "Data/Cart/Cart.data";

//Styles
import styles from "Styles/Common/DataTable.styles";

const DataTable = () => {
    const theme = useTheme();
    const data: any[] = [];
    cartData && cartData.forEach(cart => {
        data.push({
            product: <Stack direction="row" sx={{ alignItems: "center" }}>
                <Box>
                    <Box component="img" src={cart.product.images[0].url} alt="Product Image" sx={styles.ProductImages} />
                </Box>
                <Box>
                    <Typography variant="h6" component="h6" sx={styles.ProductTitle}>
                        {cart.product.name}
                    </Typography>
                    <Rating
                        name="half-rating-read"
                        defaultValue={5}
                        precision={4}
                        readOnly
                        emptyIcon={<Star fontSize="inherit" />}
                        sx={styles.Star}
                    />
                </Box>
            </Stack>,
            price: <Typography variant="h6" component="h6" sx={styles.ProductPrice}>
                ${cart.product.price}
            </Typography>,
            quantity: <Box sx={{ position: "relative" }} className="sdfjshfggb">
                <InputBase
                    value={cart.count}
                    type="text"
                    sx={styles.InputField}
                />
                <Box sx={styles.CounterButton}>
                    <ButtonBase>
                        <SvgIcon viewBox="0 0 23 13">
                            {ArrowUp}
                        </SvgIcon>
                    </ButtonBase>
                    <ButtonBase>
                        <SvgIcon viewBox="0 0 23 13">
                            {ArrowDown}
                        </SvgIcon>
                    </ButtonBase>
                </Box>
            </Box>,
            subtotal:
                <Typography variant="h6" component="h6" sx={styles.ProductPriceTotal}>
                    ${cart.product.price * cart.count}
                </Typography>,
            action:
                <ButtonBase sx={styles.RemoveButton}>
                    <SvgIcon viewBox="0 0 24 24">{DeleteIcon}</SvgIcon>
                </ButtonBase >
        })
    })
    const columns = [
        { title: 'Product', field: 'product', width: "300px" },
        { title: 'Price', field: 'price', width: "75px" },
        { title: 'Quantity', field: 'quantity', width: "100px" },
        { title: 'Subtotal', field: 'subtotal', width: "80px" },
        { title: 'Remove', field: 'action', width: "100px" }
    ];
    return (
        <Box sx={styles.DataTable}>
            <MaterialTable
                columns={columns}
                data={data}
                options={{
                    search: false,
                    showTitle: false,
                    toolbar: false,
                    selection: true,
                    paging: false,
                    headerStyle: {
                        backgroundColor: theme.palette.primary.gray_primary,
                        color: theme.palette.primary.main,
                        fontSize: "15px"
                    },
                    tableLayout: "fixed"
                }}
                localization={{
                    body: {
                        emptyDataSourceMessage: (
                            <Typography variant="body1" component="p">
                                Cart is Empty!
                            </Typography>
                        ),
                    },
                }}
                onSelectionChange={(e) => console.log(e)}
            />
        </Box>
    );
};
export default DataTable;