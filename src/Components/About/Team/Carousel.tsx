import React, { useState, useEffect, useCallback, useRef } from "react";
import { Box, ButtonBase, SvgIcon, Typography, List, ListItem } from "@mui/material";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import Autoplay, { AutoplayType } from "embla-carousel-autoplay";
import Link from "next/link";

//All Icons
import { ArrowLeftIcon, ArrowRightIcon, FacebookIcon, LinkedInIcon } from "Utilis/Icons";
import { Twitter, Instagram } from '@mui/icons-material';

//Data
import TeamData from "Data/About/Team.data";

//Styles
import styles from "Styles/About/Team.styles";

const Carousel = () => {
    //Autoplay Plugin
    const autoplay = useRef(
        Autoplay(
            { delay: 3000, stopOnInteraction: false },
            (emblaRoot) => emblaRoot.parentElement
        ) as AutoplayType
    );
    //Embla Carousel Hook
    const [viewportRef, embla] = useEmblaCarousel({ containScroll: "trimSnaps", loop: true }, [autoplay.current]) as UseEmblaCarouselType;
    //Useable State
    const [prevBtnEnabled, setPrevBtnEnabled] = useState<boolean>(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState<boolean>(false);
    //Prev, Next and Scroll To Callback Function
    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    //onSelect Function
    const onSelect = useCallback(() => {
        if (!embla) return;
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla]);
    //UseEffect Function
    useEffect(() => {
        if (!embla) return;
        onSelect();
        embla.on("select", onSelect);
    }, [embla, onSelect]);
    return (
        <Box sx={{ position: "relative" }}>
            <Box className="embla" sx={styles.Embla}>
                <Box className="embla__viewport" ref={viewportRef}>
                    <Box className="embla__container" sx={styles.EmblaContainer}>
                        {TeamData.teams.length > 0 &&
                            TeamData.teams.map((team, i) => (
                                <Box key={i} className="embla__slide" sx={styles.EmblaSlide}>
                                    <Box sx={{ position: "relative", mt: { lsm: "0px", xxs: "3.5em" } }}>
                                        <Box component="img" src={team.image} alt={team.name} sx={styles.Images} />
                                        <Box sx={styles.TeamContent}>
                                            <Typography variant="h6" component="h6" sx={styles.Name}>
                                                {team.name}
                                            </Typography>
                                            <Typography variant="body1" component="p" sx={styles.Post}>
                                                {team.post}
                                            </Typography>
                                            <List dense disablePadding sx={styles.List}>
                                                <ListItem dense disablePadding disableGutters>
                                                    <Link href={team.facebook}>
                                                        <a target="_blank">
                                                            <ButtonBase>
                                                                <SvgIcon viewBox="0 0 12 24">
                                                                    {FacebookIcon}
                                                                </SvgIcon>
                                                            </ButtonBase>
                                                        </a>
                                                    </Link>
                                                </ListItem>
                                                <ListItem dense disablePadding disableGutters>
                                                    <Link href={team.twitter}>
                                                        <a target="_blank">
                                                            <ButtonBase>
                                                                <Twitter />
                                                            </ButtonBase>
                                                        </a>
                                                    </Link>
                                                </ListItem>
                                                <ListItem dense disablePadding disableGutters>
                                                    <Link href={team.instagram}>
                                                        <a target="_blank">
                                                            <ButtonBase>
                                                                <Instagram />
                                                            </ButtonBase>
                                                        </a>
                                                    </Link>
                                                </ListItem>
                                                <ListItem dense disablePadding disableGutters>
                                                    <Link href={team.linkedin}>
                                                        <a target="_blank">
                                                            <ButtonBase>
                                                                <SvgIcon viewBox="0 0 24 24">
                                                                    {LinkedInIcon}
                                                                </SvgIcon>
                                                            </ButtonBase>
                                                        </a>
                                                    </Link>
                                                </ListItem>
                                            </List>
                                        </Box>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Box>
                </Box>
                <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
            </Box>
        </Box>
    );
};

export default Carousel;

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