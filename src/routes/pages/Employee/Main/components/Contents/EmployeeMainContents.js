import React, { useState } from "react"
import './EmployeeMainContents.css';
import { Button } from "components";
import ChatList from './ChatList.svg';
import RequireList from './RequireList.svg';
import { Navigate, useNavigate } from "react-router-dom";


const EmployeeMainContents = ({
    ClientName,
}) => {
    /**
     * 최근 청소 요청 정보
     */


    const navigate = useNavigate();

    return (
        <div className="main-contents">
            <div className="main-contents-explain">최근 청소 요청</div>
            <div className="recently-requirement" onClick={ () => navigate('/employee/requestinfo')}>
                <div className="recent-requirement-header">
                    <a style={{ fontSize: "1.4rem" }}>
                        {ClientName}
                        <a style={{ fontSize: "1.1rem" }}> 고객님 </a>
                    </a>
                    <div className="requirement-status">
                        청소 전
                    </div>
                </div>

                <div className="requirement-content">
                    <div>
                        <a className="requirement-content-title">요청시간 : </a>
                        ㅁㄴㅇㅁㄴㅇㄴ
                    </div>
                    <div>
                        <a className="requirement-content-title">서비스 유형 : </a>
                        ㄴㅁㅇㅁㄴㅇ'
                    </div>
                    <div>
                        <a className="requirement-content-title">주소 : </a>
                        ㅁㄴㅇㄴㅁㅇ
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