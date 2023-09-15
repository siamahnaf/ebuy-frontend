import { Theme } from "@mui/material/styles";

export default {
    TabTitle: {
        ml: "-24px",
        pl: "24px",
        pb: "20px",
        mb: "2em",
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
    NotificationTitle: {
        fontSize: {
            xxxl: "18px",
            xxl: "17px",
            msm: "16px",
            xxs: "15px"
        },
        fontWeight: 600,
        mb: "0.8em"
    },
    Card: {
        alignItems: "center",
        border: (theme: Theme) => `1px solid ${theme.palette.primary.black_opacity}`,
        p: {
            xxxl: "20px 25px",
            xxs: "25px 30px",
        },
        borderRadius: "10px",
        mb: "10px"
    },
    NotificationTime: {
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        },
        mb: "5px"
    },
    Message: {
        fontSize: {
            xxxl: "17px",
            xxl: "16px",
            msm: "15px",
            xxs: "14px"
        }
    }
}