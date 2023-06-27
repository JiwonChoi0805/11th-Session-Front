import React from "react";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../redux/counterSlice";
//import 꼭 해올 것

const HomePage = () => {
  //구조분해할당. counter(일치하는 이름이어야함)에서 state를 가져온다
  const { number } = useSelector((state) => state.counter);
  //useSelector는 state에 접근가능한 내장함수
  //값(=number)을 받아올 때 useSelector 사용
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  //dispatch가 실질적으로 값을 바꿈(action실행) = counterslice 중 increase를 인자로 전달
  const onDecrease = () => dispatch(decrease());
  return (
    <>
      {/* counter 실습 */}
      <div>
        <h1>{number}</h1>
        <div>
          <button onClick={onIncrease}>+</button>
          <button onClick={onDecrease}>-</button>
        </div>
      </div>
      <LinkWrapper>
        <a href="/login">login</a>
      </LinkWrapper>
    </>
  );
};

export default HomePage;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
