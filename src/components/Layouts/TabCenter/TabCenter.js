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

    
    return (
        <div className='tab-center-container'>
            <Tabs
                defaultActiveKey='0'
                tabPosition='top'
                items={items}
            />
        </div>

    );
};

export default TabCenter;