import './SelectPicture.css';

const SelectPicture = ({
    imageUrl,
    onClick,
}) => {
    return (
        <img
            src={imageUrl}
            className='select-picture'
            onClick={() => onClick()}
        />
    )
}

export default SelectPicture;