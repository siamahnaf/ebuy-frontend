export default {
    Container: {
        py: {
            xxxl: "5em",
            xxl: "4.5em",
            xl: "4em",
            lg: "3.5em",
            md: "3em",
            smd: "3.5em",
            lsm: "3em",
            msm: "2.5em",
            sm: "2em",
            xxs: "1.8em"
        },
        textAlign: "center",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center"
    },
    Title: {
        position: "relative",
        fontWeight: 500,
        textTransform: "uppercase",
        width: "max-content",
        mx: "auto",
        fontSize: {
            lg: "35px",
            md: "25px",
            smd: "22px",
            lsm: "20px",
            msm: "18px",
            xxs: "16px"
        },
        color: "primary.sectionHeader",
        "&:after, &:before": {
            content: '""',
            bgcolor: "primary.sectionHeader",
            width: {
                lg: "245px",
                md: "200px",
                smd: "150px",
                lsm: "120px"
            },
            height: "1px",
            position: "absolute",
            top: "100%",
            display: {
                smd: "block",
                xxs: "none"
            }
        },
        "&:after": {
            left: {
                lg: "105%",
                md: "115%",
                smd: "125%"
            },
        },
        "&:before": {
            right: {
                lg: "105%",
                md: "115%",
                smd: "125%"
            },
        },
        span: {
            fontWeight: 200,
            fontSize: {
                lg: "35px",
                md: "25px",
                smd: "22px",
                lsm: "20px",
                msm: "18px",
                xxs: "16px"
            },
        },
    },
    Description: {
        fontWeight: 300,
        fontSize: {
            lg: "15px",
            msm: "14px",
            xxs: "13px"
        },
        color: "primary.sectionHeader"
    }
}