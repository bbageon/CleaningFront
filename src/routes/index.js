import { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import { io } from 'socket.io-client';
import { cookie } from "../util";
import { ScrollToTop, Toast, PrivateRoute, NotFound } from "components";

/**
 * 페이지
 * --
 */
import {
    Main,
    AddressRegistration,
    CompanyDetail,
    Companies,
    Payment,
    ServiceHistory,
    ServiceHistoryDetail,
    WriteReview,
    FindAddressInMap,
    DetailAddress,
    ChatRoomList,
    ChatRoom,
    ChatBot,
    CompanyMenu,
    ShoppingCart,
    Profile,
    ProfileUpdate,
    PaymentSuccess,
    ReviewHistory,

    Login,
    ImageTest,

    EmployeeLogin,
    EmployeeMain,
    EmployeeRequestList,
    EmployeeRequestInfo,
    EmployeeChatList,
    EmployeeChatRoom,
    EmployeeProfile,
    EmployeeRequestImage,
} from "./pages";

const Router = () => {
    const socketRef = useState(null);

    const setCookies = (data) => {
        try {
            if (!data) {
                throw new Error(`no has save cookie data`);
            }

            cookie.setCookie('id', data?.user_id, {
                path: '/',
            });

            cookie.setCookie('token', data?.token, {
                path: '/',
            });

            cookie.setCookie('name', data?.name, {
                path: '/',
            });

            cookie.setCookie('email', data?.email, {
                path: '/',
            });

            cookie.setCookie('userType', data?.type, {
                path: '/',
            });

            cookie.setCookie('user_id', data?.user_id, {
                path: '/',
            });

        } catch (e) {
            console.error(e.message);
        }
    }

    const logOut = () => {
        cookie.remove('token', { path: '/' }, 1000);
        cookie.remove('name', { path: '/' }, 1000);
        cookie.remove('email', { path: '/' }, 1000);
        cookie.remove('userType', { path: '/' }, 1000);
    }

    useEffect(() => {
        socketRef.current = io(`${process.env.REACT_APP_CHAT_SERVER}/cleaning_chat`, {
            transports: ['websocket'],
            reconnectionAttempts: 3,
        });

        const socket = socketRef.current;

        socket.on('connect', () => {

        });

        socket.on('disconnect', () => {

        });

        return () => {
            socket.disconnect();
        }
    }, []);

    return (
        <div className="app">
            <ScrollToTop />
            <Toast />
            <Routes>
                {/* 로그인 화면 */}
                <Route
                    path="/"
                    element={<Login
                        setCookies={setCookies}
                    />}
                />
                {/* ===== 보호된 라우트 ===== */}
                <Route element={<PrivateRoute />}>
                    {/* ===== 메인 화면 ===== */}
                    <Route
                        path="/main"
                        element={<Main />}
                    />
                    {/* ===== 청소 업체 목록 화면 ===== */}
                    <Route
                        path='/companies'
                        element={<Companies />}
                    />
                    {/* ===== 청소 업체 상세 화면 ===== */}
                    <Route
                        path='/companydetail/:id'
                        element={<CompanyDetail />}
                    />
                    {/* ===== 청소 업체 메뉴 상세 화면 ===== */}
                    <Route
                        path='/companydetail/:company_id/service/:service_id'
                        element={<CompanyMenu />}
                    />
                    {/* 주소 등록 화면 */}
                    <Route
                        path='/addressregistration'
                        element={<AddressRegistration />}
                    />
                    <Route
                        path='/findaddressinmap'
                        element={<FindAddressInMap />}
                    />
                    <Route
                        path='/detailaddress'
                        element={<DetailAddress />}
                    />
                    {/* 서비스 내역 목록 화면 */}
                    <Route
                        path='/servicehistory'
                        element={<ServiceHistory />}
                    />
                    {/* 서비스 상세 내역 화면 */}
                    <Route
                        path='/servicehistorydetail/:id'
                        element={<ServiceHistoryDetail />}
                    />
                    {/* 리뷰 작성 화면 */}
                    <Route
                        path='/writereview/:request_clean_id'
                        element={<WriteReview />}
                    />
                    {/* 대화방 화면 */}
                    <Route
                        path="chatroomlist"
                        element={<ChatRoomList />}
                    />
                    <Route
                        path="chatroom/:room_id"
                        element={<ChatRoom socketRef={socketRef} />}
                    />
                    <Route
                        path="chatbot"
                        element={<ChatBot />}
                    />
                    {/* 장바구니 화면 */}
                    <Route
                        path="shoppingcart"
                        element={<ShoppingCart />}
                    />

                    {/* 프로필 화면 */}
                    <Route
                        path="profile"
                        element={<Profile />}
                    />
                    {/* 프로필 수정 화면 */}
                    <Route
                        path='profileupdate'
                        element={<ProfileUpdate />}
                    />
                    {/* 리뷰 내역 화면 */}
                    <Route
                        path='reviewhistory'
                        element={<ReviewHistory />}
                    />
                    {/* 결제(요청) 완료 */}
                    <Route
                        path='paymentsuccess'
                        element={<PaymentSuccess />}
                    />

                {/* ==================직원 페이지================== */}
                {/* 메인 화면 */}
                <Route
                    path="employee"
                    element={<EmployeeMain />}
                />
                {/* 로그인 화면 */}
                <Route
                    path="employee/login"
                    element={<EmployeeLogin />}
                />
                {/* 청소요청 목록 화면 */}
                <Route
                    path="employee/requestlist"
                    element={<EmployeeRequestList />}
                />
                {/* 청소요청 정보 화면 */}
                <Route
                    path="employee/requestinfo"
                    element={<EmployeeRequestInfo />}
                />
                {/* 청소완료 이미지 등록 화면 */}
                <Route
                    path="employee/requestimage"
                    element={<EmployeeRequestImage />}
                />
                {/* 대화방 목록 화면 */}
                <Route
                    path="employee/chatlist"
                    element={<EmployeeChatList />}
                />
                {/* 대화방 화면 */}
                <Route
                    path="employee/chatroom"
                    element={<EmployeeChatRoom />}
                />
                {/* 프로필 화면 */}
                <Route
                    path="employee/profile"
                    element={<EmployeeProfile />}
                />

                    {/* 테스트 */}
                    <Route
                        path="imagetest"
                        element={<ImageTest />}
                    />
                </Route>
                <Route path='*' element={<NotFound />}/>
            </Routes>
        </div>
    );
};

export default Router;