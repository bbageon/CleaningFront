import { useEffect, useRef } from "react";
import LoginPresenter from "./LoginPresenter"
import { useNavigate } from "react-router-dom";
import { API } from "api";

const LoginContainer = ({
    setCookies,
}) => {
    const navigate = useNavigate();
    const naverRef = useRef(null);

    const MAIN_URL = '/main';

    // 카카오 설정
    const KAKAO_REST_API_KEY = `${process.env.REACT_APP_KAKAO_REST_API_KEY}`;
    const KAKAO_SCOPE = `${process.env.REACT_APP_KAKAO_SCOPE}`;
    const redirectUri = `${process.env.REACT_APP_REDIRECT_URL}`;
    const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${redirectUri}&response_type=code&scope=${KAKAO_SCOPE}`;

    // 네이버 설정
    const NAVER_CLIENT_ID = `${process.env.REACT_APP_NAVER_CLIENT_ID}`;
    console.log(NAVER_CLIENT_ID)
    const NAVER_CALLBACK_URL = `${process.env.REACT_APP_REDIRECT_URL}`;

    useEffect(() => {
        initializeNaverLogin()
        initializeKakaoLogin()
    }, []);

    // 테스트 후 삭제 요망
    const goMain = () => {
        navigate(MAIN_URL);
    }

    // 카카오 로그인
    const KakaoLogin = () => {
        console.log('kakao login!');
        window.location.href = kakaoUrl;
    }

    const initializeKakaoLogin = async () => {
        const code = new URL(window.location.href).searchParams.get('code');
        console.log('code: ', code);
        if (!code) {
            return;
        }

        // 인가코드를 통한 카카오 로그인 시도
        const result = await API.postAuthUserKakaoSignin({ code, nickname: 'test' });
        console.log(result)
        if (result.code === 500) {
            // 서버 연결 안됨
            console.error(`서버 연결이 원활하지 않습니다.\n잠시만 기다려주시기 바랍니다.`);
            return;
        }
        if (result.status === 401) {
            // 로그인 실패
            console.error('아이디가 존재하지 않습니다.');
            return;
        }
        if (result.status === 500) {
            // 에러 발생
            console.error('회원 정보 조회 중 에러가 발생하였습니다.');
            return;
        }

        console.log(result)
        saveToken(result?.data);
        navigate(MAIN_URL);
    }


    // 네이버 로그인
    const NaverLogin = () => {
        console.log('naver login!');
        naverRef.current.children[0].click();
    }

    const initializeNaverLogin = () => {
        const { naver } = window;
        const naverLogin = new naver.LoginWithNaverId({
            clientId: NAVER_CLIENT_ID,
            callbackUrl: NAVER_CALLBACK_URL,
            loginButton: { color: 'green', type: 1, height: 50, },
        });
        naverLogin.init();
        naverLogin.logout();

        // 네이버 로그인 완료 후 설정
        try {
            naverLogin.getLoginStatus(async (status) => {
                if (status) {
                    console.log(naverLogin)
                    console.log(naverLogin.user)
                    const user = naverLogin.user;
                    // 인가코드를 통한 카카오 로그인 시도
                    const result = await API.postAuthUserNaverSignin(user);
                    console.log(result)
                    if (result.code === 500) {
                        // 서버 연결 안됨
                        console.error(`서버 연결이 원활하지 않습니다.\n잠시만 기다려주시기 바랍니다.`);
                        return;
                    }
                    if (result.status === 401) {
                        // 로그인 실패
                        console.error('아이디가 존재하지 않습니다.');
                        return;
                    }
                    if (result.status === 500) {
                        // 에러 발생
                        console.error('회원 정보 조회 중 에러가 발생하였습니다.');
                        return;
                    }

                    console.log(result);
                    saveToken(result?.data);
                    navigate(MAIN_URL);
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    const saveToken = (data) => {
        try {
            if (!data) {
                throw new Error(`no has login data`);
            }

            setCookies(data);
        } catch (e) {
            console.error(e.message);
        }
    }

    return (
        <LoginPresenter
            KakaoLogin={KakaoLogin}

            NaverLogin={NaverLogin}
            naverRef={naverRef}

            goMain={goMain}
        />
    );
};

export default LoginContainer;