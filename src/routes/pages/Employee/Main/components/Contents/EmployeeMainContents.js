import React, { useState } from "react"
import './EmployeeMainContents.css';


const EmployeeMainContents = ({
    ClientName,
}) => {
    /**
     * 최근 청소 요청 정보
     */
    
    


    return (
        <div className="main-contents">
            <div className="main-contents-explain"> 최근 청소 요청</div>
            <div className="recently-requirement">
                <div className="recent-requirement-header">
                    <a style={{fontSize : "1.4rem"}}>
                        {ClientName}
                        <a style={{fontSize : "1.1rem"}}> 고객님 </a>
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
        </div>
    )
}


export default EmployeeMainContents;