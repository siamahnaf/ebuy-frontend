import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import ReactImageMagnify from 'react-image-magnify';
//Screen
import useWindowDimensions from "Utilis/Screen";

//Types
interface Image {
    url: string;
    code: string;
}
interface Props {
    images: Image[]
    currentImage: number;
}

const ImageMagnify = ({ images, currentImage }: Props) => {
    const [imageWidth, setWidth] = useState<number>(420);
    const [imageHeight, setHeight] = useState<number>(535);
    const [enlarge, setEnlarge] = useState<string>("162%");
    const [position, setPosition] = useState<string>("beside");
    const { width } = useWindowDimensions() as { width: number };
    useEffect(() => {
        if (width >= 2560) {
            setWidth(425);
            setHeight(555);
        } else if (width >= 1920) {
            setWidth(420);
            setHeight(533);
        } else if (width >= 1366) {
            setWidth(420);
            setHeight(535);
        } else if (width >= 1200) {
            setWidth(370);
            setHeight(535);
        } else if (width >= 992) {
            setWidth(340);
            setHeight(535);
            setEnlarge("120%")
        } else if (width >= 768) {
            setWidth(320);
            setHeight(535);
            setEnlarge("60%");
        } else if (width >= 640) {
            setWidth(410);
            setHeight(535);
            setPosition("over");
        } else if (width >= 576) {
            setWidth(370);
            setHeight(535);
            setPosition("over");
        } else if (width >= 480) {
            setWidth(300);
            setHeight(450);
            setPosition("over");
        } else if (width >= 360) {
            setWidth(300);
            setHeight(400);
            setPosition("over");
        } else if (width >= 0) {
            setWidth(230);
            setHeight(300);
            setPosition("over");
        }
    }, [width])
    return (
        <Box>
            <Box sx={{ "& .ImageMagnification": { img: { objectFit: "cover", objectPosition: "top center" } } }}>
                <ReactImageMagnify
                    className="ImageMagnification"
                    smallImage={{
                        alt: 'Wristwatch by Ted Baker London',
                        src: images[currentImage].url,
                        isFluidWidth: false,
                        width: imageWidth,
                        height: imageHeight
                    }}
                    largeImage={{
                        src: images[currentImage].url,
                        width: 1500,
                        height: 1800
                    }}
                    enlargedImageContainerDimensions={{
                        width: enlarge,
                        height: '100%'
                    }}
                    style={{
                        borderRadius: "5px"
                    }}
                    imageStyle={{
                        borderRadius: "5px"
                    }}
                    imageClassName="SmallImages"
                    enlargedImageContainerStyle={{
                        zIndex: "999999",
                        borderRadius: "5px"
                    }}
                    enlargedImageStyle={{
                        borderRadius: "5px",
                    }}
                    enlargedImagePosition={position}
                />
            </Box>
        </Box>
    );
};
export default ImageMagnify;