import { Theme } from "@mui/material/styles";
import { keyframes } from "@emotion/react";

const imageEffect = keyframes`
    0% {opacity: 1; left: -100%}
    50% {opacity: 0; left: 100%}
    100% {opacity: 0; left: -100%}
`
export default {
    ImageContainer: (theme: Theme) => ({
        position: "relative",
        display: "block",
        overflow: "hidden",
        height: "100%",
        width: "100%",
        cursor: "pointer",
        "&:after": {
            content: '""',
            background: theme.palette.primary.image_hover,
            width: "50%",
            height: "100%",
            position: "absolute",
            left: "-100%",
            transform: "skew(-20deg)",
            opacity: 1
        },
        "&:hover": {
            "&:after": {
                animation: `${imageEffect} 1.5s`
            }
        }
    }),
    Images: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    }
}