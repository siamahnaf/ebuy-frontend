import { Container } from "@mui/material";

//Layout
import Layout from "Layout";
//Components
import ShippingInfo from "Components/Shipping/ShippingInfo";
//Subscribe & Clip
import Subscribe from "Components/Common/Subscribe";
import Clip from "Components/Common/Clip";

const Shipping = () => {
    return (
        <Layout title="Shpping - best fashion marketplace">
            <Container maxWidth="xxxl" disableGutters sx={{ mt: "100px" }}>
                <ShippingInfo />
                <Subscribe />
                <Clip />
            </Container>
        </Layout>
    );
};
export default Shipping;