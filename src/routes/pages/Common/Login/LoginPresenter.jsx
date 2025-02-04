import { Button, Content, MainLayout } from '../../../../components';
import './Login.css';

const LoginPresenter = ({
    KakaoLogin,

    NaverLogin,
    naverRef,

    requestAlert,

    navigate,
}) => {

    /* ===== RENDER ===== */
    return (
        <MainLayout
            footer={false}
            backgroundColor={'var(--primary-color)'}
            full={true}
        >
            <Content
                gap={20}
                position={'relative'}
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
                    onClick={
                        () => {
                            NaverLogin();
                            requestAlert();
                        }
                    }
                />
                <Button
                    title={'카카오톡으로 로그인'}
                    fontSize={'1.125rem'}
                    fontWeight={600}
                    padding={20}
                    borderRadius={40}
                    color={'#000000'}
                    backgroundColor={'#F7E600'}
                    onClick={
                        () => {
                            KakaoLogin();
                            requestAlert();
                        }
                    }
                />
                <span
                    style={{
                        position: 'absolute',
                        bottom: -25,
                        color: '#FFFFFF',
                        borderBottom: '1px solid #FFFFFF',
                        paddingBottom: '3px',
                    }}
                    onClick={() => navigate('employee/login')}
                >직원이신가요?</span>
                <div id='naverIdLogin' ref={naverRef} style={{ display: 'none' }} />
            </Content>
        </MainLayout>
    );
};

export default LoginPresenter;