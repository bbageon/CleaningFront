import { React, useState } from 'react';
import './RadioButton.css';

// dummy options
const dummy_options = [
    { id: 'option1', name: '김재모의 재모1', price: 10000 },
    { id: 'option2', name: '김재모의 재모2', price: 20000 },
    { id: 'option3', name: '김재모의 재모3', price: 5000 },
    { id: 'option4', name: '김재모의 재모4', price: 1000 }
];

const RadioButton = ({
    options = dummy_options
}) => {
    /* ===== STATE ===== */
    const [selected, setSelected] = useState(options[0]?.id || '');

    /* ===== FUNCTION ===== */
    const handleChange = (event) => {
        setSelected(event.target.value);
    };

    /* ===== HOOKS ===== */

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
                                    +{option.price}원
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