import { Tabs } from 'antd';
import './TabCenter.css';
import { Children, useEffect, useState } from 'react';

const TabCenter = ({
    items,
    finish,
    inProgress,
}) => {
    /* ===== STATE ===== */
    const [activeKey, setActiveKey] = useState('0'); // 기본 탭 선택

    /* ===== HANDLER ===== */
    const handleTabChange = (key) => {
        setActiveKey(key); // 탭 변경 시 키 업데이트
        console.log("바뀜", activeKey)
    };

    const renderContent = () => {
        if (activeKey === '0') {
            return (
                <div>
                    {inProgress?.length > 0 ? (
                        inProgress.map((item, idx) => (
                            <div key={idx}>
                                asd
                            </div>
                        ))
                    ) : (
                        <div>진행 중인 데이터가 없습니다</div>
                    )}
                </div>
            );
        } else if (activeKey === '1') {
            return (
                <div>
                    {finish?.length > 0 ? (
                        finish.map((item, idx) => (
                            <div key={idx}>
                                asd
                            </div>
                        ))
                    ) : (
                        <div>완료된 데이터가 없습니다</div>
                    )}
                </div>
            );
        }
    };
    
    return (
        <div className='tab-center-container'>
            <Tabs
                defaultActiveKey='1'
                tabPosition='top'
                onChange={handleTabChange}
                items={items}
            />
            {renderContent()}
        </div>

    );
};

export default TabCenter;