const form = document.querySelector(".todo-form");
const btn = document.querySelector(".popup-button");

const init = () => {
  form.addEventListener("submit", addTodoItem);
  btn.addEventListener("click", displayForm);
  btn.addEventListener("click", toggleButtonImage);
};

//할일을 입력하세요 숨겼다 보이기
form.style.display = "none";

const displayForm = () => {
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
};

const toggleButtonImage = () => {
  const btnImg = document.querySelector(".write");
  if (btnImg.getAttribute("src") === "openInput.png") {
    btnImg.setAttribute("src", "closeInput.png");
  } else {
    btnImg.setAttribute("src", "openInput.png");
  }
};

const addTodoItem = () => {
  event.preventDefault();
  const todoContent = document.querySelector(".todo-input").value;
  if (todoContent) printTodoItem(todoContent);
};

//todo li 요소로 생성
const printTodoItem = (text) => {
  const todoList = document.createElement("li");

  const todoItem = document.createElement("div");
  const todoText = document.createElement("span");
  const todoDel = document.createElement("button");

  //todo 내용
  todoText.innerText = text;
  todoText.className = "item";

  //todo 체크박스 만들고 todoDel에 append child
  const todoBtnImg = document.createElement("img");
  todoBtnImg.setAttribute("src", "rectangleTodo.png");
  todoDel.appendChild(todoBtnImg);

  //todo에서 done으로 보내기 버튼
  todoDel.setAttribute("class", "checkTodo");
  todoDel.addEventListener("click", toggleTodoToDone);

  //li로 div, span, button을 append child
  todoList.appendChild(todoItem);
  todoList.appendChild(todoText);
  todoList.appendChild(todoDel);

  //div 내에 span, button을 append child
  todoItem.className = "list-item";
  todoItem.appendChild(todoText);
  todoItem.appendChild(todoDel);

  //li를 todo-list로 append child
  document.querySelector(".todo-list").appendChild(todoList);
  document.querySelector(".todo-input").value = "";
};

//todo에서 없애기
const deleteTodoItem = (e) => {
  const target = e.target.parentNode.parentNode.parentNode;
  console.log(document.querySelector(".todo-list"));
  console.log(target);
  document.querySelector(".todo-list").removeChild(target);
};

const toggleTodoToDone = (e) => {
  const target = e.target.parentNode.parentNode.parentNode;
  deleteTodoItem(e);
  const todoText = target.querySelector(".item").innerText;
  printDoneItem(todoText);
};

//done 시작
//done li 요소로 생성
const printDoneItem = (text) => {
  const doneList = document.createElement("li");

  const doneItem = document.createElement("div");
  const doneText = document.createElement("span");
  const doneBox = document.createElement("button");

  const doneDel = document.createElement("button");

  //done 내용
  doneText.innerText = text;
  doneText.className = "item";

  //done 체크박스, 삭제버튼
  const doneBtnImg = document.createElement("img");
  const delBtnImg = document.createElement("img");
  doneBtnImg.setAttribute("src", "rectangleDone.png");
  delBtnImg.setAttribute("src", "deleteList.png");
  doneBox.appendChild(doneBtnImg);
  doneDel.appendChild(delBtnImg);

  doneBox.setAttribute("class", "checkDone");
  doneDel.setAttribute("class", "delete-list-button");
  //done항목 삭제 addEvent
  doneDel.addEventListener("click", deleteDoneItem);

  //li로 div, span, button을 append child
  doneList.appendChild(doneItem);
  doneList.appendChild(doneText);
  doneList.appendChild(doneBox);
  doneList.appendChild(doneDel);

  //div 내에 span, button을 append child
  doneItem.className = "list-item";
  doneItem.appendChild(doneText);
  doneItem.appendChild(doneBox);

  document.querySelector(".done-list").appendChild(doneList);
};

//done에서 삭제
const deleteDoneItem = (e) => {
  const target = e.target.parentNode;
  console.log(document.querySelector(".done-list"));
  console.log(target);
  document.querySelector(".done-list").removeChild(target);
};

init(); //시작 함수
