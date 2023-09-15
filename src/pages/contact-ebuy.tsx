import { Box, Container } from "@mui/material";

//Layout
import Layout from "Layout";

//Breadcrumb
import Breadcrumb from "Utilis/Breadcrumb";

//Components
import ContactUs from "Components/Contact/Contactus";
import Map from "Components/Contact/Map";
import Forms from "Components/Contact/Forms";

//Subscribe & Clip
import Subscribe from "Components/Common/Subscribe";
import Clip from "Components/Common/Clip";

const Contact = () => {
    return (
        <Layout title="Contact Ebuy - best fashion marketplace">
            <Box sx={{ mt: { xxxl: "110px", xxl: "100px", xl: "90px", smd: "80px", xxs: "70px" } }}>
                <Breadcrumb
                    title="Contact us"
                />
                <Container maxWidth="xxxl" disableGutters>
                    <ContactUs />
                    <Map />
                    <Forms />
                    <Subscribe />
                    <Clip />
                </Container>
            </Box>
        </Layout>
    );
};
export default Contact;