let input = document.getElementById("input-box");
let btn = document.getElementById("buttonn");
let adlist = document.getElementById("addlist");

let todos = [];

window.onload = () => {
  todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach((task) => Task(task));  
};

btn.addEventListener("click", () => {
  let taskValue = input.value.trim();
  if (taskValue !== "") {
    todos.push(taskValue); 
    localStorage.setItem("todos", JSON.stringify(todos));
    Task(taskValue); 
    input.value = "";
  }
});

function Task(task) {
  let h33add = document.createElement("h3");
  h33add.innerHTML = task;
  h33add.style.backgroundColor = "rgb(196, 189, 189)";
  h33add.style.height = "40px";
  h33add.style.margin = "10px";
  adlist.appendChild(h33add);

  let dell = document.createElement("span");
  dell.innerHTML = `&#10006;`;
  dell.title = "Delete task";
  dell.style.marginLeft = "20px";
  dell.style.cursor = "pointer";
  h33add.appendChild(dell);

  dell.addEventListener("click", () => {
    adlist.removeChild(h33add);
    removee(task);
  });
}

function removee(taskk) {
  let index = todos.indexOf(taskk);
  if (index !== -1) {
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
}
