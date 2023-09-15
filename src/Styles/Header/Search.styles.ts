import { Theme } from "@mui/material/styles";

export default {
    SearchBar: {
        position: "fixed",
        bgcolor: "primary.searchBg",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999999,
        display: "none",
        "&.show": {
            display: "block",

        }
    },
    SearchBarArea: {
        position: "absolute",
        left: "50%",
        top: "5%",
        transform: "translate(-50%)"
    },
    Content: {
        bgcolor: "background.default",
        borderRadius: "8px",
        py: "0",
        mt: {
            md: "0px",
            xxs: "5%"
        }
    },
    AutoComplete: {
        width: {
            xxxl: "50em",
            xxl: "45em",
            xl: "35em",
            msm: "30em",
            sm: "25em",
            xs: "18em",
            xxs: "16em"
        },
        input: {
            p: "0",
            m: "0",
            "&:hover": {
                borderColor: "transparent"
            }
        },
        "& .MuiOutlinedInput-root": {
            py: {
                xxxl: "15px",
                xxl: "10px",
                xxs: "2px"
            },
        },
        "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
            borderRadius: "0",
            "&:hover": {
                borderColor: "transparent",
                outline: "none"
            },
            "&:after": {
                bgcolor: "primary.black_opacity",
                position: "absolute",
                width: "1px",
                left: "0",
                content: '""',
                zIndex: 9999,
                top: "-5px",
                height: "100%"
            }
        }
    },
    SelectContainer: {
        position: "absolute",
        bgcolor: "primary.searchBgWhite",
        top: "110%",
        width: "150%",
        borderRadius: "5px",
        left: "-25%",
        visibility: "hidden",
        opacity: "0",
        "&.visible": {
            visibility: "visible",
            opacity: "1"
        }
    },
    CategoryInput: {
        p: "10px 15px",
        height: "100%",
        borderRadius: "5px 0 0 5px",
        cursor: "pointer",
        width: "11.5em",
        textAlign: "left"
    },
    CategoryInputTex: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "clip",
        width: "100%",
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            xxs: "14px"
        }
    },
    List: {
        columnCount: 4,
        columnGap: "40px",
        background: (theme: Theme) => theme.palette.primary.gradientOne,
        py: "20px",
        px: "20px",
        borderRadius: "5px",
        li: {
            m: "0",
            py: "2px",
            display: "table",
            pageBreakInside: "avoid",
            breakInside: "avoid-column",
            button: {
                textAlign: "left",
                p: "2px 8px",
                borderRadius: "3px",
                "& p": {
                    fontSize: {
                        xxxl: "16px",
                        xxl: "15px",
                        xxs: "14px"
                    },
                    fontWeight: 600,
                }
            }
        }
    },
    ListSubCate: {
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            xxs: "14px"
        },
        fontWeight: "400 !important",
        color: "primary.main_tartiary"
    },
    SelectArrowIcon: {
        width: "20%",
        height: "100%",
        cursor: "pointer",
        svg: {
            fontSize: {
                xxxl: "27px",
                xxl: "26px",
                xxs: "25px"
            }
        }
    },
    CloseBtn: {
        fontSize: {
            xxxl: "32px",
            xxl: "31px",
            xxs: "30px"
        },
        padding: "6px 10px",
        borderRadius: "6px",
        mt: "20px",
        mr: "20px",
        color: "background.default"
    }
}