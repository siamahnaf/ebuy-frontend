import { Theme } from "@mui/material/styles";

export default {
    DataTable: {
        "& .MuiTableCell-root": {
            border: "none"
        },
        "& .MuiPaper-elevation2": {
            boxShadow: "none",
            borderBottom: (theme: Theme) => `1px solid ${theme.palette.primary.black_opacity}`
        },
        "& .MuiTableRow-root": {
            "& th:first-child": {
                borderRadius: "6px 0 0 6px"
            },
            "& th:last-child": {
                borderRadius: "0 6px 6px 0"
            }
        },
        "& .css-1kvzk7d-MuiTableCell-root": {
            width: "28px !important",
        },
        svg: {
            fontSize: {
                xxxl: "20px",
                xxl: "19px",
                msm: "18px",
                xxs: "17px"
            }
        }
    },
    ProductTitle: {
        fontSize: {
            xxxl: "17px",
            xxl: "16px",
            msm: "15px",
            xxs: "14px"
        },
        fontWeight: 600
    },
    ProductImages: {
        width: "65px",
        borderRadius: "8px",
        mr: "10px"
    },
    Star: {
        mt: "4px",
        span: {
            color: "primary.star",
            fontSize: {
                xxxl: "16px",
                xxl: "15px",
                msm: "14px",
                xxs: "13px"
            }
        },
        "& .MuiRating-iconFilled": {
            color: "primary.star_fill"
        }
    },
    ProductPrice: {
        fontWeight: 500,
        color: "primary.gray_secondary",
        fontSize: {
            xxxl: "17px",
            xxl: "16px",
            msm: "15px",
            xxs: "14px"
        }
    },
    ProductPriceTotal: {
        fontWeight: 500,
        color: "primary.main",
        fontSize: {
            xxxl: "17px",
            xxl: "16px",
            msm: "15px",
            xxs: "14px"
        }
    },
    RemoveButton: {
        p: "10px 11px",
        borderRadius: "5px",
        color: "primary.delete_color",
        svg: {
            fontSize: {
                xxxl: "20px",
                xxl: "19px",
                msm: "18px",
                xxs: "17px"
            }
        }
    },
    InputField: {
        input: {
            p: {
                xxxl: "20px 25px",
                xxl: "15px 20px",
                xl: "12px 18px",
                xxs: "10px 15px"
            },
            borderRadius: "4px",
            border: (theme: Theme) => `1px solid ${theme.palette.primary.main}`,
            fontSize: {
                xxxl: "17px",
                xxl: "16px",
                msm: "15px",
                xxs: "14px"
            },
            fontWeight: 500
        }
    },
    CounterButton: {
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        button: {
            display: "block",
            my: "1px",
            p: "1px 4px",
            borderRadius: "2px",
            svg: {
                fontSize: {
                    xxxl: "14px",
                    xxl: "13px",
                    msm: "12px",
                    xxs: "11px"
                }
            }
        }
    }
}