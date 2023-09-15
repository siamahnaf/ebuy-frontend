export default {
    Container: {
        overflow: "hidden"
    },
    Images: {
        cursor: "pointer",
        transition: "0.3s ease",
        img: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "0.2s ease",
            display: "block"
        },
        "&:hover": {
            transform: "scale(1.1)"
        }
    }
}