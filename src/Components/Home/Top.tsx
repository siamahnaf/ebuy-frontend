import { Box, Grid } from "@mui/material";

//Components
import TopSingle from "./Top/SingleTop";

//Data
import { Sellings, Trendings, Recents, Rated } from "Data/Home/SingleTop.Data";

const Top = () => {
    return (
        <Box sx={{ pt: "4.5em" }}>
            <Grid container spacing={4}>
                <Grid item {...{ lg: 3, lsm: 6, xxs: 12 }}>
                    <TopSingle
                        title="Top Selling"
                        products={Sellings}
                    />
                </Grid>
                <Grid item {...{ lg: 3, lsm: 6, xxs: 12 }}>
                    <TopSingle
                        title="Trending Products"
                        products={Trendings}
                    />
                </Grid>
                <Grid item {...{ lg: 3, lsm: 6, xxs: 12 }}>
                    <TopSingle
                        title="Recently Added"
                        products={Recents}
                    />
                </Grid>
                <Grid item {...{ lg: 3, lsm: 6, xxs: 12 }}>
                    <TopSingle
                        title="Top Rated"
                        products={Rated}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};
export default Top;