import { Container } from "@mui/material";

//Layout
import Layout from "Layout";

//Components
import VendorInfo from "Components/Vendor/Products/VendorInfo";
import Search from "Components/Vendor/Products/Search";
import VendorProducts from "Components/Vendor/Products/VendorProducts";

//Subscribe & Clip
import Subscribe from "Components/Common/Subscribe";
import Clip from "Components/Common/Clip";

const Vendor = () => {
    return (
        <Layout title="Product - best fashion marketplace!">
            <Container maxWidth="xxxl" disableGutters sx={{ mt: { xxxl: "120px", xxl: "115px", xl: "110px", smd: "100px", xxs: "80px" } }}>
                <VendorInfo />
                <Search />
                <VendorProducts />
                <Subscribe />
                <Clip />
            </Container>
        </Layout>
    );
};
export default Vendor;