import { useState } from "react";
import { Box, Typography, ButtonBase } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

//Components
import ProfileDetails from "./Profile/ProfileDetails";
import EditProfile, { Inputs } from "./Profile/EditProfile";

//Styles
import styles from "Styles/Profile/Profile.styles";

const Profile = () => {
    const [edit, setEdit] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data, e) => {
        console.log(data)
    }
    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            {!edit &&
                <ProfileDetails />
            }
            {edit &&
                <EditProfile register={register} />
            }
            {!edit &&
                <Box>
                    <ButtonBase onClick={() => setEdit(true)} sx={styles.EditAndSaveButton}>
                        Edit
                    </ButtonBase>
                </Box>
            }
            {edit &&
                <Box>
                    <ButtonBase type="submit" sx={styles.EditAndSaveButton}>
                        Save
                    </ButtonBase>
                    <ButtonBase onClick={() => setEdit(false)} sx={styles.CancelButton}>
                        Cancel
                    </ButtonBase>
                </Box>
            }
        </Box>
    );
};
export default Profile;