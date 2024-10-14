import { Tabs } from 'antd';
import './Tab.css';

const Tab = ({
    items,
    onChange,
    defaultActiveKey,
    activeKey,
    isLoading,
}) => {
    return (
        <div className='tab-container'>
            {
                isLoading ? (
                    <></>
                ) : (
                    <Tabs
                        defaultActiveKey={defaultActiveKey}
                        activeKey={activeKey}
                        tabPosition='top'
                        items={items}
                        onChange={onChange}
                    />
                )
            }
        </div>
    );
};

export default Tab;