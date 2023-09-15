import React, { useState, useEffect, useCallback, useRef } from "react";
import { Box, ButtonBase, SvgIcon } from "@mui/material";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import Autoplay, { AutoplayType } from "embla-carousel-autoplay";
import Link from "next/link";

//All Icons
import { ArrowLeftIcon, ArrowRightIcon } from "Utilis/Icons";

//Data
import CarouselData from "Data/Home/Carousels.data";

//Styles
import styles from "Styles/Home/Carousels.styles";

const Carousels = () => {
    //Autoplay Plugin
    const autoplay = useRef(
        Autoplay(
            { delay: 3000, stopOnInteraction: false },
            (emblaRoot) => emblaRoot.parentElement
        ) as AutoplayType
    );
    //Embla Carousel Hook
    const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false, loop: true }, [autoplay.current]) as UseEmblaCarouselType;
    //Useable State
    const [prevBtnEnabled, setPrevBtnEnabled] = useState<boolean>(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState<boolean>(false);
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    //Prev, Next and Scroll To Callback Function
    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const scrollTo = useCallback((index: any) => embla && embla.scrollTo(index), [
        embla
    ]);
    //onSelect Function
    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla, setSelectedIndex]);
    //UseEffect Function
    useEffect(() => {
        if (!embla) return;
        onSelect();
        setScrollSnaps(embla.scrollSnapList());
        embla.on("select", onSelect);
    }, [embla, setScrollSnaps, onSelect]);
    return (
        <Box sx={{ position: "relative" }}>
            <Box className="embla" sx={styles.Embla}>
                <Box className="embla__viewport" ref={viewportRef}>
                    <Box className="embla__container" sx={styles.EmblaContainer}>
                        {CarouselData &&
                            CarouselData.map((carousel, i) => (
                                <Box key={i} className="embla__slide" sx={styles.EmblaSlide}>
                                    <Link href={carousel.url}>
                                        <a>
                                            <Box component="img" src={carousel.image} alt="Carousel" />
                                        </a>
                                    </Link>
                                </Box>
                            ))
                        }
                    </Box>
                </Box>
                <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
            </Box>
            <Box className="embla__dots" sx={styles.DotBtnContainer}>
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        selected={index === selectedIndex}
                        onClick={() => scrollTo(index)}
                    />
                ))}
            </Box>
        </Box>
    );
};
export default Carousels;

//Dot Button Props Types
interface PropsDotButton {
    selected: boolean
    onClick: () => void
}
//Dot Button
const DotButton = ({ selected, onClick }: PropsDotButton) => {
    return (
        <ButtonBase
            className={`embla__dot ${selected ? "is-selected" : ""}`}
            type="button"
            onClick={onClick}
        />
    )
};
//Prev Button Props Types
interface PropsPrevButton {
    enabled: boolean;
    onClick: () => void
}
// Prev Button
const PrevButton = ({ enabled, onClick }: PropsPrevButton) => {
    return (
        <ButtonBase
            className="embla__button embla__button--prev"
            onClick={onClick}
            disabled={!enabled}
            sx={styles.ArrowLeft}
        >
            <SvgIcon viewBox="0 0 13 23">
                {ArrowLeftIcon}
            </SvgIcon>
        </ButtonBase>
    )
};
//Next Button Props Types
interface PropsNextButton {
    enabled: boolean;
    onClick: () => void;
}
//Next Button
const NextButton = ({ enabled, onClick }: PropsNextButton) => {
    return (
        <ButtonBase
            className="embla__button embla__button--next"
            onClick={onClick}
            disabled={!enabled}
            sx={styles.ArrowRight}
        >
            <SvgIcon viewBox="0 0 13 23">
                {ArrowRightIcon}
            </SvgIcon>
        </ButtonBase>
    )
};