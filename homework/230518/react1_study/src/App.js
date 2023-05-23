import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./components/Modal";
import design from "./design.png";
import front from "./front.png";
import back from "./back.png";

function App() {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };

  const [track, setTrack] = useState("");
  const changeTrack = (e) => {
    setTrack(e.target.name);
  };

  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };

  return (
    <>
      <Background>
        <Wrapper>
          <Title>
            <p className="ca">create a nameModal</p>
            <p className="sign">이름 모달 만들기</p>
          </Title>
          <InputWrapper>
            <div className="line" />
            <p className="writeName">아기사자의 이름을 입력해 주세요.</p>
            <Input
              placeholder="아기사자"
              onChange={onChange}
              value={text}
            ></Input>
          </InputWrapper>
          <TrackWrapper>
            <p className="selectTrack">트랙을 선택해주세요.</p>
            <div className="trackBox">
              <div className="track">
                <img src={design} onClick={changeTrack} name="기획디자인" />
                <p>기획&디자인</p>
              </div>
              <div className="track">
                <img src={front} onClick={changeTrack} name="프론트엔드" />
                <p>프론트엔드</p>
              </div>
              <div className="track">
                <img src={back} onClick={changeTrack} name="백엔드" />
                <p>백엔드</p>
              </div>
            </div>
          </TrackWrapper>
          <CreateModalBtn onClick={openModal}>
            <p classname="make">이름 모달 만들기</p>
          </CreateModalBtn>
          {modal ? (
            <Modal text={text} track={track} setModal={setModal} />
          ) : null}
        </Wrapper>
      </Background>
    </>
  );
}

export default App;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #d8e4ec;
  font-family: "Noto Sans";
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 40%;
  aspect-ratio: 1.4 /1;
  min-width: 503px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 20px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  font-family: "Noto Sans";
`;

const Title = styled.div`
  height: 17%;
  margin-top: 4%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Noto Sans";

  p {
    font-family: "Noto Sans";
    margin: 0;
    color: #333333;
  }
  .ca {
    font-family: "Noto Sans";
    font-weight: 300;
    font-size: 15px;
  }
  .sign {
    font-family: "Noto Sans";
    font-weight: 600;
    font-size: 32px;
  }
`;
const InputWrapper = styled.div`
  width: 80%;
  aspect-ratio: 2.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  .line {
    width: 100%;
    border: 0.75px solid #d7d7d7;
    margin: 6.7% 0;
  }
  .writeName {
    width: 90%;
    color: #333333;
    margin: 0 0 5% 0;
    text-align: left;
    margin-left: 15px;
    font-family: "Noto Sans";
  }
`;

const Input = styled.input`
  width: 80%;
  aspect-ratio: 8/1;
  margin-bottom: 4%;
  padding-left: 10px;

  border: 0.8px solid #979797;
  box-shadow: 0px 1px 8px rgba(156, 156, 156, 0.15);
  border-radius: 10px;
  outline: none;
  font-size: 15px;
`;

const TrackWrapper = styled.div`
  width: 68%;
  padding: 0 0 20px 0;
  font-family: "Noto Sans";
  .selectTrack {
    color: #333333;
    margin: 0 0 10% 0;
    text-align: left;
    font-family: "Noto Sans";
  }

  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  img {
    width: 50%;
    filter: drop-shadow(0px 2px 18px rgba(0, 0, 0, 0.1));
    justify-content: center;
    align-items: center;
  }
  p {
    font-size: 15px;
    font-family: "Noto Sans";
  }

  .track {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const CreateModalBtn = styled.div`
  width: 60%;
  height: 40px;
  color: #ffffff;
  background: #81a7d3;
  border-radius: 24.5px;
  border: none;
  margin-bottom: 5px;
  @media (max-width: 1100px) {
    font-size: 12px;
  }
  @media (min-width: 1100px) and (max-width: 1700px) {
    font-size: 16px;
  }
  .make {
    font-size: 15px;
    text-align: center;
    justify-content: center;
    font-family: "Noto Sans";
  }
`;
