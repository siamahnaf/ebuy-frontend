import { Container } from "@mui/material";

//Layout
import Layout from "Layout";

//Components
import FilterChip from "Components/Shop/FilterChip";
import Filters from "Components/Shop/Filters";
import Result from "Components/Shop/Result";

//Subscribe & Clip
import Subscribe from "Components/Common/Subscribe";
import Clip from "Components/Common/Clip";

const Category = () => {
    return (
        <Layout title="Shop- best fashion marketplace">
            <Container maxWidth="xxxl" disableGutters sx={{ mt: "80px" }}>
                <FilterChip />
                <Filters />
                <Result />
                <Subscribe />
                <Clip />
            </Container>
        </Layout>
    );
};
export default Category;