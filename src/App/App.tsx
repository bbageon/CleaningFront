// FCM
// import '../fcm/firebase-messaging';
import { useEffect, useState } from 'react';
// import { requestPermission } from '../fcm/firebase-messaging';

import Router from '../routes';
import AllowNotification from './components/AllowNotification/AllowNotification';
import { cookie, isAllowNotification } from '../util';
import { requestPermission } from 'fcm/firebase-messaging';
import { useLocation, useSearchParams } from 'react-router-dom';

// requestPermission();

const App = () => {
    const [isAllowClick, setIsAllowClick] = useState(false);
    const { pathname } = useLocation();
    const [search, setSearch] = useSearchParams();

    useEffect(() => {
        // FCM이 연결되어 있다면 알림 허용 메시지를 띄우지 않음
        if (cookie.getCookie('is-allow')) {
            setIsAllowClick(true);
        }
    }, []);

    // navigator로 이동되었을 경우 한번 새로고침 한다
    useEffect(() => {
        if (pathname !== '/') return;

        if (search.get('code')) {
            return;
        }

        if (!window.location.hash) {
            window.location.hash = 'reloaded';
            window.location.reload();
        }
    }, [pathname]);

    const allowTitle: string = '알림 허용'
    const allowContent: string = `
    알림을 허용하시겠습니까? \n
    알림을 허용하지 않아도 서비스를 이용하실 수 있지만 원활한 사용이 되지 않을 수 있습니다. \n
    `

    const setAllow = (isAllow: boolean) => {
        setIsAllowClick(true);

        if (isAllow) {
            requestPermission();
            cookie.setCookie('is-allow', true, {
                path: '/',
            });
        }
    }

    return (
        <>
            {
                isAllowClick ?
                    <Router /> :
                    <AllowNotification
                        onClick={setAllow}
                        title={allowTitle}
                        content={allowContent}
                    />
            }
        </>
    )
}

export default App;