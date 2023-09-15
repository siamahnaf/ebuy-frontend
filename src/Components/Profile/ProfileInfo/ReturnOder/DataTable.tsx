import { Dispatch, SetStateAction } from "react";
import { Box, SvgIcon, Typography, ButtonBase } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MaterialTable from "@material-table/core";

//All icons
import { DeleteIcon } from "Utilis/Icons";

//Import types
import { Carts } from "Typings/Cart.types";

//Styles
import styles from "Styles/Profile/ReturnOrder.styles";

//Types
interface Props {
    products: Carts[];
    setSuggestion: Dispatch<SetStateAction<Carts[]>>;
    setReturnItem: Dispatch<SetStateAction<Carts[]>>;
}

const DataTable = ({ products, setSuggestion, setReturnItem }: Props) => {
    const theme = useTheme();
    const RevomeHanlder = (id: number) => {
        var index = products.findIndex(each => each.id == id);
        setSuggestion(oldArray => [...oldArray, products[index]]);
        products.splice(index, 1);
        setReturnItem(products);
    }
    const data: any[] = [];
    products && products.forEach(product => {
        data.push({
            id:
                <Typography variant="body1" component="p" sx={styles.TableInfos}>
                    {product.id}
                </Typography>,
            title:
                <Box sx={styles.ProductInfos}>
                    <Typography variant="h6" component="h6">
                        {product.product.name}
                    </Typography>
                    <Typography variant="body1" component="p">
                        By: The Cotton House
                    </Typography>
                </Box>,
            quantity:
                <Typography variant="body1" component="p" sx={styles.TableInfos}>
                    {product.count}
                </Typography>,
            action:
                <ButtonBase onClick={() => RevomeHanlder(product.id)} sx={styles.RemoveIcon}>
                    <SvgIcon viewBox="0 0 24 24">{DeleteIcon}</SvgIcon>
                </ButtonBase>
        })
    })
    const columns = [
        { title: 'Product No.', field: 'id', width: "100px" },
        { title: 'Title', field: 'title', width: "300px" },
        { title: 'Quantity', field: 'quantity', width: "100px" },
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
                            <Typography variant="body1" component="p" sx={{ fontSize: "14px" }}>
                                Your Return List is Empty!
                            </Typography>
                        )
                    }
                }}
                onSelectionChange={(e) => console.log(e)}
            />
        </Box>
    );
};
export default DataTable;