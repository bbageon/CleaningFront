import { useAddressStore, useAuthStore } from "store";
import MainPresenter from "./MainPresenter"


const MainContainer = () => {

    const addresses = useAddressStore();
    const userId = useAuthStore(state => state.user_id);
    console.log(userId)
    console.log(addresses);
    /* ===== RENDER ===== */
    return (
        <MainPresenter

        />
    );
};

export default MainContainer;