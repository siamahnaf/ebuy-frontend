import { useState, useEffect } from "react";
import { Box, List, ListItem, ButtonBase, Typography, InputBase, InputAdornment, SvgIcon } from "@mui/material";

//All icons
import { SearchIcon } from "Utilis/Icons";

//Data
import CategoriesData from "Data/Shop/Categories.data";

//Styles
import styles from "Styles/Shop/FilterWidget.styles";

const Categories = () => {
    const [categories, setCategories] = useState(CategoriesData);
    const [selected, setSelected] = useState<string[]>([]);
    const [input, setInput] = useState("");
    const categoriesHanlder = (item: string) => {
        let items: string[] = [];
        if (!selected.includes(item)) {
            items.push(item)
        } else {
            const index = items.indexOf(item);
            if (index !== -1) items.splice(index, 1);
        }
        setSelected(items);
    }
    const onMouseEnter = () => {
        const body: HTMLBodyElement = document.querySelector('body')!;
        const header: HTMLElement = document.querySelector('header')!;
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        body.style.overflow = "hidden";
        body.style.paddingRight = `${scrollBarWidth}px`;
        header.style.paddingRight = `${scrollBarWidth}px`;
    }
    const onMouseLeave = () => {
        const body: HTMLBodyElement = document.querySelector('body')!;
        const header: HTMLElement = document.querySelector('header')!;
        body.style.overflow = "unset";
        body.style.paddingRight = "0px";
        header.style.paddingRight = "0px";
    }
    useEffect(() => {
        if (input.length > 0) {
            const mathches = CategoriesData.filter(item => {
                const escapeRegExp = (str: string) => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                const regex = new RegExp(escapeRegExp(input), "gi");
                return item.name.match(regex);
            })
            setCategories(mathches);
        } else {
            setCategories(CategoriesData);
        }
    }, [input])
    return (
        <Box>
            <Box>
                <InputBase
                    placeholder="Search for Brands"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    startAdornment={(
                        <InputAdornment position="start">
                            <SvgIcon viewBox="0 0 21 24" sx={{ fontSize: "18px" }}>
                                {SearchIcon}
                            </SvgIcon>
                        </InputAdornment>
                    )}
                    sx={styles.SearchBase}
                />
            </Box>
            <Box onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} sx={styles.AutoScroll}>
                <List dense disablePadding sx={styles.List}>
                    {categories &&
                        categories.map((category, i) => (
                            <ListItem key={i} dense disablePadding disableGutters>
                                <ButtonBase
                                    onClick={() => categoriesHanlder(category.name)}
                                    className={selected.includes(category.name) ? "selected" : ""}
                                >
                                    <Typography variant="body1" component="p">
                                        {category.name}
                                    </Typography>
                                </ButtonBase>
                            </ListItem>
                        ))
                    }
                </List>
            </Box>
        </Box>
    );
};

export default Categories;