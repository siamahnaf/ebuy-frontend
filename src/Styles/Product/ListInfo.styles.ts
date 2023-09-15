export default {
    List: {
        mt: "20px",
        mb: "15px",
        li: {
            my: "5px",
            position: "relative",
            pl: "15px",
            "&:after": {
                content: '""',
                bgcolor: "primary.main",
                width: "8px",
                height: "8px",
                left: "0",
                position: "absolute",
                borderRadius: "50%",
                top: "50%",
                transform: "translateY(-50%)"
            },
            h6: {
                flex: {
                    sm: "0 0 20%",
                    xxs: "0 0 40%"
                },
                color: "primary.main",
                fontSize: {
                    xxxl: "16px",
                    xxl: "15px",
                    msm: "14px",
                    xxs: "13px"
                }
            },
            "& p": {
                color: "primary.main",
                fontSize: {
                    xxxl: "16px",
                    xxl: "15px",
                    msm: "14px",
                    xxs: "13px"
                }
            }
        }
    }
}