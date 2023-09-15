import { List, ListItem, Typography } from "@mui/material";

//Data
import singleData from "Data/Product/product.data";

//Styles
import styles from "Styles/Product/AdditionalInfo.styles";

const AdditionalInfo = () => {
    return (
        <List dense disablePadding sx={styles.List}>
            {singleData &&
                singleData.additionalInfo.map((info, i) => (
                    <ListItem key={i} {...{ direction: "row" }}>
                        <Typography variant="body1" component="p">
                            {info.field}
                        </Typography>
                        <Typography variant="body1" component="p" sx={{ ml: "30px" }}>
                            {info.value}
                        </Typography>
                    </ListItem>
                ))
            }
        </List>
    );
};
export default AdditionalInfo;