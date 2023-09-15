import { useState } from "react";
import { Box, Stack, Slider } from "@mui/material";

const Price = () => {
    const [value, setValue] = useState<number[]>([100, 500]);
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };
    return (
        <Box sx={{ width: "100%", mt: "6em" }}>
            <Slider
                getAriaLabel={() => 'Price Range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                max={1000}
                min={0}
                getAriaValueText={valuetext}
                valueLabelFormat={valuetext}
            />
            <Stack direction="row">
                <Box>
                    {value[0]} $
                </Box>
                <Box sx={{ flex: 1, textAlign: "right" }}>
                    {value[1]} $
                </Box>
            </Stack>
        </Box>
    );
};
export default Price;

function valuetext(value: number) {
    return `${value} $`;
}