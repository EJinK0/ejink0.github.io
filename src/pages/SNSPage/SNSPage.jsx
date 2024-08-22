import React, { useState } from "react";
import "./SNSPage.scss";
import logo from "../../images/logo.svg";
import arrow from "../../images/arrow.svg";
import { Link } from "react-router-dom";
import Axios from "../../utils/Axios";
import { history } from "../../utils/history";

function SNSPage() {
    const [nickName, setNickName] = useState('');
    const loginBtnClick = () => {
        if(nickName === '') {
            alert('닉네임을 입력해주세요 !!');
            return;
        }

        history.navigate('/mainFeed');
    };

    return (
        <div className="login">
            <div className="wrapper">
                <div>
                    <img src={logo} alt="로고" />
                </div>
                <form className="login-contents">
                    <div className="email-inp custom-inp">
                        <div className="title txt-bold">닉네임 입력</div>
                        <div className="inp">
                            <input 
                                type="text"
                                placeholder="닉네임을 입력해 주세요."
                                value={nickName}
                                onChange={(e) => setNickName(e.target.value)}/>
                        </div>
                    </div>

                    <button className="login-btn" onClick={loginBtnClick}>
                        입장 하기
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SNSPage;
