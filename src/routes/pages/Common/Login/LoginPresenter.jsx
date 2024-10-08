import { Banner, Button, Content, MainLayout, Slide } from '../../../../components';
import './Login.css';

const LoginPresenter = ({
    KakaoLogin,

    NaverLogin,
    naverRef,
}) => {
    return (
        <MainLayout
            footer={false}
            backgroundColor={'var(--primary-color)'}
            full={true}
        >
            <Content
                gap={20}
            >
                <span className='title' style={{ color: '#FFFFFF' }}>
                    Clean Kong
                </span>
                <Button
                    title={'카카오 로그인'}
                    fontSize={'1.125rem'}
                    fontWeight={600}
                    padding={20}
                    color={'#000000'}
                    backgroundColor={'#F7E600'}
                    onClick={() => KakaoLogin()}
                />
                <div id='naverIdLogin' ref={naverRef} style={{ display: 'none' }} />
                <Button
                    title={'네이버 로그인'}
                    fontSize={'1.125rem'}
                    fontWeight={600}
                    padding={20}
                    backgroundColor={'#2DB400'}
                    onClick={() => NaverLogin()}
                />
            </Content>
        </MainLayout>
    );
};

export default LoginPresenter;