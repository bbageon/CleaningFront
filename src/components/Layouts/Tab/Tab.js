import { Tabs } from 'antd';
import './Tab.css';

const Tab = ({
    items,
}) => {
    return (
        <div className='tab-container'>
            <Tabs
                defaultActiveKey='1'
                tabPosition='top'
                items={items}
            />
        </div>
    );
};

export default Tab;