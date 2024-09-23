import React, { useState, useEffect } from "react";
import { Route, Routes, useFetcher } from 'react-router-dom';

/**
 * 페이지
 * --
 */
import { AddressRegistration, CompanyDetail, Companies, Main, Payment, ServiceHistories, ServiceHistoryDetail, WriteReview, FindAddressInMap, DetailAddress, ChatRoomList, ChatRoom, ChatBot, FindAddressInMap, DetailAddress, ChatRoomList, ChatRoom } from "./pages";

const Router = () => {

    return (
        <div className="app">
            <Routes>
                {/* 메인 화면 */}
                <Route
                    path="/"
                    element={<Main />}
                />
                {/* 청소 업체 목록 화면 */}
                <Route
                    path='/companies'
                    element={<Companies />}
                />
                {/* 청소 업체 상세 화면 */}
                <Route
                    path='/companydetail'
                    element={<CompanyDetail />}
                />
                {/* 결제 화면 */}
                <Route
                    path='/payment'
                    element={<Payment />}
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
                    path='/servicehistories'
                    element={<ServiceHistories />}
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
                    path="chatroom"
                    element={<ChatRoom />}
                />
                <Route
                    path="chatbot"
                    element={<ChatBot />}
                />
            </Routes>
        </div>
    )
}
export default Router;