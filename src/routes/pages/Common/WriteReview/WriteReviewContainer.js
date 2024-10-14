import { useState } from "react";
import WriteReviewPresenter from "./WriteReviewPresenter"

const WriteReviewContainer = () => {

    /* ===== STATE ===== */
    const [reviewContent, setReviewContent] = useState('');
    const [rating, setRating] = useState(0);

    /* ===== FUNCTION ===== */
    const handleReviewContent = (e) => {
        setReviewContent(e.target.value);
    }

    const handleImageUpload = () => {
        
    }

    const handleSubmit = () => {

    }

    return (
        <WriteReviewPresenter
            reviewContent={reviewContent}

            handleReviewContent={handleReviewContent}

            setRating={setRating}
        />
    );
};

export default WriteReviewContainer;