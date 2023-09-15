import { useState } from "react";
import { List, ListItem, ButtonBase } from "@mui/material";

//Data
const bestseller = ["high price", "low price", "new arrivals", "discounts", "popular"];

//Styles
import styles from "Styles/Shop/BestSeller.styles";

const BestSeller = () => {
    const [value, setValue] = useState<string>("");
    return (
        <List dense disablePadding sx={styles.List}>
            {bestseller &&
                bestseller.map((item, i) => (
                    <ListItem key={i} dense disableGutters disablePadding>
                        <ButtonBase onClick={() => setValue(item)}>
                            {item}
                        </ButtonBase>
                    </ListItem>
                ))
            }
        </List>
    );
};
export default BestSeller;