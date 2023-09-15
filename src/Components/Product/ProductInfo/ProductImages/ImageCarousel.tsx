import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { Box, ButtonBase, SvgIcon, Stack } from "@mui/material";
import { useKeenSlider } from "keen-slider/react";
//KeenSlider css
import "keen-slider/keen-slider.min.css";
//Screen
import useWindowDimensions from "Utilis/Screen";

//All Icons
import { ArrowUp, ArrowDown } from "Utilis/Icons";

//Styles
import styles from "Styles/Product/ImageCarousel.styles";

//Types
interface Image {
    url: string;
    code: string;
}
interface Props {
    images: Image[];
    setCurrentImage: Dispatch<SetStateAction<number>>
}

const ImageCarousel = ({ images, setCurrentImage }: Props) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [vertical, setVertical] = useState<boolean>(true);
    const { width } = useWindowDimensions() as { width: number };
    const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
        slides: {
            perView: 4,
            spacing: 10,
        },
        vertical: vertical,
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        }
    })
    useEffect(() => {
        if (width < 480) {
            setVertical(false)
        }
    }, [width])
    return (
        <Box sx={{ width: { sm: "90px", xxs: "100%" } }}>
            <Box ref={ref} className="keen-slider" sx={styles.KeenSlider}>
                {images &&
                    images.map((image, i) => (
                        <Box
                            className="keen-slider__slide"
                            key={i}
                            onClick={() => setCurrentImage(i)}
                            sx={styles.SingleSlide}
                        >
                            <Box component="img" src={image.url} alt="Image" sx={styles.Images} />
                        </Box>
                    ))
                }
            </Box>
            {loaded && instanceRef.current && (
                <Stack direction="row" sx={styles.ArrowButtonGroup}>
                    <PrevButton
                        onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.prev()
                        }
                        disabled={currentSlide === 0}
                    />
                    <NextButton
                        onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.next()
                        }
                        disabled={
                            currentSlide ===
                            instanceRef.current.track.details.slides.length - 1
                        }
                    />
                </Stack>
            )}
        </Box>
    );
};
export default ImageCarousel;

//Types
interface ButtonProps {
    onClick: (e: any) => void;
    disabled: boolean;
}
//ArrowLeft
const PrevButton = ({ onClick, disabled }: ButtonProps) => {
    return (
        <ButtonBase
            onClick={onClick}
            className={disabled ? "disabled" : ""}
            sx={{ mr: "3px" }}
        >
            <SvgIcon viewBox="0 0 23 13">
                {ArrowUp}
            </SvgIcon>
        </ButtonBase>
    )
}
//ArrowRight
const NextButton = ({ onClick, disabled }: ButtonProps) => {
    return (
        <ButtonBase
            onClick={onClick}
            className={disabled ? "disabled" : ""}
            sx={{ ml: "3px" }}
        >
            <SvgIcon viewBox="0 0 23 13">
                {ArrowDown}
            </SvgIcon>
        </ButtonBase>
    )
}