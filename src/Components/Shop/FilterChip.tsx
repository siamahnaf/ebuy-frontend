import { useState } from "react";
import { Box, Grid, Stack, Chip, Typography, Breadcrumbs, SvgIcon } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

//All icons
import { ArrowRightIcon, HomeIcon, CloseIcon } from "Utilis/Icons";

//Styles
import styles from "Styles/Shop/FilterChip.styles";

//Data
const chips = [
    { key: 0, label: 'Top Wear' },
    { key: 1, label: 'T-Shirts' },
    { key: 2, label: 'Wallets' },
    { key: 3, label: 'Shirts' },
    { key: 4, label: 'Dessses' },
    { key: 5, label: 'Shorts' }
]

//Types
interface ChipData {
    key: number;
    label: string;
}

const FilterChip = () => {
    const [chipData, setChipData] = useState<readonly ChipData[]>(chips);
    const handleDelete = (value: ChipData) => {
        setChipData((chips) => chips.filter((chip) => chip.key !== value.key));
    };
    return (
        <Stack direction="row" sx={styles.Container}>
            <Grid container spacing={{ md: 2, xxs: 4 }}>
                <Grid item {...{ md: 5, xxs: 12 }}>
                    <Typography variant="h5" component="h5" sx={styles.CategoryName}>
                        Men&apos;s
                    </Typography>
                    <Breadcrumbs
                        aria-label="breadcrumb"
                        separator={<SvgIcon sx={styles.Separator}>{ArrowRightIcon}</SvgIcon>}
                    >
                        <Link href="/">
                            <A sx={styles.HomeIcon}>
                                <SvgIcon viewBox="0 0 23 23">{HomeIcon}</SvgIcon>
                                <Typography variant="body1" component="span">
                                    Home
                                </Typography>
                            </A>
                        </Link>
                        <Link
                            href="/"
                        >
                            <A sx={styles.Link}>
                                <Typography variant="body1" component="p">
                                    Shop
                                </Typography>
                            </A>
                        </Link>
                        <Typography variant="body1" component="p" sx={styles.Typography}>
                            Search
                        </Typography>
                    </Breadcrumbs>
                </Grid>
                <Grid item {...{ md: 7, xxs: 12 }}>
                    <Stack direction="row" spacing={1} sx={styles.ChipContainer}>
                        {chipData &&
                            chipData.map((chip, i) => (
                                <StyledChip
                                    key={i}
                                    label={chip.label}
                                    onDelete={() => handleDelete(chip)}
                                    deleteIcon={<SvgIcon viewBox="0 0 24 24">
                                        {CloseIcon}
                                    </SvgIcon>}
                                />
                            ))
                        }
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    );
};
export default FilterChip;

const StyledChip = styled(Chip)(({ theme }) => ({
    "&.MuiChip-root": {
        position: "relative",
        background: theme.palette.background.default,
        borderRadius: "3px",
        padding: {
            msm: "20px 0",
            sm: "18px 0"
        },
        paddingLeft: "22px",
        paddingRight: "5px",
        boxShadow: `0 0 20px ${theme.palette.primary.box_shadow}`,
        color: theme.palette.primary.main,
        fontSize: {
            msm: "14px",
            sm: "13px"
        },
        marginBottom: "10px"
    },
    "& .MuiChip-deleteIcon": {
        left: "15px",
        position: "absolute",
        fontSize: "22px !important",
        color: `${theme.palette.primary.main} !important`,
        top: "50%",
        transform: "translateY(-50%)",
        padding: "6px"
    }
}));
const A = styled("a")``;