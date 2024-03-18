import {ListButton, ShowButton, TopToolbar} from "react-admin";
import ArrowBack from "@mui/icons-material/ArrowBack";

const CustomEditActions = () => {
    return (
        <>
            <TopToolbar style={{justifyContent: 'space-between'}}>
                <ListButton label="pos.backButton" icon={<ArrowBack/>}/>
                <ShowButton/>
                {/* Add your custom actions */}
            </TopToolbar>
        </>);
};

export default CustomEditActions;