import { Banner, Button, Content, MainLayout, Slide } from '../../../../components';
import './Login.css';

const LoginPresenter = ({
    KakaoLogin,

    NaverLogin,
    naverRef,

    goMain,
    handleTestLogin,
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
                <div className="login-info">
                    <span className='title' style={{ color: '#FFFFFF' }}>
                        <div>CLEAN</div>
                        <div>KONG</div>
                    </span>
                    <span className="sub-title">
                        당신의 청결한 하루를 위해
                    </span>
                </div>
                <Button
                    title={'네이버로 로그인'}
                    fontSize={'1.125rem'}
                    fontWeight={600}
                    padding={20}
                    borderRadius={40}
                    backgroundColor={'#2DB400'}
                    onClick={() => NaverLogin()}
                />
                <Button
                    title={'카카오톡으로 로그인'}
                    fontSize={'1.125rem'}
                    fontWeight={600}
                    padding={20}
                    borderRadius={40}
                    color={'#000000'}
                    backgroundColor={'#F7E600'}
                    onClick={() => KakaoLogin()}
                />
                <Button
                    title={'테스트'}
                    onClick={handleTestLogin}
                />
                <span onClick={goMain} style={{ color: 'white' }}><u>메인으로 이동</u></span>
                <div id='naverIdLogin' ref={naverRef} style={{ display: 'none' }} />
            </Content>
        </MainLayout>
    );
};

export default LoginPresenter;