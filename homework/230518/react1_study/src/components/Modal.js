import React, { useState } from "react";
import styled from "styled-components";

const Modal = (props) => {
  const { text, track, setModal } = props;

  const deleteModal = () => {
    setModal(false);
  };
  return (
    <Wrapper>
      <Container>
        <ModalTop>
          <ModalTrack>{track} </ModalTrack>
          <ModalContents> {text} 님 환영합니다 </ModalContents>
          <DeleteModalBtn onClick={deleteModal}>닫기</DeleteModalBtn>
        </ModalTop>
      </Container>
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);

  animation: modal-bg-show 0.3s;
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Container = styled.div`
  width: 35.3%;
  aspect-ratio: 2.1/1;
  min-width: 400px;

  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 24px;
  background-color: #f5f5f5;

  button {
    min-width: 100px;
    margin-top: 6%;

    border-radius: 24.5px;
    border: none;
    color: white;
    background-color: #81a7d3;
  }

  animation: modal-show 0.3s;
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -20px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
`;

const ModalTop = styled.div`
  width: 100%;
  height: 13.6%;

  border-radius: 24px 24px 0 0;
  background-color: #bddaef;
  filter: drop-shadow() (0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const ModalTrack = styled.div`
  margin-top: 10%;
  color: skyblue;
  font-weight: 700;
  font-size: 18px;
  opacity: 0.8;
`;

const ModalContents = styled.div`
  margin-top: 3%;
  font-weight: 600;
  font-size: 25px;
  color: #333333;
  opacity: 0.8;
`;

const DeleteModalBtn = styled.button`
  width: 25.8%;
  aspect-ratio: 4.06/1;
`;
