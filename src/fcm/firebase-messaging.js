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

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

let messaging = null;
if (typeof window !== "undefined" && "Notification" in window) {
    messaging = firebase.messaging();
}

console.log(messaging);
console.log(process.env.REACT_APP_FCM_VAPID_KEY)

const registerServiceWorker = () => {
    navigator.serviceWorker
        .register('firebase-messaging-sw.js')
        .then((registration) => {
            console.log('Service Worker 등록 성공: ', registration);
        })
        .catch((err) => {
            console.log('Service Worker 등록 실해: ', err);
        })
}

const requestPermission = async () => {
    if (!messaging) {
        console.warn("🚫 Firebase Messaging이 지원되지 않는 환경입니다.");
        return;
    }

    Notification.requestPermission()
        .then(async (permission) => {
            registerServiceWorker();
            if (permission === "granted") {
                const vapidKey = process.env.REACT_APP_FCM_VAPID_KEY;
                if (!vapidKey) {
                    console.error("⚠️ VAPID 키가 설정되지 않음.");
                    return;
                }

                const token = await messaging.getToken({ vapidKey });
                console.log("🔥 FCM Token 발급 완료:", token);
                cookie.setCookie("fcm-token", token);
            }
            else if (permission === "denied") {
                console.warn("⚠️ 알림 권한이 거부됨.");
            }
        })
        .catch((err) => {
            console.error("❌ FCM 토큰 가져오기 오류:", err);
        })
};

export {
    messaging,
    requestPermission,
};