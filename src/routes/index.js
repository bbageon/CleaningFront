import React, { useState, useEffect } from "react";
import { Route, Routes, useFetcher } from 'react-router-dom';
import { io } from 'socket.io-client';

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

    ComponentTest,
    Login,
    ImageTest,
} from "./pages";
import { cookie } from "../util";
import { ScrollToTop } from "components";

const Router = () => {
    const socketRef = useState(null);

    const setCookies = (data) => {
        try {
            if (!data) {
                throw new Error(`no has save cookie data`);
            }

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
        socketRef.current = io('ws://localhost:4200/cleaning_chat', {
            transports: ['websocket'],
            reconnectionAttempts: 3,
        });

        const socket = socketRef.current;

        socket.on('connect', () => {
            console.log('Connected to WebSocket server');
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from WebSocket server');
        });

        return () => {
            socket.disconnect();
        }
    }, []);

    return (
        <div className="app">
            <ScrollToTop />
            <Routes>
                {/* ===== 컴포넌트 테스트 ===== */}
                <Route
                    path='/componenttest'
                    element={<ComponentTest />}
                />
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
                {/* company_id */}
                <Route
                    path='/companydetail/:id'
                    element={<CompanyDetail />}
                />
                {/* ===== 청소 업체 메뉴 상세 화면 ===== */}
                {/* company_id, menu_id */}
                <Route
                    path='/companymenu'
                    element={<CompanyMenu />}
                />
                {/* 결제 화면 */}
                <Route
                    path='/payment'
                    element={<Payment />}
                />
                {/* 주소 등록 화면 */}
                {/* user_id */}
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
                {/* <Route
                    path='/servicehistory'
                    element={<ServiceHistory />}
                /> */}
                {/* 서비스 상세 내역 화면 */}
                <Route
                    path='/servicehistorydetail/:id'
                    element={<ServiceHistoryDetail />}
                />
                {/* 리뷰 작성 화면 */}
                <Route
                    path='writereview'
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
                {/* 로그인 화면 */}
                <Route
                    path="/"
                    element={<Login
                        setCookies={setCookies}
                    />}
                />

                {/* 테스트 */}
                <Route
                    path="imagetest"
                    element={<ImageTest />}
                />
            </Routes>
        </div>
    )
}
export default Router;