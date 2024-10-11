import { Tabs } from 'antd';
import './Tab.css';

const Tab = ({
    items,
    onChange,
    defaultActiveKey,
    activeKey,
}) => {
    return (
        <div className='tab-container'>
            <Tabs
                defaultActiveKey={defaultActiveKey}
                activeKey={activeKey}
                tabPosition='top'
                items={items}
                onChange={onChange}
            />
        </div>
    );
};

export default Tab;