// // Give the service worker access to Firebase Messaging.
// // Note that you can only use Firebase Messaging here. Other Firebase libraries
// // are not available in the service worker.
// importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// // Initialize the Firebase app in the service worker by passing in
// // your app's Firebase config object.
// // https://firebase.google.com/docs/web/setup#config-object
// const firebaseApp = firebase.initializeApp({
//     apiKey: 'AIzaSyDzNOx84tx21x2oNV4AvOg5NI43FwKkm3E',
//     projectId: 'fcm-test-a6b38',
//     messagingSenderId: '26071289851',
//     appId: '1:26071289851:web:349e670eabc1c505b4855e',
// });

// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.
// const backgroundMessaging = firebaseApp.messaging();

// backgroundMessaging.onBackgroundMessage((payload) => {
//     console.log('Received background message', payload);

//     const notificationTitle = payload?.data?.sender;
//     const notificationOptions = {
//         body: payload?.data?.message,
//         data: {
//             url: payload?.data?.url || '/chatroom',
//             room_id: payload?.data?.room_id,
//         },
//     };

//     self.registration.showNotification(
//         notificationTitle,
//         notificationOptions
//     );
// });

// self.addEventListener('notificationclick', (event) => {
//     event.notification.close(); // 알림 닫기

//     const url = event.notification.data?.url || '/'; // 클릭 시 이동할 URL
//     const room_id = '/' + event.notification.data?.room_id;
//     const origin = self.location.origin; // 현재 도메인(예: http://localhost:3000)

//     event.waitUntil(
//         // 이미 열린 클라이언트(탭)를 확인
//         clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
//             // 열린 탭 중에서 동일한 URL을 가진 탭을 찾기
//             for (const client of clientList) {
//                 // client.url을 origin과 결합하여 URL을 정확히 비교
//                 if (client.url === origin + url + room_id) {
//                     return client.focus(); // 해당 탭을 활성화
//                 }
//             }

//             // 동일한 URL을 가진 탭이 없다면 새 창을 열기
//             if (clients.openWindow) {
//                 return clients.openWindow(url); // 새 탭에서 URL 열기
//             }
//         })
//     );
// });
// Firebase 서비스 워커: firebase-messaging-sw.js

// Firebase SDK 로드
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Firebase 초기화 (config는 보안상 환경 변수로 관리하는 것이 좋음)
const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyDzNOx84tx21x2oNV4AvOg5NI43FwKkm3E',
    projectId: 'fcm-test-a6b38',
    messagingSenderId: '26071289851',
    appId: '1:26071289851:web:349e670eabc1c505b4855e',
});

// Firebase Messaging 인스턴스 가져오기
const messaging = firebaseApp.messaging();

// 백그라운드 메시지 수신
messaging.onBackgroundMessage((payload) => {
    console.log('[서비스 워커] 백그라운드 메시지 수신:', payload);

    // 알림 데이터 추출 (notification 객체가 있는지 확인)
    const notificationTitle = payload.notification?.title || payload?.data?.sender || '새 알림';
    const notificationBody = payload.notification?.body || payload?.data?.message || '내용 없음';
    const notificationUrl = payload?.data?.url || '/chatroom';
    const roomId = payload?.data?.room_id ? `/${payload.data.room_id}` : '';

    // 알림 표시
    self.registration.showNotification(notificationTitle, {
        body: notificationBody,
        data: {
            url: notificationUrl, // 클릭 시 이동할 URL
            room_id: roomId,
        },
    });
});

// 알림 클릭 시 이벤트 핸들러
self.addEventListener('notificationclick', async (event) => {
    event.notification.close(); // 알림 닫기

    const origin = self.location.origin; // 현재 도메인
    const targetUrl = event.notification.data?.url || '/';
    const fullUrl = `${origin}${targetUrl}${event.notification.data?.room_id || ''}`; // 최종 URL

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            for (const client of clientList) {
                if (client.url === fullUrl && 'focus' in client) {
                    return client.focus(); // 기존 창 활성화
                }
            }
            return clients.openWindow(fullUrl); // 새 창 열기
        })
    );
});
