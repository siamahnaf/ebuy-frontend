import { FC, ReactNode } from "react";
import { Box } from "@mui/material";

//Header and Footer
import Header from "./Header";
import Footer from "./Footer";

//Seo
import Seo from "Utilis/Seo";

//Types
interface Props {
    title: string;
    active?: string;
    children: ReactNode
}

const Layout: FC<Props> = ({ children, title, active }) => {
    return (
        <Box>
            <Seo title={title} />
            <Header active={active} />
            {children}
            <Footer />
        </Box>
    );
};
export default Layout;