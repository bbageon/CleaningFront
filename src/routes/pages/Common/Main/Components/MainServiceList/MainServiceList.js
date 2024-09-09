import './MainServiceList.css';

/**
 * 서비스 목록
 * --
 */
const cleaningServicesList = [
    {
        serviceId: 1,
        serviceName: '가사도우미/생활청소',
        url: '1',
        icon: 'icon1'
    },
    {
        serviceId: 2,
        serviceName: '이사/입주청소',
        url: '2',
        icon: 'icon2'
    },
    {
        serviceId: 3,
        serviceName: '가전/가구청소',
        url: '3',
        icon: 'icon3'
    },
    {
        serviceId: 4,
        serviceName: '전문/특수청소',
        url: '4',
        icon: 'icon4'
    },
    {
        serviceId: 5,
        serviceName: '사업장청소',
        url: '5',
        icon: 'icon5'
    },
    {
        serviceId: 6,
        serviceName: '건물 관리',
        url: '6',
        icon: 'icon6'
    },
];

/**
 * 업체 리스트 바로가기 컴포넌트
 * --
 */
const ListNavigationButton = () => {
    return (
        <div className='list-navigation-container'>
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
    item
}) => {
    return (
        <div className='cleaning-service-item-container'>
            <div className='cleaning-service-item-icon'>
                {item.icon}
            </div>
            <div className='cleaning-service-item-text'>
                <span>
                    {item.serviceName}
                </span>
            </div>
        </div>
    )
}

const MainServiceList = ({

}) => {
    return (
        <div className='main-service-list-container'>
            <ListNavigationButton />
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