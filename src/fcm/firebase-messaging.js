// // Import the functions you need from the SDKs you need
// import firebase from 'firebase/app';
// import 'firebase/messaging';
// import { cookie } from '../util';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FCM_API_KEY,
//     authDomain: process.env.REACT_APP_FCM_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FCM_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FCM_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FCM_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FCM_APP_ID,
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// let messaging = null;
// if (typeof window !== "undefined" && typeof window.navigator !== "undefined") {
//     messaging = firebase.messaging();
// }

// console.log(process.env.REACT_APP_FCM_VAPID_KEY)

// const requestPermission = () => {
//     Notification.requestPermission()
//         .then(async (permission) => {
//             if (permission === 'granted') {
//                 try {
//                     const token = await messaging?.getToken({ vapidKey: process.env.REACT_APP_FCM_VAPID_KEY })
//                     console.log(token);
//                     cookie.setCookie('fcm-token', token);
//                 } catch (err) {
//                     console.log(`getToken Error ${err}`);
//                 }
//             } else if (permission === 'denied') {
//                 console.log('block permission');
//             }
//         })
// }

// export {
//     messaging,
//     requestPermission,
// };
// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/messaging';
import { cookie } from '../util';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FCM_API_KEY,
    authDomain: process.env.REACT_APP_FCM_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FCM_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FCM_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FCM_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FCM_APP_ID,
};

// Initialize Firebase (only once)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

let messaging = null;

// FCM이 지원되는지 확인하는 함수
const isFCMSupported = async () => {
    if (typeof window === "undefined" || typeof window.navigator === "undefined") {
        return false;
    }

    // iOS Safari는 Web Push를 기본적으로 지원하지 않음
    const userAgent = window.navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    if (isIOS) {
        console.log("iOS Safari에서는 Firebase Messaging이 지원되지 않습니다.");
        return false;
    }

    // HTTPS 환경인지 확인 (localhost는 예외적으로 허용)
    if (window.location.protocol !== "https:" && window.location.hostname !== "localhost") {
        console.log("Firebase Messaging은 HTTPS 환경에서만 실행됩니다.");
        return false;
    }

    // Firebase Messaging이 현재 환경에서 지원되는지 확인
    try {
        const { isSupported } = await import('firebase/messaging');
        return await isSupported();
    } catch (err) {
        console.log("Firebase Messaging 지원 여부 확인 중 오류 발생:", err);
        return false;
    }
};

// FCM 초기화 (지원되는 경우에만)
(async () => {
    if (await isFCMSupported()) {
        messaging = firebase.messaging();
    } else {
        console.log("이 브라우저에서는 Firebase Messaging이 지원되지 않습니다.");
    }
})();

// Push 알림 권한 요청 및 토큰 발급
const requestPermission = async () => {
    if (!messaging) {
        console.log("Firebase Messaging이 지원되지 않아 알림을 요청할 수 없습니다.");
        return;
    }

    try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            const vapidKey = process.env.REACT_APP_FCM_VAPID_KEY;
            if (!vapidKey) {
                console.log("VAPID 키가 설정되지 않았습니다.");
                return;
            }
            const token = await messaging.getToken({ vapidKey });
            console.log("FCM Token:", token);
            cookie.setCookie('fcm-token', token);
        } else if (permission === 'denied') {
            console.log('알림 권한이 거부되었습니다.');
        }
    } catch (err) {
        console.log(`FCM 토큰 가져오기 오류: ${err}`);
    }
};

export {
    messaging,
    requestPermission,
};
