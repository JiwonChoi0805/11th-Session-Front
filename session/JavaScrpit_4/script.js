const form = document.querySelector(".todo-form");
//폼이 있는 값을 받아온다 입력한 값을. 태그 자체를 가져옴.
const btn=document.querySelector(".popup-button");

const init=()=>{
    form.addEventListener("submit", addTodoItem);
    //submit을 받는 순간 addTodoItem이란 함수를 실행해줘
    btn.addEventListener("click", displayForm);
};

const displayForm=()=>{
    form.style.display==="none"
      ? (form.style.display="block")
      : (form.style.display="none");
};

const addTodoItem=()=>{
    event.preventDefault();
    const todoContent=document.querySelector(".todo-input").value;
    if(todoContent) printTodoItem(todoContent);
    //todo content에 todo-input 값을 옮겨주겠다
};

const printTodoItem=(text)=>{
    const todoItem=document.createElement("li");
    const todoText=document.createElement("span");
    const todoDel=document.createElement("button");

    //todo 내용
    todoText.innerText=text; //인자로 받는 텍스트 어떻게 넣을거냐
    todoText.className="todo-item-text"; 
    todoText.addEventListener("click", toggleTodoToDone);

    //todo 삭제 버튼
    todoDel.innerText="삭제";
    todoDel.className="todo-delete-button";
    todoDel.addEventListener("click", deleteTodoItem);

    //li에 item (span, button) 추가
    todoItem.className="todo-list-item"; //이름지정
    todoItem.appendChild(todoText);//리스트에 자식 추가
    todoItem.appendChild(todoDel);
    document.querySelector(".todo-list").appendChild(todoItem);
        //리스트를 ul의 자식으로 넣어줌

    document.querySelector(".todo-input").value="";
};

const deleteTodoItem=(e)=>{
    const target=e.target.parentNode;
    document.querySelector(".todo-list").removeChild(target);
}; //event가 발생했으면 타겟에 부모노드를 타깃으로 지정.

const toggleTodoToDone=(e)=>{
    deleteTodoItem(e);
    printDoneItem(e.target.innerText);
};

const printDoneItem=(text)=>{
    const doneItem=document.createElement("li");
    const doneText=document.createElement("span");
    const doneDel=document.createElement("button");

    doneText.innerText=text;
    doneText.className="done-item-text";
    doneText.addEventListener("click", toggleDoneTodo);

    doneDel.innerText="삭제";
    doneDel.className="done-delete-button";
    doneDel.addEventListener("click", deleteDoneItem);

    doneItem.className="done-list-item"; //이름지정
    doneItem.appendChild(doneText);//리스트에 자식 추가
    doneItem.appendChild(doneDel);

    document.querySelector(".done-list").appendChild(doneItem);
};

const deleteDoneItem=(e)=>{
    const target=e.target.parentNode;
    document.querySelector(".done-list").removeChild(target);
};

const toggleDoneTodo=(e)=>{
    deleteDoneItem(e);
    printTodoItem(e.target.innerText);
};

init(); //시작 함수