const formatPrice = (price) => {
    if (price === null) {
        return 0;
    }
    return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default formatPrice;