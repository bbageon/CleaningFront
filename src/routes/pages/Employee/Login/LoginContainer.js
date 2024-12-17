import LoginPresenter from "./LoginPresenter"
import { useEffect, useRef, useState } from "react";
import { API } from "api";
import { useNavigate } from "react-router-dom";
import { isLogin } from "util";
import { useAuthStore } from "store";


const LoginContainer = ({
    EmployeesetCookies,
}) => {
    const navigate = useNavigate();
    const [isShowRegister, setIsShowRegister] = useState(false);
    const [signinUserInfo, setSigninUserInfo] = useState({
        id: '',
        pw: '',
    });

    /* ===== STORE ===== */
    const setUserId = useAuthStore(state => state.setUserId);

    // 로그인 여부를 확인하여 로그인 되어있는 경우 메인 화면으로 리다이렉트
    useEffect(() => {
        if (isLogin()) {
            navigate('/employee/login');
        }
    }, []);
    const login = async () => {
        const result = await API.postEmployeeSignin(signinUserInfo);
        if (result.status !== 200) {
            console.log(`[LoginContainer][login] Error : ${result.message}`);
            alert(`아이디와 비밀번호를 다시한번 확인해주세요`);
            return;
        }
        console.log(result.data, "123")
        EmployeesetCookies(result.data);

        if (result.data) {
            setUserId(result.data.employee_id);
        } else {
            alert(`없는 직원입니다.`);
            return;
        }

        alert(`${result.data.name}님 환영합니다!`);
        navigate('/employee');
    }

    return (
        <LoginPresenter
            isShowRegister={isShowRegister}
            setIsShowRegister={setIsShowRegister}

            login={login}

            signinUserInfo={signinUserInfo}
            setSigninUserInfo={setSigninUserInfo}
        />
    );
};

export default LoginContainer;