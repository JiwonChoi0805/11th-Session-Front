import React, { useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // POST 예제 (1) (LOGIN-SUCCESSFUL)
  const onLogin = () => {
    axios({
      method: "POST",
      url: "https://reqres.in/api/login",
      data: {
        email: email,
        password: password,
      }, //뒤쪽이 위에서 정의한 내 변수
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      }); //res, err 이라고 해도 됨. ()내 통일만 시키기
  };

  // POST 예제 (2) (CREATE)
  const onPost = () => {
    axios({
      method: "POST",
      url: "https://reqres.in/api/users",
      data: {
        name: "morpheus",
        job: "leader",
      }, //데이터 형식은 약속이므로 지켜야 함
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
  };

  // GET 예제 (1) (LIST USERS)
  const getFirst = () => {
    axios({
      method: "GET",
      url: "https://reqres.in/api/users?page=2",
    })
      .then((response) => {
        console.log(response.data.page);
      })
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
  };
  // GET 예제 (2) (SINGLE USER)
  const getSecond = () => {
    axios({
      method: "GET",
      url: "https://reqres.in/api/users/2",
    })
      .then((response) => {
        console.log(response.data.data.last_name);
      })
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
  };
  // GET 예제 (3) (SINGLE USER NOT FOUND)
  const getThird = () => {
    axios({
      method: "GET",
      url: "https://reqres.in/api/users/23",
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        //throw new Error(error);
      });
  };
  return (
    <>
      <h1>POST</h1>
      {/* POST 예제 1번 */}
      <h3>예제 1</h3>
      <div>
        <input
          type="email"
          placeholder="email을 입력하세요"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <input type="button" onClick={() => onLogin()} value="로그인" />
      {/* POST 예제 2번 */}
      <h3 onClick={() => onPost()}>예제 2</h3>
      {/* GET */}
      <h1>GET</h1>
      <h3 onClick={() => getFirst()}>예제 1</h3>
      {/* GET 예제 2번 */}
      <h3 onClick={() => getSecond()}>예제 2</h3>
      {/* GET 예제 3번 */}
      <h3 onClick={() => getThird()}>예제 3</h3>
    </>
  );
}

export default App;
