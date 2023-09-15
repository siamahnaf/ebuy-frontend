import { Container, Box, Grid } from "@mui/material";

//Layout
import Layout from "Layout";
//BreadCrumbs
import Breadcrumb from "Utilis/Breadcrumb";
//Components
import CartItem from "Components/Cart/CartItem";
import CartTable from "Components/Cart/CartTable";
import CartCuppon from "Components/Cart/CartCuppon";
//Subscribe & Clip
import Subscribe from "Components/Common/Subscribe";
import Clip from "Components/Common/Clip";

const Cart = () => {
    return (
        <Layout title="Cart - best fashion marketplace!">
            <Box sx={{ mt: { xxxl: "110px", xxl: "100px", xl: "90px", smd: "80px", xxs: "70px" } }}>
                <Breadcrumb
                    title="Cart"
                />
                <Container disableGutters maxWidth="xxxl">
                    <Grid container spacing={3}>
                        <Grid item {...{ md: 8, xxs: 12 }}>
                            <CartItem />
                            <CartCuppon />
                        </Grid>
                        <Grid item {...{ md: 4, xxs: 12 }}>
                            <CartTable />
                        </Grid>
                    </Grid>
                    <Subscribe />
                    <Clip />
                </Container>
            </Box>
        </Layout>
    );
};
export default Cart;