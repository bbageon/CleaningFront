import { Content, ImageUpload, Textarea, InputStar } from '../../../../../../components';
import './WriteReviewBottom.css';

const WriteReviewBottom = ({
    handleReviewContent,

    setRating,
}) => {
    return (
        <>
            {/* 사진 첨부 */}
            <Content
                gap={30}
                border={'7px solid var(--divider-color)'}
            >
                <InputStar
                    size={30}
                    defaultValue={0}
                    setRating={setRating}
                />
                <Textarea
                    placeholder={'요청받은 서비스에 대한 솔직한 리뷰를 남겨주세요. 불쾌한 단어 및 비속어 사용 시, 서비스 이용에 제한이 발생할 수 있습니다.'}
                    onChange={handleReviewContent}
                    maxLength={500}
                />
                <ImageUpload

                />
            </Content>

            {/* 주의사항 */}
            <Content>
                <div className='write-review-warning-wrap'>
                    <div className='write-review-warning-title'>
                        <span className='large bold red'>주의사항</span>
                        <span className='small gray3'>리뷰 작성 전 꼭 읽어주세요 !</span>
                    </div>
                    <div className='write-review-warning-info'>
                        <ol className='gray2'>
                            <li><span>한번 작성한 리뷰는 수정할 수 없습니다.</span></li>
                            <li><span>불쾌한 단어 및 비속어 사용 시, 서비스 이용에 제한이 발생할 수 있습니다.</span></li>
                            <li><span>등록된 리뷰는 모든 서비스 이용자에게 노출됩니다.</span></li>
                        </ol>
                    </div>
                </div>
            </Content>
        </>
    );
};

export default WriteReviewBottom;