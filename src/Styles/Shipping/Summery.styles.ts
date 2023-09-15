import { Theme } from "@mui/material/styles";

export default {
    SummeryTitle: {
        fontSize: {
            xxxl: "20px",
            xxl: "19px",
            msm: "18px",
            xxs: "17px"
        },
        fontWeight: 600
    },
    SummeryContainer: {
        bgcolor: "background.default",
        mt: "1.5em",
        borderRadius: "6px",
        boxShadow: (theme: Theme) => `0 0 20px ${theme.palette.primary.box_shadow}`,
        p: "18px 20px"
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
                    xxxl: "16px",
                    xxl: "15px",
                    msm: "14px",
                    xxs: "13px"
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
                pb: "0"
            },
            "&:first-child, &:nth-child(3)": {
                borderBottom: (theme: Theme) => `1px solid ${theme.palette.primary.black_opacity}`
            }
        }
    },
    NextButtons: {
        mt: "10px",
        button: {
            bgcolor: "primary.main",
            color: "background.default",
            width: "100%",
            py: {
                xxxl: "18px",
                xxl: "15px",
                xl: "12px",
                sm: "10px",
                xxs: "8px"
            },
            fontSize: {
                xxxl: "17px",
                xxl: "16px",
                msm: "15px",
                xxs: "14px"
            },
            fontWeight: 500,
            borderRadius: "5px"
        }
    },
    BackButton: {
        mt: "10px",
        button: {
            width: "100%",
            py: {
                xxxl: "18px",
                xxl: "15px",
                xl: "12px",
                sm: "10px",
                xxs: "8px"
            },
            borderRadius: "5px",
            border: (theme: Theme) => `1px solid ${theme.palette.primary.black_opacity}`,
            fontSize: {
                xxxl: "17px",
                xxl: "16px",
                msm: "15px",
                xxs: "14px"
            },
            fontWeight: 500,
            color: "primary.gray_secondary"
        },
        a: {
            textDecoration: "none"
        }
    }
}