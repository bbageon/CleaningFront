import './PictureList.css';
import SelectPicture from '../SelectPicture';

const PictureList = ({
    canSelectPictures,
    addSelectPicture,
    selectedPictures,
}) => {

    return (
        <div className='select-picture-list-container'>
            <div className='select-picture-list-grid'>
                {
                    canSelectPictures?.map(picture => (
                        <div className='select-picture-element'>
                            <img
                                src={picture}
                                className='select-picture'
                                onClick={() => addSelectPicture(picture)}
                            />
                            {
                                selectedPictures?.indexOf(picture) > -1 &&
                                <span className='selected-picture-circle'>
                                    {selectedPictures.indexOf(picture) + 1}
                                </span>
                            }
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default PictureList;