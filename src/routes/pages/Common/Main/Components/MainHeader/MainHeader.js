import './MainHeader.css';
import { ReactComponent as Bell } from '../../../../../../assets/icons/bell.svg';
import { ReactComponent as Cart } from '../../../../../../assets/icons/cart.svg';

const MainHeader = ({

}) => {

    /* ===== STATE ===== */

    /* ===== HOOKS ===== */

    /* ===== RENDER ====== */
    return (
        <div className='main-header-container'>
            <div className='main-header-top'>
                <span className='main-header-top-address'>
                    주소를 등록해 주세요 !
                </span>
                <div className='main-header-top-icons'>
                    <Bell fill='#FFFFFF' width={20} height={20} />
                    <Cart fill='#FFFFFF' width={20} height={20} />
                </div>
            </div>
            <div className='main-header-title'>
                <span>
                    여러 업체에게 견적을 요청하고,
                </span>
                <span>
                    한 눈에 비교해 보세요 !
                </span>
            </div>
            <div className='main-header-button'>
                <button>
                    견적서 요청
                </button>
            </div>
        </div>
    );
};

export default MainHeader;