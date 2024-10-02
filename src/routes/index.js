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
} from "./pages";

const Router = () => {
    const socketRef = useState(null);

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
            <Routes>
                {/* ===== 메인 화면 ===== */}
                <Route
                    path="/"
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
                    path='/companydetail'
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
                <Route
                    path='/servicehistory'
                    element={<ServiceHistory />}
                />
                {/* 서비스 상세 내역 화면 */}
                <Route
                    path='/servicehistorydetail'
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
                    path="Shoppingcart"
                    element={<ShoppingCart />}
                />
            </Routes>
        </div>
    )
}
export default Router;