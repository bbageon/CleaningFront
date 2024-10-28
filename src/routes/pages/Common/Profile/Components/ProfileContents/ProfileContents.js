import Link from 'components/Link';
import './ProfileContents.css';
import AddressIcon from './AddressIcon.svg';
import TestImg from './TestImg.svg';
import TestCompanyIcon from './TestCompanyIcon.svg';
import { Rating } from 'components';

const ProfileContents = () => {
    return (
        <>
            {/* 주소관리 */}
            <Link
                title={"주소 관리"}
                link={'/main'}
            />
            <div className='profile-address-management'>
                <div className='profile-address-image'>
                    <img src={AddressIcon} />
                </div>
                <div className='profile-address-contents'>
                    <div className='address-standard'>
                        <span>현재 설정된 주소</span>
                    </div>
                    <div className='address-contents-detail'>
                        <span className='address-title'>청소할 집</span>
                        <span className='address-info'>부산광역시 사상구 주례로 47</span>
                        <span className='address-optional'>특이사항 추가</span>
                    </div>
                </div>
            </div>

            {/* 리뷰 관리 */}
            <Link
                title={"리뷰 관리"}
                link={'/main'}
            />
            <div className='profile-review-management'>
                <div className='review-content-form'>
                    <div className='review-content-info'>
                        <div className='review-company-img'>
                            <img src={TestCompanyIcon}/>
                        </div>
                        <div className='review-company-info'>
                            <div className='review-company-title'>
                                <span>김재모의 클린 카피바라</span>
                            </div>
                            <div className='review-company-rating'>
                                <Rating
                                    width={10}
                                    rating={5}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='review-content-text'>
                        집을 청소할 시간이 부족해서 맡겨봤는데 ....
                    </div>
                </div>
                <div className='review-img-form'>
                    <img src={TestImg}></img>
                </div>
            </div>

            {/* 결제 관리 */}
            <Link
                title={"결제 관리"}
                link={'/main'}
            />

            <div className='profile-payment-management'>
                <span className='payment-info'>우리카드 ****123 *</span>
            </div>
        </>
    )
};

export default ProfileContents;
