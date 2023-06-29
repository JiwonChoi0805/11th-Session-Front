import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

// 초기값 설정 (reducer 안에서는 모두 객체형태)
const initialState = {
  number: 0,
  //text: (초기값)
};

//export: 다른 곳에서 가져다 쓰기(=store에 연결)위해
export const counterSlice = createSlice({
  name: "counter", // slice 이름 (모음집)
  initialState, // 초기값 (별도로 밖에서 정의해주고)
  // reducer 객체
  reducers: {
    // aciton과 reducer 로직 , 자체가 action. type없이 각각이 함수처럼 작동
    initCounter: (state) => {
      state.number = 0;
    },
    increase: (state) => {
      state.number++;
    },
    decrease: (state) => {
      state.number--;
    },
  },
  //extra 붙어야 persist 작동 (내부 state가 날아가지 않도록)
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

//위 reducer 자체를 함수로 가져다 쓰려면 export에 다 써넣어야함 =action
export const { initCounter, increase, decrease } = counterSlice.actions;

//자체가 reducer이므로 store에서 reducer가 여러 개일 때 combined로 묶으려면 써줘야하는 코드
export default counterSlice.reducer;
