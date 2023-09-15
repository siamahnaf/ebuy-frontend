import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

//Logo Image
import LogoImage from "Assets/Logo.png"

const Logo = () => {
    return (
        <Box sx={{ mt: "4px", img: { width: { xxl: "130px !important", sm: "unset !important", xxs: "80px !important" } } }}>
            <Link href="/">
                <a>
                    <Image src={LogoImage} width={115} height={43.179165} alt="Logo" />
                </a>
            </Link>
        </Box>
    );
};
export default Logo;