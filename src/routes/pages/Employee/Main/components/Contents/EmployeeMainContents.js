import React, { useState } from "react"
import './EmployeeMainContents.css';
import { Button } from "components";
import ChatList from './ChatList.svg';
import RequireList from './RequireList.svg';
import { Navigate, useNavigate } from "react-router-dom";


const EmployeeMainContents = ({
    EmployeeRequestList,
    ClientName,
}) => {
    const RecentlyRequestId = EmployeeRequestList?.request_clean_id;
    const ServiceCategory = ['이사/입주 청소', '생활/거주 청소', '가전/가구 청소', '전문/특수 청소', '사업장 청소', '건물 관리'];
    /**
     * 시간 계산
     */
    const dates = new Date(EmployeeRequestList?.request_date * 1000);
    const date = {
        year : dates.getFullYear(),
        month : dates.getMonth(),
        hour : dates.getHours(),
        minutes : dates.getMinutes(),
    }

    const navigate = useNavigate();

    return (
        <div className="main-contents">
            <div className="main-contents-explain">최근 청소 요청</div>
            <div className="recently-requirement" onClick={ () => navigate(`/employee/requestinfo/${RecentlyRequestId}`)}>
                <div className="recent-requirement-header">
                    <a style={{ fontSize: "1.4rem" }}>
                        {ClientName}
                        <a style={{ fontSize: "1.1rem" }}> {EmployeeRequestList?.user_name} 고객님 </a>
                    </a>
                    <div className="requirement-status">
                        청소 전
                    </div>
                </div>

                <div className="requirement-content">
                    <div>
                        <a className="requirement-content-title">{date.year}년 {date.month}월 {date.hour}시 {date.minutes}분</a>
                    </div>
                    <div>
                        <a className="requirement-content-title">{ServiceCategory[EmployeeRequestList?.category]}</a>
                    </div>
                    <div>
                        <a className="requirement-content-title">{EmployeeRequestList?.clean_address} {EmployeeRequestList?.clean_address_detail}</a>
                    </div>
                </div>
                {/* 구분선 */}
                <div className="main-divider"></div>

                <div className="requirement-image-container">
                    이미지
                </div>

            </div>
            <div className="main-divider"></div>
            
            <Button
                padding={'22px'}
                backgroundColor={"#FFFFFF"}
                borderRadius={"5px"}
                filter={'drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.1)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))'}
                height={"100"}
                color={'#000000'}
                title={"요청 목록"}
                explain={"오늘도 깨끗한 하루를 위해"}
                image={RequireList}

                employee={true}
                onClick={ () => {navigate('/employee/requestlist')}}
            />
            <Button
                padding={'22px'}
                backgroundColor={"#FFFFFF"}
                borderRadius={"5px"}
                filter={'drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.1)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))'}
                height={"100"}
                color={'#000000'}
                title={"채팅 목록"}
                explain={"고객과의 소통, 친절한 세상"}
                image={ChatList}

                employee={true}
                onClick={ () => {navigate('/employee/chatlist')}}
            />
        </div>
    )
}


export default EmployeeMainContents;