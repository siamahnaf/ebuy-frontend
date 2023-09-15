import { useEffect, useState } from "react";
import { Box, Stack, ButtonBase, Typography, List, ListItem, Autocomplete, TextField, ClickAwayListener } from "@mui/material";

//All Icons
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import CloseIcon from '@mui/icons-material/Close';

//Data
import CategoriesData from "Data/Header/SearchBar.data";

//Styles
import styles from "Styles/Header/Search.styles";

//Types
interface Props {
    handleClose: () => void;
    open: boolean;
}

const Search = ({ handleClose, open }: Props) => {
    const [input, setInput] = useState<string>("");
    const [categories, setCategories] = useState<string>("All Categories");
    const [showCate, setShowCate] = useState<boolean>(false);
    const categoryHandler = (name: string) => {
        setCategories(name);
        setShowCate(false);
    }
    useEffect(() => {
        if (!open) {
            setCategories("All Categories")
        }
    }, [open])
    return (
        <Box sx={styles.SearchBar} className={open ? "show" : ""}>
            <ButtonBase onClick={handleClose} sx={styles.CloseBtn}>
                <CloseIcon />
            </ButtonBase>
            <Box sx={styles.SearchBarArea}>
                <Stack direction="row" sx={styles.Content}>
                    <ClickAwayListener onClickAway={() => setShowCate(false)}>
                        <Box>
                            <ButtonBase
                                onClick={() => setShowCate(true)}
                                sx={styles.CategoryInput}
                            >
                                <Typography variant="body1" component="p" sx={styles.CategoryInputTex}>
                                    {categories}
                                </Typography>
                                <ArrowDropDownRoundedIcon sx={styles.SelectArrowIcon} />
                            </ButtonBase>
                            <Box sx={styles.SelectContainer} className={showCate ? "visible" : ""}>
                                <List dense disablePadding sx={styles.List}>
                                    {CategoriesData &&
                                        CategoriesData.map((category, i) => (
                                            <Box key={i}>
                                                <ListItem dense disableGutters disablePadding>
                                                    <ButtonBase onClick={() => categoryHandler(category.name)}>
                                                        <Typography variant="body1" component="p">
                                                            {category.name}
                                                        </Typography>
                                                    </ButtonBase>
                                                </ListItem>
                                                {category.sub &&
                                                    category.sub.map((subCategory, i) => (
                                                        <ListItem key={i} dense disableGutters disablePadding>
                                                            <ButtonBase onClick={() => categoryHandler(subCategory.name)}>
                                                                <Typography variant="body1" component="p" sx={styles.ListSubCate}>
                                                                    {subCategory.name}
                                                                </Typography>
                                                            </ButtonBase>
                                                        </ListItem>
                                                    ))
                                                }
                                            </Box>
                                        ))
                                    }
                                </List>
                            </Box>
                        </Box>
                    </ClickAwayListener>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={SearchData}
                        freeSolo
                        onChange={(event, value) => console.log(value)}
                        renderInput={(params) => <TextField {...params} placeholder="Search for item....." />}
                        sx={styles.AutoComplete}
                    />
                </Stack>
            </Box>
        </Box>
    );
};
export default Search;

const SearchData = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
]