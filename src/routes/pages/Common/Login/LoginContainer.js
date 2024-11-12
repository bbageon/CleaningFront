import LoginPresenter from "./LoginPresenter"
import { useEffect, useRef, useState } from "react";
import { API } from "api";
import { useNavigate } from "react-router-dom";
import { useCreateCart, useGetUserCart } from "hooks/CartHooks";
import { useCreateUser } from "hooks/UserHooks";
import { useAuthStore, useCartStore } from "store";


const LoginContainer = ({
    setCookies,
}) => {

    /* ===== VARIABLES ===== */
    const navigate = useNavigate();
    const naverRef = useRef(null);

    const MAIN_URL = '/main';

    /* ===== STORE ===== */
    const { setUserId } = useAuthStore();
    const { setCartMetadata } = useCartStore();

    /* ===== STATE ===== */
    const [userData, setUserData] = useState(null);

    /* ===== QUERY ===== */
    // 기존 장바구니 조회
    const { data: existingCartRes, isLoading: isCartLoading } = useGetUserCart(userData?.user_id);
    const existingCart = existingCartRes?.data || [];

    /* ===== MUTATE ===== */
    // 장바구니 생성
    const { mutate: createCart } = useCreateCart(
        (data) => {
            setCartMetadata({
                cart_id: data.cart_id,
                total_price: data.total_price,
                createAt: data.create_at,
                updated_at: data.updated_at,
            });
        },
        (error) => {
            console.error('장바구니 생성 실패: ', error);
        },
    )

    /* ===== EFFECT ===== */
    // 장바구니 조회: 없으면 생성, 있으면 스토어 저장
    useEffect(() => {
        if (userData && !isCartLoading) {
            if (existingCart && existingCart.carts && existingCart.carts.length > 0) {
                const latestCart = existingCart.carts[existingCart.carts.length - 1];
                setCartMetadata({
                    cart_id: latestCart.cart_id,
                    total_price: latestCart.total_price,
                    create_at: latestCart.created_at,
                    updated_at: latestCart.updated_at,
                });
            } else {
                createCart({
                    user_id: userData.user_id,
                });
            }
        }
    }, [userData, isCartLoading]);

    /* ===== KAKAO SETTING ===== */
    const KAKAO_REST_API_KEY = `${process.env.REACT_APP_KAKAO_REST_API_KEY}`;
    const KAKAO_SCOPE = `${process.env.REACT_APP_KAKAO_SCOPE}`;
    const redirectUri = `${process.env.REACT_APP_REDIRECT_URL}`;
    const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${redirectUri}&response_type=code&scope=${KAKAO_SCOPE}`;

    /* ===== NAVER SETTING ===== */
    const NAVER_CLIENT_ID = `${process.env.REACT_APP_NAVER_CLIENT_ID}`;
    const NAVER_CALLBACK_URL = `${process.env.REACT_APP_REDIRECT_URL}`;

    useEffect(() => {
        initializeNaverLogin()
        initializeKakaoLogin()
    }, []);

    // 테스트 후 삭제 요망
    // const goMain = () => {
    //     setUserId(19);
    //     navigate(MAIN_URL);
    // };

    /* ===== KAKAO LOGIN ===== */
    const KakaoLogin = () => {
        
        window.location.href = kakaoUrl;
    };

    const initializeKakaoLogin = async () => {
        const code = new URL(window.location.href).searchParams.get('code');
        if (!code) {
            return;
        }

        // 인가코드를 통한 카카오 로그인 시도
        const result = await API.postAuthUserKakaoSignin({ code, nickname: 'test' });
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
        
        if (result?.data) {
            saveToken(result.data);
            setUserData(result.data);
            setUserId(result.data.user_id);
            navigate(MAIN_URL);
        }
    };

    /* ===== NAVER LOGIN ===== */
    const NaverLogin = () => {
        
        naverRef.current.children[0].click();
    };

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
                    const userData = naverLogin.user;
                    

                    saveToken(userData);
                    setUserData(userData);
                    setUserId(userData.user_id);
                    navigate(MAIN_URL);
                }
            });
        } catch (err) {
            
        }
    };

    /* ===== SAVE TOKEN ===== */
    const saveToken = (data) => {
        try {
            if (!data) {
                throw new Error(`no has login data`);
            }

            setCookies(data);
        } catch (e) {
            console.error(e.message);
        }
    };

    /* ===== RENDER ===== */
    return (
        <LoginPresenter
            KakaoLogin={KakaoLogin}

            NaverLogin={NaverLogin}
            naverRef={naverRef}

            // goMain={goMain}
        />
    );
};

export default LoginContainer;