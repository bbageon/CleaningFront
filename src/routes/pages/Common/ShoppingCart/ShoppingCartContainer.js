import { useGetOneCart } from "hooks/CartHooks";
import ShoppingCartPresenter from "./ShoppingCartPresenter";
import { useState } from "react";

const ShoppingCartContainer = () => {

    /* ===== VARIABLES ===== */
    const { data: cartRes, isLoading: cartLoading, isError: cartError } = useGetOneCart()
    const cart = cartRes?.data || [];


    /* ===== STATE ===== */
    const [isDaySelectorOpen, setIsDaySelectorOpen] = useState(false);
    const [selectedDays, setSelectedDays] = useState([]);
    const [selectedPeriod, setSelectedPeriod] = useState(null);

    /* ===== FUNCTION ===== */
    const handleToggleDaySelector = () => {
        setIsDaySelectorOpen(!isDaySelectorOpen);
    };

    /* ===== RENDER ===== */
    return (
        <ShoppingCartPresenter

            handleToggleDaySelector={handleToggleDaySelector}
            isDaySelectorOpen={isDaySelectorOpen}
            setIsDaySelectorOpen={setIsDaySelectorOpen}

            selectedDays={selectedDays}
            setSelectedDays={setSelectedDays}

        />
    );
};

export default ShoppingCartContainer;