import { useEffect, useRef } from "react";
import LoginPresenter from "./LoginPresenter"
import { useNavigate } from "react-router-dom";
import { API } from "api";

const LoginContainer = () => {
    const navigate = useNavigate();
    const naverRef = useRef(null);

    // 카카오 설정
    const KAKAO_REST_API_KEY = `${process.env.REACT_APP_KAKAO_REST_API_KEY}`;
    console.log(KAKAO_REST_API_KEY)
    const redirectUri = `${process.env.REACT_APP_REDIRECT_URL}`;
    const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${redirectUri}&response_type=code&scope=profile_nickname`
    
    // 네이버 설정
    const NAVER_CLIENT_ID = `${process.env.REACT_APP_NAVER_CLIENT_ID}`;
    console.log(NAVER_CLIENT_ID)
    const NAVER_CALLBACK_URL = `${process.env.REACT_APP_REDIRECT_URL}`;

    useEffect(() => {
        initializeNaverLogin()
        initializeKakaoLogin()
    }, []);

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

        // const social_id = result.data.id;
        // const social_email = result.data.kakao_account?.email;
        // const social_name = result.data.kakao_account?.name;
        // let social_phone = '';
        // if (result.data.kakao_account?.phone_number) {
        //     social_phone = '0' + result.data.kakao_account?.phone_number?.split(' ')[1]?.replaceAll('-', '');
        // }
        // const social_nickname = '';
        // console.log(social_phone);

        // const body = {
        //     social_id: social_id,
        // }

        // // 서버를 통한 로그인 시도
        // const social_signin = await API.postSocialSignin(body);
        // if (social_signin.code === 500) {
        //     // 서버 연결 안됨
        //     setError({
        //         isError: true,
        //         errorMsg: `서버 연결이 원활하지 않습니다.\n잠시만 기다려주시기 바랍니다.`
        //     });
        //     return;
        // }
        // if (social_signin.status === 500) {
        //     // 에러 발생
        //     setError({
        //         isError: true,
        //         errorMsg: '회원 정보 조회 중 에러가 발생하였습니다.'
        //     });
        //     return;
        // }

        // if (social_signin.status === 401) {
        //     // 회원가입이 되어있지 않은 상황이면 회원가입으로 이메일과 닉네임, 전화번호 보내기
        //     navigate('/user/signup', { state: { social_id: social_id, email: social_email, name: social_name, nickname: social_nickname, phone: social_phone } });
        //     return;
        // }

        // 로그인 성공
        // setCookies(social_signin.data);
        navigate('/');
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
                    // const social_id = naverLogin.user.id;
                    // const social_email = naverLogin.user.email;
                    // const social_name = naverLogin.user.name;
                    // const social_nickname = naverLogin.user.nickname;

                    // console.log(naverLogin.user);
                    // setUser(naverLogin.user);

                    // const is_signup = await API.getUserCheckSignUp(naverLogin.user.email);
                    // if (is_signup.code === 500) {
                    //     // 서버 연결 안됨
                    //     setError({
                    //         isError: true,
                    //         errorMsg: `서버 연결이 원활하지 않습니다.\n잠시만 기다려주시기 바랍니다.`
                    //     });
                    //     return;
                    // }
                    // if (is_signup.status === 500) {
                    //     // 에러 발생
                    //     setError({
                    //         isError: true,
                    //         errorMsg: '회원 정보 조회 중 에러가 발생하였습니다.'
                    //     });
                    //     return;
                    // }

                    // if (is_signup.data) {
                    //     // 회원가입 되어있는 상황이면 로그인 진행
                    //     // setEmail(user_email);
                    //     const body = {
                    //         social_id: social_id,
                    //     };

                    //     const social_signin = await API.postSocialSignin(body);
                    //     if (social_signin.code === 500) {
                    //         // 서버 연결 안됨
                    //         setError({
                    //             isError: true,
                    //             errorMsg: `서버 연결이 원활하지 않습니다.\n잠시만 기다려주시기 바랍니다.`
                    //         });
                    //         return;
                    //     }
                    //     if (social_signin.status === 401) {
                    //         // 로그인 실패
                    //         setError({
                    //             isError: true,
                    //             errorMsg: '아이디가 존재하지 않습니다.'
                    //         });
                    //         return;
                    //     }
                    //     if (social_signin.status === 500) {
                    //         // 에러 발생
                    //         setError({
                    //             isError: true,
                    //             errorMsg: '회원 정보 조회 중 에러가 발생하였습니다.'
                    //         });
                    //         return;
                    //     }

                    // setCookies(social_signin.data);
                    navigate('/');
                } else {
                    // 회원가입이 되어있지 않은 상황이면 회원가입으로 이메일과 닉네임, 전화번호 보내기
                    // navigate('/user/signup', { state: { social_id: social_id, email: social_email, name: social_name, nickname: social_nickname } });
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <LoginPresenter
            KakaoLogin={KakaoLogin}

            NaverLogin={NaverLogin}
            naverRef={naverRef}
        />
    );
};

export default LoginContainer;