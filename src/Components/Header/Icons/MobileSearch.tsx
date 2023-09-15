import { Box, Stack, Autocomplete, TextField, ClickAwayListener, Backdrop } from "@mui/material";

//Styles
import styles from "Styles/Header/Search.styles";

//Types
interface Props {
    handleClose: () => void;
    open: boolean;
}

const MobileSearch = ({ handleClose, open }: Props) => {
    return (
        <Backdrop
            open={open}
            onClick={handleClose}
            sx={{ alignItems: "baseline" }}
        >
            <Stack direction="row" sx={styles.Content} onClick={e => e.stopPropagation()}>
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
        </Backdrop>
    );
};
export default MobileSearch;

const SearchData = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
]