import { useCustomContext } from 'context/CustomContext';
import './MainServiceList.css';
import { ReactComponent as CleanIcon1 } from '../../../../../../assets/icons/cleanIcon1.svg';
import { ReactComponent as CleanIcon2 } from '../../../../../../assets/icons/cleanIcon2.svg';
import { ReactComponent as CleanIcon3 } from '../../../../../../assets/icons/cleanIcon3.svg';
import { ReactComponent as CleanIcon4 } from '../../../../../../assets/icons/cleanIcon4.svg';
import { ReactComponent as CleanIcon5 } from '../../../../../../assets/icons/cleanIcon5.svg';
import { ReactComponent as CleanIcon6 } from '../../../../../../assets/icons/cleanIcon6.svg';

/**
 * 서비스 목록
 * --
 */
const cleaningServicesList = [
    {
        serviceId: 1,
        serviceName: '이사/입주청소',
        icon: <CleanIcon1 />
    },
    {
        serviceId: 2,
        serviceName: '거주/생활청소',
        icon: <CleanIcon2 />
    },
    {
        serviceId: 3,
        serviceName: '가전/가구청소',
        icon: <CleanIcon3 />
    },
    {
        serviceId: 4,
        serviceName: '전문/특수청소',
        icon: <CleanIcon4 />
    },
    {
        serviceId: 5,
        serviceName: '사업장청소',
        icon: <CleanIcon5 />
    },
    {
        serviceId: 6,
        serviceName: '건물관리',
        icon: <CleanIcon6 />
    },
];

/**
 * 업체 리스트 바로가기 컴포넌트
 * --
 */
const ListNavigationButton = ({

}) => {

    /* ==== NAVIGATE ===== */
    const { navigate } = useCustomContext();

    return (
        <div className='list-navigation-container'
            onClick={() => { navigate('/companies') }}
        >
            <div className='list-navigation-button'>
                <span>
                    업체 둘러보기
                </span>
                <div className='list-navigation-more'>
                    {'>'}
                </div>
            </div>
            <div className='list-navigation-text'>
                <span>원하는 서비스를 찾아보세요.</span>
            </div>
        </div>
    )
}

/**
 * 청소 서비스 아이템 (아이콘+텍스트)
 * --
 */
const CleaningServiceItem = ({
    item,
}) => {

    /* ==== NAVIGATE ===== */
    const { navigate } = useCustomContext();

    // 아이콘 클릭 시, 해당 카테고리의 청소 업체 목록으로 이동
    const handleNavigate = () => {
        const tabKey = item.serviceId;
        navigate('/companies', { state: { tabKey } });
    };

    return (
        <div className='cleaning-service-item-container'>
            <div className='cleaning-service-item-icon'
                onClick={handleNavigate}
            >
                {item.icon}
            </div>
            <div className='cleaning-service-item-text'>
                <span>
                    {item.serviceName}
                </span>
            </div>
        </div>
    );
};

const MainServiceList = ({

}) => {

    return (
        <div className='main-service-list-container'>

            <ListNavigationButton

            />

            <div className='main-service-list'>
                {
                    cleaningServicesList.map((item, index) => {
                        return (
                            <CleaningServiceItem
                                key={index}
                                item={item}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MainServiceList; 