import { Tabs } from 'antd';
import './TabCenter.css';

const TabCenter = ({
    items,
    
}) => {
    return (
        <div className='tab-center-container'>
            <Tabs
                defaultActiveKey='1'
                tabPosition='top'
                items={items}
            />
        </div>
    );
};

export default TabCenter;