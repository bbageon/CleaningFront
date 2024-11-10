import './RadioButton.css';
import formatPrice from 'utils/priceUtils';

const RadioButton = ({
    options,
    setPrice,
    selected,
    setSelected,
}) => {
    
    /* ===== FUNCTION ===== */
    const handleChange = (e) => {
        const selectedOption = options.find(option => option.id === e.target.value);
        setSelected(e.target.value);
        setPrice(selectedOption.price);
    };

    /* ===== RENDER ===== */
    return (
        <>
            {
                options.map((option, index) => {
                    return (
                        <div className='radio-button-container' key={index}>
                            <div className='radio-button-left'>
                                <label>
                                    <input
                                        id={option.id}
                                        value={option.id}
                                        type='radio'
                                        checked={selected === option.id}
                                        onChange={handleChange}
                                    />
                                    <span className='medium bold'>{option.name}</span>
                                </label>
                            </div>
                            <div className='radio-button-right'>
                                <span className='bold'>
                                    + {option.price && formatPrice(option?.price)} 원
                                </span>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};

export default RadioButton;