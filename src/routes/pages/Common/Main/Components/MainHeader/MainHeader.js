import { useEffect, useState } from 'react';
import './MainHeader.css';

const MainHeader = ({

}) => {

    /* ===== STATE ===== */
    const [isSticky, setIsSticky] = useState(false);
    const [isTitleHidden, setIsTitleHidden] = useState(false);

    /* ===== HOOK ===== */
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 54) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, []);

    console.log(isSticky)

    return (
        <div className={`main-header-container ${isSticky ? 'sticky' : ''}`}>
            <div className='main-header-top'>
                <span className='main-header-top-address'>
                    주소를 등록해 주세요 !
                </span>
                <div className='main-header-top-icons'>
                    알림
                    장바구니
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