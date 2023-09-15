import { Dispatch, SetStateAction, ChangeEvent, useState } from 'react';
import { Box, Stack, Typography, RadioGroup, FormControlLabel, Radio, Rating, InputBase, ButtonBase, SvgIcon } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

//All Icons
import { CartIcon, LoevSolidIcon, ArrowUpDownIcon, ArrowDown, ArrowUp } from "Utilis/Icons";
import StarIcon from '@mui/icons-material/Star';

//Data
import singleData from "Data/Product/product.data";

//Types
import styles from "Styles/Product/ProductContent.styles";

//Types
interface Props {
    setCurrentImage: Dispatch<SetStateAction<number>>
}
type Inputs = {
    size: string;
    color: string;
}

const ProductContents = ({ setCurrentImage }: Props) => {
    const [productCount, setProductCount] = useState(1);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data, e) => {
        console.log(data)
    }
    const onProductCount = (e: ChangeEvent<HTMLInputElement>) => {
        setProductCount(Number(e.target.value.replace(/\D/g, '')))
    }
    const incrementHandler = () => {
        setProductCount(productCount + 1)
    }
    const decrementHandler = () => {
        if (productCount <= 1) {
            setProductCount(1)
        } else {
            setProductCount(productCount - 1)
        }
    }
    const currentImageHandler = (code: string) => {
        const index = singleData.images.findIndex(image => image.code === code);
        setCurrentImage(index);
    }
    return (
        <Box>
            <Typography variant="h3" component="h3" sx={styles.Title}>
                {singleData.name}
            </Typography>
            <Stack direction="row" sx={{ my: 2.5 }}>
                <Box>
                    <Rating
                        name="half-rating-read"
                        defaultValue={5}
                        precision={4}
                        readOnly
                        emptyIcon={<StarIcon fontSize="inherit" />}
                        sx={styles.Star}
                    />
                </Box>
                <Box sx={styles.Reviews}>
                    ({singleData.reviews} reviews)
                </Box>
            </Stack>
            <Stack direction="row" sx={{ alignItems: "center" }}>
                <Typography variant="h3" component="h3" sx={styles.MainPrice}>
                    ${singleData.price}
                </Typography>
                <Box>
                    <Typography variant="h3" component="h3" sx={styles.DiscountPrice}>
                        {Math.floor(((singleData.originalPrice as number - singleData.price as number) / singleData.originalPrice as number) * 100)}% off
                    </Typography>
                    <Typography variant="h3" component="h3" sx={styles.OriginalPrice}>
                        ${singleData.originalPrice}
                    </Typography>
                </Box>
            </Stack>
            <Typography variant="body1" component="p" sx={styles.ShortDescription}>
                {singleData.description}
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                <Stack direction="row" sx={{ alignItems: "center", my: "20px" }}>
                    <Typography variant="h6" component="h6" sx={styles.SizeAndColorstitle}>
                        Choose Size:
                    </Typography>
                    <RadioGroup row>
                        {singleData &&
                            singleData.sizes.map((size, i) => (
                                <FormControlLabel
                                    key={i}
                                    value={size.value.toLowerCase()}
                                    control={<Radio />}
                                    label={size.value}
                                    {...register("size")}
                                    sx={styles.SizeRadioButton}
                                />
                            ))
                        }
                    </RadioGroup>
                </Stack>
                <Stack direction="row" sx={{ alignItems: "center", my: "20px" }}>
                    <Typography variant="h6" component="h6" sx={styles.SizeAndColorstitle}>
                        Choose Color:
                    </Typography>
                    <RadioGroup row>
                        {singleData &&
                            singleData.colors.map((color, i) => (
                                <FormControlLabel
                                    key={i}
                                    value={color.code.toLowerCase()}
                                    control={<Radio sx={{ bgcolor: color.code + "!important" }} />}
                                    label=""
                                    onClick={() => currentImageHandler(color.code)}
                                    {...register("color")}
                                    sx={styles.ColorRadioButton}
                                />
                            ))
                        }
                    </RadioGroup>
                </Stack>
                <Stack direction="row" sx={{ flexWrap: { sm: "unset", xxs: "wrap" } }} spacing={2}>
                    <Box sx={{
                        position: "relative", width: {
                            lg: "15%",
                            md: "20%",
                            lsm: "18%",
                            sm: "18%",
                            xs: "22%",
                            xxs: "30%"
                        }
                    }}>
                        <InputBase
                            value={productCount}
                            type="text"
                            onChange={onProductCount}
                            sx={styles.InputField}
                        />
                        <Box sx={styles.CounterButton}>
                            <ButtonBase onClick={incrementHandler}>
                                <SvgIcon viewBox="0 0 23 13">
                                    {ArrowUp}
                                </SvgIcon>
                            </ButtonBase>
                            <ButtonBase onClick={decrementHandler}>
                                <SvgIcon viewBox="0 0 23 13">
                                    {ArrowDown}
                                </SvgIcon>
                            </ButtonBase>
                        </Box>
                    </Box>
                    <ButtonBase type="submit" sx={styles.SubmitButton}>
                        <SvgIcon viewBox="0 0 22 23">
                            {CartIcon}
                        </SvgIcon>
                        Add to Cart
                    </ButtonBase>
                    <ButtonBase sx={{ ...styles.LoveAndDownBtn, display: { sm: "block", xxs: "none" } }}>
                        <SvgIcon viewBox="0 0 27 24">
                            {LoevSolidIcon}
                        </SvgIcon>
                    </ButtonBase>
                    <ButtonBase sx={{ ...styles.LoveAndDownBtn, display: { sm: "block", xxs: "none" } }} >
                        <SvgIcon viewBox="0 0 22 23">
                            {ArrowUpDownIcon}
                        </SvgIcon>
                    </ButtonBase>
                </Stack>
            </Box >
        </Box >
    );
};
export default ProductContents;