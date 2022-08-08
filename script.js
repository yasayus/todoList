const Input = document.querySelector(".inputTask");
const addButton = document.querySelector(".btnAdd");
const outputRow = document.querySelector(".row"); //Output
const btnDel = document.querySelector(".btnDel");

function addTask() {
	const taskList = document.createElement("li");
	taskList.classList.add("taskList");

	const taskTitle = document.createElement("h3");
	taskTitle.innerHTML = Input.value;
	taskTitle.classList.add("taskItem");
	taskList.appendChild(taskTitle);

	const div = document.createElement("div"); // li>h3 & li>div
	taskList.appendChild(div);

	const btnDone = document.createElement("button");
	btnDone.innerHTML = "";
	btnDone.classList.add("btnDone");
	div.appendChild(btnDone);

	const btnDelete = document.createElement("button");
	btnDelete.innerHTML = "Delete";
	btnDelete.classList.add("btnDel");
	div.appendChild(btnDelete);

	if (Input.value === "") {
		return null;
	}

	outputRow.appendChild(taskList);

	Input.value = "";
}

addButton.addEventListener("click", addTask);

function deleteOrComplete(e) {
	// const taskList = document.querySelector(".taskList");
	const clicked = e.target;
	if (clicked.classList[0] === "btnDel") {
		clicked.parentElement.parentElement.remove();
	} else if (clicked.classList[0] === "btnDone") {
		clicked.classList.toggle("btnUndo");
	} else if (clicked.classList[0] === "btnUndo") {
		clicked.classList.toggle("btnDone");
	}
}

outputRow.addEventListener("click", deleteOrComplete);
