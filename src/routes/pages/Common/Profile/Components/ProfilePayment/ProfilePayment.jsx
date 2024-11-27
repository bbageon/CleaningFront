import Link from 'components/Link';
import './ProfilePayment.style.css';
import { Content } from 'components';

const ProfilePayment = ({

}) => {
    return (
        <Content
            border={true}
        >
            <Link
                title={"결제 관리"}
                link={'/main'}
            />
            <div className='profile-payment-management'>
                <span className='payment-info'>우리카드 ****123 *</span>
            </div>
        </Content>
    );
};

export default ProfilePayment;