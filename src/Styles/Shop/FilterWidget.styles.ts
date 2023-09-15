import { Theme } from "@mui/material/styles";

export default {
    Title: {
        fontSize: {
            xxxl: "18px",
            xxl: "17px",
            msm: "16px",
            xxs: "15px"
        },
        textTransform: "uppercase",
        fontWeight: 600,
        mb: "1em",
        mt: "20px"
    },
    TabButton: {
        p: "8px 10px",
        m: "0",
        minHeight: "0",
        borderRadius: "3px",
        textAlign: "left",
        alignItems: "start",
        fontSize: {
            xxxl: "17px",
            xxl: "16px",
            msm: "15px",
            xxs: "14px"
        },
        textTransform: "capitalize",
        color: "primary.main",
        "&.Mui-selected": {
            bgcolor: "primary.gray_primary"
        }
    },
    WidgetPanel: (theme: Theme) => ({
        "& .MuiTabPanel-root": {
            [theme.breakpoints.down("sm")]: {
                p: "0px"
            }
        }
    }),
    CloseButton: {
        p: "8px 10px",
        borderRadius: "5px",
        position: "absolute",
        right: {
            sm: "25px",
            xxs: "10px"
        },
        top: {
            sm: "27px",
            xxs: "10px"
        },
        zIndex: "99",
        svg: {
            fontSize: {
                xxxl: "17px",
                xxl: "16px",
                smd: "15px",
                msm: "14px",
                xxs: "13px"
            }
        }
    },
    SearchBase: {
        background: "primary.light",
        width: "65%",
        borderRadius: "5px",
        p: "5px 10px",
        boxShadow: (theme: Theme) => `0 0 20px ${theme.palette.primary.box_shadow}`,
        mb: "1.5em",
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        },
        svg: {
            fontSize: {
                xxxl: "18px",
                xxl: "17px",
                msm: "16px",
                xxs: "13px"
            }
        }
    },
    AutoScroll: {
        maxHeight: "20em",
        overflowY: "auto",
        overflowX: "hidden",
        scrollbarWidth: "thin",
        paddingRight: "5px",
        "&::-webkit-scrollbar": {
            width: "8px"
        },
        "&::-webkit-scrollbar-track": {
            bgcolor: "background.default",
            borderRadius: "30px",
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#C1C1C1",
            borderRadius: "30px",
        }
    },
    List: {
        columnCount: {
            lg: 5,
            smd: 4,
            msm: 2,
            xxs: 1
        },
        background: (theme: Theme) => ({
            lg: theme.palette.primary.gradientTwo,
            smd: theme.palette.primary.gradientOne,
            msm: theme.palette.primary.gradientThree,
            xxs: "transparent"
        }),
        p: "5px 8px",
        width: "100%",
        li: {
            py: "2px",
            display: "table",
            breakInside: "avoid-column",
            pageBreakInside: "avoid",
            button: {
                width: "100%",
                textAlign: "left",
                justifyContent: "left",
                p: "2px 8px",
                borderRadius: "3px",
                "& p": {
                    fontSize: {
                        xxxl: "16px",
                        xxl: "15px",
                        msm: "14px",
                        xxs: "13px"
                    },
                    fontWeight: 500,
                    color: "primary.main_primary"
                },
                "&.selected": {
                    bgcolor: "primary.profile_tab"
                }
            }
        }
    },
    colorCode: {
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        mr: "8px",
        mt: "1px"
    }
}