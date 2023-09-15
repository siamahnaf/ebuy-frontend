import { Box } from "@mui/material";
import { UseFormRegister } from "react-hook-form";

//Components
import Address, { Inputs } from "./ShippingContent/Address";
import Payment from "./ShippingContent/Payment";
import YourOrder from "./ShippingContent/YourOder";

//Types
interface Props {
    activeStep: number;
    register: UseFormRegister<Inputs>
}

const ShippingContent = ({ activeStep, register }: Props) => {
    return (
        <Box sx={{ mt: "20px" }}>
            {activeStep === 0 &&
                <YourOrder />
            }
            {activeStep === 1 &&
                <Address register={register} />
            }
            {activeStep === 2 &&
                <Payment register={register} />
            }
        </Box>
    );
};
export default ShippingContent;