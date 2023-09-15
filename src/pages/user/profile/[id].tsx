import { Container, Box } from "@mui/material";

//Layout
import Layout from "Layout";
//Breadcrumb
import Breadcrumb from "Utilis/Breadcrumb";
//Components
import ProfileInfo from "Components/Profile/ProfileInfo";
//Subscribe & Clip
import Subscribe from "Components/Common/Subscribe";
import Clip from "Components/Common/Clip";

const Profile = () => {
    return (
        <Layout title="Profile - best fashion marketplace!">
            <Box sx={{ mt: "80px" }}>
                <Breadcrumb
                    category="User"
                    title="Profile"
                />
                <Container disableGutters maxWidth="xxxl">
                    <ProfileInfo />
                    <Subscribe />
                    <Clip />
                </Container>
            </Box>
        </Layout>
    );
};
export default Profile;