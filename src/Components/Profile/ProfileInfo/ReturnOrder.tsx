import { useState, useEffect, ChangeEvent } from "react";
import { Box, Grid, InputBase, InputLabel, NativeSelect, Typography, SvgIcon, InputAdornment, ButtonBase } from "@mui/material";

//Components
import DataTable from "./ReturnOder/DataTable";


//Custom Icon
import { SearchIcon } from "Utilis/Icons";

//Data 
import CartData from "Data/Cart/Cart.data";

//Types
import { Carts } from "Typings/Cart.types";

//Styles
import styles from "Styles/Profile/ReturnOrder.styles";

const ReturnOrder = () => {
    const [input, setInput] = useState<string>("");
    const [suggestion, setSuggestion] = useState<Carts[]>(CartData);
    const [returnItem, setReturnItem] = useState<Carts[]>([]);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }
    useEffect(() => {
        const productArray = CartData.filter(item => !returnItem.includes(item));
        let mathches = productArray
        if (input.length > 0) {
            mathches = productArray.filter(item => {
                const escapeRegExp = (str: string) => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                const regex = new RegExp(escapeRegExp(input), "gi");
                return item.product.name.match(regex);
            })
        }
        setSuggestion(mathches);
    }, [returnItem, input])
    const returnHanlder = (id: number) => {
        var index = suggestion.findIndex(each => each.id == id);
        setReturnItem(oldArray => [...oldArray, suggestion[index]]);
        suggestion.splice(index, 1);
        setSuggestion(suggestion);
    }
    return (
        <Box>
            <Box sx={styles.TabTitle}>
                <Typography variant="h6" component="h6">
                    Return Order
                </Typography>
            </Box>
            <Box>
                <InputBase
                    placeholder="Search for products"
                    value={input}
                    onChange={onChangeHandler}
                    startAdornment={(
                        <InputAdornment position="start" sx={styles.SearchIcon}>
                            <SvgIcon viewBox="0 0 21 24">
                                {SearchIcon}
                            </SvgIcon>
                        </InputAdornment>
                    )}
                    sx={styles.SearchBar}
                />
            </Box>
            <Box>
                {suggestion &&
                    suggestion.map((item, i) => (
                        <Grid container spacing={2} key={i} sx={{ alignItems: "center" }}>
                            <Grid item {...{ xxl: 1, lg: 1.3, smd: 2, lsm: 2.5, sm: 2, xxs: 12 }} sx={{ pl: { msm: "16px", xxs: "0px !important" } }}>
                                <Box component="img" src={item.product.images[0].url} alt="ProductImage" sx={styles.Images} />
                            </Grid>
                            <Grid {...{ xxl: 6, lg: 5.7, smd: 5, lsm: 4.5, sm: 8, xxs: 12 }}>
                                <Box sx={styles.ProductInfos}>
                                    <Typography variant="h6" component="h6">
                                        {item.product.name}
                                    </Typography>
                                    <Typography variant="body1" component="p">
                                        By: The Cotton House
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid {...{ smd: 2.5, lsm: 2.5, sm: 8, xxs: 12 }}>
                                <Typography variant="body1" component="p" sx={styles.SizeInfo}>
                                    Size: S Qty: 2
                                </Typography>
                            </Grid>
                            <Grid {...{ smd: 2.5, lsm: 2.5, sm: 4, xxs: 12 }}>
                                <ButtonBase onClick={() => returnHanlder(item.id)} sx={styles.AddReturnButton}>
                                    <Typography variant="body1" component="p">
                                        Add to Return
                                    </Typography>
                                </ButtonBase>
                            </Grid>
                        </Grid>
                    ))
                }
            </Box>
            <Box sx={{ mt: { lsm: "0px", xxs: "30px" } }}>
                <DataTable
                    products={returnItem}
                    setSuggestion={setSuggestion}
                    setReturnItem={setReturnItem}
                />
            </Box>
            {returnItem && returnItem.length > 0 &&
                <Box>
                    <Grid container spacing={3}>
                        <Grid item {...{ smd: 4, msm: 3, xxs: 12 }}>
                            <Typography variant="body1" component="p" sx={styles.Label}>
                                Reason
                            </Typography>
                        </Grid>
                        <Grid item {...{ smd: 8, msm: 9, xxs: 12 }}>
                            <NativeSelect sx={styles.Select}>
                                <option value={10}>Select One</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </NativeSelect>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item {...{ smd: 4, msm: 3, xxs: 12 }}>
                            <Typography variant="body1" component="p" sx={styles.Label}>
                                Comments
                            </Typography>
                        </Grid>
                        <Grid item {...{ smd: 8, msm: 9, xxs: 12 }}>
                            <InputBase
                                placeholder="Damage and the wrong color or the product"
                                multiline
                                minRows={5}
                                maxRows={8}
                                sx={styles.TextArea}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} sx={{ mt: "1px" }}>
                        <Grid item {...{ smd: 4, msm: 3, xxs: 12 }}>
                            <Typography variant="body1" component="p" sx={styles.Label}>
                                File attachments
                            </Typography>
                        </Grid>
                        <Grid item {...{ smd: 8, msm: 9, xxs: 12 }}>
                            <Box>
                                <InputBase
                                    id="picture"
                                    type="file"
                                    sx={{ display: "none" }}
                                />
                                <InputLabel htmlFor="picture" sx={styles.File}>
                                    Add File
                                </InputLabel>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box sx={{ textAlign: "center", mt: "20px" }}>
                        <ButtonBase sx={styles.AddReturnButton}>
                            <Typography variant="body1" component="p">
                                Complete Return Request
                            </Typography>
                        </ButtonBase>
                    </Box>
                </Box>
            }
        </Box>
    );
};
export default ReturnOrder;