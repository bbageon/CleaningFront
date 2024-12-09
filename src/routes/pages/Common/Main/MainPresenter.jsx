import { Banner, Content, MainLayout, Slide } from '../../../../components';
import MainHeader from './Components/MainHeader';
import MainServiceList from './Components/MainServiceList';
import './Main.css';

const MainPresenter = ({
    isLoading,

    // MainHeader
    navigate,
    userAddress,

    reviews,

}) => {

    if (isLoading) {
        return null;
    }

    return (
        <>
            <MainHeader
                navigate={navigate}
                userAddress={userAddress}
            />
            <MainLayout
                footer={true}
            >
                <Content
                    paddingLeft={16}
                    paddingRight={16}
                    gap={30}
                    border={true}
                >
                    <MainServiceList

                    />
                    <Banner

                    />
                </Content>

                <Content>
                    <Slide
                        title={'리뷰'}
                        datas={reviews}
                    />
                </Content>
            </MainLayout>
        </>
    );
};

export default MainPresenter;