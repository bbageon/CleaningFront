import { useNavigate } from "react-router-dom";
import MainPresenter from "./MainPresenter"


const MainContainer = () => {

    /* ===== NAVIGATE ===== */
    const navigate = useNavigate();
    
    return (
        <MainPresenter
            navigate={navigate}
        />
    );
};

export default MainContainer;