// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyDzNOx84tx21x2oNV4AvOg5NI43FwKkm3E',
    projectId: 'fcm-test-a6b38',
    messagingSenderId: '26071289851',
    appId: '1:26071289851:web:349e670eabc1c505b4855e',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const backgroundMessaging = firebaseApp.messaging();

backgroundMessaging.onBackgroundMessage((payload) => {
    console.log('Received background message', payload);

    const notificationTitle = payload.data?.title || '새 알림';
    const notificationBody = payload.data?.body || '내용 없음';
    const notificationUrl = payload?.data?.url || '/chatroom';
    const roomId = payload?.data?.room_id ? `/${payload.data.room_id}` : '';
    const chatRoomId = payload?.data?.chat_room_id ? `?chat_room_id=${payload.data.chat_room_id}` : '';

    const notificationOptions = {
        body: notificationBody,
        data: {
            url: notificationUrl,
            room_id: roomId,
            chat_room_id: chatRoomId,
        },
    };

    showNotification(
        notificationTitle,
        notificationOptions
    );
});

const showNotification = (title, options) => {
    self.registration.showNotification(
        title,
        options
    );
}

self.addEventListener('notificationclick', (event) => {
    event.notification.close(); // 알림 닫기

    console.log('알림 클릭')
    console.log(event.notification)
    const url = event.notification?.data?.url || '/'; // 클릭 시 이동할 URL
    const room_id = event.notification?.data?.room_id;
    const chat_room_id = event.notification?.data?.chat_room_id;
    const origin = self.location.origin; // 현재 도메인(예: http://localhost:3000)

    console.log(origin + url + room_id + chat_room_id)

    event.waitUntil(
        // 이미 열린 클라이언트(탭)를 확인
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            let matchingClient = null;

            // 열린 탭 중에서 동일한 URL을 가진 탭을 찾기
            for (const client of clientList) {
                // client.url을 origin과 결합하여 URL을 정확히 비교
                if (client.url === origin + url + room_id + chat_room_id) {
                    // return client.focus(); // 해당 탭을 활성화
                    matchingClient = client;
                    break;
                }
            }

            if (matchingClient) {
                console.log('기존 탭 활성화');
                return matchingClient.focus();
            } else {
                console.log('새 창을 열어 이동');
                return clients.openWindow(url + room_id + chat_room_id);
            }

            // // 동일한 URL을 가진 탭이 없다면 새 창을 열기
            // if (clients.openWindow) {
            //     return clients.openWindow(url); // 새 탭에서 URL 열기
            // }
        })
    );
});