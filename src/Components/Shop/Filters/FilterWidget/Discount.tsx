import { useState } from "react";
import { Box, Stack, Slider } from "@mui/material";

const Dicount = () => {
    const [value, setValue] = useState<number[]>([15, 37])
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
                max={100}
                min={0}
                step={10}
                getAriaValueText={valuetext}
                valueLabelFormat={valuetext}
            />
            <Stack direction="row">
                <Box>
                    {value[0]}%
                </Box>
                <Box sx={{ flex: 1, textAlign: "right" }}>
                    {value[1]}%
                </Box>
            </Stack>
        </Box>
    );
};
export default Dicount;

function valuetext(value: number) {
    return `${value}%`;
}