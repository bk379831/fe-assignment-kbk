const todoInput = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");

function addTodo() {
  const text = todoInput.value.trim();

  if (text === "") {
    alert("할 일을 입력해주세요.");
    return;
  }

  const li = document.createElement("li");
  li.className = "todo__item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "todo__checkbox";

  const span = document.createElement("span");
  span.className = "todo__text";
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "todo__delete-button";
  deleteBtn.textContent = "삭제";

  checkbox.addEventListener("change", function () {
    span.classList.toggle("todo__text--done");
    li.classList.toggle("todo__item--done");
  });

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  todoList.appendChild(li);

  todoInput.value = "";
  todoInput.focus();
}

addBtn.addEventListener("click", addTodo);

todoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});