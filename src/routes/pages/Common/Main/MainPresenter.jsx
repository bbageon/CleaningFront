import { Banner, Content, MainLayout, Slide } from '../../../../components';
import MainHeader from './Components/MainHeader';
import MainServiceList from './Components/MainServiceList';
import './Main.css';

const MainPresenter = ({
    navigate,
}) => {
    return (
        <>
            <MainHeader
            
            />
            <MainLayout>
                <Content
                    paddingLeft={16}
                    paddingRight={16}
                    gap={30}
                    border={true}
                >
                    <MainServiceList
                        navigate={navigate}
                    />
                    <Banner
                    
                    />
                </Content>
                <Content>
                    <Slide
                        title={'리뷰'}
                    />
                </Content>
            </MainLayout>
        </>
    );
};

export default MainPresenter;