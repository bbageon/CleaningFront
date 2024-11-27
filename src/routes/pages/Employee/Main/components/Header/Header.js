import React from "react";
import HeaderImage from './HeaderImage.svg';

const EmployeeHeader = ({
    EmployName,
}) => {
    return (
        <div style={{ position: "relative", width: "100%", height: "auto" }}>
            <img
                src={HeaderImage}
                alt="Header"
                style={{
                    display : "block",
                    width : "100%",
                    height : "auto"
                }}
            />
            <div 
                style={{
                    position: "absolute",
                    top: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#303030",
                    opacity: 0.4,
                    pointerEvents: "none", // 클릭 이벤트 방지
                }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom : 0,
                    width: "100%",
                    paddingBottom : 10,
                    paddingLeft : 20,

                    lineHeight : 1.2,
                    fontSize : 23,
                    color : "#FFFFFF",
                    fontWeight : "bold",
                    fontFamily : "nanum-gothic"
                }}
            >
                <p>
                    <a style={{fontSize : 26}}>{EmployName}</a>
                    님 안녕하세요.
                </p>
                <p>오늘도 행복하고 상쾌한 하루 되세요!</p>
            </div>
        </div>
    )
}

export default EmployeeHeader;