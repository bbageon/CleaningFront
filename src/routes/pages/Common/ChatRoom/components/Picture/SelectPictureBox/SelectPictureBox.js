import './SelectPictureBox.css';
import PictureList from '../PictureList';

const SelectPictureBox = ({
    toggleShowSelectPicture,
    sendSelectPicture,
    canSelectPictures,
    selectedPictures,
    addSelectPicture,
}) => {
    return (
        <div className='select-picture-container'>
            <div
                className='select-picture-background'
                onClick={() => toggleShowSelectPicture()}
            />
            <div className='select-picture-wrap'>
                <div className='select-picture'>
                    <PictureList
                        selectedPictures={selectedPictures}
                        canSelectPictures={canSelectPictures}
                        addSelectPicture={addSelectPicture}
                    />
                </div>
                <span className='select-picture-info'>
                    * 최대 5장의 이미지를 전송할 수 있습니다.
                </span>
                <button
                    className={`select-picture-button ${selectedPictures.length > 0 ? 'activate' : 'deactivate'}`}
                    onClick={() => {
                        if (selectedPictures.length <= 0) return;
                        sendSelectPicture()
                    }}
                >
                    전송
                </button>
            </div>
        </div>
    )
}

export default SelectPictureBox;