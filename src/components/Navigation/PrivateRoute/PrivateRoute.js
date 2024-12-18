import { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useAuthStore } from 'store'

const PrivateRoute = () => {
    const navigate = useNavigate();
    
    /* ===== 직원 고객페이지 접근 거부 ======*/
    const IsEmployee = useAuthStore(state => state.isEmployee);
    const currentPath = window.location.pathname;
    
    useEffect( () => {
        if (IsEmployee && !currentPath.startsWith('/employee')) {
            console.log("김건우")
            alert("잘못된 접근입니다.");
            navigate('/employee');
        }
    },[IsEmployee, currentPath])


    /* ===== STORE ===== */
    const isAuthenticated =  useAuthStore(state => state.isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to='/' replace />;
    }

    /* ===== RENDER ===== */
    return <Outlet />;
};

export default PrivateRoute;