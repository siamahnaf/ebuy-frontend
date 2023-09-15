//Background Image
import CounterBg from "Assets/about/counter-bg.png";

export default {
    Container: {
        background: `url("${CounterBg}")`,
        position: "relative",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        p: {
            xxxl: "5em 2em",
            xxl: "4em 2em",
            xl: "3.8em 2em",
            xxs: "3.2em 2em"
        },
        borderRadius: "10px",
        "&:after": {
            content: '""',
            bgcolor: "primary.main",
            whiteSpace: " ",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            borderRadius: "10px",
            opacity: 0.8
        }
    },
    Content: {
        position: "relative",
        zIndex: 9,
        color: "background.default"
    },
    Counts: {
        fontSize: {
            xxxl: "37px",
            xxl: "36px",
            msm: "35px",
            xxs: "34px"
        },
        fontWeight: 600
    },
    Description: {
        fontWeight: 500,
        fontSize: {
            xxxl: "16px",
            xxl: "15px",
            msm: "14px",
            xxs: "13px"
        }
    }
}