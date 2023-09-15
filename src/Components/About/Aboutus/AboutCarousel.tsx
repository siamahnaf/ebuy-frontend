import { useState } from "react";
import { Box, ButtonBase, SvgIcon, Stack } from "@mui/material";
import { useKeenSlider } from "keen-slider/react"
//KeenSlider css
import "keen-slider/keen-slider.min.css";

//All icons
import { ArrowLeftIcon, ArrowRightIcon } from "Utilis/Icons";

//Styles
import styles from "Styles/About/Aboutus.styles";

//Types
interface Image {
    url: string;
}
interface Props {
    images: Image[];
}

const AboutCarousel = ({ images }: Props) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slides: {
            perView: 3,
            spacing: 10
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })
    return (
        <Box sx={{ position: "relative" }}>
            <div ref={sliderRef} className={`keen-slider`}>
                {images &&
                    images.map((image, i) => (
                        <div className={`keen-slider__slide`} key={i} >
                            <Box component="img" src={image.url} alt="About" sx={styles.CarouselImages} />
                        </div>
                    ))
                }
            </div>
            {loaded && instanceRef.current && (
                <Stack direction="row" sx={styles.Arrows}>
                    <ArrowLeft
                        onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.prev()
                        }
                        disabled={currentSlide === 0}
                    />
                    <ArrowRight
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
export default AboutCarousel;

//Types
interface ButtonProps {
    onClick: (e: any) => void;
    disabled: boolean;
}
//ArrowLeft
function ArrowLeft({ onClick, disabled }: ButtonProps) {
    const disabeld = disabled ? " disabled" : ""
    return (
        <ButtonBase
            onClick={onClick}
            className={"arrow-left" + disabeld}
            sx={{ mr: "3px" }}
        >
            <SvgIcon viewBox="0 0 13 23">
                {ArrowLeftIcon}
            </SvgIcon>
        </ButtonBase>
    )
}
//ArrowRight
function ArrowRight({ onClick, disabled }: ButtonProps) {
    const disabeld = disabled ? " disabled" : ""
    return (
        <ButtonBase
            onClick={onClick}
            className={"arrow-right" + disabeld}
            sx={{ ml: "3px" }}
        >
            <SvgIcon viewBox="0 0 13 23">
                {ArrowRightIcon}
            </SvgIcon>
        </ButtonBase>
    )
}