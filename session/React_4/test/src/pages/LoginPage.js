//loginpage
import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
<<<<<<< HEAD
import { initUser } from "../redux/userSlice";
=======
import { setUser } from "../redux/userSlice";
>>>>>>> 5f203ca49e4bcc0ca53c9ce0ae58fd33448dac41
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  // input 관리
  const [ID, setID] = useState();
  const [name, setName] = useState();

  const dispatch = useDispatch();
  // 정보 저장 함수
  const submintAccounts = () => {
    dispatch(
<<<<<<< HEAD
      initUser({
=======
      setUser({
>>>>>>> 5f203ca49e4bcc0ca53c9ce0ae58fd33448dac41
        userID: ID,
        userName: name,
      })
    );
    navigate("/mypage");
  };

  return (
    <>
      <div>
        <h1>로그인</h1>
        <InputWrapper>
          <input
            placeHolder="아이디"
            onChange={(e) => setID(e.target.value)}
          ></input>
          <input
            placeHolder="닉네임"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <button onClick={submintAccounts}>로그인</button>
        </InputWrapper>
      </div>
    </>
  );
};

export default LoginPage;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  input,
  button {
    height: 30px;
    margin-bottom: 10px;
  }
`;
