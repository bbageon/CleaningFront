import { Banner, Content, MainLayout, Slide } from '../../../../components';
import './Login.css';

const LoginPresenter = ({
    KakaoLogin,

    NaverLogin,
    naverRef,
}) => {
    return (
        <>
            <MainLayout
                footer={true}
            >
                <div
                    className='social-login-button'
                    onClick={() => KakaoLogin()}
                >
                    카카오 로그인
                </div>
                <div id='naverIdLogin' ref={naverRef} style={{ display: 'none' }} />
                <div
                    className="social-login-button"
                    onClick={() => NaverLogin()}
                >
                    네이버 로그인
                </div>
            </MainLayout>
        </>
    );
};

export default LoginPresenter;