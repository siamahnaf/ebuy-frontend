import { Theme } from "@mui/material/styles";

export default {
    TabTitle: {
        ml: "-24px",
        pl: "24px",
        pb: "20px",
        mb: "10px",
        h6: {
            fontWeight: 600,
            fontSize: {
                xxxl: "20px",
                xxl: "19px",
                msm: "18px",
                xxs: "17px"
            }
        }
    },
    SearchBar: {
        bgcolor: "primary.gray_primary",
        width: {
            sm: "60%",
            xxs: "100%"
        },
        p: {
            xxxl: "15px 25px",
            xxl: "12px 20px",
            xxs: "5px 15px"
        },
        borderRadius: "5px",
        mb: "25px",
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        }
    },
    SearchIcon: {
        svg: {
            fontSize: {
                xxxl: "18px",
                xxl: "17px",
                msm: "16px",
                xxs: "15px"
            }
        }
    },
    Images: {
        width: "100%",
        borderRadius: "4px"
    },
    ProductInfos: {
        ml: {
            sm: "20px",
            xxs: "0px"
        },
        h6: {
            fontWeight: 600,
            mb: "2px",
            fontSize: {
                xxxl: "18px",
                xxl: "17px",
                msm: "16px",
                xxs: "15px"
            }
        },
        "& p": {
            fontWeight: 300,
            fontSize: {
                xxxl: "16px",
                xxl: "15px",
                msm: "14px",
                xxs: "13px"
            }
        }
    },
    SizeInfo: {
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        }
    },
    AddReturnButton: {
        bgcolor: "primary.main",
        color: "background.default",
        p: {
            xxxl: "15px 20px",
            xxl: "12px 20px",
            xl: "10px 18px",
            xxs: "8px 20px"
        },
        borderRadius: "5px",
        mt: {
            lsm: "2em",
            sm: "0",
            xxs: "1.5em"
        },
        mb: {
            sm: "0",
            xxs: "1.5em"
        },
        "& p": {
            fontSize: {
                xxxl: "14px",
                xxl: "13px",
                msm: "12px",
                xxs: "11px"
            },
            fontWeight: 600,
            textTransform: "uppercase"
        }
    },
    TableInfos: {
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        },
        fontWeight: 500
    },
    RemoveIcon: {
        p: "10px",
        borderRadius: "50%",
        svg: {
            fontSize: {
                xxxl: "22px",
                xxl: "21px",
                msm: "20px",
                xxs: "19px"
            },
            color: "primary.delete_color"
        }
    },
    DataTable: {
        mb: "1em",
        "& .MuiTableCell-root": {
            border: "none"
        },
        "& .MuiPaper-elevation2": {
            boxShadow: "none",
            borderBottom: (theme: Theme) => `1px solid ${theme.palette.primary.gray_primary}`
        },
        "& .MuiTableRow-root": {
            "& th:first-child": {
                borderRadius: "6px 0 0 6px"
            },
            "& th:last-child": {
                borderRadius: "0 6px 6px 0"
            }
        }
    },
    Label: {
        fontSize: {
            xxxl: "17px",
            xxl: "16px",
            msm: "15px",
            xxs: "14px"
        }
    },
    Select: {
        width: "100%",
        borderRadius: "5px",
        bgcolor: "primary.gray_primary",
        mb: "15px",
        select: {
            p: {
                xxxl: "15px 20px",
                xxl: "12px 18px",
                xxs: "8px 15px"
            },
            borderRadius: "5px",
            height: "auto",
            fontSize: {
                xxxl: "16px",
                xxl: "15px",
                msm: "14px",
                xxs: "13px"
            },
            "&:focus": {
                background: "transparent"
            }
        },
        "& .MuiSelect-select": {
            minHeight: "0em !important"
        },
        "&:before": {
            border: "none",
        },
        "&:after": {
            border: "none",
        },
        "&:hover": {
            "&:before": {
                border: "none !important",
            },
        }
    },
    TextArea: {
        bgcolor: "primary.gray_primary",
        width: "100%",
        borderRadius: "5px",
        p: "8px 15px",
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        }
    },
    File: {
        bgcolor: "primary.gray_primary",
        p: {
            xxxl: "15px 20px",
            xxl: "12px 18px",
            xl: "10px 17px",
            xxs: "8px 15px"
        },
        textAlign: "center",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        }
    }
}