import { Theme } from "@mui/material/styles";

export default {
    TableContainer: {
        bgcolor: "background.default",
        mt: {
            md: "5.8em",
            xxs: "0"
        },
        borderRadius: "6px",
        boxShadow: (theme: Theme) => `0 0 20px ${theme.palette.primary.box_shadow}`,
        p: {
            xxxl: "28px 30px",
            xxl: "25px 28px",
            xl: "20px 25px",
            xxs: "18px 20px"
        }
    },
    List: {
        li: {
            mb: {
                xxxl: "25px",
                xxl: "20px",
                xl: "18px",
                xxs: "15px"
            },
            pb: {
                xxxl: "20px",
                xxl: "15px",
                xl: "13px",
                xxs: "10px"
            },
            "& p": {
                textAlign: "right",
                flex: 1,
                color: "primary.main",
                fontSize: {
                    xxxl: "17px",
                    xxl: "16px",
                    msm: "15px",
                    xxs: "14px"
                }
            },
            h6: {
                fontSize: {
                    xxxl: "17px",
                    xxl: "16px",
                    msm: "15px",
                    xxs: "14px"
                },
                color: "primary.gray_tartiary"
            },
            "&:last-child": {
                mb: "0",
                pb: "0",
            },
            "&:first-child, &:nth-child(3)": {
                borderBottom: (theme: Theme) => `1px solid ${theme.palette.primary.black_opacity}`,
            }
        }
    },
    ProceedButton: {
        color: "background.default",
        mt: "15px",
        width: "100%",
        a: {
            textDecoration: "none",
            color: "background.default",
            fontWeight: 500,
            bgcolor: "primary.main",
            width: "100%",
            display: "block",
            py: {
                xxxl: "18px",
                xxl: "15px",
                xl: "13px",
                sm: "12px",
                xxs: "8px"
            },
            borderRadius: "4px",
            fontSize: {
                xxxl: "16px",
                xxl: "15px",
                msm: "14px",
                xxs: "12px"
            },
            svg: {
                fontSize: {
                    xxxl: "18px",
                    xxl: "17px",
                    msm: "16px",
                    xxs: "14px"
                },
                ml: "15px",
                mb: "-3px"
            }
        }
    }
}