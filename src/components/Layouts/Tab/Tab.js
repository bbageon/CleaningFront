import { Tabs } from 'antd';
import './Tab.css';

const Tab = ({
    items,
    onChange,
    defaultActiveKey,
    activeKey,
    isLoading,
    display,
    justifyContent,
    gap,
}) => {
    return (
        <div className='tab-container'
            // style={{
            //     display : display,
            //     justifyContent : justifyContent,
            //     gap : gap
            // }}
        >
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