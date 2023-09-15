import { Box, Container } from "@mui/material";

//Layout
import Layout from "Layout";

//Breadcrumbs
import Breadcrumb from "Utilis/Breadcrumb";

//Components
import Search from "Components/Vendor/Search";
import Vendors from "Components/Vendor/Vendors";

//Subscribe and Clip
import Subscribe from "Components/Common/Subscribe";
import Clip from "Components/Common/Clip";

const List = () => {
    return (
        <Layout title="Vendor - best fashion marketplace">
            <Container maxWidth="xxxl" disableGutters sx={{ mt: { xxxl: "110px", xxl: "100px", xl: "90px", smd: "80px", xxs: "70px" } }}>
                <Search />
                <Vendors />
                <Subscribe />
                <Clip />
            </Container>
        </Layout>
    );
};
export default List;