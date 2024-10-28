import './ProfileHeader.css';
import  cleanicon1  from '../../../../../../assets/icons/cleanIcon1.svg';

const ProfileHeader = () => {
    return (
        <div className='profile-Header-Container'>
            <span>내 프로필</span>
            <div className='profile-Header-Image'>
                <img src={cleanicon1}></img>
            </div>
            <span style={{fontSize : '0.8rem'}}>누군가의 프로필</span>
        </div>
    )
};

export default ProfileHeader;