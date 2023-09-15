import { useState } from 'react';
import { Box, Grid, Stepper, Step, StepLabel, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import { useForm, SubmitHandler } from "react-hook-form";

//All icons
import Check from '@mui/icons-material/Check';

//Components
import ShippingContent from "./ShippingInfo/ShippingContent";
import Summery from "./ShippingInfo/Summery";

//Import types
import { Inputs } from "./ShippingInfo/ShippingContent/Address";

//Styles
import styles from "Styles/Shipping/ShppingInfo.styles";

const ShippingInfo = () => {
    const [activeStep, setActiveStep] = useState<number>(0);
    const steps = ['Your Order', 'Shipping', 'Payment'];
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data, e) => {
        console.log(data)
    }
    return (
        <Box>
            <Box sx={styles.StepContainer}>
                <Stepper activeStep={activeStep} alternativeLabel connector={<QontoConnector />}>
                    {steps.map((label) => {
                        return (
                            <Step key={label}>
                                <StepLabel StepIconComponent={QontoStepIcon} sx={styles.StepLavel}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
            </Box>
            <Grid component="form" container spacing={3} onSubmit={handleSubmit(onSubmit)}>
                <Grid item {...{ md: 8, xxs: 12 }}>
                    {activeStep === steps.length &&
                        <Typography>
                            You are redirecting quickly!
                        </Typography>
                    }
                    <ShippingContent register={register} activeStep={activeStep} />
                </Grid>
                <Grid item  {...{ md: 4, xxs: 12 }}>
                    <Summery
                        setActiveStep={setActiveStep}
                        activeStep={activeStep}
                        steps={steps.length}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};
export default ShippingInfo;

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderTop: `3px solid ${theme.palette.primary.gray_secondary}`
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderTop: `3px solid ${theme.palette.primary.gray_secondary}`
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderTop: `2px dashed ${theme.palette.primary.gray_secondary}`
    },
}));
const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(({ theme, ownerState }) => ({
    display: 'flex',
    height: 22,
    alignItems: 'center',
    "& .QontoStepIcon-active": {
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        background: theme.palette.primary.gray_secondary,
        border: `1px solid ${theme.palette.primary.gray_secondary}`
    },
    '& .QontoStepIcon-completedIcon': {
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        background: theme.palette.primary.gray_secondary,
        border: `1px solid ${theme.palette.primary.gray_secondary}`,
        color: theme.palette.background.default
    },
    '& .QontoStepIcon-circle': {
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        background: theme.palette.background.default,
        border: `1px solid ${theme.palette.primary.gray_secondary}`
    }
}));
function QontoStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;
    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {active &&
                <div className="QontoStepIcon-active" />
            }
            {completed ? (
                <Check className="QontoStepIcon-completedIcon" />
            ) : (
                active === false ? (
                    <div className="QontoStepIcon-circle" />
                ) : ""
            )}
        </QontoStepIconRoot>
    );
}