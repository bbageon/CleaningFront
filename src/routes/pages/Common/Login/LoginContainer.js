import { useEffect, useRef, useState } from "react";
import LoginPresenter from "./LoginPresenter"
import { useNavigate } from "react-router-dom";
import { API } from "api";
import useAuthStore from "store/useAuthStore";
import useCartStore from "store/useCartStore";
import { useCreateCart, useGetUserCart } from "hooks/CartHooks";
import { useCreateUser } from "hooks/UserHooks";

const LoginContainer = ({
    setCookies,
}) => {

    const navigate = useNavigate();
    const naverRef = useRef(null);

    // Store 설정
    const { setUserId, setToken } = useAuthStore();
    const { setCartMetadata } = useCartStore();

    const [userData, setUserData] = useState(null);

    const MAIN_URL = '/main';

    // 장바구니 Mutate
    const { mutate: createCart } = useCreateCart(
        (data) => {
            console.log('장바구니 생성 성공: ', data);

            // 장바구니 Store에 저장
            setCartMetadata({
                cart_id: data.cart_id,
                total_price: data.total_price,
                createAt: data.create_at,
                updated_at: data.updated_at,
            });
        },
        (error) => {
            console.log('장바구니 생성 실패: ', error);
        },
    );



    /* =========== 임시 고객 테스트 =========== */
    const { mutate: createUser } = useCreateUser(
        (data) => {
            console.log('고객 생성 성공: ', data);
            setUserData(data);

            setUserId(data.user_id);
        }
    );
    /* ===================================== */

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
        setUserId(19);
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

        // 장바구니 및 고객 데이터 저장
        const userData = result?.data;
        setUserId(userData.user_id);
        setUserData(userData);

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
                    saveToken(naverLogin.user)

                    // 장바구니 및 고객 데이터 저장
                    const userData = naverLogin?.user;
                    setToken(userData.token);
                    setUserId(userData.user_id);
                    setUserData(userData);

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

    /* =========== 임시 고객 테스트 =========== */
    const handleTestLogin = () => {
        const dummyUser = {
            name: "가나다라",
            social_id: "249r35hfa20gjgh",
            email: "test@test000.com",
            pw: "1q2w3e4r1!",
            phone: "01024254931",
            receive_event_method: "EMAIL",
            is_receive_event: true,
            is_push_notification: true,
            profile_image: "lshafouashfoasflkjas",
        };

        createUser(dummyUser);

        setCookies(dummyUser);

        console.log(userData);
    }
    /* ===================================== */

    // 기존 장바구니 조회
    const { data: existingCartRes, isLoading: isCartLoading } = useGetUserCart(userData?.user_id);
    const existingCart = existingCartRes?.data || [];

    // 기존 장바구니가 존재 시 store에 저장, 없으면 새로 생성
    useEffect(() => {

        if (userData && existingCart) {
            if (existingCart?.cart_id) {
                setCartMetadata({
                    cart_id: existingCart.cart_id,
                    total_price: existingCart.total_price,
                    create_at: existingCart.create_at,
                    updated_at: existingCart.updated_at,
                });
            } else if (!isCartLoading) {
                createCart({ user_id: userData.user_id });
            }
        }
    }, [userData, existingCart, createCart, setCartMetadata, isCartLoading]);

    return (
        <LoginPresenter
            KakaoLogin={KakaoLogin}

            NaverLogin={NaverLogin}
            naverRef={naverRef}

            goMain={goMain}
            handleTestLogin={handleTestLogin}
        />
    );
};

export default LoginContainer;