import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface PaletteColor {
        main_secondary?: string;
        main_tartiary?: string;
        bagItem_count?: string;
        box_shadow?: string;
        dot_button?: string;
        sectionHeader?: string;
        image_hover?: string;
        product_card_shadow?: string;
        product_card_shadow_hover?: string;
        star?: string;
        star_fill?: string;
        border_bottom?: string;
        grey_hover?: string;
        plane?: string;
        black_hover?: string;
        facebook?: string;
        black_opacity?: string;
        searchBg?: string;
        searchBgWhite?: string;
        gradientOne?: string;
        gray_primary?: string;
        gray_secondary?: string;
        gray_tartiary?: string;
        gradientTwo?: string;
        delete_color?: string;
        gradientThree?: string;
        box_shadow2?: string;
    }
    interface PaletteColorOptions {
        main?: string;
        main_secondary?: string;
        main_tartiary?: string;
        bagItem_count?: string;
        box_shadow?: string;
        dot_button?: string;
        sectionHeader?: string;
        image_hover?: string;
        product_card_shadow?: string;
        product_card_shadow_hover?: string;
        star?: string;
        star_fill?: string;
        border_bottom?: string;
        grey_hover?: string;
        plane?: string;
        black_hover?: string;
        facebook?: string;
        black_opacity?: string;
        searchBg?: string;
        searchBgWhite?: string;
        gradientOne?: string;
        gray_primary?: string;
        gray_secondary?: string;
        gray_tartiary?: string;
        gradientTwo?: string;
        delete_color?: string;
        gradientThree?: string;
        box_shadow2?: string;
    }
    interface BreakpointOverrides {
        xs: true;
        xxs: true;
        sm: true;
        msm: true;
        lsm: true;
        smd: true;
        md: true;
        lg: true;
        xl: true;
        xxl: true;
        xxxl: true
    }
}

const theme = createTheme({
    typography: {
        fontFamily: "Inter",
    },
    palette: {
        text: {
            primary: "#000000", // Default Text Color
        },
        background: {
            default: "#FFFFFF" // Default Background Color
        },
        primary: {
            main: "#222529", // Main Document Color
            main_secondary: "#8E8E8E", // Rating point and other color == blacky
            main_tartiary: "#727475", // Register and other text color
            bagItem_count: "#FF4040", // Cart or bag icon color-- Red
            box_shadow: "#0000001a", // Box Shaddow--- footer and where need box shadow
            box_shadow2: "#00000012", ///Box Shadow ----Vendor list
            dot_button: "#2A2A2A", // Dot button color when it is unactive
            sectionHeader: "#606060", // Seaction Header All Color
            image_hover: "linear-gradient(to right, transparent, white, transparent)",// Image hover gradient color
            product_card_shadow: "#0000000f", // Product card box shadow
            product_card_shadow_hover: "#00000030", // Product card box shadow Hover
            star: "#B7B7B7", // Star infilled color
            star_fill: "#FDC040", // Star fill color--- uses for yellow color
            border_bottom: "#D6D6D6", // Top Component title border bottom --blacky
            grey_hover: "#5b5b5b2b", //Top products card hover bg
            plane: "#232020", // Subscribe component plane icon color---blacky
            black_hover: "#515151", // Black hover on black text --- black
            facebook: "#4267B2", // Login button with facebook bg
            black_opacity: "#CECECE", // Black Opacity Grey color
            searchBg: "#2225298c", // Search Bar Backdrop Color
            delete_color: "#FF4747", // Delete color icon
            gray_primary: "#F1F8FF", // Gray Primary color
            gray_secondary: "#73828E", //Gray Secondary color
            gray_tartiary: "#BAC9D6", // Gray Tartairy color
            searchBgWhite: "#F4F4F4", // Search Bar List container bg
            gradientOne: "linear-gradient(to right, white 0 25%, transparent 25% 50%, white 50% 75%, transparent 75% 100%)", // Column Color for categories filter and searchbar
            gradientTwo: "linear-gradient(to right, white 0 20%, transparent 20% 40%, white 40% 60%, transparent 60% 80%, white 80% 100%)", // Column color for categories and shop
            gradientThree: "linear-gradient(to right, white 0 50%, transparent 50% 100%)" // Column color for categories and shop
        }
    },
    breakpoints: {
        values: {
            xxs: 0, // Double Extra Small Devices
            xs: 360, // Extra Small Devices ---- Defualt BreakPoints
            sm: 480, // Small Devices ---- Default BreakPoints
            msm: 576, // Medium Small Medium Devices
            lsm: 640, // Large Small Medium Devices
            smd: 768, // Small Medium Devices
            md: 992, // Medium Devices ---- Default BreakPoints
            lg: 1200, // Large Devices  ---- Default BreakPoints
            xl: 1536, // Extra Large Devices ---- Default BreakPoints
            xxl: 1920, // Double Extra Large Devices
            xxxl: 2560 // Tripple Extra Devices
        },
    },
    components: {
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    fontFamily: "Inter"
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingLeft: '4%',
                    paddingRight: '4%',
                    '@media (max-width: 480px)': {
                        paddingLeft: '3%',
                        paddingRight: '3%',
                    }
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                input: {
                    fontSize: 14,
                },
                listbox: {
                    fontSize: 14,
                }
            }
        }
    }
});
export default theme;